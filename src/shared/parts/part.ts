import { BaseXML } from "../base-xml";

export abstract class Part extends BaseXML {

    constructor() {
        super();

    }

    render(): string {
        throw new Error("Method not implemented.");
    }
    public parseXml(xml: string): void {
        throw new Error("Method not implemented.");
    }

    
    
}