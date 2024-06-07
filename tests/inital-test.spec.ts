import { readFile, readFileSync } from "fs";
import { OOXML } from "..";

describe("Initial test", () => {
  it("Should print to the console", async () => {
    
    let pptx = new OOXML.pptx.PPTX();

    let file = await readFileSync("./tests/test_files/GoldStandardPPTX.pptx");
    let presentation = await pptx.read(Buffer.from(file));
    
    console.log(presentation);

  })
});