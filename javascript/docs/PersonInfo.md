# TruliooSdk.PersonInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstGivenName** | **String** | First name of the individual to be verified. Dual purpose First Name or Initial. | [optional] 
**middleName** | **String** | Second given name of the individual to be verified. Dual purpose Middle Name or Initial. | [optional] 
**firstSurName** | **String** | First (paternal) family name of the individual to be verified. | [optional] 
**secondSurname** | **String** | Second family name of the individual to be verified. | [optional] 
**iSOLatin1Name** | **String** | Enter full name in ISO Latin-1 character set. Used for data sources that require the person’s name in ISO Latin-1 format (i.e. as Passport MRZ). | [optional] 
**dayOfBirth** | **Number** | Day of birth date (i.e. 23 for a date of birth of 23/11/1975). | [optional] 
**monthOfBirth** | **Number** | Month of birth date (i.e. 11 for a date of birth of 23/11/1975). | [optional] 
**yearOfBirth** | **Number** | Year of birth date (i.e. 1975 for a date of birth of 23/11/1975). | [optional] 
**minimumAge** | **Number** | Minimum permitted age of the individual. GlobalGateway calculates age of individual and compares it to this number. | [optional] 
**gender** | **String** | Single character M / F (M &#x3D; Male, F &#x3D; Female). | [optional] 
**additionalFields** | [**PersonInfoAdditionalFields**](PersonInfoAdditionalFields.md) |  | [optional] 


