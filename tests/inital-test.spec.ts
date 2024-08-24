import { readFileSync } from "fs";
import { OOXML } from "../dist/index";


describe("Initial test", () => {
  it("Should print to the console", async () => {
    
    console.log("Hello, World!");

    const thing = new OOXML.xlsx();
  })
});