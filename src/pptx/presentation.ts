import ContentType from "../shared/content-type";
import Package from "../shared/package";
import BasePart from "../shared/parts/base-part";
import Relationships from "../shared/rels/relationships";

export class Presentation implements Package {
  contentType: ContentType;
  parts: BasePart[] = [];
  relationships: Relationships = new Relationships("");

  constructor() {
    this.contentType = new ContentType();
  }

  initContentType(contentType: ContentType): void {
    this.contentType = contentType;
  }
}
