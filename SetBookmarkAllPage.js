//
//SetBookmarkAllPage
//20160507 v1
//各ページへのしおりを追加します
//Adobe Reader 11 OSX 10.6.8 にて確認
//インストール先は
//ディスク名/Users/ユーザー名/Library/Application Support/Adobe/Acrobat/11.0/JavaScripts
//ダウンロード後に文字コードをUTF16に変換してからインストールする事
//
//メニュー本体

function SetBookmarkAllPage(){
//まずはコンソール（デバッガー）を出さないと
//結果が見れませんので出しておきます
console.show();
//最初のページに移動
this.pageNum = 0;
//ページのカウント用の数値の初期化
var numPageCnt = 0;
//全ページ数を取得
var numAllPageCnt = this.numPages ;
//最後のページに移動する
this.pageNum = +numAllPageCnt;
//繰り返しの始まり
while (+numAllPageCnt >= 0) {
//ページ番号を定義（１ページ目が0なので１足す）
var theNowPageNum = this.pageNum + 1;
//しおりに指定する移動先としてのページ番号
var theGotoPageNum = this.pageNum;
//しおりに設定するスクリプトを定義
var theAction = "this.pageNum = " + theGotoPageNum + ";";
//しおりを追加する
this.bookmarkRoot.createChild(theNowPageNum + "ページ", theAction);
//前ページへ移動する
var numAllPageCnt = +theGotoPageNum - 1;
//ページカウントをカウントアップ
this.pageNum = +numAllPageCnt;
//繰り返しの終わり
}
//処理の終わり
}

///拡張メニュー部
app.addToolButton({
cName: "SetBookmarkAllPage",
cParent: "Bookmark",
cExec: "SetBookmarkAllPage()",
cEnable: "event.rc = true",
cMarked: "event.rc = false",
cTooltext: "全ページにブックマークを追加する",
nPos: -1,
cLabel: "全ページにブックマークを追加する"

});

