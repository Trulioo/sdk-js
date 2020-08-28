# TruliooSdk.VerifyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceptTruliooTermsAndConditions** | **Boolean** | Indicate that Trulioo terms and conditions are accepted.\\nThe Verification request will be executed only if the value of this header is passed as &#39;true&#39;. | [optional] 
**callBackUrl** | **String** | If set, the transaction will run asyncronously and trulioo will try to update the client with transaction state updates until completed. | [optional] 
**timeout** | **Number** | If set, trulioo will try to update the client syncronously within the timeout in seconds. If failed to accomplish, the transaction will be canceled. | [optional] 
**cleansedAddress** | **Boolean** | Set to true if you want to receive address cleanse information. This will only change the response if you have address cleansing enabled for the country you are querying for. | [optional] 
**configurationName** | **String** | Indicate the configuration used for the verification. Currently only &#39;Identity Verification&#39; is supported.\\nDefault value will be \&quot;Identity Verification\&quot; | [optional] 
**consentForDataSources** | **[String]** | Some datasources require your customer provide consent to access them. For each datasource that requires consent, send the requred string if your customer has provided it. A list of these required strings for a country can be gotten by the &lt;a class&#x3D;\&quot;link-to-api\&quot; href&#x3D;\&quot;#get-consents\&quot;&gt;Get Consents&lt;/a&gt; call. If consent is not provided the datasource will not be queried. | [optional] 
**countryCode** | **String** | Country alpha2 code | 
**customerReferenceID** | **String** | Use this field to send any internal reference ID to GlobalGateway. It will be contained in the response so it is simple to link Trulioo&#39;s API to your system. | [optional] 
**dataFields** | [**DataFields**](DataFields.md) |  | 
**verboseMode** | **Boolean** | Verbose Mode Output Flag. | [optional] 


