import JSZip from "jszip";

import OOXMLCommunicator from "../shared/ooxml-communicator";
import ContentType from "../shared/content-type";
import Workbook from "./workbook";

export class XLSX extends OOXMLCommunicator {
  
  constructor() {
    super();
    this.package = new Workbook();
  }

  async read<Workbook>(data: Buffer): Promise<Workbook> {
    // Form the zip object from the file buffer
    const zip = await JSZip.loadAsync(data);

    // Sort the zip entries object from most shallow to most deep. And then alphabetically
    // This is to ensure that the content types file is read first.
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

        // 
        case "xl/workbook.xml": {
        }

        case "xl/_rels/workbook.xml.rels": {
        }

        case "xl/calcChain.xml": {
        }

        case "xl/sharedStrings.xml": {
        }

        case "xl/styles.xml": {
        }

        case "xl/theme/theme1.xml": {
        }

        case "xl/volatileDependencies.xml": {
        }

        default: {
          console.log("Unhandled entry: ", entryName);
        }
      }
    }
    return {} as Workbook;
  }

  write(): Buffer {
    throw new Error("Method not implemented.");
  }
}
