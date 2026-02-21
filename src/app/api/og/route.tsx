import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { travelTypes } from '../../../data/travelTypes';
import { TravelTypeID } from '../../../data/types';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const typeId = searchParams.get('type')?.toUpperCase() as TravelTypeID;

        if (!typeId || !travelTypes[typeId]) {
            return new Response('Invalid type', { status: 400 });
        }

        const typeData = travelTypes[typeId];

        // ベースURLの取得
        const protocol = req.headers.get('x-forwarded-proto') || 'http';
        const host = req.headers.get('host') || 'localhost:3000';
        const baseUrl = `${protocol}://${host}`;

        // 背景色のためのHEXマッピングなど (tailwindcssのカラーに依存せず安全に指定)
        // spec.md に基づく HEX 値の抽出
        const hexColorMatch = {
            'EPOA': '#f97316',
            'EPOR': '#f43f5e',
            'EPIA': '#059669',
            'EPIR': '#8b5cf6',
            'ESOA': '#f59e0b',
            'ESOR': '#f472b6',
            'ESIA': '#0d9488',
            'ESIR': '#818cf8',
            'CPOA': '#3b82f6',
            'CPOR': '#38bdf8',
            'CPIA': '#0891b2',
            'CPIR': '#c084fc',
            'CSOA': '#eab308',
            'CSOR': '#a3e635',
            'CSIA': '#64748b',
            'CSIR': '#a8a29e',
        }[typeId] || '#f97316';

        const charImageUrl = `${baseUrl}/images/tippi-${typeId.toLowerCase()}.png`;
        const defaultCharUrl = `${baseUrl}/images/tippi.jpg`;

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: hexColorMatch,
                        // 放射状グラデーション風の背景
                        backgroundImage: `radial-gradient(circle at 50% 120%, rgba(255,255,255,0.8), ${hexColorMatch})`,
                        padding: '40px',
                        fontFamily: 'sans-serif',
                    }}
                >
                    {/* メインのコンテナ */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderRadius: '40px',
                            width: '100%',
                            height: '100%',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                            padding: '60px 40px',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* 角のアクセント装飾 */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                backgroundColor: hexColorMatch,
                                opacity: 0.2,
                            }}
                        />

                        <div
                            style={{
                                display: 'flex',
                                fontSize: '28px',
                                fontWeight: 'bold',
                                color: '#666',
                                marginBottom: '10px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                        >
                            旅行タイプ性格診断
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                fontSize: '80px',
                                fontWeight: '900',
                                color: '#111',
                                marginBottom: '20px',
                                lineHeight: 1.1,
                            }}
                        >
                            {typeData.name}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                fontSize: '36px',
                                fontWeight: 'bold',
                                color: hexColorMatch,
                                marginBottom: '50px',
                            }}
                        >
                            「{typeData.catchCopy}」
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '40px',
                            }}
                        >
                            {/* プレースホルダーの円（画像が見つからない場合のフォールバック用に img タグを配置） */}
                            {/* SatoriはリモートのURLかArrayBufferを必要とするため、ここでは絶対URLを使用 */}
                            <img
                                src={charImageUrl}
                                width="200"
                                height="200"
                                style={{
                                    borderRadius: '40px',
                                    objectFit: 'cover',
                                    border: `6px solid ${hexColorMatch}`,
                                }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {typeData.strengths.slice(0, 2).map((s, i) => (
                                    <div key={i} style={{ display: 'flex', fontSize: '24px', color: '#444' }}>
                                        ✓ {s}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* サイトURL表記 */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '40px',
                                fontSize: '24px',
                                color: '#888',
                                fontWeight: 'bold',
                            }}
                        >
                            tpti.example.com
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (error) {
        return new Response('Failed to generate image', { status: 500 });
    }
}
