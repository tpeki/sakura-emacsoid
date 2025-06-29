// XML���v���e�B�v�����g����O���}�N��

try {
    // ���ݕҏW���̃e�L�X�g���擾
    var originalXml = Editor.GetSelectedString();
    if (originalXml === "") {
        originalXml = Editor.GetText();
    }

    if (originalXml === "") {
        Editor.MessageBox("���`����XML������܂���B", "�G���[", 16); // MB_ICONERROR
        return;
    }

    // ActiveXObject���g����DOMDocument��XMLSerializer���쐬
    var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
    xmlDoc.async = false;
    xmlDoc.loadXML(originalXml);

    // �G���[�`�F�b�N
    if (xmlDoc.parseError.errorCode !== 0) {
        var errorMessage = "XML�̉�̓G���[:\n";
        errorMessage += "�R�[�h: " + xmlDoc.parseError.errorCode + "\n";
        errorMessage += "�s: " + xmlDoc.parseError.line + "\n";
        errorMessage += "�ʒu: " + xmlDoc.parseError.linepos + "\n";
        errorMessage += "���R: " + xmlDoc.parseError.reason;
        Editor.MessageBox(errorMessage, "XML��̓G���[", 16); // MB_ICONERROR
        return;
    }

    // ���`�I�v�V�����̐ݒ� (�����ł̓C���f���g�ɃX�y�[�X4���g�p)
    // MSXML��XMLSerializer�́A�C���f���g�̒��ړI�ȃI�v�V������񋟂��Ȃ�����
    // ��ʓI��XMLSerializer�Ƃ͈قȂ�A���ړI��Pretty Print�͍s���܂���B
    // ���̂��߁A�蓮�Ő��`���邩�A�����Ƌ��͂ȃ��C�u�������g���K�v������܂��B
    // �����ł́ADOMDocument��xml�v���p�e�B�������I�ɐ��`�����݂邱�Ƃ����҂��܂��B
    // ���S�ɃJ�X�^�}�C�Y���ꂽ���`���K�v�ȏꍇ�́A���O�Ńp�[�X���ĕ������g�ݗ��Ă�K�v������܂��B

    // Msxml2.DOMDocument��.xml�v���p�e�B�́A������x�̐��`���s��
    var prettyXml = xmlDoc.xml;

    // ���`���XML���G�f�B�^�ɐݒ�
    Editor.SetText(prettyXml);

    Editor.MessageBox("XML�̐��`���������܂����B", "����", 64); // MB_ICONINFORMATION

} catch (e) {
    Editor.MessageBox("�G���[���������܂���: " + e.message, "�G���[", 16); // MB_ICONERROR
}
