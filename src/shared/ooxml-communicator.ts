import Package from "./package";
import BasePart from "./parts/base-part";
import BaseRelationship from "./rels/base-relationship";


export default abstract class OOXMLCommunicator {
    constructor() {
        console.log("OOXMLCommunicator constructor");
    }

    render(): Buffer {

        throw new Error("Method not implemented.");

    };

    abstract read<T extends Package>(data: Buffer):  Promise<T>;

    abstract write(): Buffer; 

}