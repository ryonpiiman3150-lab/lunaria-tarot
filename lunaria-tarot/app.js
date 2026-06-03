const cards = [
  card("fool", "0", "愚者", "風", "自由な一歩が、新しい可能性を連れてきます。", "勢いだけで進まず、足元を確かめる時です。", "素直な気持ちを小さな行動で表してみましょう。"),
  card("magician", "I", "魔術師", "✦", "必要な力はすでに手元にあります。言葉と行動を一致させましょう。", "準備不足や空回りを感じたら、使えるものを整理しましょう。", "持っている選択肢を一つ具体的に使ってみましょう。"),
  card("priestess", "II", "女教皇", "☾", "静かな直感が本質を見抜いています。急いで答えを出さなくても大丈夫です。", "考え込みすぎて、心の声が聞こえにくくなっています。", "情報を増やすより、落ち着いて違和感を見つめましょう。"),
  card("empress", "III", "女帝", "❀", "受け取ること、育てることが豊かさにつながります。", "与えすぎや甘えすぎの偏りを整える必要があります。", "自分と相手の心地よさを同じくらい大切にしましょう。"),
  card("emperor", "IV", "皇帝", "♜", "土台を整え、責任ある決断をする力があります。", "頑なさが流れを止めているかもしれません。", "守りたいものと、譲ってよいものを分けて考えましょう。"),
  card("hierophant", "V", "教皇", "⚿", "信頼できる知恵や誠実な対話が道しるべになります。", "常識に縛られすぎず、自分の価値観も確かめましょう。", "経験のある人の意見を一度聞いてみましょう。"),
  card("lovers", "VI", "恋人", "♡", "心から納得できる選択が、関係や状況を前へ進めます。", "迷いや依存が判断を曇らせています。", "損得だけでなく、本当に望む方向を言葉にしましょう。"),
  card("chariot", "VII", "戦車", "➶", "意志を定めれば、迷いを越えて前進できます。", "急ぎすぎると大切な感情を置き去りにします。", "今日進める一歩だけに集中しましょう。"),
  card("strength", "VIII", "力", "♌", "穏やかな強さが状況を動かします。力で押す必要はありません。", "自信を失った時ほど、自分を責めないことが大切です。", "感情を否定せず、丁寧に扱いましょう。"),
  card("hermit", "IX", "隠者", "✧", "一人で静かに考える時間が、答えを照らします。", "閉じこもりすぎず、必要な助けは受け取ってください。", "短い時間でも、考えを紙に書き出しましょう。"),
  card("wheel", "X", "運命の輪", "◎", "流れが変わり始めています。偶然に見える機会を活かしましょう。", "同じことの繰り返しから、学ぶべき点があります。", "予定外の変化に、小さく柔軟に対応しましょう。"),
  card("justice", "XI", "正義", "⚖", "感情と事実を分けることで、納得できる判断に近づきます。", "偏りや決めつけを見直す必要があります。", "判断材料を一つずつ整理しましょう。"),
  card("hanged", "XII", "吊るされた男", "♆", "立ち止まることで、今までと違う景色が見えてきます。", "我慢が目的になっていないか確かめましょう。", "すぐ変えられないことは、見方を変えてみましょう。"),
  card("death", "XIII", "死神", "♢", "終わりは新しい段階への入口です。手放すことで余白が生まれます。", "変化への抵抗が、かえって苦しさを長引かせています。", "役目を終えた習慣や期待を一つ手放しましょう。"),
  card("temperance", "XIV", "節制", "♒", "少しずつ調整すれば、無理のない良い流れが生まれます。", "極端な選択を避け、生活や気持ちの配分を整えましょう。", "急がず、続けられる速度を選びましょう。"),
  card("devil", "XV", "悪魔", "♑", "執着や誘惑に気づくことで、自由を取り戻せます。", "縛られていると思う状況にも、選び直せる余地があります。", "本当はやめたいことを一つ正直に認めましょう。"),
  card("tower", "XVI", "塔", "⚡", "思い込みが崩れることで、本当に必要なものが明確になります。", "変化を恐れて見ないふりをすると、負担が増えてしまいます。", "事実を受け止め、安全な範囲から立て直しましょう。"),
  card("star", "XVII", "星", "★", "希望は静かに続いています。自分らしい未来を信じて進めます。", "理想を遠く感じても、光が消えたわけではありません。", "少し先の楽しみを一つ予定に入れましょう。"),
  card("moon", "XVIII", "月", "☽", "曖昧さの中では、直感と現実確認の両方が助けになります。", "不安が想像を大きくしているかもしれません。", "心配事を、事実と想像に分けて書き出しましょう。"),
  card("sun", "XIX", "太陽", "☀", "喜びや率直さが状況を明るくします。自信を持って大丈夫です。", "無理に明るく振る舞わず、疲れにも気づいてください。", "嬉しいことを素直に共有しましょう。"),
  card("judgement", "XX", "審判", "♬", "過去の経験を活かし、もう一度選び直す時です。", "後悔に留まるより、今できることへ意識を向けましょう。", "気になっていたことに、改めて返事をしましょう。"),
  card("world", "XXI", "世界", "⊕", "一つの区切りが訪れています。積み重ねを認め、次へ進みましょう。", "完璧を求めすぎず、今の到達点を受け入れましょう。", "できたことを振り返り、自分をねぎらいましょう。")
];

