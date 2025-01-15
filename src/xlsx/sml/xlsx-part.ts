import { BaseXML, XMLAttribute, XMLNode } from "../../shared/base-xml";
import { Part } from "../../shared/parts/part";

/**
 * Part Relationship Target of Root Element Ref.
 * 
 */
export class XlsxPart extends Part {

    constructor() {
        super();
    }

    protected handleOpenTag(node: XMLNode): void {
        console.log(node);
        switch (node.name) {
            case "calcChain":
                

                break;
            case "chartsheet":
                break;
            case "comments":
                break;
            case "connections":
                break;
            case "MapInfo":
                break;
            case "dialogsheet":
                break;
            case "wsDr":
                break;
            case "externalLink":
                break;
            case "metadata":
                break;
            case "pivotTableDefinition":
                break;
            case "pivotCacheDefinition":
                break;
            case "pivotCacheRecords":
                break;
            case "queryTable":
                break;
            case "sst":
                break;
            case "headers":
                break;
            case "revisions":
                break;
            case "users":
                break;
            case "singleXmlCells":
                break;
            case "styleSheet":
                break;
            case "table":
                break;
            case "volTypes":
                break;
            case "workbook":
                break;
            case "worksheet":
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
        console.log("End of XlsxPart");
    }

}