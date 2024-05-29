// The act of communication is the collection of reading and writing data.
export default abstract class OOXMLCommunicator {
    constructor() {}

    // Buffer functions
    abstract read(data: Buffer, options?: any ): any;
    abstract write(data: any): void;
    

}


