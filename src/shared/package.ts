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
import BaseRelationship from "./rels/base-relationship";


export default interface Package {
    contentType: ContentType;
    relationships<T extends BaseRelationship>(): T[];
    parts<T extends BasePart>(): T[];
}