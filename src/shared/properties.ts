import { BaseXML, XMLAttribute, XMLNode } from "./base-xml";

export class CoreProperties extends BaseXML{
    
    properties: {
        [key: string]: string
    } = {};

    constructor() {
        super();
    }


    protected handleOpenTag(node: XMLNode): void {
        let prefixRemoved = node.tag.split(":")[1];

        if (prefixRemoved === "coreProperties") {
            return;
        }

        switch (prefixRemoved) {

        }
        

    }
    protected handleCloseTag(tag: string): void {
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

export class AppProperties extends BaseXML {

    properties: {
        [key: string]: string
    } = {};

    protected handleOpenTag(node: XMLNode): void {
        throw new Error("Method not implemented.");
    }
    protected handleCloseTag(tag: string): void {
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