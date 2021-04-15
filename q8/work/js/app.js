$(function () {
  // .listsクラスに該当の書籍一覧を表示させる処理
  function displayResult(r) {
    // .messageクラスを取り除く
    $(".message").remove();
    // resultの中のitems配列の中身を個別に取り出し処理を指定する
    $.each(r[0].items, function (index) {
      // 部分一致したものを.listsクラスに追加し表示する
      $(".lists").prepend(`<li class="lists-item"><div class="list-inner"><p>タイトル：${r[0].items[index].title}</p><p>作者：${r[0].items[index]["dc:creator"]}</p><p>出版社：${r[0].items[index]["dc:publisher"]}</p><a href="${r[0].items[index]["@id"]}">書籍情報</a></div></li>`)
    })
  }
  // エラーメッセージを表示させる処理
  function displayError() {
    // .listsクラスを空にする
    $(".lists").empty();
    // エラーメッセージを.listsクラスの直前に追加する
    $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
  }
  // pageCountの初期値をを1にする
  let pageCount = 1;
  // .search-btnをクリックした時、
  $(".search-btn").on("click", function () {
    // 入力した内容をsearchWordに代入
    const searchWord = $("#search-input").val();
    // 検索ワードが入力されたままの場合は、pageCountに+1する。そうでない以外の場合は1に戻し.listsを空にする。
    if(searchWord !== "") {
      $(".lists").empty(),
      pageCount = 1;
    } else {
      pageCount++;
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
      console.log(result);
      console.log(result[0].items);
      console.log(pageCount);
      // データがダウンロードできなかったときの処理
    }).fail(function (err) {
      // displayErrorの実行
      displayError(err)
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
    // pageCountを0に戻す
    pageCount = 0;
  })
});