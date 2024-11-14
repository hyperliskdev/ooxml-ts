import JSZip from "jszip";

import OOXMLCommunicator from "../shared/ooxml-communicator";
import ContentType from "../shared/content-type";
import Workbook from "./workbook";

/**
 * The XLSX class is used to read and write XLSX files.
 * 
 * @extends OOXMLCommunicator
 */
export class XLSX extends OOXMLCommunicator {
  
  constructor() {
    super();
    this.package = new Workbook();
  }

  /** 
  * @param data - The file buffer to read
  *
  * Reads the file buffer and returns a workbook object.
  * 
  * @returns A workbook object
  */
  async read<Workbook>(data: Buffer): Promise<Workbook> {

    // Form the zip object from the file buffer
    const zip = await JSZip.loadAsync(new Uint8Array(data));

    // Sort the zip entries object from most shallow to most deep.
    // Put [Content_Types].xml first, then _rels/.rels, then docProps/app.xml, then docProps/core.xml
    // Then all the rest of the files.
    const sortedEntries = Object.values(zip.files).sort((a, b) => {
      if (a.dir && !b.dir) {
        return -1;
      } else if (!a.dir && b.dir) {
        return 1;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    for (const entry of sortedEntries) {
      let entryName;
      if (!entry.dir) {
        entryName = entry.name;
        if (entryName.substring(0, 1) === "/") {
          entryName = entryName.substring(1);
        }
      } else {
        // If the entry is a directory, skip it and return to the beginning of the loop.
        continue;
      }

      
      
      let content = await entry.async("string");
      // Add entries to the package
      this.pushEntry(entryName, content);

      // Switch-case the entry name and handle the content accordingly
      switch (entryName) {
        // Content-Type item
        case "[Content_Types].xml": {
          const contentType = new ContentType();
          contentType.parseXml(content);
        }

        // Package Relationships
        case "_rels/.rels": {
          break;
        }

        // Application-Defined File Properties Part
        case "docProps/app.xml": {
        }

        // Core File Properties Part
        case "docProps/core.xml": {

        }

        default: {
          if (entryName.endsWith(".xml")) {
            // Handle Part files
            

          }

          if (entryName.endsWith(".rels")) {
            // Handle Relationship files
          }
        }
        
      }
    }
    return this.package as Workbook;
  }

  /**
   * @param wb - The workbook object to write
   * 
   * After making changes using the workbook object, turn the object back into a buffer.
   * 
   * @returns A buffer of the changes made to the file.
  */ 
  async write(wb: Workbook): Promise<Buffer> {
    throw new Error("Method not implemented.");
  }
}
