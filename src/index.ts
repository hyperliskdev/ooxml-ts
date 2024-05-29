import OOXMLCommunicator from "./shared/ooxml-communicator";
import Workbook from "./xlsx/workbook";

export class XLSX extends OOXMLCommunicator {
    workbook: Workbook;

    constructor() {
        super();

        this.workbook = new Workbook();

    }

    read(data: Buffer, options?: any) {
        throw new Error("Method not implemented.");
    }
    write(data: any): void {
        throw new Error("Method not implemented.");
    }
};


export class PPTX extends OOXMLCommunicator {

    constructor() {
        super();
    }

    read(data: Buffer, options?: any) {
        throw new Error("Method not implemented.");
    }
    write(data: any): void {
        throw new Error("Method not implemented.");
    }
}

export class DOCX extends OOXMLCommunicator {

    constructor() {
        super();
    }

    read(data: Buffer, options?: any) {
        throw new Error("Method not implemented.");
    }
    write(data: any): void {
        throw new Error("Method not implemented.");
    }
}
