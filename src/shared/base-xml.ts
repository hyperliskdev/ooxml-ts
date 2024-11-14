import { SAXParser } from "sax-ts";

// Interface for sax-ts attributes.
export interface XMLAttribute {
  // The name of the attribute.
  name: string;

  // The value of the attribute.
  value: string;
}

// Interface for sax-ts nodes.
export interface XMLNode {
  // The name of the tag.
  name: string;
  // The attributes of the tag.
  attributes: { [key: string]: string };
}

export abstract class BaseXML {

  public render(): string {
    throw new Error("Method not implemented.");
  }

  public parseXml(xml: string): void {
    const parser = new SAXParser(true, {});
    let current = this;


    parser.onopentag = (node: any) => {

      current.handleOpenTag(node);
    };
    parser.onclosetag = (tag: string) => {
      current = current.handleCloseTag(tag) as this;
    };
    parser.ontext = (text: string) => {
      current.handleText(text);
    };
    parser.onattribute = (attr: any) => {
      current.handleAttribute(attr);
    };
    parser.onend = () => {
      current.handleEnd();
    };

    parser.write(xml).close();

  }

  /* Handle reading an open tag. */
  protected abstract handleOpenTag(node: XMLNode): void;

  /* Handle reading a close tag. */
  protected abstract handleCloseTag(tag: string): BaseXML;

  /* Handle reading text. */
  protected abstract handleText(text: string): void;

  /* Handle reading an attribute. */
  protected abstract handleAttribute(attr: XMLAttribute): void;

  /* Handle the end of a document. */
  protected abstract handleEnd(): void;
}
