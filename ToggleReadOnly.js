// �������݋֎~��Ԃ��g�O������O���}�N��

try {
    // ���݂̏������݋֎~��Ԃ��擾
    // Editor.GetViewMode() �͓ǂݎ���p�̏ꍇ 1 ��Ԃ��܂��B
    var isReadOnly = (Editor.GetViewMode() === 1);

    if (isReadOnly) {
        // ���ݓǂݎ���p�Ȃ�A�������݉\�ɂ���
        Editor.SetViewMode(0); // 0 �͒ʏ탂�[�h�i�������݉\�j
        Editor.MessageBox("�t�@�C���͏������݉\�ɂȂ�܂����B", "�������݋֎~�g�O��", 64); // MB_ICONINFORMATION
    } else {
        // ���ݏ������݉\�Ȃ�A�ǂݎ���p�ɂ���
        Editor.SetViewMode(1); // 1 �͓ǂݎ���p���[�h
        Editor.MessageBox("�t�@�C���͓ǂݎ���p�ɂȂ�܂����B", "�������݋֎~�g�O��", 64); // MB_ICONINFORMATION
    }

} catch (e) {
    Editor.MessageBox("�G���[���������܂���: " + e.message, "�G���[", 16); // MB_ICONERROR
}
