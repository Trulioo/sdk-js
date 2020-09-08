# TruliooSdk.ConfigurationApi

All URIs are relative to *https://gateway.trulioo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConsents**](ConfigurationApi.md#getConsents) | **GET** /{mode}/configuration/v1/consents/{configurationName}/{countryCode} | Get Consents
[**getCountryCodes**](ConfigurationApi.md#getCountryCodes) | **GET** /{mode}/configuration/v1/countrycodes/{configurationName} | Get Country Codes
[**getCountrySubdivisions**](ConfigurationApi.md#getCountrySubdivisions) | **GET** /{mode}/configuration/v1/countrysubdivisions/{countryCode} | Get Country Subdivisions
[**getDatasources**](ConfigurationApi.md#getDatasources) | **GET** /{mode}/configuration/v1/datasources/{configurationName}/{countryCode} | Get Datasources
[**getDetailedConsents**](ConfigurationApi.md#getDetailedConsents) | **GET** /{mode}/configuration/v1/detailedConsents/{configurationName}/{countryCode} | Get Detailed Consents
[**getFields**](ConfigurationApi.md#getFields) | **GET** /{mode}/configuration/v1/fields/{configurationName}/{countryCode} | Get Fields
[**getRecommendedFields**](ConfigurationApi.md#getRecommendedFields) | **GET** /{mode}/configuration/v1/recommendedfields/{configurationName}/{countryCode} | Get Recommended Fields
[**getTestEntities**](ConfigurationApi.md#getTestEntities) | **GET** /{mode}/configuration/v1/testentities/{configurationName}/{countryCode} | Get Test Entities



## getConsents

> [String] getConsents(mode, countryCode, configurationName)

Get Consents

This method retrieves the consents required for the data sources currently configured in your account configuration.   The response for this method contains a collection of string that Verify method&#39;s ConsentForDataSources field expects to perform a verification using those data sources.   Failure to provide an element from the string collection will lead to a 1005 service error

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.ConfigurationApi();
let mode = 'trial'; // String | free trial or live
let countryCode = "countryCode_example"; // String | Country alpha2 code
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
apiInstance.getConsents(mode, countryCode, configurationName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| free trial or live | [default to &#39;trial&#39;]
 **countryCode** | **String**| Country alpha2 code | 
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]

### Return type

**[String]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getCountryCodes

> [String] getCountryCodes(mode, configurationName)

Get Country Codes

This method retrieves all the countries that are available to perform a verification. It returns an array of Alpha2 Country Codes

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.ConfigurationApi();
let mode = 'trial'; // String | free trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
apiInstance.getCountryCodes(mode, configurationName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| free trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]

### Return type

**[String]**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getCountrySubdivisions

> [CountrySubdivision] getCountrySubdivisions(mode, countryCode)

Get Country Subdivisions

Gets the provinces states or other subdivisions for a country, mostly matches ISO 3166-2

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.ConfigurationApi();
let mode = 'trial'; // String | free trial or live
let countryCode = "countryCode_example"; // String | Country alpha2 code
apiInstance.getCountrySubdivisions(mode, countryCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| free trial or live | [default to &#39;trial&#39;]
 **countryCode** | **String**| Country alpha2 code | 

### Return type

[**[CountrySubdivision]**](CountrySubdivision.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getDatasources

> [NormalizedDatasourceGroupCountry] getDatasources(mode, configurationName, countryCode)

Get Datasources

Gets datasource groups configured for your product and country.

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.ConfigurationApi();
let mode = 'trial'; // String | free trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
let countryCode = "countryCode_example"; // String | Country alpha2 code
apiInstance.getDatasources(mode, configurationName, countryCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| free trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]
 **countryCode** | **String**| Country alpha2 code | 

### Return type

[**[NormalizedDatasourceGroupCountry]**](NormalizedDatasourceGroupCountry.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getDetailedConsents

> [Consent] getDetailedConsents(mode, countryCode, configurationName)

Get Detailed Consents

This method retrieves details about consents required for data sources currently configured in your account configuration.   The response for this method contains a collection of objects.  Each object contains the Name of the data source, Text outlining what the user is consenting to, and optionally a Url where the user can find more information about how their data will be used.    Failure to provide a Name from the object collection will lead to a 1005 service error.

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.ConfigurationApi();
let mode = 'trial'; // String | free trial or live
let countryCode = "countryCode_example"; // String | Call CountryCodes to get the countries available to you.
let configurationName = "'Identity Verification'"; // String | Identity Verification
apiInstance.getDetailedConsents(mode, countryCode, configurationName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| free trial or live | [default to &#39;trial&#39;]
 **countryCode** | **String**| Call CountryCodes to get the countries available to you. | 
 **configurationName** | **String**| Identity Verification | [default to &#39;Identity Verification&#39;]

### Return type

[**[Consent]**](Consent.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## getFields

> Object getFields(mode, countryCode, configurationName)

Get Fields

Generates json schema for the API, the schema is dynamic based on the country and configuration you are using json-schema.org

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.ConfigurationApi();
let mode = 'trial'; // String | free trial or live
let countryCode = "countryCode_example"; // String | Country alpha2 code
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
apiInstance.getFields(mode, countryCode, configurationName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| free trial or live | [default to &#39;trial&#39;]
 **countryCode** | **String**| Country alpha2 code | 
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRecommendedFields

> Object getRecommendedFields(mode, countryCode, configurationName)

Get Recommended Fields

Generates json schema for the API, the schema is dynamic based on the recommendedFields country and account you are using.  http://json-schema.org/documentation.html

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.ConfigurationApi();
let mode = 'trial'; // String | free trial or live
let countryCode = "countryCode_example"; // String | Country alpha2 code
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
apiInstance.getRecommendedFields(mode, countryCode, configurationName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| free trial or live | [default to &#39;trial&#39;]
 **countryCode** | **String**| Country alpha2 code | 
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestEntities

> [DataFields] getTestEntities(mode, configurationName, countryCode)

Get Test Entities

Gets the test entities configured for your product and country.

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.ConfigurationApi();
let mode = 'trial'; // String | free trial or live
let configurationName = "'Identity Verification'"; // String | The product configuration. Currently \"Identity Verification\" for all products.
let countryCode = "countryCode_example"; // String | Country alpha2 code
apiInstance.getTestEntities(mode, configurationName, countryCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mode** | **String**| free trial or live | [default to &#39;trial&#39;]
 **configurationName** | **String**| The product configuration. Currently \&quot;Identity Verification\&quot; for all products. | [default to &#39;Identity Verification&#39;]
 **countryCode** | **String**| Country alpha2 code | 

### Return type

[**[DataFields]**](DataFields.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

