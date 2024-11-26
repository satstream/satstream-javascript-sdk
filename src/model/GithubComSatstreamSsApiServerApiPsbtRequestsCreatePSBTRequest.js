/*
 * Satstream API
 * Satstream API
 *
 * OpenAPI spec version: 1.0
 * Contact: team@satstream.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.64
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTInput from './GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTInput';
import GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTOutput from './GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTOutput';

/**
 * The GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest model module.
 * @module model/GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest
 * @version 1.0.19
 */
export default class GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest {
  /**
   * Constructs a new <code>GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest</code>.
   * @alias module:model/GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest
   * @class
   * @param inputs {Array.<module:model/GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTInput>} 
   * @param outputs {Array.<module:model/GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTOutput>} 
   */
  constructor(inputs, outputs) {
    this.inputs = inputs;
    this.outputs = outputs;
  }

  /**
   * Constructs a <code>GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest} obj Optional instance to populate.
   * @return {module:model/GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest} The populated <code>GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest();
      if (data.hasOwnProperty('inputs'))
        obj.inputs = ApiClient.convertToType(data['inputs'], [GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTInput]);
      if (data.hasOwnProperty('locktime'))
        obj.locktime = ApiClient.convertToType(data['locktime'], 'Number');
      if (data.hasOwnProperty('outputs'))
        obj.outputs = ApiClient.convertToType(data['outputs'], [GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTOutput]);
      if (data.hasOwnProperty('replaceable'))
        obj.replaceable = ApiClient.convertToType(data['replaceable'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTInput>} inputs
 */
GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest.prototype.inputs = undefined;

/**
 * @member {Number} locktime
 */
GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest.prototype.locktime = undefined;

/**
 * @member {Array.<module:model/GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTOutput>} outputs
 */
GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest.prototype.outputs = undefined;

/**
 * @member {Boolean} replaceable
 */
GithubComSatstreamSsApiServerApiPsbtRequestsCreatePSBTRequest.prototype.replaceable = undefined;
