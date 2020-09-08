/**
 * Trulioo SDK
 * Trulioo SDK 
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Record from './Record';
import ServiceError from './ServiceError';

/**
 * The VerifyResult model module.
 * @module model/VerifyResult
 * @version 0.2.0
 */
class VerifyResult {
    /**
     * Constructs a new <code>VerifyResult</code>.
     * null
     * @alias module:model/VerifyResult
     */
    constructor() { 
        
        VerifyResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VerifyResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyResult} obj Optional instance to populate.
     * @return {module:model/VerifyResult} The populated <code>VerifyResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyResult();

            if (data.hasOwnProperty('TransactionID')) {
                obj['TransactionID'] = ApiClient.convertToType(data['TransactionID'], 'String');
            }
            if (data.hasOwnProperty('UploadedDt')) {
                obj['UploadedDt'] = ApiClient.convertToType(data['UploadedDt'], 'Date');
            }
            if (data.hasOwnProperty('CountryCode')) {
                obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
            }
            if (data.hasOwnProperty('ProductName')) {
                obj['ProductName'] = ApiClient.convertToType(data['ProductName'], 'String');
            }
            if (data.hasOwnProperty('Record')) {
                obj['Record'] = Record.constructFromObject(data['Record']);
            }
            if (data.hasOwnProperty('CustomerReferenceID')) {
                obj['CustomerReferenceID'] = ApiClient.convertToType(data['CustomerReferenceID'], 'String');
            }
            if (data.hasOwnProperty('Errors')) {
                obj['Errors'] = ApiClient.convertToType(data['Errors'], [ServiceError]);
            }
        }
        return obj;
    }


}

/**
 * The id for the transaction it will be a GUID.
 * @member {String} TransactionID
 */
VerifyResult.prototype['TransactionID'] = undefined;

/**
 * Time in UTC.
 * @member {Date} UploadedDt
 */
VerifyResult.prototype['UploadedDt'] = undefined;

/**
 * Country Code
 * @member {String} CountryCode
 */
VerifyResult.prototype['CountryCode'] = undefined;

/**
 * Product Name
 * @member {String} ProductName
 */
VerifyResult.prototype['ProductName'] = undefined;

/**
 * @member {module:model/Record} Record
 */
VerifyResult.prototype['Record'] = undefined;

/**
 * Customer Reference ID
 * @member {String} CustomerReferenceID
 */
VerifyResult.prototype['CustomerReferenceID'] = undefined;

/**
 * See <a class=\"link-to-api\" href=\"#section-service-errors\">Errors</a> for explanation of any error encountered.
 * @member {Array.<module:model/ServiceError>} Errors
 */
VerifyResult.prototype['Errors'] = undefined;






export default VerifyResult;

