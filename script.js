window.addEventListener("load", function() {
    // プラグインを定義
    gsap.registerPlugin(ScrollTrigger);
HTML CSS JSResult Skip Results Iframe
EDIT ON

    const area  = document.querySelector(".js-area");
    const wrap  = document.querySelector(".js-wrap");
    const items = document.querySelectorAll(".js-item");
    const num   = items.length;
   window.addEventListener("load", function(){

    // 横幅を指定
    gsap.set(wrap,  { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });
//プラグインを定義
gsap.registerPlugin(ScrollTrigger);

    gsap.to(wrap, {
        xPercent: -100 * (num - 1), // x方向に移動させる
        ease: "none",
        scrollTrigger: {
            trigger: area, // トリガー
            start: "top top", // 開始位置
            end: "+=1000", // 終了位置 スクロール量の幅調整
            pin: true, // ピン留め
            scrub: true, // スクロール量に応じて動かす
        }
    });
});
