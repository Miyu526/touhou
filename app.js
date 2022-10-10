//jQuery
$(function(){
  //ボタン上で色が暗くなる
  $('.button').hover(
    function(){
      $(this).css('color', '#888');
    },
    $('.button').hover(
      function(){
        $(this).css('color', '#fff');
      }
    )
  );
  // ↓メモ: オプション"distance"や"origin"が上手く指定できない、なんでだろう
  // ScrollReveal.jsを使ってスクロールしたらふわっと表示される動きを作ってみよう https://liginc.co.jp/500530
  ScrollReveal().reveal('#header-logo',{
    duration: 1000, // アニメーションの完了にかかる時間
    viewFactor: 0.1, // 0~1,どれくらい見えたら実行するか
    reset: false   // 何回もアニメーション表示するか
  });
})
