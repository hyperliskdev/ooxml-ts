import OOXMLCommunicator from "../shared/ooxml-communicator";
import { Presentation } from "./presentation";


export class PPTX extends OOXMLCommunicator {  
  constructor() {
    super();
    console.log("PPTX constructor");
  }

  read<T extends Promise<Presentation>>(data: Buffer): T {
    throw new Error("Method not implemented.");
  }
  write(): Buffer {
    throw new Error("Method not implemented.");
  }
}