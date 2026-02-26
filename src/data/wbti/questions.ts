export interface Question {
  id: string;
  text: string;
  axis: "EP" | "SW" | "FB" | "TA";
  isReverse: boolean;
}

export const questions: Question[] = [
  // EP軸（体験 vs モノ）— false=体験(E), true=モノ(P)
  { id: "EP-1", text: "週末社長の名刺、肩書きは「〇〇教室の先生」の方が「〇〇工房の店主」よりしっくりくる", axis: "EP", isReverse: false },
  { id: "EP-2", text: "「今度の土曜ヒマ？」と聞かれたら、イベントに誘うより作ったものを渡したい", axis: "EP", isReverse: true },
  { id: "EP-3", text: "お客さんの「楽しかった！」と「これ欲しい！」、ニヤけるのはどっちか迷ったら前者", axis: "EP", isReverse: false },
  { id: "EP-4", text: "100万円もらったら、機材より会場を借りたい", axis: "EP", isReverse: false },
  { id: "EP-5", text: "手を動かして何か作ってる時間が、正直いちばん幸せだ", axis: "EP", isReverse: true },

  // SW軸（少人数 vs 広く）— false=少人数(S), true=広く(W)
  { id: "SW-1", text: "「フォロワー1万人」より「常連3人」にグッとくる", axis: "SW", isReverse: false },
  { id: "SW-2", text: "知らない人からDMで「買いました！」と来たら、うれしいより少しびっくりする", axis: "SW", isReverse: false },
  { id: "SW-3", text: "週末社長の売上目標、「3人に届ける」と「100人に届ける」ならワクワクするのは後者", axis: "SW", isReverse: true },
  { id: "SW-4", text: "イベント告知、友達にLINEで送る方がSNSに投稿するより気が楽", axis: "SW", isReverse: false },
  { id: "SW-5", text: "ぶっちゃけ、バズりたい気持ちはある", axis: "SW", isReverse: true },

  // FB軸（前に出る vs 裏方）— false=前に出る(F), true=裏方(B)
  { id: "FB-1", text: "イベント当日、司会をやりたいかスタッフとして走り回りたいかで言えば司会", axis: "FB", isReverse: false },
  { id: "FB-2", text: "名前は出てないのに「この企画、誰がやってるの？」と噂されるのが正直たまらない", axis: "FB", isReverse: true },
  { id: "FB-3", text: "自分の名前がチラシに大きく載ってても、別に恥ずかしくない", axis: "FB", isReverse: false },
  { id: "FB-4", text: "打ち上げの集合写真、真ん中にいるより撮る側が落ち着く", axis: "FB", isReverse: true },
  { id: "FB-5", text: "「すごいのは私じゃなくて仕組みです」って言えたらかっこいいと思う", axis: "FB", isReverse: true },

  // TA軸（ありがとう vs すごい）— false=ありがとう(T), true=すごい(A)
  { id: "TA-1", text: "「助かった、ありがとう！」と「これ、プロでしょ？」、脳内リピートするのは前者", axis: "TA", isReverse: false },
  { id: "TA-2", text: "レビューに書かれてうれしいのは「親切でした」より「クオリティやばい」", axis: "TA", isReverse: true },
  { id: "TA-3", text: "作業中ふと考えるのは「喜んでくれるかな」より「もっと良くできないかな」", axis: "TA", isReverse: true },
  { id: "TA-4", text: "「ありがとう」100回と「天才」1回、どっちかもらえるなら「ありがとう」100回", axis: "TA", isReverse: false },
  { id: "TA-5", text: "完成品の出来に満足できない日は、お客さんが喜んでても少しモヤる", axis: "TA", isReverse: true },
];
