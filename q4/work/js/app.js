$(function(){
  // .nav li"をクリックした時に
  $(".nav li").on("click",function(){
    // 変数を定義し、クリックされた.nav li"のインデックス番号を代入する
    const index = $(".nav li").index(this);
    // .description liにis-hiddenクラスを追加する
    $(".description li").addClass("is-hidden");
    // クリックされた.nav liと同じインデックス番号を持つ.description liのみis-hiddenクラスを削除する
    $(".description li").eq(index).removeClass("is-hidden");
  });
});