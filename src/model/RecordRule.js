/**
 * Trulioo JavaScript SDK
 *
 * Package version: 1.0.3
 * Trulioo OpenAPI version: v1
 * Generated by OpenAPI Generator version: 5.0.1
 */
import ApiClient from '../ApiClient';

/**
 * The RecordRule model module.
 * @module model/RecordRule
 * @version v1
 */
class RecordRule {
    /**
     * Constructs a new <code>RecordRule</code>.
     * RecordRule used for the transaction.
     * @alias module:model/RecordRule
     */
    constructor() { 
        
        RecordRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecordRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecordRule} obj Optional instance to populate.
     * @return {module:model/RecordRule} The populated <code>RecordRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecordRule();

            if (data.hasOwnProperty('RuleName')) {
                obj['RuleName'] = ApiClient.convertToType(data['RuleName'], 'String');
            }
            if (data.hasOwnProperty('Note')) {
                obj['Note'] = ApiClient.convertToType(data['Note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of RecordRule.
 * @member {String} RuleName
 */
RecordRule.prototype['RuleName'] = undefined;

/**
 * Rule Description.
 * @member {String} Note
 */
RecordRule.prototype['Note'] = undefined;






export default RecordRule;
