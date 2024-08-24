import JSZip from "jszip";

import { OOXMLCommunicator } from "../shared/ooxml-communicator";
import Workbook from "./workbook";

export class XLSX extends OOXMLCommunicator {

  // When creating a new XLSX file, create a blank workbook object.
  // This object will be filled with the data from the file.
  constructor() {
    super();
    this.package = new Workbook();
  }

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
        this.pushEntry(entryName);
        if (entryName.substring(0, 1) === "/") {
          entryName = entryName.substring(1);
        }
      } else {
        // If the entry is a directory, skip it and return to the beginning of the loop.
        continue;
      }

      let content = await entry.async("string");
      console.log(entryName);
      // Switch-case the entry name and handle the content accordingly
      switch (entryName) {
        // Content-Type item
        case "[Content_Types].xml": {
          break;
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
      }
    }
    return {} as Workbook;
  }

  async write(): Promise<Buffer> {
    throw new Error("Method not implemented.");
  }
}
