import Package from "../shared/package";

/** 
 * The Workbook class represents the root of the document.
 * 
 * Functionally, the Workbook works basically like this:
 * - It contains a list of worksheets, tables, and other objects.
 * - To get the data for a specific cell, it is either embedded in the <sheetData> tag or the sheetdata references a tag in the shared strings table.
 * - The shared string table is a separate part of the workbook that contains one instance of each unique string in the workbook.
 * 
 * For tables, the data is not stored in the tableN.xml file, but in the sheetdataN.xml file.
 * 
*/

class Workbook extends Package {
  constructor() {
    super();
  }
}


export default Workbook;