import { BaseXML } from "../base-xml";

export abstract class Relationship extends BaseXML {

    private id: string = "";
    private type: string = "";
    private target: string = "";
    private targetMode?: string = "";

    constructor() {
        super();
    }

    render(): string {
        throw new Error("Method not implemented.");
    }

    parseXml(xml: string): void {
        throw new Error("Method not implemented.");
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }

    public setType(type: string): void {
        this.type = type;
    }

    public getType(): string {
        return this.type;
    }

    public setTarget(target: string): void {
        this.target = target;
    }

    public getTarget(): string {
        return this.target;
    }

    public setTargetMode(targetMode: string): void {
        this.targetMode = targetMode;
    }

    public getTargetMode(): string | undefined {
        return this.targetMode;
    }

    public abstract getRelationshipType(): string;

}