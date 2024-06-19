import { BaseXML } from "../base-xml";
import Relationship from "./relationship";

export default class Relationships extends BaseXML {

  constructor(xml: string) {
    super();
    this.parseXml(xml);
  }

  
  protected handleOpenTag(tag: string, attrs: { [key: string]: string; }): void {
    throw new Error("Method not implemented.");
  }
  protected handleCloseTag(tag: string): void {
    throw new Error("Method not implemented.");
  }
  protected handleText(text: string): void {
    throw new Error("Method not implemented.");
  }
  protected handleAttribute(attr: { name: string; value: string; }): void {
    throw new Error("Method not implemented.");
  }
  protected handleEnd(): void {
    throw new Error("Method not implemented.");
  }

}
