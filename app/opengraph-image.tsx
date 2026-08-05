import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0c0b",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#e3a24f",
              }}
            />
            <span style={{ color: "#a49b90", fontSize: 26, letterSpacing: 4 }}>
              {profile.role.toUpperCase()}
            </span>
          </div>
          <span
            style={{
              color: "#6e675f",
              fontSize: 26,
              fontFamily: "monospace",
            }}
          >
            AV.
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#f3f0eb", fontSize: 88, lineHeight: 1.05 }}>
            {profile.name}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: 28,
            }}
          >
            <div style={{ width: 64, height: 6, background: "#e3a24f" }} />
            <span
              style={{
                color: "#a49b90",
                fontSize: 34,
                letterSpacing: 1,
              }}
            >
              Front-end development, done with care.
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
