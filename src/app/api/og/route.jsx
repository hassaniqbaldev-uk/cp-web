import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || "CreativePixels";
  const description =
    searchParams.get("description") ||
    "Web Design, WordPress & Branding Agency";

  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "70px",
        background:
          "linear-gradient(135deg, #fff7fb 0%, #fdf2f8 50%, #fff1f2 100%)",
        color: "#1f1f1f",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 28,
          fontWeight: 600,
          marginBottom: 24,
          color: "#d63384",
        }}
      >
        CreativePixels
      </div>

      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: "900px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: 28,
          fontSize: 30,
          lineHeight: 1.4,
          maxWidth: "920px",
          color: "#444",
        }}
      >
        {description}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
