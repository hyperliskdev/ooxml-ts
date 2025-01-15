import { BaseXML, XMLAttribute, XMLNode } from "../base-xml";
import Relationship from "./relationship";

export default class Relationships extends BaseXML {

    private relationships: Relationship[] = [];

    constructor() {
        super();
    }


    protected handleOpenTag(node: XMLNode): void {
        
        switch (node.name) {
            case "Relationship":
                const relationship = new Relationship();
                relationship.setId(node.attributes.Id);
                relationship.setType(node.attributes.Type);
                relationship.setTarget(node.attributes.Target);
                this.relationships.push(relationship);
                break;
            case "Relationships":
                
                break;
            default:
                throw new Error("Invalid tag");
        }
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