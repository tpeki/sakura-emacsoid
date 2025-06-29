// 基本形
// Editor.FileSave();  // 現在のファイルを保存
// Editor.ExecCommand("cmd /c start pythonw -m idlelib \"" + Editor.GetFilename() + "\"", 1);

// 選択式
Editor.FileSave();  // 現在のファイルを保存

// バージョン選択メニューを表示
var version = Editor.InputBox("使用するPythonバージョンを入力してください（例: 3.10, 3.11）", "Pythonバージョン選択", 10);

// キャンセルされた場合は終了
if (version == "") {
    Editor.InfoMsg("キャンセルされました。");
    WScript.Quit();
}

// バージョンごとのパスを定義（必要に応じて調整）
var pythonPaths = {
    "3.10": "C:\\Python3\\pythonw.exe",
    "2.7.14": "C:\\Python2\\pythonw.exe"
};

var pythonExe = pythonPaths[version];

if (!pythonExe) {
    Editor.ErrorMsg("指定されたバージョンのPythonは登録されていません。");
    WScript.Quit();
}

// IDLEを起動
Editor.ExecCommand("cmd /c start \"\" \"" + pythonExe + "\" -m idlelib \"" + Editor.GetFilename() + "\"", 1);