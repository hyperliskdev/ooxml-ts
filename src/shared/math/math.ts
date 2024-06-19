import { SAXParser } from "sax-ts";
import { BaseXML } from "../base-xml";

export class Math extends BaseXML {
    protected xml: string = "";

    constructor() {
        super();
        
    }
    
    render(): string {
        throw new Error("Method not implemented.");
    }
    public parseXml(xml: string): void {
        throw new Error("Method not implemented.");
    }
    protected handleOpenTag(tag: string, attrs: { [key: string]: string; }): void {
        throw new Error("Method not implemented.");
    }
    protected handleCloseTag(tag: string): void {
        throw new Error("Method not implemented.");
    }
    protected handleText(text: string): void {
        throw new Error("Method not implemented.");
    }
    protected handleAttribute(attr: { name: string; value: string; }): void {
        throw new Error("Method not implemented.");
    }
    protected handleEnd(): void {
        throw new Error("Method not implemented.");
    }
    
}