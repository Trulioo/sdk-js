# trulioo_identity_verification

TruliooIdentityVerification - JavaScript client for trulioo_identity_verification
To run tests transactions on our trial endpoint in postman:
[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/a58f438d101278e2bc62)

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install trulioo_identity_verification --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your trulioo_identity_verification from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TruliooIdentityVerification = require('trulioo_identity_verification');

var defaultClient = TruliooIdentityVerification.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['x-trulioo-api-key'] = "Token"

var api = new TruliooIdentityVerification.ConfigurationApi()
var countryCode = "countryCode_example"; // {String} Country alpha2 code
var configurationName = "'Identity Verification'"; // {String} The product configuration. Currently \"Identity Verification\" for all products.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getConsents(countryCode, configurationName, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://gateway.trulioo.com/trial*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TruliooIdentityVerification.ConfigurationApi* | [**getConsents**](docs/ConfigurationApi.md#getConsents) | **GET** /configuration/v1/consents/{configurationName}/{countryCode} | Get Consents
*TruliooIdentityVerification.ConfigurationApi* | [**getCountryCodes**](docs/ConfigurationApi.md#getCountryCodes) | **GET** /configuration/v1/countrycodes/{configurationName} | Get Country Codes
*TruliooIdentityVerification.ConfigurationApi* | [**getCountrySubdivisions**](docs/ConfigurationApi.md#getCountrySubdivisions) | **GET** /configuration/v1/countrysubdivisions/{countryCode} | Get Country Subdivisions
*TruliooIdentityVerification.ConfigurationApi* | [**getDatasources**](docs/ConfigurationApi.md#getDatasources) | **GET** /configuration/v1/datasources/{configurationName}/{countryCode} | Get Datasources
*TruliooIdentityVerification.ConfigurationApi* | [**getDetailedConsents**](docs/ConfigurationApi.md#getDetailedConsents) | **GET** /configuration/v1/detailedConsents/{configurationName}/{countryCode} | Get Detailed Consents
*TruliooIdentityVerification.ConfigurationApi* | [**getFields**](docs/ConfigurationApi.md#getFields) | **GET** /configuration/v1/fields/{configurationName}/{countryCode} | Get Fields
*TruliooIdentityVerification.ConfigurationApi* | [**getRecommendedFields**](docs/ConfigurationApi.md#getRecommendedFields) | **GET** /configuration/v1/recommendedfields/{configurationName}/{countryCode} | Get Recommended Fields
*TruliooIdentityVerification.ConfigurationApi* | [**getTestEntities**](docs/ConfigurationApi.md#getTestEntities) | **GET** /configuration/v1/testentities/{configurationName}/{countryCode} | Get Test Entities
*TruliooIdentityVerification.ConnectionApi* | [**testAuthentication**](docs/ConnectionApi.md#testAuthentication) | **GET** /connection/v1/testauthentication | Test Authentication
*TruliooIdentityVerification.VerificationsApi* | [**getTransactionRecord**](docs/VerificationsApi.md#getTransactionRecord) | **GET** /verifications/v1/transactionrecord/{id} | Get Transaction Record
*TruliooIdentityVerification.VerificationsApi* | [**verify**](docs/VerificationsApi.md#verify) | **POST** /verifications/v1/verify | Verify


## Documentation for Models

 - [TruliooIdentityVerification.Address](docs/Address.md)
 - [TruliooIdentityVerification.AppendedField](docs/AppendedField.md)
 - [TruliooIdentityVerification.Communication](docs/Communication.md)
 - [TruliooIdentityVerification.Consent](docs/Consent.md)
 - [TruliooIdentityVerification.CountrySubdivision](docs/CountrySubdivision.md)
 - [TruliooIdentityVerification.DataField](docs/DataField.md)
 - [TruliooIdentityVerification.DataFields](docs/DataFields.md)
 - [TruliooIdentityVerification.DataFieldsKYC](docs/DataFieldsKYC.md)
 - [TruliooIdentityVerification.DatasourceField](docs/DatasourceField.md)
 - [TruliooIdentityVerification.DatasourceResult](docs/DatasourceResult.md)
 - [TruliooIdentityVerification.DriverLicence](docs/DriverLicence.md)
 - [TruliooIdentityVerification.Location](docs/Location.md)
 - [TruliooIdentityVerification.LocationAdditionalFields](docs/LocationAdditionalFields.md)
 - [TruliooIdentityVerification.NationalId](docs/NationalId.md)
 - [TruliooIdentityVerification.NormalizedDatasourceField](docs/NormalizedDatasourceField.md)
 - [TruliooIdentityVerification.NormalizedDatasourceGroupCountry](docs/NormalizedDatasourceGroupCountry.md)
 - [TruliooIdentityVerification.Passport](docs/Passport.md)
 - [TruliooIdentityVerification.PersonInfo](docs/PersonInfo.md)
 - [TruliooIdentityVerification.PersonInfoAdditionalFields](docs/PersonInfoAdditionalFields.md)
 - [TruliooIdentityVerification.Record](docs/Record.md)
 - [TruliooIdentityVerification.RecordRule](docs/RecordRule.md)
 - [TruliooIdentityVerification.ServiceError](docs/ServiceError.md)
 - [TruliooIdentityVerification.TransactionRecordResult](docs/TransactionRecordResult.md)
 - [TruliooIdentityVerification.TransactionRecordResultAllOf](docs/TransactionRecordResultAllOf.md)
 - [TruliooIdentityVerification.TransactionStatus](docs/TransactionStatus.md)
 - [TruliooIdentityVerification.VerifyRequest](docs/VerifyRequest.md)
 - [TruliooIdentityVerification.VerifyResult](docs/VerifyResult.md)


## Documentation for Authorization



### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: x-trulioo-api-key
- **Location**: HTTP header
