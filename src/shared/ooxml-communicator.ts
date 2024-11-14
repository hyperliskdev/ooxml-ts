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

  /**
   * @param data - The file buffer to read
   * 
   * Reads the file buffer and returns a package object.
   * 
   * @returns A package object
   */
  public abstract read<T extends Package>(data: Buffer): Promise<T>;


  /**
   * @param p - The package object to write
   * 
   * Writes the package object to a buffer and returns the buffer.
   * 
   * @returns A buffer
   */
  public abstract write(p: Package): Promise<Buffer>;
}
