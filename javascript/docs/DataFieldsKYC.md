# TruliooSdk.DataFieldsKYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personInfo** | [**PersonInfo**](PersonInfo.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**communication** | [**Communication**](Communication.md) |  | [optional] 
**driverLicence** | [**DriverLicence**](DriverLicence.md) |  | [optional] 
**nationalIds** | [**[NationalId]**](NationalId.md) | National Identification Information. Supported Types: NationalID, Health, SocialService, TaxIDNumber.  See &lt;a class&#x3D;\&quot;link-to-api\&quot; href&#x3D;\&quot;https://developer.trulioo.com/docs/national-ids-supported-types\&quot;&gt;Supported NationalIDs&lt;/a&gt; to understand the Type to send with the ID number. | [optional] 
**passport** | [**Passport**](Passport.md) |  | [optional] 
**countrySpecific** | **{String: {String: String}}** | CountrySpecific fields  \&quot;CountryCode\&quot;: {   \&quot;Field1\&quot; : \&quot;Value\&quot;,   \&quot;Field2\&quot; : \&quot;Value\&quot;  }  Call &lt;a class&#x3D;\&quot;link-to-api\&quot; href&#x3D;\&quot;#getfields-2\&quot;&gt;Get Fields&lt;/a&gt; to get the list of fields that are valid for your configuration. | [optional] 


