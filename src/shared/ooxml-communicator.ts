import Package from "./package";


export default abstract class OOXMLCommunicator {
  
  // A list of entry names indexed by their overall part name. 
  entryList: { [key: string]: string } = {};

  // The package object that the communicator is working with
  package!: Package;

  constructor() {}


  /**
   * @param partName - The name of the part to add to the entry list
   * 
   * Adds an entry to the entry list.
   * 
   * The entry list contains the filename where a part is stored in the package.
   * When rendering the package, the entry list can be used to identify what xml to write
   * to a specific file.
   */
  public getEntry(partName: string): string {
    return this.entryList[partName];
  }

  /**
   * @param partName - The name of the part to add to the entry list
   * 
   * Adds an entry to the entry list.
   * 
   * The entry list contains the filename where a part is stored in the package.
   * When rendering the package, the entry list can be used to identify what xml to write
   * to a specific file.
   */
  public pushEntry(partName: string): void {
    this.entryList[partName] = partName;
  }

  public abstract read<T extends Package>(data: Buffer): Promise<T>;

  public abstract write(): Promise<Buffer>;
}
