/**
 * OOXML Package
 * 
 * Any of the three file types are represented as a series of related parts. that are stored inside this container called a package.
 * A package is an ordinary zip archive that contains the content-type, relationship items and parts.
 * 
 * 
 */

import JSZip from "jszip";
import { Relationship } from "./rels/relationship";
import { Part } from "./parts/part";
import { AppProperties, CoreProperties } from "./properties";
import ContentType from "./content-type";


export default abstract class Package {


    protected parts: Part[] = [];
    protected relationships: Relationship[] = [];
    protected coreProperties: CoreProperties = new CoreProperties();
    protected appProperties: AppProperties = new AppProperties();
    protected contentType: ContentType = new ContentType();
    // private trash: TrashItem[] = [];

    // 
    private zip: JSZip = new JSZip();

    constructor() {
        
    }


    /**
     * @param contentType - The content type to set
     * 
     * Sets the content type of the package.
     * 
     */
    public setContentType(contentType: ContentType): void {
        this.contentType = contentType;
    }

    /**
     * @param part - The part to add to the package
     * 
     * Adds a part to the package.
    */
    public addPart(part: Part): void {
        this.parts.push(part);
    }

    /**
     * @param relationship - The relationship to add to the package
     *  
     * Adds a relationship to the package.
    */
    public addRelationship(relationship: Relationship): void {
        this.relationships.push(relationship);
    }

    /**
     * @param partName - The name of the part to retrieve
     * @returns The part with the given name
     * 
     * If a part cannot be found, an error is thrown.
     */
    public getPart(partName: string): Part {
        const part = this.parts.find(part => part.getPartName() === partName);
        if (!part) {
            throw new Error(`Part with name ${partName} not found`);
        }
        return part;
    }

    /**
     * @returns The parts in the package
     * 
     * Returns all the parts in the package.
    */
    public getParts(): Part[] {
        return this.parts;
    }

    /**
     * @param relationshipId - The id of the relationship to retrieve
     * @returns The relationship with the given id
     * 
     * If a relationship cannot be found, an error is thrown.
     */
    public getRelationship(relationshipId: string): Relationship {
        const relationship = this.relationships.find(relationship => relationship.getId() === relationshipId);
        if (!relationship) {
            throw new Error(`Relationship with id ${relationshipId} not found`);
        }
        return relationship;
    };

    /**
     * @returns The relationships in the package
     * 
     * Returns all the relationships in the package.
    */
    public getRelationships(): Relationship[] {
        return this.relationships;
    }


    // /**
    //  *
    //  * @param sourceId - The id of the part looking for a related part 
    //  * 
    // */
    // public findExplicitlyRelatedPart(sourceId: string): Part {
        
    // }

    // /**
    //  * 
    //  * @param sourcePart - The part looking for some data in a related part
    //  * @param relationship - The relationship that connects the source part to the target part
    //  * @returns The target part
    //  * 
    //  * This method is used to find a related part based on a relationship.
    //  * 
    //  * The relationship can be either explicit or implicit. All relationships are implicit unless otherwise specified.
    //  * 
    //  * In an implicit relationship, the identifier of the source refers to a specific element with that same id in the target part.
    //  * While in explicit relationships, the id refers to a relationship that connects the source to the target.
    //  * 
    //  * The method will return the target part if it is found, otherwise it will throw an error.
    //  */
    // public findImplicitlyRelatedPart(sourcePart: Part, relationship: Relationship): Part {


    // }

}