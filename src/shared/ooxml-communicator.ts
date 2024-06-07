import { SAXParser } from "sax-ts";
import Package from "./package";


export default abstract class OOXMLCommunicator {

    entryList: string[] = [];
    package!: Package;

    constructor() {}

    getEntryList(): string[] { return this.entryList; }
    pushEntry(entry: string): void { this.entryList.push(entry); }

    render(): Buffer {throw new Error("Method not implemented.");};

    abstract read<T extends Package>(data: Buffer):  Promise<T>;

    abstract write(): Buffer;  
}