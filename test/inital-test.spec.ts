import Workbook from '../src/xlsx/workbook';
import * as OOXML from '../src/index';
import { readFile } from "fs/promises";


describe("Initial test", () => {
  it("Should print to the console", async () => {

    const wb = new Workbook();
    const xlsx = new OOXML.xlsx.XLSX(wb);

    const buffer = await readFile("./tests/test-files/test_file.xlsx");

    let data = Buffer.from(buffer);

    const workbook = await xlsx.read(data);

    console.log(workbook);
  })
});