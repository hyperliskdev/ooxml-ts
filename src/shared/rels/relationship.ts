import { BaseXML } from "../base-xml";
import { Part } from "../parts/part";

export default class Relationship {

    private id: string = "";
    private type: string = "";
    private target!: string;
    private targetMode?: string = "";

    constructor() {

    }

    render(): string {
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

}