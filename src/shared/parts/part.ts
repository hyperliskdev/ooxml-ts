import { BaseXML, XMLAttribute } from "../base-xml";

export abstract class Part extends BaseXML {

    private attributes: XMLAttribute[] = [];
    private text: string = "";
    private children: Part[] = [];
    private parent: Part | null = null;
    
    private fileName: string = "";

    constructor() {
        super();
    }

    public render(): string {
        throw new Error("Method not implemented.");
    }
    public parseXml(xml: string): void {
        throw new Error("Method not implemented.");
    }

    public addAttribute(attribute: XMLAttribute): void {
        this.attributes.push(attribute);
    }

    public getAttributes(): XMLAttribute[] {
        return this.attributes;
    }

    public setText(text: string): void {
        this.text = text;
    }

    public getText(): string {
        return this.text;
    }

    public addChild(child: Part): void {
        this.children.push(child);
    }

    public getChildren(): Part[] {
        return this.children;
    }

    public setParent(parent: Part): void {
        this.parent = parent;
    }

    public getParent(): Part | null {
        return this.parent;
    }

    public setPartName(name: string): void {
        this.fileName = name;
    }

    public getPartName(): string {
        return this.fileName;
    }


    
    
}