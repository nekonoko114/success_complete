
gsap.registerPlugin(ScrollTrigger);


const element = document.getElementById("logo");
const finalText = "SUCCESS FIELD"; // 最終的な文字列
const chars = "abcdefghijklmnopqrstuvwxyz"; // ランダムに使用する文字
const duration = 5; // アニメーションの全体時間

  // ランダム文字列を生成
  function getRandomText(length) {
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }

   // アニメーション設定
   gsap.to(element, {
    duration: duration,
    ease: "power2.out",
    onUpdate: function () {
      const progress = this.progress(); // アニメーションの進行率 (0 ~ 1)
      const currentLength = Math.floor(finalText.length * progress); // 現在の文字数
      const randomText = getRandomText(finalText.length - currentLength); // 残りの文字をランダム化
      element.textContent = finalText.slice(0, currentLength) + randomText; // 最終文字とランダム文字を結合
    },
    onComplete: function () {
      element.textContent = finalText; // 最終文字列を確定
    },
  });

// アニメーションを設定
gsap.utils.toArray(".fade-in").forEach((elem) => {
  gsap.fromTo(
    elem,
    { opacity: 0, x: 100, }, // 初期状態
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: elem, // 個別の要素をトリガーに設定
        start: "top 90%", // 要素がビューポート内に入った時点で開始
        end: "top 10%", // トリガーが終了する位置
        toggleActions: "play none none reverse", // アニメーションの挙動
        // markers: true, // デバッグ用のマーカーを表示する場合
      },
    }
  );
});





gsap.utils.toArray(".fade-up").forEach((expandElem) => {
    gsap.fromTo(
      expandElem,
      { opacity : 0 ,y:100}, // 初期状態
      {
        opacity : 1, // アニメーション終了状態
        y : 0,
        duration: 1, // アニメーションの時間
        ease: "power2.out", // イージング
        scrollTrigger: {
          trigger: expandElem,
          start: "top 90%", // トリガー位置
          toggleActions: "play none none reverse",
        },
      }
    );
  });


  gsap.to("header", {
    backgroundColor: "#fff", // 反転後の色（黒に変更）
    borderBottom: "1px solid #07213B",
    duration: 0.3, // アニメーションの速度
    scrollTrigger: {
      trigger: "body", // ページ全体をトリガーに設定
      start: "00px top", // 200pxスクロールで開始
      toggleActions: "play none none reverse", // スクロールアップで元に戻す
    },
  });
  gsap.to("header a", {
    color: "#07213B", // 文字色も変更する場合
    duration: 0.3, // アニメーションの速度
    scrollTrigger: {
      trigger: "body", // ページ全体をトリガーに設定
      start: "00px top", // 200pxスクロールで開始
      toggleActions: "play none none reverse", // スクロールアップで元に戻す
    },
  });

gsap.to("header", {
  scrollTrigger: {
    // trigger: window, // トリガーは全体のスクロール
    start: "1000px top", // スクロール位置
    toggleActions: "play none none reverse", // アクションを設定
  },
  y: -100, // 上に非表示（高さに応じて調整）
  duration: 0.3, // アニメーションの速度
});