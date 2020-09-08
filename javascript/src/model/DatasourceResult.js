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
import AppendedField from './AppendedField';
import DatasourceField from './DatasourceField';
import ServiceError from './ServiceError';

/**
 * The DatasourceResult model module.
 * @module model/DatasourceResult
 * @version 0.2.0
 */
class DatasourceResult {
    /**
     * Constructs a new <code>DatasourceResult</code>.
     * A result from a particular datasource
     * @alias module:model/DatasourceResult
     */
    constructor() { 
        
        DatasourceResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatasourceResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatasourceResult} obj Optional instance to populate.
     * @return {module:model/DatasourceResult} The populated <code>DatasourceResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatasourceResult();

            if (data.hasOwnProperty('DatasourceStatus')) {
                obj['DatasourceStatus'] = ApiClient.convertToType(data['DatasourceStatus'], 'String');
            }
            if (data.hasOwnProperty('DatasourceName')) {
                obj['DatasourceName'] = ApiClient.convertToType(data['DatasourceName'], 'String');
            }
            if (data.hasOwnProperty('DatasourceFields')) {
                obj['DatasourceFields'] = ApiClient.convertToType(data['DatasourceFields'], [DatasourceField]);
            }
            if (data.hasOwnProperty('AppendedFields')) {
                obj['AppendedFields'] = ApiClient.convertToType(data['AppendedFields'], [AppendedField]);
            }
            if (data.hasOwnProperty('Errors')) {
                obj['Errors'] = ApiClient.convertToType(data['Errors'], [ServiceError]);
            }
            if (data.hasOwnProperty('FieldGroups')) {
                obj['FieldGroups'] = ApiClient.convertToType(data['FieldGroups'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} DatasourceStatus
 */
DatasourceResult.prototype['DatasourceStatus'] = undefined;

/**
 * @member {String} DatasourceName
 */
DatasourceResult.prototype['DatasourceName'] = undefined;

/**
 * @member {Array.<module:model/DatasourceField>} DatasourceFields
 */
DatasourceResult.prototype['DatasourceFields'] = undefined;

/**
 * @member {Array.<module:model/AppendedField>} AppendedFields
 */
DatasourceResult.prototype['AppendedFields'] = undefined;

/**
 * @member {Array.<module:model/ServiceError>} Errors
 */
DatasourceResult.prototype['Errors'] = undefined;

/**
 * @member {Array.<String>} FieldGroups
 */
DatasourceResult.prototype['FieldGroups'] = undefined;






export default DatasourceResult;

