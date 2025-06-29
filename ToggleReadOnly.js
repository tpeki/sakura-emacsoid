// 書き込み禁止状態をトグルする外部マクロ

try {
    // 現在の書き込み禁止状態を取得
    // Editor.GetViewMode() は読み取り専用の場合 1 を返します。
    var isReadOnly = (Editor.GetViewMode() === 1);

    if (isReadOnly) {
        // 現在読み取り専用なら、書き込み可能にする
        Editor.SetViewMode(0); // 0 は通常モード（書き込み可能）
        Editor.MessageBox("ファイルは書き込み可能になりました。", "書き込み禁止トグル", 64); // MB_ICONINFORMATION
    } else {
        // 現在書き込み可能なら、読み取り専用にする
        Editor.SetViewMode(1); // 1 は読み取り専用モード
        Editor.MessageBox("ファイルは読み取り専用になりました。", "書き込み禁止トグル", 64); // MB_ICONINFORMATION
    }

} catch (e) {
    Editor.MessageBox("エラーが発生しました: " + e.message, "エラー", 16); // MB_ICONERROR
}
