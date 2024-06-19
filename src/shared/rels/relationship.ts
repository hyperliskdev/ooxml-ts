import { BaseXML } from "../base-xml";


export default class Relationship {
    id: string = "";
    type: string = "";
    target: string = "";
    targetMode?: string;
    
    constructor(attrs: { [key: string]: string }) {
        this.id = attrs.Id;
        this.type = attrs.Type;
        this.target = attrs.Target;

        if (attrs.TargetMode) {
            this.targetMode = attrs.TargetMode;
        }
    }
    
    render(): string {
        if (this.targetMode) {
            return `<Relationship Id="${this.id}" Type="${this.type}" Target="${this.target}" TargetMode="${this.targetMode}" />`;
        } else {
            return `<Relationship Id="${this.id}" Type="${this.type}" Target="${this.target}" />`;
        }
    }
}