import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { travelTypes } from "../../../data/travelTypes";
import { TravelTypeID } from "../../../data/types";
import ResultContent from "./ResultContent";

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
    const { type } = await params;
    const typeId = type.toUpperCase() as TravelTypeID;
    const typeData = travelTypes[typeId];

    if (!typeData) {
        return { title: "TPTI — 旅行タイプ性格診断" };
    }

    const title = `${typeId}型【${typeData.name}】| TPTI`;
    const description = `${typeData.catchCopy} — TPTIで診断されたあなたの旅行タイプは「${typeData.name}」。`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://tpti.jp/result/${typeId.toLowerCase()}`,
            type: "article",
            siteName: "TPTI",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

interface ResultPageProps {
    params: Promise<{ type: string }>;
}

export default async function ResultPage({ params }: ResultPageProps) {
    const { type } = await params;
    const typeId = type.toUpperCase() as TravelTypeID;
    const typeData = travelTypes[typeId];

    if (!typeData) {
        notFound();
    }

    return <ResultContent typeId={typeId} />;
}
