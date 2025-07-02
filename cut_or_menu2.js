if( !Editor.IsTextSelected() ){
    // 選択されていない場合：メニューを表示
    Editor.CustMenu2(); // 編集メニューを開く
}
else {
    // 選択範囲がある場合：カット
    Editor.Cut();
}
