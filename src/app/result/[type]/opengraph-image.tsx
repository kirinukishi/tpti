import { ImageResponse } from "next/og";
import { travelTypes } from "../../../data/travelTypes";
import { TravelTypeID } from "../../../data/types";

export const runtime = "edge";
export const alt = "TPTI 旅行タイプ診断結果";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colorMap: Record<string, string> = {
    "orange-500": "#f97316",
    "rose-500": "#f43f5e",
    "emerald-600": "#059669",
    "violet-500": "#8b5cf6",
    "amber-500": "#f59e0b",
    "pink-400": "#f472b6",
    "teal-600": "#0d9488",
    "indigo-400": "#818cf8",
    "blue-500": "#3b82f6",
    "sky-400": "#38bdf8",
    "cyan-600": "#0891b2",
    "purple-400": "#c084fc",
    "yellow-500": "#eab308",
    "lime-400": "#a3e635",
    "slate-500": "#64748b",
    "stone-400": "#a8a29e",
};

function arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

async function loadTippiImage(typeId: string): Promise<string | null> {
    try {
        const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
            ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
            : process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000";
        const res = await fetch(`${baseUrl}/images/tippi-${typeId.toLowerCase()}.png`);
        if (!res.ok) return null;
        const buffer = await res.arrayBuffer();
        return `data:image/png;base64,${arrayBufferToBase64(buffer)}`;
    } catch {
        return null;
    }
}

async function loadGoogleFont(text: string): Promise<ArrayBuffer | null> {
    const apiUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700;900&text=${encodeURIComponent(text)}`;
    try {
        const cssRes = await fetch(apiUrl, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
            },
        });
        const css = await cssRes.text();
        const match = css.match(/src:\s*url\(([^)]+)\)/);
        if (!match) return null;
        const fontRes = await fetch(match[1]);
        return fontRes.arrayBuffer();
    } catch {
        return null;
    }
}

export default async function Image({
    params,
}: {
    params: Promise<{ type: string }>;
}) {
    const { type } = await params;
    const typeId = type.toUpperCase() as TravelTypeID;
    const typeData = travelTypes[typeId];

    if (!typeData) {
        return new ImageResponse(
            (
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fafafa",
                    }}
                >
                    <span style={{ fontSize: 48, color: "#666" }}>
                        TPTI — Type Not Found
                    </span>
                </div>
            ),
            { ...size }
        );
    }

    const typeColor = colorMap[typeData.color] || "#f97316";

    const allText = `TPTI${typeId}${typeData.name}${typeData.catchCopy}旅行タイプ性格診断`;
    const uniqueChars = [...new Set(allText)].join("");

    const [tippiSrc, fontData] = await Promise.all([
        loadTippiImage(typeId),
        loadGoogleFont(uniqueChars),
    ]);

    const fontOptions = fontData
        ? [
              {
                  name: "NotoSansJP",
                  data: fontData,
                  style: "normal" as const,
                  weight: 700 as const,
              },
          ]
        : [];

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fafafa",
                    fontFamily: fontData ? "NotoSansJP" : "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* 装飾: 右上の円 */}
                <div
                    style={{
                        position: "absolute",
                        top: -80,
                        right: -60,
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        backgroundColor: typeColor,
                        opacity: 0.15,
                    }}
                />
                {/* 装飾: 左下の円 */}
                <div
                    style={{
                        position: "absolute",
                        bottom: -120,
                        left: -80,
                        width: 600,
                        height: 600,
                        borderRadius: "50%",
                        backgroundColor: typeColor,
                        opacity: 0.1,
                    }}
                />

                {/* 横並びレイアウト: 左=ティッピー 右=テキスト */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        padding: "40px 60px",
                        position: "relative",
                    }}
                >
                    {/* TPTI ロゴ: 左上 */}
                    <div
                        style={{
                            position: "absolute",
                            top: 36,
                            left: 48,
                            fontSize: 28,
                            color: "#9ca3af",
                            letterSpacing: 4,
                            fontWeight: 700,
                        }}
                    >
                        TPTI
                    </div>

                    {/* 左: ティッピー画像 */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 340,
                            height: "100%",
                            flexShrink: 0,
                        }}
                    >
                        {tippiSrc ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={tippiSrc}
                                width={280}
                                height={280}
                                alt=""
                                style={{ borderRadius: 40, objectFit: "cover" }}
                            />
                        ) : (
                            <div
                                style={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: "50%",
                                    backgroundColor: typeColor,
                                    opacity: 0.3,
                                }}
                            />
                        )}
                    </div>

                    {/* 右: テキスト情報 */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: 1,
                            paddingLeft: 20,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 36,
                                color: typeColor,
                                letterSpacing: 8,
                                fontWeight: 700,
                                marginBottom: 8,
                            }}
                        >
                            {typeId}
                        </div>

                        <div
                            style={{
                                fontSize: 64,
                                color: "#111827",
                                fontWeight: 900,
                                marginBottom: 16,
                                lineHeight: 1.1,
                            }}
                        >
                            {typeData.name}
                        </div>

                        <div
                            style={{
                                fontSize: 26,
                                color: "#4b5563",
                                fontWeight: 700,
                                lineHeight: 1.5,
                                maxWidth: 600,
                            }}
                        >
                            {typeData.catchCopy}
                        </div>
                    </div>

                    {/* 右下: サイト情報 */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 32,
                            right: 48,
                            fontSize: 20,
                            color: "#9ca3af",
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                        }}
                    >
                        <span>{"旅行タイプ性格診断"}</span>
                        <span>tpti.jp</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: fontOptions,
        }
    );
}
