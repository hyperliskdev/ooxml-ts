import { readFile, readFileSync } from "fs";
import { OOXML } from "..";

describe("Initial test", () => {
  it("Should print to the console", async () => {
    
    let pptx = new OOXML.pptx.PPTX();

    let file = await readFileSync("./tests/test_files/GoldStandardPPTX.pptx");

    // let file = await new Promise<Buffer>((resolve, reject) => {
    //   readFile("./test_files/GoldStandardPPTX.pptx", (err, data) => {
    //     if (err) {
    //       reject(err);
    //     } else {
    //       resolve(data);
    //     }
    //   });
    // });

    pptx.read(Buffer.from(file));

  })
});