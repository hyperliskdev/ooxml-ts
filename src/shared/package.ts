/**
 * OOXML Package
 * 
 * Any of the three file types are represented as a series of related parts. that are stored inside this container called a package.
 * A package is an ordinary zip archive that contains the content-type, relationship items and parts.
 * 
 * 
 */

import ContentType from "./content-type";
import BasePart from "./parts/base-part";
import BaseRelationship from "./rels/relationship";

export default abstract class Package {
    abstract contentType: ContentType;
    abstract parts: BasePart[];
    abstract relationships: BaseRelationship[];

    constructor() {}

    abstract addParts<T extends BasePart>(part: T): void;
    abstract addRelationships<T extends BaseRelationship>(rel: T): void;

    initContentType(contentType: ContentType): void {
        this.contentType = contentType;
    };
}