/**
 * Trulioo JavaScript SDK
 *
 * Package version: 1.0.3
 * Trulioo OpenAPI version: v1
 * Generated by OpenAPI Generator version: 5.0.1
 */
import ApiClient from '../ApiClient';
import PersonInfoAdditionalFields from './PersonInfoAdditionalFields';

/**
 * The PersonInfo model module.
 * @module model/PersonInfo
 * @version v1
 */
class PersonInfo {
    /**
     * Constructs a new <code>PersonInfo</code>.
     * Personal Information
     * @alias module:model/PersonInfo
     */
    constructor() { 
        
        PersonInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonInfo} obj Optional instance to populate.
     * @return {module:model/PersonInfo} The populated <code>PersonInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonInfo();

            if (data.hasOwnProperty('FirstGivenName')) {
                obj['FirstGivenName'] = ApiClient.convertToType(data['FirstGivenName'], 'String');
            }
            if (data.hasOwnProperty('MiddleName')) {
                obj['MiddleName'] = ApiClient.convertToType(data['MiddleName'], 'String');
            }
            if (data.hasOwnProperty('FirstSurName')) {
                obj['FirstSurName'] = ApiClient.convertToType(data['FirstSurName'], 'String');
            }
            if (data.hasOwnProperty('SecondSurname')) {
                obj['SecondSurname'] = ApiClient.convertToType(data['SecondSurname'], 'String');
            }
            if (data.hasOwnProperty('ISOLatin1Name')) {
                obj['ISOLatin1Name'] = ApiClient.convertToType(data['ISOLatin1Name'], 'String');
            }
            if (data.hasOwnProperty('DayOfBirth')) {
                obj['DayOfBirth'] = ApiClient.convertToType(data['DayOfBirth'], 'Number');
            }
            if (data.hasOwnProperty('MonthOfBirth')) {
                obj['MonthOfBirth'] = ApiClient.convertToType(data['MonthOfBirth'], 'Number');
            }
            if (data.hasOwnProperty('YearOfBirth')) {
                obj['YearOfBirth'] = ApiClient.convertToType(data['YearOfBirth'], 'Number');
            }
            if (data.hasOwnProperty('MinimumAge')) {
                obj['MinimumAge'] = ApiClient.convertToType(data['MinimumAge'], 'Number');
            }
            if (data.hasOwnProperty('Gender')) {
                obj['Gender'] = ApiClient.convertToType(data['Gender'], 'String');
            }
            if (data.hasOwnProperty('AdditionalFields')) {
                obj['AdditionalFields'] = PersonInfoAdditionalFields.constructFromObject(data['AdditionalFields']);
            }
        }
        return obj;
    }


}

/**
 * First name of the individual to be verified
 * @member {String} FirstGivenName
 */
PersonInfo.prototype['FirstGivenName'] = undefined;

/**
 * Second given name of the individual to be verified
 * @member {String} MiddleName
 */
PersonInfo.prototype['MiddleName'] = undefined;

/**
 * First (paternal) family name of the individual to be verified
 * @member {String} FirstSurName
 */
PersonInfo.prototype['FirstSurName'] = undefined;

/**
 * second family name of the individual to be verified
 * @member {String} SecondSurname
 */
PersonInfo.prototype['SecondSurname'] = undefined;

/**
 * Enter full name in ISO Latin-1 character set
 * @member {String} ISOLatin1Name
 */
PersonInfo.prototype['ISOLatin1Name'] = undefined;

/**
 * Day of birth date (e.g. 23 for a date of birth of 23/11/1975)
 * @member {Number} DayOfBirth
 */
PersonInfo.prototype['DayOfBirth'] = undefined;

/**
 * Month of birth date (e.g. 11 for a date of birth of 23/11/1975)
 * @member {Number} MonthOfBirth
 */
PersonInfo.prototype['MonthOfBirth'] = undefined;

/**
 * Year of birth date (e.g. 1975 for a date of birth of 23/11/1975)
 * @member {Number} YearOfBirth
 */
PersonInfo.prototype['YearOfBirth'] = undefined;

/**
 * Minimum permitted age of the individual
 * @member {Number} MinimumAge
 */
PersonInfo.prototype['MinimumAge'] = undefined;

/**
 * Single character M / F (M = Male, F = Female)
 * @member {String} Gender
 */
PersonInfo.prototype['Gender'] = undefined;

/**
 * @member {module:model/PersonInfoAdditionalFields} AdditionalFields
 */
PersonInfo.prototype['AdditionalFields'] = undefined;






export default PersonInfo;

