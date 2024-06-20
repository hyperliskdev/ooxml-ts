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


    private parts: Part[] = [];
    private relationships: Relationship[] = [];
    private coreProperties: CoreProperties = new CoreProperties();
    private appProperties: AppProperties = new AppProperties();
    private contentType: ContentType = new ContentType();
    // private trash: TrashItem[] = [];

    // private zip: JSZip;

    public addPart(part: Part): void {
        this.parts.push(part);
    }
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
    public getParts(): Part[] {
        return this.parts;
    }

    public getRelationship(relationshipId: string): Relationship {
        const relationship = this.relationships.find(relationship => relationship.getId() === relationshipId);
        if (!relationship) {
            throw new Error(`Relationship with id ${relationshipId} not found`);
        }
        return relationship;
    };
    public getRelationships(): Relationship[] {
        return this.relationships;
    }

    /**
     * 
     * @param sourcePart - The part looking for some data in a related part
     * @param relationship - The relationship that connects the source part to the target part
     * @returns The target part
     * 
     * There are two different types of relationships: Explicit and Implicit.
     * - Implicit relationships: `sourcePart.someIdentifier` == `targetPart.someIdentifier`. To find the location of `targetPart` we use the type of the source part.
     * - Explicit relationships: `sourcePart.rId === relationship.Id`. To find the location of `targetPart` we use the relationship. 
     * 
     */
    public findRelatedPart(sourcePart: Part, relationship: Relationship, isImplicit: boolean): Part {
        let targetPart: Part;

        if (isImplicit) {
            targetPart = this.parts.find(part => part.getPartName() === sourcePart.getPartName());
        } else {

        }
        

    }
}