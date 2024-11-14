import Package from "./package";


export default abstract class OOXMLCommunicator {
  
  // A list of entry names indexed by their overall part name. 
  entryList: { [key: string]: string } = {};

  // The package object that the communicator is working with
  package!: Package;

  constructor() {}


  /**
   * 
   */
  public getEntry(partName: string): string {
    return this.entryList[partName];
  }

  /**
   * @param filename - The name of the entry
   * @param content - The content of the entry
   * 
   * Adds an entry to the entry list.
   * 
   * */
  public pushEntry(filename: string, content: string): void {
    this.entryList[filename] = content;
  }

  public abstract read<T extends Package>(data: Buffer): Promise<T>;

  public abstract write(): Promise<Buffer>;
}
