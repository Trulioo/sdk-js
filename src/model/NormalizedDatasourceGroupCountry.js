/**
 * Trulioo JavaScript SDK
 *
 * Package version: 1.0.3
 * Trulioo OpenAPI version: v1
 * Generated by OpenAPI Generator version: 5.0.1
 */
import ApiClient from '../ApiClient';
import NormalizedDatasourceField from './NormalizedDatasourceField';

/**
 * The NormalizedDatasourceGroupCountry model module.
 * @module model/NormalizedDatasourceGroupCountry
 * @version v1
 */
class NormalizedDatasourceGroupCountry {
    /**
     * Constructs a new <code>NormalizedDatasourceGroupCountry</code>.
     * Datasource group config for country
     * @alias module:model/NormalizedDatasourceGroupCountry
     */
    constructor() { 
        
        NormalizedDatasourceGroupCountry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NormalizedDatasourceGroupCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NormalizedDatasourceGroupCountry} obj Optional instance to populate.
     * @return {module:model/NormalizedDatasourceGroupCountry} The populated <code>NormalizedDatasourceGroupCountry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NormalizedDatasourceGroupCountry();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('RequiredFields')) {
                obj['RequiredFields'] = ApiClient.convertToType(data['RequiredFields'], [NormalizedDatasourceField]);
            }
            if (data.hasOwnProperty('OptionalFields')) {
                obj['OptionalFields'] = ApiClient.convertToType(data['OptionalFields'], [NormalizedDatasourceField]);
            }
            if (data.hasOwnProperty('AppendedFields')) {
                obj['AppendedFields'] = ApiClient.convertToType(data['AppendedFields'], [NormalizedDatasourceField]);
            }
            if (data.hasOwnProperty('OutputFields')) {
                obj['OutputFields'] = ApiClient.convertToType(data['OutputFields'], [NormalizedDatasourceField]);
            }
            if (data.hasOwnProperty('SourceType')) {
                obj['SourceType'] = ApiClient.convertToType(data['SourceType'], 'String');
            }
            if (data.hasOwnProperty('UpdateFrequency')) {
                obj['UpdateFrequency'] = ApiClient.convertToType(data['UpdateFrequency'], 'String');
            }
            if (data.hasOwnProperty('Coverage')) {
                obj['Coverage'] = ApiClient.convertToType(data['Coverage'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name
 * @member {String} Name
 */
NormalizedDatasourceGroupCountry.prototype['Name'] = undefined;

/**
 * Description
 * @member {String} Description
 */
NormalizedDatasourceGroupCountry.prototype['Description'] = undefined;

/**
 * Required Fields
 * @member {Array.<module:model/NormalizedDatasourceField>} RequiredFields
 */
NormalizedDatasourceGroupCountry.prototype['RequiredFields'] = undefined;

/**
 * Optional Fields
 * @member {Array.<module:model/NormalizedDatasourceField>} OptionalFields
 */
NormalizedDatasourceGroupCountry.prototype['OptionalFields'] = undefined;

/**
 * Appended Fields
 * @member {Array.<module:model/NormalizedDatasourceField>} AppendedFields
 */
NormalizedDatasourceGroupCountry.prototype['AppendedFields'] = undefined;

/**
 * Output Fields
 * @member {Array.<module:model/NormalizedDatasourceField>} OutputFields
 */
NormalizedDatasourceGroupCountry.prototype['OutputFields'] = undefined;

/**
 * Source Type
 * @member {String} SourceType
 */
NormalizedDatasourceGroupCountry.prototype['SourceType'] = undefined;

/**
 * Update Frequency
 * @member {String} UpdateFrequency
 */
NormalizedDatasourceGroupCountry.prototype['UpdateFrequency'] = undefined;

/**
 * Coverage
 * @member {String} Coverage
 */
NormalizedDatasourceGroupCountry.prototype['Coverage'] = undefined;






export default NormalizedDatasourceGroupCountry;

