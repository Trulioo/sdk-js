# trulioo-sdk

TruliooSdk - JavaScript client for trulioo-sdk
Trulioo SDK

- API version: 0.2.0
- Package version: 0.2.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Then install it via:

```shell
npm install trulioo-sdk --save
```

## Getting Started 

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TruliooSdk = require('trulioo-sdk');

var defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['x-trulioo-api-key'] = "Token"

var api = new TruliooSdk.ConfigurationApi()
var mode = 'trial'; // {String} free trial or live
var countryCode = "COUNTRY-CODE"; // {String} Country alpha2 code
var configurationName = "Identity Verification"; // {String} The product configuration. Currently \"Identity Verification\" for all products.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getConsents(mode, countryCode, configurationName, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://gateway.trulioo.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TruliooSdk.ConfigurationApi* | [**getConsents**](docs/ConfigurationApi.md#getConsents) | **GET** /{mode}/configuration/v1/consents/{configurationName}/{countryCode} | Get Consents
*TruliooSdk.ConfigurationApi* | [**getCountryCodes**](docs/ConfigurationApi.md#getCountryCodes) | **GET** /{mode}/configuration/v1/countrycodes/{configurationName} | Get Country Codes
*TruliooSdk.ConfigurationApi* | [**getCountrySubdivisions**](docs/ConfigurationApi.md#getCountrySubdivisions) | **GET** /{mode}/configuration/v1/countrysubdivisions/{countryCode} | Get Country Subdivisions
*TruliooSdk.ConfigurationApi* | [**getDatasources**](docs/ConfigurationApi.md#getDatasources) | **GET** /{mode}/configuration/v1/datasources/{configurationName}/{countryCode} | Get Datasources
*TruliooSdk.ConfigurationApi* | [**getDetailedConsents**](docs/ConfigurationApi.md#getDetailedConsents) | **GET** /{mode}/configuration/v1/detailedConsents/{configurationName}/{countryCode} | Get Detailed Consents
*TruliooSdk.ConfigurationApi* | [**getFields**](docs/ConfigurationApi.md#getFields) | **GET** /{mode}/configuration/v1/fields/{configurationName}/{countryCode} | Get Fields
*TruliooSdk.ConfigurationApi* | [**getRecommendedFields**](docs/ConfigurationApi.md#getRecommendedFields) | **GET** /{mode}/configuration/v1/recommendedfields/{configurationName}/{countryCode} | Get Recommended Fields
*TruliooSdk.ConfigurationApi* | [**getTestEntities**](docs/ConfigurationApi.md#getTestEntities) | **GET** /{mode}/configuration/v1/testentities/{configurationName}/{countryCode} | Get Test Entities
*TruliooSdk.ConnectionApi* | [**testAuthentication**](docs/ConnectionApi.md#testAuthentication) | **GET** /{mode}/connection/v1/testauthentication | Test Authentication
*TruliooSdk.VerificationsApi* | [**getTransactionRecord**](docs/VerificationsApi.md#getTransactionRecord) | **GET** /{mode}/verifications/v1/transactionrecord/{id} | Get Transaction Record
*TruliooSdk.VerificationsApi* | [**verify**](docs/VerificationsApi.md#verify) | **POST** /{mode}/verifications/v1/verify | Verify

### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: x-trulioo-api-key
- **Location**: HTTP header

