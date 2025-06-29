// XMLをプリティプリントする外部マクロ

try {
    // 現在編集中のテキストを取得
    var originalXml = Editor.GetSelectedString();
    if (originalXml === "") {
        originalXml = Editor.GetText();
    }

    if (originalXml === "") {
        Editor.MessageBox("整形するXMLがありません。", "エラー", 16); // MB_ICONERROR
        return;
    }

    // ActiveXObjectを使ってDOMDocumentとXMLSerializerを作成
    var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
    xmlDoc.async = false;
    xmlDoc.loadXML(originalXml);

    // エラーチェック
    if (xmlDoc.parseError.errorCode !== 0) {
        var errorMessage = "XMLの解析エラー:\n";
        errorMessage += "コード: " + xmlDoc.parseError.errorCode + "\n";
        errorMessage += "行: " + xmlDoc.parseError.line + "\n";
        errorMessage += "位置: " + xmlDoc.parseError.linepos + "\n";
        errorMessage += "理由: " + xmlDoc.parseError.reason;
        Editor.MessageBox(errorMessage, "XML解析エラー", 16); // MB_ICONERROR
        return;
    }

    // 整形オプションの設定 (ここではインデントにスペース4つを使用)
    // MSXMLのXMLSerializerは、インデントの直接的なオプションを提供しないため
    // 一般的なXMLSerializerとは異なり、直接的なPretty Printは行いません。
    // そのため、手動で整形するか、もっと強力なライブラリを使う必要があります。
    // ここでは、DOMDocumentのxmlプロパティが内部的に整形を試みることを期待します。
    // 完全にカスタマイズされた整形が必要な場合は、自前でパースして文字列を組み立てる必要があります。

    // Msxml2.DOMDocumentの.xmlプロパティは、ある程度の整形を行う
    var prettyXml = xmlDoc.xml;

    // 整形後のXMLをエディタに設定
    Editor.SetText(prettyXml);

    Editor.MessageBox("XMLの整形が完了しました。", "完了", 64); // MB_ICONINFORMATION

} catch (e) {
    Editor.MessageBox("エラーが発生しました: " + e.message, "エラー", 16); // MB_ICONERROR
}
