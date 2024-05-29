import JSZip from "jszip";
import OOXMLCommunicator from "../shared/ooxml-communicator";
import { Workbook } from "./workbook";

export default class XLSX extends OOXMLCommunicator {
  constructor() {
    super();
  }

  async read(data: Buffer, options?: any): Promise<Workbook> {

    const zip = await JSZip.loadAsync(data);
    for (const entry of Object.values(zip.files)) {
      console.log(entry);
    }


    throw new Error("Method not implemented.");
  }

  async write(data: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

