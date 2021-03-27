$(function(){
  // .modal_open_buttonをクリックした時に
  $(".modal_open_button").on("click",function(){
    // .modal_winをフェードインする
    $(".modal_win").fadeIn();
  });
  // .modal_close_buttonをクリックした時に
  $(".modal_close_button").on("click",function(){
    // .modal_winをフェードアウトする
    $(".modal_win").fadeOut();
  });
});