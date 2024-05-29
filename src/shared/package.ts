


/**
 * OOXML Package
 * 
 * Any of the three file types are represented as a series of related parts. that are stored inside this container called a package.
 * A package is an ordinary zip archive that contains the content-type, relationship items and parts.
 * 
 * 
 */

import BasePart from "./parts/base-part";
import BaseRelationship from "./rels/base-relationship";


export default abstract class Package<R extends BaseRelationship, P extends BasePart> {

    // Content Type
    contentType: string;

    // A list of all relationships in the package.
    relationships: R[];

    // A list of all the parts in the package.
    parts: P[];

    constructor() {
        console.log("Package constructor");

        this.contentType = "";
        this.relationships = [];
        this.parts = [];
    }

    abstract parse(): void;
    

}