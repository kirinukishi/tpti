export interface Question {
    id: string;
    text: string;
    axis: "EC" | "PS" | "OI" | "AR";
    isReverse: boolean;
}

export const questions: Question[] = [
    // 冒険性 (EC)
    { id: "EC-1", text: "旅行前は、ガイドブックより個人ブログやSNSで\"誰も知らない情報\"を掘る方が好きだ", axis: "EC", isReverse: false },
    { id: "EC-2", text: "旅先では、有名店より地元の人しか知らない小さな食堂に入りたくなる", axis: "EC", isReverse: false },
    { id: "EC-3", text: "宿は口コミ評価が安定している有名ホテルを選ぶと安心する", axis: "EC", isReverse: true },
    { id: "EC-4", text: "知らない街では、目的地より途中の路地や脇道の方が気になってしまう", axis: "EC", isReverse: false },
    { id: "EC-5", text: "予定していた店が休みだったとき、むしろ新しい店を開拓できるチャンスだと思う", axis: "EC", isReverse: false },
    { id: "EC-6", text: "お土産は定番の銘菓やランキング上位のものを選ぶ方が無難だと思う", axis: "EC", isReverse: true },
    { id: "EC-7", text: "旅の一番の思い出になるのは、誰も知らない場所を自分で見つけたときだ", axis: "EC", isReverse: false },

    // 計画性 (PS)
    { id: "PS-1", text: "旅行が決まったら、行きたい場所リストを作って優先順位をつけ始める", axis: "PS", isReverse: false },
    { id: "PS-2", text: "チケットや宿は、日程が決まったらすぐ押さえないと落ち着かない", axis: "PS", isReverse: false },
    { id: "PS-3", text: "旅先での1日は、朝起きてからその日の気分で決めた方が楽しい", axis: "PS", isReverse: true },
    { id: "PS-4", text: "荷造りは持ち物リストを作って、日数分のコーディネートを決めてからパッキングする", axis: "PS", isReverse: false },
    { id: "PS-5", text: "旅先のごはんは、歩いていて\"ここ良さそう\"と思った店にふらっと入るのが好きだ", axis: "PS", isReverse: true },
    { id: "PS-6", text: "旅先で予定が崩れたとき、すぐ代替プランに切り替えられるよう候補を持っている", axis: "PS", isReverse: false },
    { id: "PS-7", text: "旅行から帰ったら、写真の整理や費用の振り返りをして旅の記録をまとめたくなる", axis: "PS", isReverse: false },

    // 交流性 (OI)
    { id: "OI-1", text: "旅先で土地勘がないとき、スマホで調べるより地元の人に直接おすすめを聞きたい", axis: "OI", isReverse: false },
    { id: "OI-2", text: "旅先で綺麗な景色に出会ったとき、すぐ誰かにシェアしたくなる", axis: "OI", isReverse: false },
    { id: "OI-3", text: "宿は他の旅行者と交流できる場所より、自分だけの静かな個室の方がくつろげる", axis: "OI", isReverse: true },
    { id: "OI-4", text: "有名な観光スポットで現地ガイドのツアーがあれば、積極的に参加したい", axis: "OI", isReverse: false },
    { id: "OI-5", text: "長距離移動中は、イヤホンをして自分だけの時間に浸りたい", axis: "OI", isReverse: true },
    { id: "OI-6", text: "お土産を選ぶとき、渡す相手の顔を思い浮かべながら選ぶのが楽しい", axis: "OI", isReverse: false },
    { id: "OI-7", text: "旅行から帰ったら、友達や家族に写真を見せながら旅の話をしたくなる", axis: "OI", isReverse: false },

    // 行動性 (AR)
    { id: "AR-1", text: "ホテルにチェックインしたら、荷物を置いてすぐ街を歩きに出たくなる", axis: "AR", isReverse: false },
    { id: "AR-2", text: "旅先で早く目が覚めたら、早朝の街や朝市を散歩しに出かけたくなる", axis: "AR", isReverse: false },
    { id: "AR-3", text: "ビーチや湖があっても、アクティビティより眺めながらのんびりする方が好きだ", axis: "AR", isReverse: true },
    { id: "AR-4", text: "次の目的地まで2kmくらいなら、乗り物より歩いて向かう方が好きだ", axis: "AR", isReverse: false },
    { id: "AR-5", text: "観光スポットを一通り見たら、近くのカフェでお茶しながらのんびりしたくなる", axis: "AR", isReverse: true },
    { id: "AR-6", text: "旅先で雨でも、屋内施設や市場を調べて積極的に出かけたい", axis: "AR", isReverse: false },
    { id: "AR-7", text: "旅行の最終日、時間があればまだ行けていない場所をひとつでも多く回りたい", axis: "AR", isReverse: false },
];
