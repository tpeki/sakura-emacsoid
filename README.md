# Emacs like keybind for SakuraEditor
## Any keys in windows flavor

 - Select all -> M-a
 - Cut -> C-w
 - Paste -> C-y, C-v ; Gates
 - Copy -> C-c ; Gates
 - grep -> C-g ; Cancel action is bound to ESC

## Some 2 stroke keys follows C-x are represented by Menu2 (C-x C-o, C-x C-f, ...)

 - M-2 - M-0 are under construction
## invoke external macro example

 - Every js-files put into external macro dir (default=exe folder), and set External Macro

 |No.|Name|FileName|Key|
 |--|--|--|--|
 |No.0|Open IDLE|doidle.js|M-6|
 |No.1|Gp Line Head(Logical)|LogicalLineHead.js|C-a|
 |No.2|Gp Line End(Logical)|LogicalLineEnd.js|C-e|
 |No.3|PrettyPrint choosed XML Regeon|PrettyPrintXML.js|C-x 4 x|
 |No.4|Change RW/RO (Toggle)|ToggleReadOnly.js|C-x q|

2025/06/26 initial version
2025/06/29 extend with External Macro
