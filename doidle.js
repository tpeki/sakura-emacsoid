Editor.FileSave();  // 現在のファイルを保存
Editor.ExecCommand("cmd /c start pythonw -m idlelib \"" + Editor.GetFilename() + "\"", 1);
