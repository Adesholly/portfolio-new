import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b1220",
          color: "white",
          padding: "64px",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800 }}>Adesholly</div>
        <div style={{ fontSize: 28, opacity: 0.85, marginTop: 12 }}>
          Full‑Stack Developer • React • Next.js • TypeScript
        </div>
        <div style={{ fontSize: 18, opacity: 0.6, marginTop: 24 }}>
          {process.env.NEXT_PUBLIC_SITE_URL || "https://adesholly.vercel.app/"}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
