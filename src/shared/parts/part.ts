import { BaseXML, XMLAttribute, XMLNode } from "../base-xml";

export abstract class Part extends BaseXML {

    constructor() {
        super();
    }

    // Create each new part based on the root node.
    protected handleOpenTag(node: XMLNode): void {
        throw new Error("Method not implemented.");
    }
    protected handleCloseTag(tag: string): BaseXML {
        throw new Error("Method not implemented.");
    }
    protected handleText(text: string): void {
        throw new Error("Method not implemented.");
    }
    protected handleAttribute(attr: XMLAttribute): void {
        throw new Error("Method not implemented.");
    }
    protected handleEnd(): void {
        throw new Error("Method not implemented.");
    }
}