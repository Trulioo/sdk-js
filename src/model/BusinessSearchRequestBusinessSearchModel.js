/**
 * Trulioo JavaScript SDK
 *
 * Package version: 1.0.3
 * Trulioo OpenAPI version: v1
 * Generated by OpenAPI Generator version: 5.0.1
 */
import ApiClient from '../ApiClient';
import Location from './Location';

/**
 * The BusinessSearchRequestBusinessSearchModel model module.
 * @module model/BusinessSearchRequestBusinessSearchModel
 * @version v1
 */
class BusinessSearchRequestBusinessSearchModel {
    /**
     * Constructs a new <code>BusinessSearchRequestBusinessSearchModel</code>.
     * Business Object
     * @alias module:model/BusinessSearchRequestBusinessSearchModel
     */
    constructor() { 
        
        BusinessSearchRequestBusinessSearchModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BusinessSearchRequestBusinessSearchModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BusinessSearchRequestBusinessSearchModel} obj Optional instance to populate.
     * @return {module:model/BusinessSearchRequestBusinessSearchModel} The populated <code>BusinessSearchRequestBusinessSearchModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BusinessSearchRequestBusinessSearchModel();

            if (data.hasOwnProperty('BusinessName')) {
                obj['BusinessName'] = ApiClient.convertToType(data['BusinessName'], 'String');
            }
            if (data.hasOwnProperty('Website')) {
                obj['Website'] = ApiClient.convertToType(data['Website'], 'String');
            }
            if (data.hasOwnProperty('JurisdictionOfIncorporation')) {
                obj['JurisdictionOfIncorporation'] = ApiClient.convertToType(data['JurisdictionOfIncorporation'], 'String');
            }
            if (data.hasOwnProperty('DUNSNumber')) {
                obj['DUNSNumber'] = ApiClient.convertToType(data['DUNSNumber'], 'String');
            }
            if (data.hasOwnProperty('Location')) {
                obj['Location'] = Location.constructFromObject(data['Location']);
            }
        }
        return obj;
    }


}

/**
 * Name of the business to be verified
 * @member {String} BusinessName
 */
BusinessSearchRequestBusinessSearchModel.prototype['BusinessName'] = undefined;

/**
 * Website of the business
 * @member {String} Website
 */
BusinessSearchRequestBusinessSearchModel.prototype['Website'] = undefined;

/**
 * Jurisdiction Of Incorporation of the business to be verified
 * @member {String} JurisdictionOfIncorporation
 */
BusinessSearchRequestBusinessSearchModel.prototype['JurisdictionOfIncorporation'] = undefined;

/**
 * DUNS number of the business to be verified
 * @member {String} DUNSNumber
 */
BusinessSearchRequestBusinessSearchModel.prototype['DUNSNumber'] = undefined;

/**
 * @member {module:model/Location} Location
 */
BusinessSearchRequestBusinessSearchModel.prototype['Location'] = undefined;






export default BusinessSearchRequestBusinessSearchModel;

