import { readFileSync } from "fs";
import * as OOXML from '../src/index';

describe("Initial test", () => {
  it("Should print to the console", async () => {

    const data = readFileSync("tests/test_files/Seized Device Filesystem Info.xlsx");

    // Create an XLSX object
    const xlsx = new OOXML.xlsx.XLSX();

    // Read the file data into the xlsx object
    const wb = await xlsx.read(data);

    // Do cool excel stuff with the workbook object

    // Get the sheet
    // const sheet = wb.getSheet("Sheet1");
    // console.log(sheet);

    // Get the cell
    // const cell = sheet.getCell("A1");
    // console.log(cell);

    // Get the value of the cell
    // console.log(cell.value);

    // Set the value of the cell
    // cell.value = "Hello, world!";

    
    // Write to the changes back to the file

    // let buffer = xlsx.write(wb, "tests/test_files/Risk Register - Construction.xlsx");

    // Write the buffer to the file
    // writeFileSync("tests/test_files/Risk Register - Construction.xlsx", buffer);

  })
});