import BasePart from "./base-part";



/**
 * ## Additional Characteristics 
 * 
 * This part type contains additional information of the producer of the document. 
 * 
 * There can be zero or more of the root tag in the document.
 * 
 * This part usually exists inside one of the `item{n}.xml` files in the `/customXML/` folder in the package.
 * 
 * ### Root Tag 
 * `<additionalCharacteristics>`
 * 
 * ### Values
 * `<characteristic !name="string" !relation="ge | le | gt | lt | eq" !val="string" ?vocabulary="xsd:anyURI"/>`
 */
export default class AdditionalCharacteristics extends BasePart {};