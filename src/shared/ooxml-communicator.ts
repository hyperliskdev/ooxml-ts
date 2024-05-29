import Package from "./package";
import BasePart from "./parts/base-part";
import BaseRelationship from "./rels/base-relationship";


export default abstract class OOXMLCommunicator {
    constructor() {
        console.log("OOXMLCommunicator constructor");
    }

    abstract read<T extends Promise<P>, P extends Package>(data: Buffer):  T;

    abstract write(): Buffer; 

}