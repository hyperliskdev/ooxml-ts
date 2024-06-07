import { SAXParser } from "sax-ts";
import { PassThrough } from "stream";

const relParser = new SAXParser(false, {
  xmlns: true,
  position: true,
});

export default class Relationship {
  id: string = "";
  type: string = "";
  target: string = "";
  targetMode?: string = "";

  constructor() {};

  parse(stream: PassThrough) {

    let relationship: Relationship;

    relParser.on("opentag", (node: any) => {
      if (node.name === "Relationship") {
        relationship = new Relationship();
        relationship.id = node.attributes.Id;
        relationship.type = node.attributes.Type;
        relationship.target = node.attributes.Target;
        relationship.targetMode = node.attributes.TargetMode;
      }
    });

    stream.on("data", (chunk: Buffer) => {
      relParser.write(chunk.toString());
    });

    stream.on("end", () => {
      relParser.close();
      return relationship;
    });

  }
}
