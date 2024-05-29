class Override {
  // The part name of the override.
  partName: string;
  // The content type of the override.
  contentType: string;

  constructor() {
    this.partName = "";
    this.contentType = "";
  }
}

class Default {
  // The extension of the default content type.
  extension: string;
  // The content type of the default content type.
  contentType: string;

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
export default class ContentType {
  // The default content type for the XML files.
  default: Default[] = [];
  // A list of all the overrides.
  overrides: Override[] = [];

  parse(): void {
    // Parse the content type file.
    
  }
}
