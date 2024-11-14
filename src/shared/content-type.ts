import { BaseXML, XMLAttribute, XMLNode } from "./base-xml";

class Override {
  // The part name of the override.
  public partName: string;
  // The content type of the override.
  public contentType: string;

  constructor() {
    this.partName = "";
    this.contentType = "";
  }
}

class Default {
  // The extension of the default content type.
  public extension: string;
  // The content type of the default content type.
  public contentType: string;

  constructor() {
    this.extension = "";
    this.contentType = "";
  }
}

/**
 * The content type of every described XML file exists here in `/[Content_Types].xml`.
 * Each entry in the <Types> ... </Types> element is a <Default> or <Override> element.
 *
 * Default specifies an extension and the default content type if one of the overrides cannot be reached.
 *  - Example: `<Default Extension="xml" ContentType="application/xml" />`
 *
 * Override specifies a specific content type for a specific part.
 * - Example: `<Override PartName="/word/fontTable.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml"/>`
 *
 */
export default class ContentType extends BaseXML {
  
  // The default content type for the XML files.
  public default: Default[] = [];
  // A list of all the overrides.
  public overrides: Override[] = [];

  constructor() {
    super();
  }

  protected handleOpenTag(node: XMLNode): void {
    switch (node.name) {

      case "Default":
        let def = new Default();
        def.extension = node.attributes.Extension;
        def.contentType = node.attributes.ContentType;
        this.default.push(def);
        break;
      case "Override":
        let over = new Override();
        over.partName = node.attributes.PartName;
        over.contentType = node.attributes.ContentType;
        this.overrides.push(over);
        break;

      case "Types":
        break;


    }
  }
  protected handleCloseTag(tag: string): BaseXML {
    return this;
  }
  protected handleText(text: string): void {
    return;
  }
  protected handleAttribute(attr: XMLAttribute): void {
    return;    
  }
  protected handleEnd(): void {
    console.log("End");
  }

}
