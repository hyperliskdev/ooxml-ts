/**
 * OOXML Package
 * 
 * Any of the three file types are represented as a series of related parts. that are stored inside this container called a package.
 * A package is an ordinary zip archive that contains the content-type, relationship items and parts.
 * 
 * 
 */

import { BasePart } from "./base-part";
import { BaseRelationship } from "./base-relationship";
import { CoreProperties } from "./core-props";

export default abstract class Package {

    // A list of objects that extend the BasePart class
    protected parts: BasePart[] = [];
    protected relationships: BaseRelationship[] = [];
    
    protected coreProperties: CoreProperties = new CoreProperties();
    protected appProperties: AppProperties = new AppProperties();

    constructor() {
        
        
    }

}