import { readFileSync } from "fs";
import Workbook from '../src/xlsx/workbook';
import * as OOXML from '../src/index';

describe("Initial test", () => {
  it("Should print to the console", async () => {

    const data = readFileSync("tests/test_files/Risk Register - Construction.xlsx");

    // Create an XLSX object
    const xlsx = new OOXML.xlsx.XLSX();

    // Read the file data into the xlsx object
    const wb = await xlsx.read(data);

    console.log(xlsx);


  })
});