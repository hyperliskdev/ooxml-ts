import Package from "../shared/package";
import BasePart from "../shared/parts/base-part";
import BaseRelationship from "../shared/rels/base-relationship";

export class Presentation extends Package<BaseRelationship, BasePart>{
    constructor() {
        super();
        console.log("Presentation constructor");
    }

    parse(): void {
        throw new Error("Method not implemented.");
    }
}