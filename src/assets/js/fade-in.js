// GSAPプラグインを登録
gsap.registerPlugin(ScrollTrigger);

// アニメーションを設定
gsap.fromTo(
  ".fade-in",
  { opacity: 0, x: 500 }, // 初期状態
  {
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: 0.3, // 各要素のアニメーションを0.3秒ずつ遅らせる
    scrollTrigger: {
      trigger: ".fade-in", // 一括でトリガー
      start: "top 90%", // トリガーポイント
      end: "bottom 10%", // トリガーが消える位置
    //   markers: true, // デバッグ用のマーカーを表示
      toggleActions: "play none none reverse",
    },
  }
);



gsap.utils.toArray(".fade-in-img").forEach((imgElem) => {
    gsap.fromTo(
      imgElem,
      { opacity: 0, scale: 0}, 
      {
        opacity: 1,
        scale: 1, // 元のサイズに戻る
        duration: 2,
        scrollTrigger: {
          trigger: imgElem,
          start: "top 90%", // トリガーポイント
          end: "bottom 10%", // トリガーが消える位置
          toggleActions: "play none none reverse",
        },
      }
    );
  });


gsap.utils.toArray(".width-expand").forEach((expandElem) => {
    gsap.fromTo(
      expandElem,
      { opacity : 0 ,y:100}, // 初期状態
      {
        opacity : 1, // アニメーション終了状態
        y : 0,
        duration: 2, // アニメーションの時間
        ease: "power2.out", // イージング
        scrollTrigger: {
          trigger: expandElem,
          start: "top 90%", // トリガー位置
          toggleActions: "play none none reverse",
        },
      }
    );
  });