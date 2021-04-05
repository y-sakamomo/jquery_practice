$(function(){
  // .drawer_buttonをクリックした時に
  $(".drawer_button").on("click", function(){
    // .drawer_buttonのactiveクラスの追加・削除を切り替える
    $(this).toggleClass("active");
    // アクションさせながら（0.5秒かけて）.drawer_bgの不透明度を切り替える
    $(".drawer_bg").fadeToggle();
    // .drawer_nav_wrapperのopenクラスの追加・削除を切り替える
    $(".drawer_nav_wrapper").toggleClass("open");
  });
  // .drawer_bgをクリックした時に
  $(".drawer_bg").on("click", function(){
    // .drawer_bgを隠し、
    $(this).hide();
    // .drawer_buttonクラスを削除し、
    $(".drawer_button").removeClass("active");
    // .drawer_nav_wrapperクラスも削除する
    $(".drawer_nav_wrapper").removeClass("open");
  })
});
