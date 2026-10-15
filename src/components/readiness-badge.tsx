import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

/** The displayed canvas is also the downloaded image. */
export function ReadinessBadge({ level, name }: { level: number; name: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setReady(false);
    void document.fonts.ready.then(() => {
      if (cancelled) return;
      const c = canvas.current;
      const g = c?.getContext("2d");
      if (!c || !g) return;
      const tokens = getComputedStyle(document.documentElement);
      const color = (token: string) => tokens.getPropertyValue(token).trim();
      g.clearRect(0, 0, 1200, 1200);
      g.fillStyle = color("--deep");
      g.fillRect(0, 0, 1200, 1200);
      g.textAlign = "center";
      g.fillStyle = color("--deep-foreground");
      g.font = "600 54px 'Public Sans', sans-serif";
      g.fillText("DSRL", 600, 110);
      g.font = "400 26px 'Public Sans', sans-serif";
      g.fillText("DIGITAL SUSTAINABILITY READINESS", 600, 162, 1060);
      g.strokeStyle = color("--deep-foreground");
      g.globalAlpha = 0.2;
      g.lineWidth = 16;
      g.beginPath(); g.arc(600, 540, 300, 0, Math.PI * 2); g.stroke();
      g.globalAlpha = 1;
      g.strokeStyle = color("--accent");
      g.lineCap = "round";
      g.beginPath(); g.arc(600, 540, 300, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * level / 9); g.stroke();
      g.font = "400 44px 'Public Sans', sans-serif";
      g.fillText("Level", 600, 402);
      g.font = "600 260px 'Fraunces', serif";
      g.fillText(String(level), 600, 660);
      g.font = "400 36px 'Public Sans', sans-serif";
      g.fillText("of 9", 600, 736);
      g.font = "500 64px 'Fraunces', serif";
      g.fillText(name, 600, 942, 1040);
      g.font = "400 26px 'Public Sans', sans-serif";
      g.fillText("Self-assessed · DSRL v0.1 · Not a certification", 600, 1006, 1060);
      g.font = "500 32px 'Public Sans', sans-serif";
      g.fillText("digisustainability.io", 600, 1090);
      g.font = "400 24px 'Public Sans', sans-serif";
      g.fillText(new Date().toLocaleDateString(), 600, 1140);
      setReady(true);
    });
    return () => { cancelled = true; };
  }, [level, name]);

  const download = () => {
    canvas.current?.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `DSRL-badge-level-${level}.png`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
    }, "image/png");
  };

  return (
    <figure className="w-full max-w-sm">
      <canvas ref={canvas} width={1200} height={1200} role="img"
        aria-label={`DSRL readiness badge: Level ${level} of 9 — ${name}. Self-assessed, not a certification.`}
        className="aspect-square w-full rounded-lg bg-deep" />
      <figcaption className="no-print mt-4">
        <Button variant="outline" onClick={download} disabled={!ready} className="w-full"><Award /> Download badge</Button>
      </figcaption>
    </figure>
  );
}