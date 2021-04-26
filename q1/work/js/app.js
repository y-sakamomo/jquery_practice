// Q1-1
$(function(){
  // id=q1の文字色をgreenに変更する
  $("#q1").css("color", "green");
});

// Q1-2
$(function(){
  // id=q2をクリックした時に
  $("#q2").on("click", function(){
    // id=q2の背景色をpinkに変更する
    $(this).css("background-color", "pink");
  });
});

// Q1-3
$(function(){
  // id=q3をクリックした時に
  $("#q3").on("click", function(){
    // id=q3をフェードアウト(3秒かけて)させる
    $(this).fadeOut(3000);
  });
});

// Q1-4
$(function(){
  // id=q4をクリックした時に
  $("#q4").on("click", function(){
    // id=q4にlargeスタイルを追加しサイズを変更する
    $(this).addClass("large");
  });
});

// Q1-5
$(function(){
  // id=q5をクリックした時に
  $("#q5").on("click", function(){
    // id=q5の前にテキストを挿入
    $(this).before("DOMの前")
    // id=q5の後ろにテキストを挿入
    .after("DOMの後")
    // id=q5の要素の中の一番始めにテキストを挿入
    .prepend("DOMの中の前")
    // id=q5の要素の中の一番後ろにテキストを挿入
    .append("DOMの中の後")
  });
});

// Q1-6
$(function(){
  // id=q6をクリックした時に
  $("#q6").on("click", function(){
    // アニメーションをつける
    $(this).animate({
      "margin-top": 100,
      "margin-left": 100
      // 2秒かけて動く
    }, 2000)
  });
});

// Q1-7
$(function(){
  // id=q7をクリックした時に
  $("#q7").on("click", function(){
    //id=q7を要素ごとコンソールへ出力する
    console.log(this);
  });
});

// Q1-8
$(function(){
  $("#q8").on({
    // id=q8にホバーした時に
    mouseenter: function(){
      // id=q8にlargeスタイルを追加しサイズ変更する
      $(this).addClass("large")
    },
    // id=q8からカーソルを離した時に
    mouseleave: function(){
      // largeのcssスタイルを取り除く
      $(this).removeClass("large")
    }
  })
});

// Q1-9
$(function(){
  // id=q9をクリックした時に
  $("#q9 li").on("click", function(){
    // 変数を定義し、インデックス番号を代入する
    const index = $(this).index();
    // 代入したインデックス番号をアラートに表示する
    alert(index);
  });
});

// Q1-10
$(function(){
  // id=q10をクリックした時に
  $("#q10 li").on("click", function(){
    // インデックス番号を取得する
    const index = $(this).index();
    // 取得したインデックス番号をq11のイベントに代入し、cssスタイルを追加する
    $("#q11 li").eq(index).addClass("large-text");
  });
});
