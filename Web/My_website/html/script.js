// h1のcolorを時間で変えるプログラム
// 1秒ごとに色を変える

// 色を変更するための配列
// 滑らかに遷移するように100個の色を用意
const colors = ["#ff0000", "#ff0d00", "#ff1a00", "#ff2700", "#ff3400", "#ff4100", "#ff4e00", "#ff5b00", "#ff6800", "#ff7500", "#ff8200", "#ff8f00", "#ff9c00", "#ffa900", "#ffb600", "#ffc300", "#ffd000", "#ffdd00", "#ffea00", "#ffff00", "#f0ff00", "#e3ff00", "#d6ff00", "#c9ff00", "#bcff00", "#afff00", "#a2ff00", "#95ff00", "#88ff00", "#7bff00", "#6eff00", "#61ff00", "#54ff00", "#47ff00", "#3aff00", "#2dff00", "#20ff00", "#13ff00", "#06ff00", "#00ff0c", "#00ff19", "#00ff26", "#00ff33", "#00ff40", "#00ff4d", "#00ff5a", "#00ff67", "#00ff74", "#00ff81", "#00ff8e", "#00ff9b", "#00ffa8", "#00ffb5", "#00ffc2", "#00ffcf", "#00ffdc", "#00ffe9", "#00fff6", "#00ffff", "#00f0ff", "#00e3ff", "#00d6ff", "#00c9ff", "#00bcff", "#00afff", "#00a2ff", "#0095ff", "#0088ff", "#007bff", "#006eff", "#0061ff", "#0054ff", "#0047ff", "#003aff", "#002dff", "#0020ff", "#0013ff", "#0006ff", "#0000ff", "#0c00ff", "#1900ff", "#2600ff", "#3300ff", "#4000ff", "#4d00ff", "#5a00ff", "#6700ff", "#7400ff", "#8100ff", "#8e00ff", "#9b00ff", "#a800ff", "#b500ff", "#c200ff", "#cf00ff", "#dc00ff", "#e900ff", "#f600ff", "#ff00ff", "#ff00f2", "#ff00e5", "#ff00d8", "#ff00cb", "#ff00be", "#ff00b1", "#ff00a4", "#ff0097", "#ff008a", "#ff007d", "#ff0070", "#ff0063", "#ff0056", "#ff0049", "#ff003c", "#ff002f", "#ff0022", "#ff0015", "#ff0008"]

let currentColorIndex = 0;

function changeColor() {
  // h1要素を取得
  const h1 = document.querySelector('h1');

  // 現在の色のインデックスに基づいてh1の色を設定
  h1.style.color = colors[currentColorIndex];

  // 次の色にインデックスを更新する
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// 1秒ごとに`changeColor`関数を呼び出す
setInterval(changeColor, 100);

//Did you collect the two flags? The title shines in rainbow was made by chatGPT! :  C0ur4g3!}  (3/3)
