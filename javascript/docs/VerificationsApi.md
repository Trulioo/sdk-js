# TruliooSdk.VerificationsApi

All URIs are relative to *https://gateway.trulioo.com/trial*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionRecord**](VerificationsApi.md#getTransactionRecord) | **GET** /verifications/v1/transactionrecord/{id} | Get Transaction Record
[**verify**](VerificationsApi.md#verify) | **POST** /verifications/v1/verify | Verify



## getTransactionRecord

> TransactionRecordResult getTransactionRecord(id)

Get Transaction Record

This method is used to retrieve the request and results of a verification performed using the verify method.   The response for this method includes the same information as verify method&#39;s response, along with data present in the input fields of the verify request.

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.VerificationsApi();
let id = "id_example"; // String | The TransactionRecordID from the Verify response, this will be a GUID
apiInstance.getTransactionRecord(id, (error, data, response) => {
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
 **id** | **String**| The TransactionRecordID from the Verify response, this will be a GUID | 

### Return type

[**TransactionRecordResult**](TransactionRecordResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json


## verify

> VerifyResult verify(verifyRequest)

Verify

Calling this method will perform a verification. If your account includes address cleansing set the CleansedAddress flag to get  additional address information in the result.  You can query configuration to get what fields are available to you in each country.  It is also possible to get sample requests from the customer portal. If you are configured for a sandbox account make sure to call Get Test Entities to get test data for a country you want to try. Sandbox accounts only use these test entities and so trying to verify with any other data will result in no matches being found.

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.VerificationsApi();
let verifyRequest = new TruliooSdk.VerifyRequest(); // VerifyRequest | 
apiInstance.verify(verifyRequest, (error, data, response) => {
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
 **verifyRequest** | [**VerifyRequest**](VerifyRequest.md)|  | 

### Return type

[**VerifyResult**](VerifyResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, text/json
- **Accept**: application/json, text/json

