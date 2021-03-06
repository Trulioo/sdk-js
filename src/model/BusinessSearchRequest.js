/**
 * Trulioo JavaScript SDK
 *
 * Package version: 1.0.3
 * Trulioo OpenAPI version: v1
 * Generated by OpenAPI Generator version: 5.0.1
 */
import ApiClient from '../ApiClient';
import BusinessSearchRequestBusinessSearchModel from './BusinessSearchRequestBusinessSearchModel';

/**
 * The BusinessSearchRequest model module.
 * @module model/BusinessSearchRequest
 * @version v1
 */
class BusinessSearchRequest {
    /**
     * Constructs a new <code>BusinessSearchRequest</code>.
     * @alias module:model/BusinessSearchRequest
     * @param countryCode {String} The country code for which the verification needs to be performed.
     */
    constructor(countryCode) { 
        
        BusinessSearchRequest.initialize(this, countryCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, countryCode) { 
        obj['CountryCode'] = countryCode;
    }

    /**
     * Constructs a <code>BusinessSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BusinessSearchRequest} obj Optional instance to populate.
     * @return {module:model/BusinessSearchRequest} The populated <code>BusinessSearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BusinessSearchRequest();

            if (data.hasOwnProperty('AcceptTruliooTermsAndConditions')) {
                obj['AcceptTruliooTermsAndConditions'] = ApiClient.convertToType(data['AcceptTruliooTermsAndConditions'], 'Boolean');
            }
            if (data.hasOwnProperty('CallBackUrl')) {
                obj['CallBackUrl'] = ApiClient.convertToType(data['CallBackUrl'], 'String');
            }
            if (data.hasOwnProperty('Timeout')) {
                obj['Timeout'] = ApiClient.convertToType(data['Timeout'], 'Number');
            }
            if (data.hasOwnProperty('ConsentForDataSources')) {
                obj['ConsentForDataSources'] = ApiClient.convertToType(data['ConsentForDataSources'], ['String']);
            }
            if (data.hasOwnProperty('Business')) {
                obj['Business'] = BusinessSearchRequestBusinessSearchModel.constructFromObject(data['Business']);
            }
            if (data.hasOwnProperty('CountryCode')) {
                obj['CountryCode'] = ApiClient.convertToType(data['CountryCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Indicate that Trulioo terms and conditions are accepted
 * @member {Boolean} AcceptTruliooTermsAndConditions
 */
BusinessSearchRequest.prototype['AcceptTruliooTermsAndConditions'] = undefined;

/**
 * @member {String} CallBackUrl
 */
BusinessSearchRequest.prototype['CallBackUrl'] = undefined;

/**
 * @member {Number} Timeout
 */
BusinessSearchRequest.prototype['Timeout'] = undefined;

/**
 * Some datasources required your customer provide consent to access them.  Set that the customer has provided consent for each  datasource that requires one.  If consent is not provided the datasource will not be queried.
 * @member {Array.<String>} ConsentForDataSources
 */
BusinessSearchRequest.prototype['ConsentForDataSources'] = undefined;

/**
 * @member {module:model/BusinessSearchRequestBusinessSearchModel} Business
 */
BusinessSearchRequest.prototype['Business'] = undefined;

/**
 * The country code for which the verification needs to be performed.
 * @member {String} CountryCode
 */
BusinessSearchRequest.prototype['CountryCode'] = undefined;






export default BusinessSearchRequest;

