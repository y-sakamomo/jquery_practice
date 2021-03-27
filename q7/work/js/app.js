$(function () {
  // .btn__submitがクリックされた時
  $(".btn__submit").on("click", function () {
    console.log("名字");
    // family__nameに入力された値を取得し、出力する
    console.log($("#family__name").val());
    console.log("名前");
    console.log($("#given__name").val());
    console.log("生年月日");
    // それぞれに入力された値を取得したものと、クラス内の最初のoption要素のテキストを取得したものをそれぞれ出力する
    console.log($(".year").val() + $(".year option:first").text() + $(".month").val() + $(".month option:first").text() + $(".day").val() + $(".day option:first").text());
    console.log("性別");
    // name="gender"の要素の内、選択されたものの値を取得し出力する
    console.log($('[name="gender"]:checked').val());
    console.log("職業");
    console.log($(".occupation").val());
    console.log("アカウント名");
    console.log($("#account__name").val());
    console.log("メールアドレス");
    console.log($("#email").val());
    console.log("パスワード");
    console.log($("#password").val());
    console.log("確認用パスワード");
    console.log($("#duplication__password").val());
    console.log("住所");
    console.log($("#address").val());
    console.log("電話番号");
    console.log($("#tel").val());
    console.log("購読情報");
    // name="subscription"の要素の内、選択されたものの値を取得し、それぞれ個別に処理指定する
    $('[name="subscription"]:checked').each(function () {
      // thisを用いて、個別に判断し、出力されるよう指定
      console.log($(this).val());
    })
  })
});