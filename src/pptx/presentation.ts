import ContentType from "../shared/content-type";
import Package from "../shared/package";
import BasePart from "../shared/parts/base-part";
import BaseRelationship from "../shared/rels/base-relationship";

export class Presentation implements Package {
    contentType: ContentType;
    
    constructor() {
        console.log("Presentation constructor");
        this.contentType = new ContentType();
    }
    relationships<T extends BaseRelationship>(): T[] {
        throw new Error("Method not implemented.");
    }
    parts<T extends BasePart>(): T[] {
        throw new Error("Method not implemented.");
    }

}