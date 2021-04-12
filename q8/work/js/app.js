$(function () {
  // 入力した内容をsearchWordに代入
  const searchWord = $("#search-input").val();
  // pageCountの初期値をを１にする
  let pageCount = 1;
  // // タイトル
  // items.title
  // // 作者
  // items["dc:creator"];
  // // 出版社
  // items["dc:publisher"];
  // // 書籍情報
  // items.link["@id"];
  // .listsクラスに該当の書籍一覧を表示させる処理
  // function displayResult() {
  //   // @graph配列の中のitems配列の中身を個別に取り出し処理を指定する
  //   for (items of ['@graph']) {
  //     // 部分一致したものを.listsクラスに追加し表示する
  //     $(".lists").prepend(`<li class="lists-item"><div class="list-inner"><p>タイトル：</p><p>作者：</p><p>出版社：</p><a href="">書籍情報</a></div></li>`)
  //   }
  // }
  // エラーメッセージを表示させる処理
  function displayError() {
    // .listsクラスを空にする
    $(".lists").empty();
    // エラーメッセージを.listsクラスの直前に追加する
    $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
  }
  // .search-btnをクリックした時、
  $(".search-btn").on("click", function () {
    // 検索ワードが同じ場合、pageCountを+1にする。同じでない場合、pageCountのを１し、.listsを空にする。
    if (searchWord === searchWord) {
      pageCount++;
    } else {
      pageCount = 1, $(".lists").empty();
    }
    // 変数settingsに設定情報などを格納
    const settings = {
      // 実行するURL。
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      // サーバーに送るメソッド
      "method": "GET",
    }
    // データがダウンロードできたときの処理
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      // displayResultの実行
      displayResult(result)
      // データがダウンロードできなかったときの処理
    }).fail(function (err) {
      // displayErrorの実行
      displayError(err)
    })
    console.log(['@graph']);
    console.log(['@graph.items.title']);
  });
  // リセットボタンの機能実装
  $(".reset-btn").on("click", function () {
    // .messageクラスを取り除く
    $(".message").remove();
    // .listsクラスを空にする
    $(".lists").empty();
    // 検索ワードに入力された内容を空にする
    $("#search-input").val("");
  })
});