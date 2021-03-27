$(function(){
  // .drawer_buttonをクリックした時に
  $(".drawer_button").on("click", function(){
    // .drawer_buttonのactiveクラスの追加・削除を切り替える
    $(".drawer_button").toggleClass("active");
    // アクションさせながら（0.5秒かけて）.drawer_bgの不透明度を切り替える
    $(".drawer_bg").fadeToggle(500);
    // .drawer_nav_wrapperのopenクラスの追加・削除を切り替える
    $(".drawer_nav_wrapper").toggleClass("open");
  });
});