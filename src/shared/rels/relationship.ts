import { BaseXML } from "../base-xml";

export interface IRelationship {
    id: string;
    type: string;
    target: string;
    targetMode?: string;
}

export abstract class Relationship extends BaseXML {

    // A relationship will be able to search a list of parts to find the target part.

    constructor() {
        super();
    }

    render(): string {
        throw new Error("Method not implemented.");
    }

    

}