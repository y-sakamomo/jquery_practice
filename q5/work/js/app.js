$(function(){
  // .dropdwn liにホバーした時、
  $(".dropdwn li").mouseover(function() {
    // 選択された.dropdwn liの子要素ulを取得し、スライドで表示させる（stopで連続しないようにする）
    $(this).children("ul").stop().slideDown()
  });
  // .dropdwn liからマウスを外した時、
  $(".dropdwn li").mouseleave(function() {
    // スライドで非表示にする（stopで連続しないようにする）
    $(this).children("ul").stop().slideUp()
  });
});