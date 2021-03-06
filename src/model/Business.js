/**
 * Trulioo JavaScript SDK
 *
 * Package version: 1.0.3
 * Trulioo OpenAPI version: v1
 * Generated by OpenAPI Generator version: 5.0.1
 */
import ApiClient from '../ApiClient';

/**
 * The Business model module.
 * @module model/Business
 * @version v1
 */
class Business {
    /**
     * Constructs a new <code>Business</code>.
     * @alias module:model/Business
     */
    constructor() { 
        
        Business.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Business</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Business} obj Optional instance to populate.
     * @return {module:model/Business} The populated <code>Business</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Business();

            if (data.hasOwnProperty('BusinessName')) {
                obj['BusinessName'] = ApiClient.convertToType(data['BusinessName'], 'String');
            }
            if (data.hasOwnProperty('BusinessRegistrationNumber')) {
                obj['BusinessRegistrationNumber'] = ApiClient.convertToType(data['BusinessRegistrationNumber'], 'String');
            }
            if (data.hasOwnProperty('DayOfIncorporation')) {
                obj['DayOfIncorporation'] = ApiClient.convertToType(data['DayOfIncorporation'], 'Number');
            }
            if (data.hasOwnProperty('MonthOfIncorporation')) {
                obj['MonthOfIncorporation'] = ApiClient.convertToType(data['MonthOfIncorporation'], 'Number');
            }
            if (data.hasOwnProperty('YearOfIncorporation')) {
                obj['YearOfIncorporation'] = ApiClient.convertToType(data['YearOfIncorporation'], 'Number');
            }
            if (data.hasOwnProperty('JurisdictionOfIncorporation')) {
                obj['JurisdictionOfIncorporation'] = ApiClient.convertToType(data['JurisdictionOfIncorporation'], 'String');
            }
            if (data.hasOwnProperty('ShareholderListDocument')) {
                obj['ShareholderListDocument'] = ApiClient.convertToType(data['ShareholderListDocument'], 'Boolean');
            }
            if (data.hasOwnProperty('FinancialInformationDocument')) {
                obj['FinancialInformationDocument'] = ApiClient.convertToType(data['FinancialInformationDocument'], 'Boolean');
            }
            if (data.hasOwnProperty('DunsNumber')) {
                obj['DunsNumber'] = ApiClient.convertToType(data['DunsNumber'], 'String');
            }
            if (data.hasOwnProperty('Entities')) {
                obj['Entities'] = ApiClient.convertToType(data['Entities'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Name of the business to be verified
 * @member {String} BusinessName
 */
Business.prototype['BusinessName'] = undefined;

/**
 * Registration number of business to be verified
 * @member {String} BusinessRegistrationNumber
 */
Business.prototype['BusinessRegistrationNumber'] = undefined;

/**
 * Day of incorporation of the business to be verified
 * @member {Number} DayOfIncorporation
 */
Business.prototype['DayOfIncorporation'] = undefined;

/**
 * Month of incorporation of the business to be verified
 * @member {Number} MonthOfIncorporation
 */
Business.prototype['MonthOfIncorporation'] = undefined;

/**
 * Year of incorporation of the business to be verified
 * @member {Number} YearOfIncorporation
 */
Business.prototype['YearOfIncorporation'] = undefined;

/**
 * Jurisdiction Of Incorporation of the business to be verified
 * @member {String} JurisdictionOfIncorporation
 */
Business.prototype['JurisdictionOfIncorporation'] = undefined;

/**
 * Whether or not to retrieve shareholderList document
 * @member {Boolean} ShareholderListDocument
 */
Business.prototype['ShareholderListDocument'] = undefined;

/**
 * Whether or not to retrieve financial information document
 * @member {Boolean} FinancialInformationDocument
 */
Business.prototype['FinancialInformationDocument'] = undefined;

/**
 * Duns Number
 * @member {String} DunsNumber
 */
Business.prototype['DunsNumber'] = undefined;

/**
 * Whether or not to retrieve entity detail
 * @member {Boolean} Entities
 */
Business.prototype['Entities'] = undefined;






export default Business;

