"use client";

import React, { useState, useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  color: string;
}

export default function AdvancedCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState<Point>({ x: -1000, y: -1000 });
  const [trail, setTrail] = useState<Point>({ x: -1000, y: -1000 });
  const [velocity, setVelocity] = useState<Point>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const mouseRef = useRef<Point>({ x: -1000, y: -1000 });
  const lastMouseRef = useRef<Point>({ x: -1000, y: -1000 });

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    setIsVisible(true);
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, .group\\/btn, .cursor-pointer, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "";
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame: number;
    const update = () => {
      setTrail((prev) => {
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        const ease = 0.15;
        setVelocity({ x: dx, y: dy });
        return { x: prev.x + dx * ease, y: prev.y + dy * ease };
      });
      animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouse, isVisible]);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const lx = lastMouseRef.current.x;
      const ly = lastMouseRef.current.y;

      const dx = mx - lx;
      const dy = my - ly;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 2) {
        const count = Math.min(Math.floor(speed / 4), 6);
        for (let i = 0; i < count; i++) {
          particles.push({
            x: mx + (Math.random() - 0.5) * 10,
            y: my + (Math.random() - 0.5) * 10,
            size: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 1.5 - dx * 0.01,
            vy: (Math.random() - 0.5) * 1.5 - dy * 0.01,
            life: 1,
            decay: Math.random() * 0.02 + 0.015,
            color: Math.random() > 0.5 ? "rgba(147, 6, 255, 1)" : "rgba(216, 180, 255, 1)",
          });
        }
      }
      lastMouseRef.current = { x: mx, y: my };

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#9306FF";
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
  const angle = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI);
  const scaleX = isHovering ? 1.5 : 1 + Math.min(speed * 0.015, 1.2);
  const scaleY = isHovering ? 1.5 : 1 - Math.min(speed * 0.005, 0.2);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
      />
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[60] mix-blend-difference transition-opacity duration-300 ${
          isHovering ? "opacity-0" : "opacity-100"
        }`}
        style={{ transform: `translate(${mouse.x - 4}px, ${mouse.y - 4}px)` }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[55] transition-colors duration-300 ease-out"
        style={{
          transform: `translate(${trail.x - 16}px, ${trail.y - 16}px) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`,
          backgroundColor: isHovering ? "rgba(147, 6, 255, 0.15)" : "transparent",
          border: isHovering ? "1px solid rgba(147, 6, 255, 0.8)" : "1px solid rgba(147, 6, 255, 0.4)",
          boxShadow: isHovering ? "0 0 20px rgba(147, 6, 255, 0.5)" : "0 0 10px rgba(147, 6, 255, 0.15)",
          backdropFilter: isHovering ? "blur(2px)" : "none",
        }}
      />
    </>
  );
}