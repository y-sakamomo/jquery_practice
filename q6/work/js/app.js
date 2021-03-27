$(function(){
  // select-boxの要素が変更された時、
  $(".select-box").on("change", function(){
    // 変数を定義し、選択されたselect-box要素のvalueを取得し代入
    const val = $(this).val();
    // 三項演算子：条件（"全て"を選択した時）true（food-listのli要素を全て表示する）false(food-listのli要素に対し、個別で繰り返し処理を指定する）
    val === "all" ? $(".food-list li").show() : $(".food-list li").each(function(index, element){
      // 変数を定義し、繰り返し時の判断に使用する個別のli要素のcategory-typeの値を取得して変数に代入する
      const type = $(element).data("category-type");
      // 条件（選択されたselect-box要素のvalueとfood-listのcategory-typeが同じ値の時）同じとき（そのli要素を表示する）同じでない時(そのli要素を非表示にする）
      val === type ? $(element).show() : $(element).hide()
      })
  });
});