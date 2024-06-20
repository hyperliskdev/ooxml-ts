import { SAXParser } from "sax-ts";

export interface XMLAttribute {
  name: string;
  value: string;
  prefix: string;
  local: string;
  uri: string;
}

export interface XMLNode {
  // The name of the tag.
  tag: string;
  // The list of attributes.
  attributes: { [key: string]: XMLAttribute };

  // The list of namespace properties.
  ns: {
    [key: string]: string;
  };

  // Tag namespace properties
  prefix: string;
  local: string;
  uri: string;

  // If the current tag is self-closing. <tag />
  isSelfClosing: boolean;
}

export abstract class BaseXML {

  public render(): string {
    throw new Error("Method not implemented.");
  }

  public parseXml(xml: string): void {
    const parser = new SAXParser(true, {});
    let current: BaseXML = this;

    parser.onopentag = (node: XMLNode) => {
      current.handleOpenTag(node);
    };
    parser.onclosetag = (tag: string) => {
      current = current.handleCloseTag(tag);
    };
    parser.ontext = (text: string) => {
      current.handleText(text);
    };
    parser.onattribute = (attr: XMLAttribute) => {
      current.handleAttribute(attr);
    };
    parser.onend = () => {
      current.handleEnd();
    };
    parser.write
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
