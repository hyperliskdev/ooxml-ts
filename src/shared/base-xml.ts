import { SAXParser } from "sax-ts";

export interface IXML {
  parseXml(xml: string): void;
  render(): string;
}

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

export abstract class BaseXML implements IXML {
  protected parser: SAXParser;

  constructor() {
    this.parser = new SAXParser(true, {
      xmlns: true,
    });

    this.parser.onopentag = this.handleOpenTag.bind(this);
    this.parser.onattribute = this.handleAttribute.bind(this);
    this.parser.ontext = this.handleText.bind(this);
    this.parser.onclosetag = this.handleCloseTag.bind(this);

    this.parser.onend = this.handleEnd.bind(this);
  }
  public render(): string {
    throw new Error("Method not implemented.");
  }

  public parseXml(xml: string): void {
    this.parser.parseString(xml);
  }

  /* Handle reading an open tag. */
  protected abstract handleOpenTag(node: XMLNode): void;

  /* Handle reading a close tag. */
  protected abstract handleCloseTag(tag: string): void;

  /* Handle reading text. */
  protected abstract handleText(text: string): void;

  /* Handle reading an attribute. */
  protected abstract handleAttribute(attr: XMLAttribute): void;

  /* Handle the end of a document. */
  protected abstract handleEnd(): void;
}
