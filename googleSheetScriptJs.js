function listSheets() {

    var activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
    var active = activeSpreadSheet.getActiveSheet()
    var cell = activeSpreadSheet.getActiveCell()
    var sheets = activeSpreadSheet.getSheets()
        .map(
            function (i) {
                if (i.getIndex())
                    return i.getName()
            });
    var count = index = cell.getColumn()
    for (sheet of sheets) {
        active.getRange(cell.getRowIndex(), count * 1 + 1).setValue(sheet);
        count++
    }

}
