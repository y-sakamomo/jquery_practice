$(function () {
  // pageCountの初期値をを1にする
  let pageCount = 1;
  // 一つ前に検索した値を格納する。searchWordの値代入するが、始めは一旦空文字を代入
  let lastSearch = "";
  // .search-btnをクリックした時、
  $(".search-btn").on("click", function () {
    // 入力した内容をsearchWordに代入
    const searchWord = $("#search-input").val();
    // 検索ワードがlastSearch(一つ前に検索したの値）と同じ場合は、pageCountに+1する。そうでない場合は1に戻し.listsを空し、lastSearchに検索した値を代入する。
    if(lastSearch === searchWord) {
      pageCount++;
    } else {
      pageCount = 1;
      $(".lists").empty()
      lastSearch = searchWord;
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
  });
  // .listsクラスに該当の書籍一覧を表示させる処理
  function displayResult(r) {
    // .messageクラスを取り除く
    $(".message").remove();
    // r = r[0].itemsがundefined、または配列に中身が入っていなければエラーメッセージを出す。それ以外は個別の処理を指定する。
    if(r[0].items == undefined || r[0].items.length == 0) {
      // エラーメッセージを定義
      const noResult = `<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>`;
      // listsクラスの直前に追加する。
      $(".lists").before(noResult)
    } else {
      // resultの中のitems配列の中身を個別に取り出し処理を指定する
      $.each(r[0].items, function (index) {
        // 配列の中の値をそれぞれ定義
        let title = r[0].items[index].title;
        let creator = r[0].items[index]["dc:creator"];
        let publisher = r[0].items[index]["dc:publisher"];
        let id = r[0].items[index]["@id"];
        // 値がundefinedだった時、それぞれ不明と表示させる
        title == undefined ? title = "タイトル不明" : title;
        creator == undefined ? creator = "作者不明" : creator;
        publisher == undefined ? publisher = "出版社不明" : publisher;
        // リストの一覧として表示させるHTML要素を定義
        let listText = `<li class="lists-item"><div class="list-inner"><p>タイトル：${title}</p><p>作者：${creator}</p><p>出版社：${publisher}</p><a href="${id}">書籍情報</a></div></li>`;
        // 部分一致したものを.listsクラスに追加し表示する
        $(".lists").prepend(listText)
      });
    }
  }
  // エラーメッセージを表示させる処理
  function displayError(e) {
    // .listsクラスを空にする
    $(".lists").empty();
    // .messageクラスを取り除く
    $(".message").remove();
    // エラーメッセージを定義し代入する
    const errorConnect = `<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>`;
    const errorText = `<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索して下さい。</div>`;
    const errorMessage = `<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>`;
    // ステイタスコードが0の時（接続が出来ていない）はerrorConnectを.listsクラスの直前に追加する。
    if(e.status === 0) {
      $(".lists").before(errorConnect)
    // ステイタスコードが400の時（クライアント側のエラー）はerrorTextを追加。
    } else if (e.status === 400) {
      $(".lists").before(errorText)
    // それ以外はerrorMessageを追加する。
    } else {
      $(".lists").before(errorMessage)
    }
  }
  // リセットボタンの機能実装
  $(".reset-btn").on("click", function () {
    // .messageクラスを取り除く
    $(".message").remove();
    // .listsクラスを空にする
    $(".lists").empty();
    // 検索ワードに入力された内容を空にする
    $("#search-input").val("");
    // pageCountを1に戻す
    pageCount = 1;
  })
});