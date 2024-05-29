import JSZip from "jszip";

import OOXMLCommunicator from "../shared/ooxml-communicator";
import { PassThrough, Stream } from "stream";
import ContentType from "../shared/content-type";

export class PPTX extends OOXMLCommunicator {
  constructor() {
    super();
    console.log("PPTX constructor");
  }

  async read<Presentation>(data: Buffer): Promise<Presentation> {
    // Form the zip object from the file buffer
    const zip = await JSZip.loadAsync(data);

    for (const entry of Object.values(zip.files)) {
      let entryName;

      let stream = new PassThrough({
        readableObjectMode: true,
        writableObjectMode: true,
      });

      if (!entry.dir) {
        entryName = entry.name;

        if (entryName.substring(0, 1) === "/") {
          entryName = entryName.substring(1);
        }

        console.log(entryName);

        let content = await entry.async("string");

        const chunkSize = 16 * 1024;
        for (let i = 0; i < content.length; i += chunkSize) {
          stream.write(content.slice(i, i + chunkSize));
        }

        
      } else {
        // If the entry is a directory, skip it and return to the beginning of the loop.
        continue;
      }

      stream.end();

      // Switch statement to determine the type of entry
      switch (entryName) {
        // Content Types file.
        case "[Content_Types].xml": {
          break;
        }
        default: {
          break;
        }
      }
    }
    throw new Error("Method not implemented.");
  }

  write(): Buffer {
    throw new Error("Method not implemented.");
  }
}
