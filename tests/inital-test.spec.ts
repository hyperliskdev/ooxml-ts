import { readFileSync } from "fs";
import Workbook from '../src/xlsx/workbook';
import * as OOXML from '../src/index';

describe("Initial test", () => {
  it("Should print to the console", async () => {
    
    const workbook = new Workbook();
    const data = readFileSync('tests/test-data/test.xlsx');
    OOXML.xlsx.XLSX(workbook).read(data);

  })
});