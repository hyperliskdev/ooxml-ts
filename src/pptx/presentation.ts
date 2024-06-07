import ContentType from "../shared/content-type";
import Package from "../shared/package";
import BasePart from "../shared/parts/base-part";
import Relationship from "../shared/rels/relationship";

export class Presentation implements Package {
  contentType: ContentType;
  parts: BasePart[] = [];
  relationships: Relationship[] = [];

  constructor() {
    this.contentType = new ContentType();
  }

  addParts<T extends BasePart>(part: T): void {}

  addRelationships<T extends Relationship>(rel: T): void {}

  initContentType(contentType: ContentType): void {
    this.contentType = contentType;
  }
}
