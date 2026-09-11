"use client";

import React, { useEffect, useRef } from "react";

export default function PixelGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const cellSize = 32; // Grid cell size
    let cols = 0;
    let rows = 0;

    // Ambient & mouse tracking
    let targetX = window.innerWidth * 0.7;
    let targetY = 220;
    let currentX = targetX;
    let currentY = targetY;
    let userInteracted = false;
    let lastUserMoveTime = Date.now();

    // Floating digital sparkles
    interface Sparkle {
      col: number;
      row: number;
      life: number;
      maxLife: number;
      color: { r: number; g: number; b: number };
      size: number;
    }
    const sparkles: Sparkle[] = [];

    const colors = [
      { r: 37, g: 99, b: 235 },   // #2563EB Royal Blue
      { r: 59, g: 130, b: 246 },  // #3B82F6 Bright Blue
      { r: 99, g: 102, b: 241 },  // #6366F1 Indigo
      { r: 14, g: 165, b: 233 },  // #0EA5E9 Sky Blue
      { r: 139, g: 92, b: 246 },  // #8B5CF6 Violet
    ];

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr);

      cols = Math.ceil(width / cellSize) + 1;
      rows = Math.ceil(height / cellSize) + 1;
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Track pointer movement
    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      userInteracted = true;
      lastUserMoveTime = Date.now();
    };

    // Track scroll
    const onScroll = () => {
      userInteracted = true;
      lastUserMoveTime = Date.now();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Seed continuous sparkles
    const sparkleTimer = setInterval(() => {
      if (document.hidden || prefersReducedMotion) return;
      if (sparkles.length < 16) {
        sparkles.push({
          col: Math.floor(Math.random() * cols),
          row: Math.floor(Math.random() * rows),
          life: 0,
          maxLife: 70 + Math.random() * 50,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 6 + Math.random() * 6,
        });
      }
    }, 350);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // If user hasn't moved mouse recently, smoothly drift in an ambient figure-eight pattern
      const isIdle = Date.now() - lastUserMoveTime > 3000;
      if (isIdle || !userInteracted) {
        const ambientCenterX = width * 0.72;
        const ambientCenterY = 240;
        targetX = ambientCenterX + Math.sin(time * 0.7) * 90;
        targetY = ambientCenterY + Math.cos(time * 1.1) * 60;
      }

      // Smooth cursor lerp
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      const spotlightRadius = 280;

      // 1. Radial gradient backdrop spotlight
      const auraGradient = ctx.createRadialGradient(
        currentX,
        currentY,
        0,
        currentX,
        currentY,
        spotlightRadius
      );
      auraGradient.addColorStop(0, "rgba(37, 99, 235, 0.18)");
      auraGradient.addColorStop(0.35, "rgba(99, 102, 241, 0.10)");
      auraGradient.addColorStop(0.7, "rgba(219, 234, 254, 0.04)");
      auraGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(currentX, currentY, spotlightRadius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Grid Matrix & Dynamic Illuminated Pixel Blocks
      for (let r = 0; r < rows; r++) {
        const cellY = r * cellSize;

        for (let c = 0; c < cols; c++) {
          const cellX = c * cellSize;
          const centerX = cellX + cellSize / 2;
          const centerY = cellY + cellSize / 2;

          const dx = centerX - currentX;
          const dy = centerY - currentY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let intensity = 0;
          if (dist < spotlightRadius) {
            const norm = dist / spotlightRadius;
            intensity = Math.pow(1 - norm, 2);
          }

          if (intensity > 0.04) {
            // Active colored pixel block
            const colorIdx = (c * 3 + r * 5) % colors.length;
            const col = colors[colorIdx];
            const size = 3.5 + intensity * 8.5; // Scale from 3.5px to 12px
            const alpha = 0.25 + intensity * 0.75;
            const radius = Math.max(1.5, size * 0.22);

            ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${alpha})`;
            ctx.beginPath();
            ctx.roundRect(centerX - size / 2, centerY - size / 2, size, size, radius);
            ctx.fill();

            // Core bright glint on closer pixels
            if (intensity > 0.45) {
              ctx.fillStyle = `rgba(255, 255, 255, ${(intensity - 0.45) * 1.5})`;
              ctx.fillRect(centerX - 1, centerY - 1, 2, 2);
            }
          } else {
            // Resting subtle grid micro-dot
            ctx.fillStyle = "rgba(161, 161, 170, 0.5)";
            ctx.fillRect(centerX - 1, centerY - 1, 2, 2);
          }
        }
      }

      // 3. Render animated ambient sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.life += 1;
        const progress = s.life / s.maxLife;

        if (progress >= 1) {
          sparkles.splice(i, 1);
          continue;
        }

        const alpha = Math.sin(progress * Math.PI) * 0.85;
        const sX = s.col * cellSize + cellSize / 2;
        const sY = s.row * cellSize + cellSize / 2;
        const sSize = s.size * Math.sin(progress * Math.PI);

        if (sSize > 0.5) {
          ctx.fillStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${alpha})`;
          ctx.beginPath();
          ctx.roundRect(sX - sSize / 2, sY - sSize / 2, sSize, sSize, 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(sparkleTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
