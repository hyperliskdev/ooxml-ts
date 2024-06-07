import { Stream } from "stream";

export default abstract class BasePart {

    abstract render(): Stream;
}