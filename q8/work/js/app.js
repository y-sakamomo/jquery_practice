$(function () {
  // API
  const settings = {
    "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
    "method": "GET",
  }
  // 入力した内容をsearchWordに代入
  const searchWord = $("#search-input").val();
  // pageCountの初期値を1に設定
  const pageCount = 1
  // .listsクラスの始めにli要素とdiv要素を追加する処理
  function addList() {
    $(".lists").prepend('<li class="lists-item"><div class="list-inner"></div></li>')
    // .list-innerクラスにp要素を追加し、itemsの情報を表示させたい！
    $(".list-inner").prepend('<p></p>')
    // // タイトル
    // items.title
    // // 作者
    // items["dc:creator"];
    // // 出版社
    // items["dc:publisher"];
    // // 書籍情報
    // items.link["@id"];
  }
  // エラーメッセージを.listsクラスの直前に追加する処理
  function addErrText(){
    $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
  }
  // .search-btnをクリックした時、
  $(".search-btn").on("click", function () {
    // 検索ワードが何にも一致しない場合、pageCountを１にする。一致する検索ワードである時、pageCountを+1にする。
    searchWord !== "" ? (pageCount = 1, $(".lists").empty()) : pageCount++;
    // データがダウンロードできたときの処理
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      displayResult(result)
      // .listsクラスに該当の書籍一覧を表示させる
      addList();
      // データがダウンロードできなかったときの処理
    }).fail(function (err) {
      displayError(err)
      // .listsクラスを空にする
      $(".lists").empty();
      // .listsの前にエラーメッセージを追加する
      addErrText();
    })
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
