import OOXMLCommunicator from "../shared/ooxml-communicator";
import { Presentation } from "./presentation";

export default class PPTX extends OOXMLCommunicator {
  constructor() {
    super();
  }

  async read(data: Buffer, options?: any): Promise<Presentation> {
    throw new Error("Method not implemented.");
  }
  
  async write(data: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
