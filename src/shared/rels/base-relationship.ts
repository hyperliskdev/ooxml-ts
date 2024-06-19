import { BaseXML } from "../base-xml";

export interface IRelationship {
    id: string;
    type: string;
    target: string;
    targetMode?: string;
}

export abstract class BaseRelationship extends BaseXML {

    relationship: IRelationship;


    constructor() {
        super();

        
    }

    render(): string {
        throw new Error("Method not implemented.");
    }
}