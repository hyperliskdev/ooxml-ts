/**
 * BaseRelationship
 * 
 * A relationship is a reference from parts to other internal or external resources. These references can be to items inside the package (internal) or
 * to items like links, files or other resources outside the package (external).
 * 
 * Id, Type, Target and sometimes TargetMode.
 * 
 * Id - A unique identifier for the relationship. It is unique within the relationship collection of the package.
 * Type - The type of the relationship. It is a URI that identifies the type of relationship. (Some schema type)
 * Target - The target of the relationship. It is a URI that identifies the target of the relationship.
 * TargetMode - The target mode of the relationship. It is an ?optional? attribute that specifies whether the target is internal or external to the package.
 */
export default abstract class BaseRelationship {

    id: number;
    type: string;
    target: string;
    targetMode: "Internal" | "External";

    constructor() {
        console.log("BaseRelationship constructor");

        this.id = 0;
        this.type = "";
        this.target = "";
        this.targetMode = "Internal";
    }
}