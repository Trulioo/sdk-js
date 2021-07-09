#### Attention!
This SDK is for [Developer Hub API](https://gateway-admin.trulioo.com) only.

# Trulioo JavaScript SDK

- Package version: 1.0.3
- API version: v1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

This SDK targets JavaScript ECMAScript 6.

### With [npm](https://www.npmjs.com/)

```shell
npm install trulioo-sdk
```

## Sample Application

Check out our sample application for this SDK in the
[sample-app](https://github.com/Trulioo/sdk-javascript/tree/1.0.3/sample-app) folder.

## Getting Started

### Example of testing authentication (ES6)

```javascript
const Trulioo = require('trulioo-sdk');

// Configure API key authorization
Trulioo.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = 'YOUR-X-TRULIOO-API-KEY';

// Construct instance of ConnectionApi
const connectionApi = new Trulioo.ConnectionApi(apiClient);

// Configure mode: 'trial' or 'live'
const mode = 'trial';

// Call ConnectionApi#testAuthentication
(async () => {
  try {
    const result = await connectionApi.testAuthentication(mode);
    console.log(result);
  } catch (error) {
    console.log('Error when calling ConnectionApi#testAuthentication');
    console.log(`Status code:      ${error.status}`);
    console.log(`Reason:           ${error.response.body}`);
    console.log(`Response headers: ${JSON.stringify(error.response.headers)}`);
  }
})();
```

## Testing

This project uses [Mocha](https://mochajs.org/) for unit testing and [Istanbul](https://istanbul.js.org/) for code
coverage. Configuration is located in `package.json`.

```bash
npm install
npm test
```

## Documentation for APIs

All URIs are relative to *https://gateway.trulioo.com*.

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Trulioo.BusinessApi* | [**getBusinessSearchResult**](docs/BusinessApi.md#getBusinessSearchResult) | **GET** /{mode}/business/v1/search/transactionrecord/{id} | Get Business Search Result
*Trulioo.BusinessApi* | [**search**](docs/BusinessApi.md#search) | **POST** /{mode}/business/v1/search | Search
*Trulioo.ConfigurationApi* | [**getBusinessRegistrationNumbers**](docs/ConfigurationApi.md#getBusinessRegistrationNumbers) | **GET** /{mode}/configuration/v1/businessregistrationnumbers/{countryCode}/{jurisdictionCode} | Get Business Registration Numbers
*Trulioo.ConfigurationApi* | [**getConsents**](docs/ConfigurationApi.md#getConsents) | **GET** /{mode}/configuration/v1/consents/{configurationName}/{countryCode} | Get Consents
*Trulioo.ConfigurationApi* | [**getCountryCodes**](docs/ConfigurationApi.md#getCountryCodes) | **GET** /{mode}/configuration/v1/countrycodes/{configurationName} | Get Country Codes
*Trulioo.ConfigurationApi* | [**getCountrySubdivisions**](docs/ConfigurationApi.md#getCountrySubdivisions) | **GET** /{mode}/configuration/v1/countrysubdivisions/{countryCode} | Get Country Subdivisions
*Trulioo.ConfigurationApi* | [**getDatasources**](docs/ConfigurationApi.md#getDatasources) | **GET** /{mode}/configuration/v1/datasources/{configurationName}/{countryCode} | Get Datasources
*Trulioo.ConfigurationApi* | [**getDetailedConsents**](docs/ConfigurationApi.md#getDetailedConsents) | **GET** /{mode}/configuration/v1/detailedConsents/{configurationName}/{countryCode} | Get Detailed Consents
*Trulioo.ConfigurationApi* | [**getDocumentTypes**](docs/ConfigurationApi.md#getDocumentTypes) | **GET** /{mode}/configuration/v1/documentTypes/{countryCode} | Get Document Types
*Trulioo.ConfigurationApi* | [**getFields**](docs/ConfigurationApi.md#getFields) | **GET** /{mode}/configuration/v1/fields/{configurationName}/{countryCode} | Get Fields
*Trulioo.ConfigurationApi* | [**getRecommendedFields**](docs/ConfigurationApi.md#getRecommendedFields) | **GET** /{mode}/configuration/v1/recommendedfields/{configurationName}/{countryCode} | Get Recommended Fields
*Trulioo.ConfigurationApi* | [**getTestEntities**](docs/ConfigurationApi.md#getTestEntities) | **GET** /{mode}/configuration/v1/testentities/{configurationName}/{countryCode} | Get Test Entities
*Trulioo.ConnectionApi* | [**connectionAsyncCallbackUrl**](docs/ConnectionApi.md#connectionAsyncCallbackUrl) | **POST** /{mode}/connection/v1/async-callback | Connection Async Callback Url
*Trulioo.ConnectionApi* | [**sayHello**](docs/ConnectionApi.md#sayHello) | **GET** /{mode}/connection/v1/sayhello/{name} | Say Hello
*Trulioo.ConnectionApi* | [**testAuthentication**](docs/ConnectionApi.md#testAuthentication) | **GET** /{mode}/connection/v1/testauthentication | Test Authentication
*Trulioo.VerificationsApi* | [**documentDownload**](docs/VerificationsApi.md#documentDownload) | **GET** /{mode}/verifications/v1/documentdownload/{transactionRecordId}/{fieldName} | Document Download
*Trulioo.VerificationsApi* | [**getTransactionRecord**](docs/VerificationsApi.md#getTransactionRecord) | **GET** /{mode}/verifications/v1/transactionrecord/{id} | Get Transaction Record
*Trulioo.VerificationsApi* | [**getTransactionRecordAddress**](docs/VerificationsApi.md#getTransactionRecordAddress) | **GET** /{mode}/verifications/v1/transactionrecord/{id}/withaddress | Get Transaction Record Address
*Trulioo.VerificationsApi* | [**getTransactionRecordDocument**](docs/VerificationsApi.md#getTransactionRecordDocument) | **GET** /{mode}/verifications/v1/transactionrecord/{transactionRecordID}/{documentField} | Get Transaction Record Document
*Trulioo.VerificationsApi* | [**getTransactionRecordVerbose**](docs/VerificationsApi.md#getTransactionRecordVerbose) | **GET** /{mode}/verifications/v1/transactionrecord/{id}/verbose | Get Transaction Record Verbose
*Trulioo.VerificationsApi* | [**getTransactionStatus**](docs/VerificationsApi.md#getTransactionStatus) | **GET** /{mode}/verifications/v1/transaction/{id}/status | Get Transaction Status
*Trulioo.VerificationsApi* | [**verify**](docs/VerificationsApi.md#verify) | **POST** /{mode}/verifications/v1/verify | Verify

## Documentation for Models

 - [Trulioo.Address](docs/Address.md)
 - [Trulioo.AppendedField](docs/AppendedField.md)
 - [Trulioo.Business](docs/Business.md)
 - [Trulioo.BusinessRecord](docs/BusinessRecord.md)
 - [Trulioo.BusinessRegistrationNumber](docs/BusinessRegistrationNumber.md)
 - [Trulioo.BusinessRegistrationNumberMask](docs/BusinessRegistrationNumberMask.md)
 - [Trulioo.BusinessResult](docs/BusinessResult.md)
 - [Trulioo.BusinessSearchRequest](docs/BusinessSearchRequest.md)
 - [Trulioo.BusinessSearchRequestBusinessSearchModel](docs/BusinessSearchRequestBusinessSearchModel.md)
 - [Trulioo.BusinessSearchResponse](docs/BusinessSearchResponse.md)
 - [Trulioo.BusinessSearchResponseIndustryCode](docs/BusinessSearchResponseIndustryCode.md)
 - [Trulioo.Communication](docs/Communication.md)
 - [Trulioo.Consent](docs/Consent.md)
 - [Trulioo.CountrySubdivision](docs/CountrySubdivision.md)
 - [Trulioo.DataField](docs/DataField.md)
 - [Trulioo.DataFields](docs/DataFields.md)
 - [Trulioo.DatasourceField](docs/DatasourceField.md)
 - [Trulioo.DatasourceResult](docs/DatasourceResult.md)
 - [Trulioo.Document](docs/Document.md)
 - [Trulioo.DriverLicence](docs/DriverLicence.md)
 - [Trulioo.Location](docs/Location.md)
 - [Trulioo.LocationAdditionalFields](docs/LocationAdditionalFields.md)
 - [Trulioo.NationalId](docs/NationalId.md)
 - [Trulioo.NormalizedDatasourceField](docs/NormalizedDatasourceField.md)
 - [Trulioo.NormalizedDatasourceGroupCountry](docs/NormalizedDatasourceGroupCountry.md)
 - [Trulioo.Passport](docs/Passport.md)
 - [Trulioo.PersonInfo](docs/PersonInfo.md)
 - [Trulioo.PersonInfoAdditionalFields](docs/PersonInfoAdditionalFields.md)
 - [Trulioo.Record](docs/Record.md)
 - [Trulioo.RecordRule](docs/RecordRule.md)
 - [Trulioo.Result](docs/Result.md)
 - [Trulioo.ServiceError](docs/ServiceError.md)
 - [Trulioo.TestEntityDataFields](docs/TestEntityDataFields.md)
 - [Trulioo.TransactionRecordResult](docs/TransactionRecordResult.md)
 - [Trulioo.TransactionRecordResultAllOf](docs/TransactionRecordResultAllOf.md)
 - [Trulioo.TransactionStatus](docs/TransactionStatus.md)
 - [Trulioo.VerifyRequest](docs/VerifyRequest.md)
 - [Trulioo.VerifyResult](docs/VerifyResult.md)

## Documentation for Authorization

### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: x-trulioo-api-key
- **Location**: HTTP header
