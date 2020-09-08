# TruliooSdk.ConnectionApi

All URIs are relative to *https://gateway.trulioo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testAuthentication**](ConnectionApi.md#testAuthentication) | **GET** /{mode}/connection/v1/testauthentication | Test Authentication



## testAuthentication

> String testAuthentication(mode)

Test Authentication

This method enables you to check if your credentials are valid. You will need to use ApiKeyAuth authentication to ensure a successful response.

### Example

```javascript
import TruliooSdk from 'trulioo_sdk';
let defaultClient = TruliooSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new TruliooSdk.ConnectionApi();
let mode = 'trial'; // String | free trial or live
apiInstance.testAuthentication(mode, (error, data, response) => {
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

### Return type

**String**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json

