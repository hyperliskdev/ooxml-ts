import { BaseXML } from "./base-xml";

export abstract class BaseRelationship extends BaseXML {
    constructor() {
        super();
    }

    render(): string {
        throw new Error("Method not implemented.");
    }
}