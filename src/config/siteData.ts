export const siteData = {
  name: "葡萄日和",
  romanizedName: "Budou Biyori",
  tagline: "一杯のワインから、食卓と旅を深くする。",
  description: "ワインを、もっと日常の言葉で。葡萄日和は、ワインの知識をむずかしく語るのではなく、食卓、旅、季節の風景とともに楽しむための小さな編集室です。",
  editor: "葡萄日和編集部",
  address: "東京都目黒区青葉台1-23-6 ワインテラス中目黒 4階",
  email: "hello@budou-biyori.jp",
  businessHours: "平日 10時00分〜18時00分",
  instagram: "https://instagram.com/budou.biyori",
  responsibleDrinkingNotice: "「お酒は適量を。飲酒は法律で認められた年齢になってから。飲酒運転は絶対にやめましょう。」",
  disclaimer: "当サイトはワイン文化・食事との楽しみ方を紹介する編集メディアであり、酒類の販売、配送、購入手続きは行っていません。飲酒は法律で認められた年齢になってから、適量を守ってお楽しみください。",
  
  navigation: [
    { label: "私たちについて", href: "/about" },
    { label: "記事", href: "/articles" },
    { label: "ペアリング", href: "/pairing" },
    { label: "産地ガイド", href: "/regions" },
    { label: "お問い合わせ", href: "/contact" }
  ],
  
  footerLinks: [
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "利用規約", href: "/terms" }
  ],

  articles: [
    { id: 1, title: "はじめての白ワイン選び。酸味と香りの見方", category: "ワインの基礎", date: "2024.03.15", readingTime: "5分", excerpt: "ワインショップで迷わないための、小さなコツをご紹介します。", mood: "学ぶ", image: "/images/article_wine_1.webp" },
    { id: 2, title: "春野菜に合わせたい、軽やかなロゼ", category: "季節の一本", date: "2024.03.20", readingTime: "4分", excerpt: "アスパラガスや菜の花の苦味と寄り添う、おすすめのロゼワイン。", mood: "味わう", image: "/images/article_wine_1.webp" },
    { id: 3, title: "山梨・勝沼で出会う日本ワインの現在地", category: "旅とワイン", date: "2024.04.05", readingTime: "7分", excerpt: "歴史ある産地で進化を続ける、作り手たちの声を訪ねました。", mood: "旅する", image: "/images/article_wine_2.webp" },
    { id: 4, title: "寿司とワインは合うのか。塩、酢、脂から考える", category: "食卓のペアリング", date: "2024.04.12", readingTime: "6分", excerpt: "お寿司にワインを合わせる時の、ちょっとした法則について。", mood: "探求する", image: "/images/article_wine_2.webp" },
    { id: 5, title: "週末の食卓に置きたい、やさしい赤", category: "編集部ノート", date: "2024.04.18", readingTime: "3分", excerpt: "気取らない休日の夕食にぴったりな、軽快な赤ワインのお話。", mood: "くつろぐ", image: "/images/article_wine_2.webp" },
    { id: 6, title: "ワインラベルを読むための小さな手引き", category: "ワインの基礎", date: "2024.04.25", readingTime: "5分", excerpt: "ラベルに隠された情報から、好みの味を見つけるヒント。", mood: "学ぶ", image: "/images/article_wine_1.webp" }
  ],

  pairings: [
    { id: 1, food: "寿司", wineStyle: "甲州ワイン", flavorReason: "甲州の持つ柑橘系の香りと繊細な酸味が、酢飯や白身魚の旨味を引き立てます。", servingTip: "しっかり冷やして（8-10℃）お召し上がりください。", beginnerNote: "醤油にすだちやカボスを少し搾るイメージで合わせると分かりやすいです。" },
    { id: 2, food: "焼き鳥（塩）", wineStyle: "軽めの赤", flavorReason: "炭火の香ばしさと、ワインの持つ穏やかな果実味・酸味が絶妙に調和します。", servingTip: "常温より少し低め（14-16℃）がおすすめです。", beginnerNote: "タレの場合は少しコクのある赤ワインを選ぶとさらに合います。" },
    { id: 3, food: "天ぷら", wineStyle: "スパークリング", flavorReason: "泡の炭酸とスッキリした酸が、揚げ物の油を爽やかに流してくれます。", servingTip: "しっかり冷やして（6-8℃）。", beginnerNote: "塩で食べる天ぷらには特に相性抜群です。" },
    { id: 4, food: "クリームパスタ", wineStyle: "樽香のある白", flavorReason: "クリームの濃厚さと、樽熟成によるふくよかな香りがリッチに調和します。", servingTip: "冷やしすぎず（10-12℃）香りを広げて。", beginnerNote: "バターやチーズを使った料理全般におすすめです。" },
    { id: 5, food: "チーズ", wineStyle: "果実味のある赤", flavorReason: "チーズの旨味と塩気を、ワインの果実味と適度な渋みが受け止めます。", servingTip: "室温（16-18℃）でゆっくりと。", beginnerNote: "コンテやミモレットなど、噛み締めて美味しいチーズとどうぞ。" },
    { id: 6, food: "和菓子", wineStyle: "甘口ワイン", flavorReason: "小豆のコクのある甘みと、ワインの熟成した甘みが深く同調します。", servingTip: "食後のデザートとして、少し冷やして（12-14℃）。", beginnerNote: "赤ワインの渋みが苦手な方にもおすすめの組み合わせです。" }
  ],

  regions: [
    { id: 1, name: "山梨・勝沼", climate: "盆地気候・寒暖差大", grapes: "甲州、マスカット・ベーリーA", travelNote: "ワイナリーが密集しており、徒歩や自転車でも巡りやすいエリア。秋の収穫期は活気に満ちています。", tastingStyle: "繊細で和食に寄り添う、日本の伝統的なスタイル。", image: "/images/region_vineyard.webp" },
    { id: 2, name: "長野・塩尻", climate: "冷涼な内陸性気候", grapes: "メルロー、シャルドネ", travelNote: "標高が高く、美しい山並みを背景に広がるブドウ畑は圧巻です。", tastingStyle: "果実味と酸味のバランスが良く、骨格のしっかりしたワインが多いのが特徴。", image: "/images/region_vineyard.webp" },
    { id: 3, name: "北海道・余市", climate: "冷涼な気候（梅雨がない）", grapes: "ピノ・ノワール、ツヴァイゲルト", travelNote: "海と山に囲まれた自然豊かな産地。近年、新しい作り手が次々と集まっています。", tastingStyle: "美しい酸と冷涼な気候ならではのピュアな果実味が楽しめます。", image: "/images/region_vineyard.webp" },
    { id: 4, name: "山形・上山", climate: "内陸性気候", grapes: "デラウェア、カベルネ・ソーヴィニヨン", travelNote: "果樹栽培の歴史が長く、温泉地としても有名。ワイナリー巡りの後に温泉を楽しめます。", tastingStyle: "フルーティーで親しみやすいものから、本格的な赤ワインまで多様です。", image: "/images/region_vineyard.webp" },
    { id: 5, name: "新潟・胎内", climate: "日本海側気候", grapes: "ツヴァイゲルト、シャルドネ", travelNote: "海に近い砂丘地帯でのブドウ栽培。独特のテロワールを感じられる注目の産地です。", tastingStyle: "上品な酸とミネラル感があり、魚介類との相性が抜群です。", image: "/images/region_vineyard.webp" }
  ],

  faq: [
    { question: "ワインの知識が全くないのですが、楽しめますか？", answer: "もちろんです。葡萄日和では、専門用語を使わずに「どんな食事に合うか」「どんな気分にぴったりか」という視点でワインをご紹介しています。直感的に選んでみてください。" },
    { question: "掲載されているワインは購入できますか？", answer: "当サイトは編集メディアであり、ワインの販売は行っておりません。気になったワインは、お近くのワインショップや酒販店でお探しただくか、ワイナリーの公式サイトをご覧ください。" },
    { question: "ペアリングのコツはありますか？", answer: "「色が似ているもの（白身魚には白、赤身肉には赤）」「産地を合わせる」という基本的なルールの他に、「ワインの酸味と料理の酸味を合わせる」のもおすすめです。" }
  ]
};
