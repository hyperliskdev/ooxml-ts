import OOXMLCommunicator from "../shared/ooxml-communicator";
import { Document } from "./document";

export default class DOCX extends OOXMLCommunicator {
  constructor() {
    super();
  }

  async read(data: Buffer, options?: any): Promise<Document> {
    throw new Error("Method not implemented.");
  }
  
  async write(data: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
