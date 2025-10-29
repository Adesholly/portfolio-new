import type { NextRequest } from "next/server";

export const runtime = "edge";

function rss(strings: TemplateStringsArray, ...values: any[]) {
  let result = "";
  strings.forEach((str, i) => {
    result += str + (values[i] ?? "");
  });
  return result;
}

export async function GET(_req: NextRequest) {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://adesholly.vercel.app/";
  const body = rss`
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Adesholly – Writing</title>
        <link>${base}/writing</link>
        <description>Notes and posts</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      </channel>
    </rss>
  `;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=86400",
    },
  });
}
