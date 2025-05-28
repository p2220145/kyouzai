// page1.js
// このページには、現時点では特定のJavaScriptの機能は必要ありません。
// たとえば、画像を拡大表示する機能などを後で追加する際に使えます。

document.addEventListener('DOMContentLoaded', () => {
    // ページ読み込み時のアニメーションなど、必要に応じて追加
    // 例: 導入セクションが少し遅れてふわっと表示される（style.cssと連携）
    const introSection = document.querySelector('.intro-section');
    if (introSection) {
        // intro-sectionのCSSにanimation: fadeIn 1s ease-out; が設定されているので、
        // JS側で特に制御しなくても、CSSのAnimationが実行されます。
    }

    console.log("page9.htmlが読み込まれました。");
});