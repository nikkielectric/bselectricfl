import { useEffect, useRef } from "react";

const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let w = 0;
    let h = 0;

    // Pre-computed static circuit data
    let traceImage: ImageBitmap | null = null;

    interface Pulse { x: number; y: number; dx: number; dy: number; life: number; maxLife: number }
    let pulses: Pulse[] = [];

    // Simple grid nodes
    let gridNodes: { x: number; y: number }[] = [];
    let edges: [number, number][] = [];

    const buildGrid = () => {
      gridNodes = [];
      edges = [];
      const sp = 100;
      const cols = Math.ceil(w / sp) + 1;
      const rows = Math.ceil(h / sp) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          gridNodes.push({
            x: c * sp + (Math.random() - 0.5) * 30,
            y: r * sp + (Math.random() - 0.5) * 30,
          });
        }
      }

      for (let i = 0; i < gridNodes.length; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;
        if (col < cols - 1 && Math.random() > 0.2) edges.push([i, i + 1]);
        if (row < rows - 1 && Math.random() > 0.25) edges.push([i, i + cols]);
      }
    };

    const bakeTraces = () => {
      const offscreen = document.createElement("canvas");
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;
      const oc = offscreen.getContext("2d")!;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      oc.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Draw traces
      oc.strokeStyle = "hsla(47, 100%, 50%, 0.15)";
      oc.lineWidth = 1.2;
      oc.lineCap = "round";
      for (const [a, b] of edges) {
        const from = gridNodes[a];
        const to = gridNodes[b];
        oc.beginPath();
        oc.moveTo(from.x, from.y);
        oc.lineTo(to.x, from.y);
        oc.lineTo(to.x, to.y);
        oc.stroke();
      }

      // Draw solder points
      oc.fillStyle = "hsla(47, 100%, 50%, 0.2)";
      for (const node of gridNodes) {
        oc.beginPath();
        oc.arc(node.x, node.y, 2.2, 0, Math.PI * 2);
        oc.fill();
      }

      createImageBitmap(offscreen).then((bmp) => {
        traceImage = bmp;
      });
    };

    const spawnPulse = () => {
      if (edges.length === 0) return;
      const [a, b] = edges[Math.floor(Math.random() * edges.length)];
      const from = gridNodes[a];
      const to = gridNodes[b];
      const dist = Math.hypot(to.x - from.x, to.y - from.y);
      const speed = 0.3 + Math.random() * 0.3;
      const life = dist / speed;
      pulses.push({
        x: from.x,
        y: from.y,
        dx: (to.x - from.x) / life,
        dy: (to.y - from.y) / life,
        life: 0,
        maxLife: life,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw cached traces
      if (traceImage) {
        ctx.drawImage(traceImage, 0, 0);
      }

      // Maintain ~20 pulses
      while (pulses.length < 20) spawnPulse();

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.x += p.dx;
        p.y += p.dy;
        p.life++;

        if (p.life >= p.maxLife) {
          pulses.splice(i, 1);
          continue;
        }

        const fade = 1 - Math.abs((p.life / p.maxLife) - 0.5) * 2;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 24);
        glow.addColorStop(0, `hsla(47, 100%, 60%, ${0.8 * fade})`);
        glow.addColorStop(0.4, `hsla(47, 100%, 55%, ${0.3 * fade})`);
        glow.addColorStop(1, "hsla(47, 100%, 50%, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, 24, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(47, 100%, 65%, ${fade})`;
        ctx.fill();
      }

      ctx.restore();
      animationId = requestAnimationFrame(draw);
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      buildGrid();
      bakeTraces();
      pulses = [];
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />;
};

export default CircuitBackground;
