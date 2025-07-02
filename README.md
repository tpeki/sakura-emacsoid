# Emacs like keybind for SakuraEditor
## Any keys in windows flavor

 - Select all -> M-a
 - Cut -> C-w
 - Paste -> C-y, C-v ; Gates
 - Copy -> C-c ; Gates
 - grep -> M-g
 - Cancel -> C-g ; incremental search, ...
 - Shift-C-s / Shift-C-r -> migemo incremental search (if Migemo installed)
 - M-N/M-P -> search Next / Previous
 - C-t -> search dialog

## Some 2 stroke keys follows C-x are represented by Menu2 (C-x C-o, C-x C-f, ...)

 - C-x (exist selected text) -> Cut to buffer
 - C-x (without selected text) -> extend menu ; Ctrl has no effect to second key stroke. 
 - C-x 4 -> Window handling and PrettyPrint
 
## invoke external macro example

 - Every js-files put into external macro dir (default=exe folder), and set External Macro

 |No.|Name|FileName|Key|
 |--|--|--|--|
 |No.0|Open IDLE|doidle.js|M-6|
 |No.1|Gp Line Head(Logical) *1|LogicalLineHead.js|C-a|
 |No.2|Gp Line End(Logical) *1|LogicalLineEnd.js|C-e|
 |No.3|PrettyPrint choosed XML Regeon|PrettyPrintXML.js|C-x 4 x|
 |No.4|Change RW/RO (Toggle)|ToggleReadOnly.js|C-x q|
 |No.5|C-x (Cut or Menu2)|cut_or_menu2.js|C-x|

 *1: Unfortunately select regeon with moving, but this behavior is caused by the editor macro..

- 2025/06/26 initial version
- 2025/06/29 extend with External Macro
- 2025/07/02 update C-x behaviour
