/**
 * Trulioo JavaScript SDK
 *
 * Package version: 1.0.1
 * Trulioo OpenAPI version: v1
 * Generated by OpenAPI Generator version: 5.0.1
 */

import ApiClient from "../ApiClient";
import TransactionRecordResult from '../model/TransactionRecordResult';
import TransactionStatus from '../model/TransactionStatus';
import VerifyRequest from '../model/VerifyRequest';
import VerifyResult from '../model/VerifyResult';

/**
* Verifications service.
* @module api/VerificationsApi
* @version v1
*/
export default class VerificationsApi {

    /**
    * Constructs a new VerificationsApi. 
    * @alias module:api/VerificationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Document Download
     * Download Document
     * @param {String} mode trial or live
     * @param {String} transactionRecordId id of the transactionrecord, this will be a GUID
     * @param {String} fieldName document field name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    documentDownloadWithHttpInfo(mode, transactionRecordId, fieldName) {
      let postBody = null;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling documentDownload");
      }
      // verify the required parameter 'transactionRecordId' is set
      if (transactionRecordId === undefined || transactionRecordId === null) {
        throw new Error("Missing the required parameter 'transactionRecordId' when calling documentDownload");
      }
      // verify the required parameter 'fieldName' is set
      if (fieldName === undefined || fieldName === null) {
        throw new Error("Missing the required parameter 'fieldName' when calling documentDownload");
      }

      let pathParams = {
        'mode': mode,
        'transactionRecordId': transactionRecordId,
        'fieldName': fieldName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/{mode}/verifications/v1/documentdownload/{transactionRecordId}/{fieldName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Document Download
     * Download Document
     * @param {String} mode trial or live
     * @param {String} transactionRecordId id of the transactionrecord, this will be a GUID
     * @param {String} fieldName document field name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    documentDownload(mode, transactionRecordId, fieldName) {
      return this.documentDownloadWithHttpInfo(mode, transactionRecordId, fieldName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Transaction Record
     * This method is used to retrieve the request and results of a verification performed using the verify method.  The response for this method includes the same information as verify method's response, along with data present in the input fields of the verify request.
     * @param {String} mode trial or live
     * @param {String} id id of the transactionrecord, this will be a GUID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionRecordResult} and HTTP response
     */
    getTransactionRecordWithHttpInfo(mode, id) {
      let postBody = null;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling getTransactionRecord");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTransactionRecord");
      }

      let pathParams = {
        'mode': mode,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = TransactionRecordResult;
      return this.apiClient.callApi(
        '/{mode}/verifications/v1/transactionrecord/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Transaction Record
     * This method is used to retrieve the request and results of a verification performed using the verify method.  The response for this method includes the same information as verify method's response, along with data present in the input fields of the verify request.
     * @param {String} mode trial or live
     * @param {String} id id of the transactionrecord, this will be a GUID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionRecordResult}
     */
    getTransactionRecord(mode, id) {
      return this.getTransactionRecordWithHttpInfo(mode, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Transaction Record Address
     * Fetch the results of a verification with the TransactionRecordId for the transaction this will include additional information if your account  includes address cleansing.
     * @param {String} mode trial or live
     * @param {String} id id of the transactionrecord, this will be a GUID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionRecordResult} and HTTP response
     */
    getTransactionRecordAddressWithHttpInfo(mode, id) {
      let postBody = null;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling getTransactionRecordAddress");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTransactionRecordAddress");
      }

      let pathParams = {
        'mode': mode,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = TransactionRecordResult;
      return this.apiClient.callApi(
        '/{mode}/verifications/v1/transactionrecord/{id}/withaddress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Transaction Record Address
     * Fetch the results of a verification with the TransactionRecordId for the transaction this will include additional information if your account  includes address cleansing.
     * @param {String} mode trial or live
     * @param {String} id id of the transactionrecord, this will be a GUID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionRecordResult}
     */
    getTransactionRecordAddress(mode, id) {
      return this.getTransactionRecordAddressWithHttpInfo(mode, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Transaction Record Document
     * This method is used to retrieve the document of a verification performed using the verify method.  The response for this method includes the processed base64 JPEG formatted string
     * @param {String} mode trial or live
     * @param {String} transactionRecordID id of the transactionrecord, this will be a GUID
     * @param {String} documentField FieldName of the Document, this will be a string
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    getTransactionRecordDocumentWithHttpInfo(mode, transactionRecordID, documentField) {
      let postBody = null;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling getTransactionRecordDocument");
      }
      // verify the required parameter 'transactionRecordID' is set
      if (transactionRecordID === undefined || transactionRecordID === null) {
        throw new Error("Missing the required parameter 'transactionRecordID' when calling getTransactionRecordDocument");
      }
      // verify the required parameter 'documentField' is set
      if (documentField === undefined || documentField === null) {
        throw new Error("Missing the required parameter 'documentField' when calling getTransactionRecordDocument");
      }

      let pathParams = {
        'mode': mode,
        'transactionRecordID': transactionRecordID,
        'documentField': documentField
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/{mode}/verifications/v1/transactionrecord/{transactionRecordID}/{documentField}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Transaction Record Document
     * This method is used to retrieve the document of a verification performed using the verify method.  The response for this method includes the processed base64 JPEG formatted string
     * @param {String} mode trial or live
     * @param {String} transactionRecordID id of the transactionrecord, this will be a GUID
     * @param {String} documentField FieldName of the Document, this will be a string
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    getTransactionRecordDocument(mode, transactionRecordID, documentField) {
      return this.getTransactionRecordDocumentWithHttpInfo(mode, transactionRecordID, documentField)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Transaction Record Verbose
     * Fetch the results of a verification with the TransactionRecordId for the transaction this will include additional information if your account  includes address cleansing and watchlist details.
     * @param {String} mode trial or live
     * @param {String} id id of the transactionrecord, this will be a GUID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionRecordResult} and HTTP response
     */
    getTransactionRecordVerboseWithHttpInfo(mode, id) {
      let postBody = null;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling getTransactionRecordVerbose");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTransactionRecordVerbose");
      }

      let pathParams = {
        'mode': mode,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = TransactionRecordResult;
      return this.apiClient.callApi(
        '/{mode}/verifications/v1/transactionrecord/{id}/verbose', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Transaction Record Verbose
     * Fetch the results of a verification with the TransactionRecordId for the transaction this will include additional information if your account  includes address cleansing and watchlist details.
     * @param {String} mode trial or live
     * @param {String} id id of the transactionrecord, this will be a GUID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionRecordResult}
     */
    getTransactionRecordVerbose(mode, id) {
      return this.getTransactionRecordVerboseWithHttpInfo(mode, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Transaction Status
     * This method is used to retrieve the processing status of an asynchronous transaction. The response for this method includes the processing status of the verification, the TransactionID, the TransactionRecordID as well as whether the verification request has timed out.
     * @param {String} mode trial or live
     * @param {String} id id of the asynchronous transaction, this will be a GUID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionStatus} and HTTP response
     */
    getTransactionStatusWithHttpInfo(mode, id) {
      let postBody = null;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling getTransactionStatus");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTransactionStatus");
      }

      let pathParams = {
        'mode': mode,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/json'];
      let returnType = TransactionStatus;
      return this.apiClient.callApi(
        '/{mode}/verifications/v1/transaction/{id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Transaction Status
     * This method is used to retrieve the processing status of an asynchronous transaction. The response for this method includes the processing status of the verification, the TransactionID, the TransactionRecordID as well as whether the verification request has timed out.
     * @param {String} mode trial or live
     * @param {String} id id of the asynchronous transaction, this will be a GUID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionStatus}
     */
    getTransactionStatus(mode, id) {
      return this.getTransactionStatusWithHttpInfo(mode, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Verify
     * Calling this method will perform a verification. If your account includes address cleansing set the CleansedAddress flag to get  additional address information in the result.  You can query configuration to get what fields are available to you in each each country.  It is also possible to get sample requests from the customer portal.
     * @param {String} mode trial or live
     * @param {module:model/VerifyRequest} verifyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifyResult} and HTTP response
     */
    verifyWithHttpInfo(mode, verifyRequest) {
      let postBody = verifyRequest;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling verify");
      }
      // verify the required parameter 'verifyRequest' is set
      if (verifyRequest === undefined || verifyRequest === null) {
        throw new Error("Missing the required parameter 'verifyRequest' when calling verify");
      }

      let pathParams = {
        'mode': mode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json', 'text/json'];
      let accepts = ['application/json', 'text/json'];
      let returnType = VerifyResult;
      return this.apiClient.callApi(
        '/{mode}/verifications/v1/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Verify
     * Calling this method will perform a verification. If your account includes address cleansing set the CleansedAddress flag to get  additional address information in the result.  You can query configuration to get what fields are available to you in each each country.  It is also possible to get sample requests from the customer portal.
     * @param {String} mode trial or live
     * @param {module:model/VerifyRequest} verifyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifyResult}
     */
    verify(mode, verifyRequest) {
      return this.verifyWithHttpInfo(mode, verifyRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