const topics = {
  love: { label: "恋愛", lead: "心の距離や、ご自身の本音を見つめるために", hint: "相手の反応を急いで決めつけず、自分が安心できる伝え方を一つ選んでください。" },
  work: { label: "仕事", lead: "役割や、これからの進み方を考えるために", hint: "大きな結論より、今日終えられる具体的な一歩を決めてください。" },
  relation: { label: "人間関係", lead: "人との距離感や、言葉の選び方を整えるために", hint: "分かり合うことと、境界線を守ることの両方を大切にしてください。" },
  other: { label: "その他", lead: "今の迷いを少しずつ整理するために", hint: "答えを急がず、まず自分が変えられることを一つ選んでください。" }
};

const positions = [
  { id: "past", label: "過去", phrase: "これまでの流れには" },
  { id: "present", label: "現在", phrase: "今のあなたには" },
  { id: "future", label: "未来", phrase: "これから先には" }
];

const state = {
  screen: "intro",
  topic: "love",
  question: "",
  deck: [],
  picked: [],
  revealed: 0
};

const app = document.querySelector("#app");

function card(id, number, name, symbol, upright, reversed, themeHint) {
  return { id, number, name, symbol, upright, reversedText: reversed, themeHint };
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function startReading() {
  state.screen = "question";
  state.question = "";
  state.deck = [];
  state.picked = [];
  state.revealed = 0;
  render();
}

function prepareDeck() {
  const input = document.querySelector("#question");
  state.question = input.value.trim().slice(0, 500);
  state.deck = shuffle(cards);
  state.picked = [];
  state.revealed = 0;
  state.screen = "selection";
  render();
}

function chooseCard(index) {
  if (state.picked.length >= 3 || state.picked.some((item) => item.deckIndex === index)) return;
  const selected = state.deck[index];
  state.picked.push({ ...selected, deckIndex: index, reversed: Math.random() < 0.5 });
  render();
}

function beginReveal() {
  state.screen = "reveal";
  state.revealed = 0;
  render();
}

function revealNext() {
  if (state.revealed >= 3) return;
  state.revealed += 1;
  if (state.revealed >= 3) {
    window.setTimeout(() => {
      state.screen = "result";
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 850);
  } else {
    render();
  }
}

function interpretation(item) {
  return item.reversed ? item.reversedText : item.upright;
}

function generateReading() {
  const topic = topics[state.topic];
  const [past, present, future] = state.picked;
  const futureTone = future.reversed
    ? "すぐに答えを出すより、整える時間を持つことで流れは変わっていきます。"
    : "小さな一歩を積み重ねれば、望む方向へ進む余地があります。";

  return {
    summary: `${topic.lead}、3枚のカードが現れました。過去の「${past.name}」から受け取った経験を踏まえ、今は「${present.name}」が示す視点を大切にしてください。未来に現れた「${future.name}」は、決められた運命ではなく、これからの選択を照らす道しるべです。${futureTone}`,
    action: `${topic.hint} ${present.themeHint}`
  };
}

function tarotCard(item, revealed, index) {
  const orientation = item.reversed ? "逆位置" : "正位置";
  return `
    <div>
      <p class="slot-label">${positions[index].label}</p>
      <div class="tarot-scene">
        <div class="tarot-card ${revealed ? "is-flipped" : ""}">
          <div class="tarot-back"></div>
          <div class="tarot-face ${item.reversed ? "reversed" : ""}">
            <span class="card-number">${item.number}</span>
            <span class="card-art">${item.symbol}</span>
            <span>
              <strong class="card-name">${item.name}</strong>
              <small class="orientation">${orientation}</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderIntro() {
  return `
    <section class="panel panel-narrow hero">
      <div class="moon" aria-hidden="true">☾</div>
      <p class="eyebrow">Listen to your inner voice</p>
      <h1>LUNARIA</h1>
      <div class="ornament">✦</div>
      <p class="subtitle">月明かりの下で、心を静かに見つめる時間。<br>3枚のカードが、今のあなたに必要な言葉を届けます。</p>
      <div class="button-row">
        <button class="primary-button" type="button" data-action="start">カードを引く</button>
      </div>
    </section>
  `;
}

function renderQuestion() {
  const topicButtons = Object.entries(topics).map(([id, topic]) => `
    <button class="topic ${id === state.topic ? "selected" : ""}" type="button" data-topic="${id}" aria-pressed="${id === state.topic}">
      ${topic.label}
    </button>
  `).join("");

  return `
    <section class="panel panel-narrow">
      <div class="question-card">
        <p class="eyebrow">Step 1 · Your question</p>
        <h2>心に浮かぶことを<br>聞かせてください</h2>
        <p class="subtitle">テーマを選び、必要であれば今の気持ちを書いてください。空欄のままでも占えます。</p>
        <div class="topic-grid" role="group" aria-label="相談テーマ">${topicButtons}</div>
        <label for="question">相談したいこと <small>（任意・500文字まで）</small></label>
        <textarea id="question" maxlength="500" placeholder="例：これから新しいことを始めるべきか迷っています。"></textarea>
        <div class="button-row">
          <button class="primary-button" type="button" data-action="prepare">カードを選ぶ</button>
        </div>
      </div>
    </section>
  `;
}

function renderSelection() {
  const deck = state.deck.map((_, index) => {
    const selected = state.picked.some((item) => item.deckIndex === index);
    return `<button class="deck-card ${selected ? "chosen" : ""}" type="button" data-card-index="${index}" aria-label="${selected ? "選択済み" : `裏向きのカード ${index + 1} を選ぶ`}" ${selected ? "disabled" : ""}></button>`;
  }).join("");
  const picked = state.picked.length;

  return `
    <section class="panel">
      <div class="reading-heading">
        <p class="eyebrow">Step 2 · Choose three cards</p>
        <h2>心を落ち着けて<br>3枚のカードを選んでください</h2>
      </div>
      <div class="deck">${deck}</div>
      <p class="selection-status">${picked < 3 ? `${picked} / 3 枚を選びました` : "3枚のカードが選ばれました"}</p>
      ${picked === 3 ? `<button class="primary-button reveal-button" type="button" data-action="begin-reveal">カードをめくる</button>` : ""}
    </section>
  `;
}

function renderReveal() {
  const slots = state.picked.map((item, index) => tarotCard(item, index < state.revealed, index)).join("");
  const nextPosition = positions[state.revealed];

  return `
    <section class="panel">
      <div class="reading-heading">
        <p class="eyebrow">Step 3 · Reveal the message</p>
        <h2>選ばれたカードを<br>一枚ずつめくりましょう</h2>
      </div>
      <div class="slots">${slots}</div>
      <button class="primary-button reveal-button" type="button" data-action="reveal-next">${nextPosition.label}のカードをめくる</button>
    </section>
  `;
}

function renderResult() {
  const reading = generateReading();
  const cardsHtml = state.picked.map((item, index) => `
    <article class="reading-card">
      <div class="mini-card">${item.symbol}</div>
      <div>
        <span class="reading-position">${positions[index].label}</span>
        <h3 class="reading-name">${item.name} · ${item.reversed ? "逆位置" : "正位置"}</h3>
      </div>
      <p>${positions[index].phrase}、${interpretation(item)}</p>
    </article>
  `).join("");
  const question = state.question
    ? `<p class="question-quote">「${escapeHtml(state.question)}」</p>`
    : `<p class="question-quote">今のあなたへのメッセージ</p>`;

  return `
    <section class="panel">
      <div class="reading-heading">
        <p class="eyebrow">Your tarot reading</p>
        <h2>${topics[state.topic].label}についての<br>カードからの便り</h2>
        ${question}
      </div>
      <div class="summary-card">
        <h3>全体メッセージ</h3>
        <p>${reading.summary}</p>
      </div>
      <div class="reading-grid">${cardsHtml}</div>
      <div class="action-box">
        <h3>小さな行動のヒント</h3>
        <p>${reading.action}</p>
      </div>
      <p class="disclaimer">この鑑定は、気持ちを整理するためのヒントとしてお楽しみください。医療、法律、金銭などの重要な判断は、必要に応じて専門家へご相談ください。</p>
      <div class="button-row">
        <button class="primary-button" type="button" data-action="restart">もう一度占う</button>
      </div>
    </section>
  `;
}

function escapeHtml(value) {
  const element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
}

function render() {
  const views = {
    intro: renderIntro,
    question: renderQuestion,
    selection: renderSelection,
    reveal: renderReveal,
    result: renderResult
  };
  app.innerHTML = views[state.screen]();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.topic) {
    state.topic = target.dataset.topic;
    document.querySelectorAll(".topic").forEach((button) => {
      const selected = button.dataset.topic === state.topic;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    return;
  }

  if (target.dataset.cardIndex !== undefined) {
    chooseCard(Number(target.dataset.cardIndex));
    return;
  }

  const actions = {
    start: startReading,
    prepare: prepareDeck,
    "begin-reveal": beginReveal,
    "reveal-next": revealNext,
    restart: startReading,
    home: () => {
      state.screen = "intro";
      render();
    }
  };

  actions[target.dataset.action]?.();
});

render();
