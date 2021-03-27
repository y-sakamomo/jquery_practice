// API
const settings = {
  "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
  "method": "GET",
}

// 通信成功、失敗の処理をdone、failの中に書いていくと見辛いコードになってしまうので関数化させてそれを呼ぶだけの処理とする
// レスポンス内容から値を取得する必要があるが、「@、:」などが使われているのでそう言った項目から値を取り出す時は、〇〇['@や:が使われているプロパティ名'];とすれば取り出せる(〇〇は引数、変数を想定)
// 検索結果がなかった場合でも検索結果があった場合と同じレスポンスを返す為doneの処理に入っていくで成功した時の処理で条件分岐を作る必要がある
// どう言った場合にエラーが起きるか想定してエラー処理の実装、念の為それ以外のエラーがおきた時の場合も考慮して実装

$(function () {
  // 入力した内容をsearchWordに代入
  const searchWord = $("#search-input").val();
  // pageCountの初期値を1に設定
  const pageCount = 1
  // .search-btnをクリックした時、
  $(".search-btn").on("click", function () {
    // 検索ワードが一致しない場合、pageCountを１にする。　一致する検索ワードである時、pageCountを+1にする。
    searchWord != 前回の検索ワード　? pageCount = 1 : pageCount++;
  })


  $.ajax(settings).done(function (response) {
    const result = response['@graph'];
    displayResult(result)
  }).fail(function (err) {
    displayError(err)
    // .listsの前にエラーメッセージを追加する
    $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
  });

  // リセットボタンの機能実装
  $(".reset-btn").on("click", function () {
    $(".message").remove();
    $(".lists").empty();
    $("#search-input").val("");
  })
});