import JSZip from "jszip";

import OOXMLCommunicator from "../shared/ooxml-communicator";
import { PassThrough, Stream } from "stream";
import ContentType from "../shared/content-type";
import Package from "../shared/package";
import Workbook from "./workbook";
import Relationship from "../shared/rels/relationships";

export class PPTX extends OOXMLCommunicator {


  constructor() {
    super();
    this.package = new Workbook();

  }

  async read<Presentation>(data: Buffer): Promise<Presentation> {
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


     
    }
    return {} as Presentation;
  }

  write(): Buffer {
    throw new Error("Method not implemented.");
  }
}
