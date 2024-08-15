import { BaseXML, XMLAttribute, XMLNode } from "../base-xml";
import { Relationship } from "./relationship";

export class Relationships extends BaseXML {

  private rels: Relationship[] = [];
  constructor() {
    super();
  }

  protected handleOpenTag(node: XMLNode): void {
    switch (node.tag) {
      case "Relationship": {
        let rel = new Relationship();
      }
    }
  }
  protected handleCloseTag(tag: string): BaseXML {
    throw new Error("Method not implemented.");
  }
  protected handleText(text: string): void {
    throw new Error("Method not implemented.");
  }
  protected handleAttribute(attr: XMLAttribute): void {
    throw new Error("Method not implemented.");
  }
  protected handleEnd(): void {
    throw new Error("Method not implemented.");
  }
  render(): string {
    throw new Error("Method not implemented.");
  }

  public push(relationship: Relationship): void {
    this.rels.push(relationship);
  }

  public getRels(): Relationship[] {
    return this.rels;
  }

  public getRelById(id: string): Relationship {
    const rel = this.rels.find((rel) => rel.getId() === id);
    if (!rel) {
      throw new Error(`Relationship with id ${id} not found`);
    }
    return rel;
  }

  public getRelByType(type: string): Relationship {
    const rel = this.rels.find((rel) => rel.getType() === type);
    if (!rel) {
      throw new Error(`Relationship with type ${type} not found`);
    }
    return rel;
  }

  public getRelByTarget(target: string): Relationship {
    const rel = this.rels.find((rel) => rel.getTarget() === target);
    if (!rel) {
      throw new Error(`Relationship with target ${target} not found`);
    }
    return rel;
  }
}
