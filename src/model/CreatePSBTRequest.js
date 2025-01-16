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
 * Swagger Codegen version: 3.0.66
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import CreatePSBTInput from './CreatePSBTInput';

/**
 * The CreatePSBTRequest model module.
 * @module model/CreatePSBTRequest
 * @version 1.0.38
 */
export default class CreatePSBTRequest {
  /**
   * Constructs a new <code>CreatePSBTRequest</code>.
   * @alias module:model/CreatePSBTRequest
   * @class
   * @param inputs {Array.<module:model/CreatePSBTInput>} The inputs for the transaction
   * @param outputs {Array.<Object.<String, Object>>} The outputs (address:amount pairs or {\"data\":\"hex\"})
   */
  constructor(inputs, outputs) {
    this.inputs = inputs;
    this.outputs = outputs;
  }

  /**
   * Constructs a <code>CreatePSBTRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePSBTRequest} obj Optional instance to populate.
   * @return {module:model/CreatePSBTRequest} The populated <code>CreatePSBTRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePSBTRequest();
      if (data.hasOwnProperty('inputs'))
        obj.inputs = ApiClient.convertToType(data['inputs'], [CreatePSBTInput]);
      if (data.hasOwnProperty('locktime'))
        obj.locktime = ApiClient.convertToType(data['locktime'], 'Number');
      if (data.hasOwnProperty('outputs'))
        obj.outputs = ApiClient.convertToType(data['outputs'], [{'String': Object}]);
      if (data.hasOwnProperty('replaceable'))
        obj.replaceable = ApiClient.convertToType(data['replaceable'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The inputs for the transaction
 * @member {Array.<module:model/CreatePSBTInput>} inputs
 */
CreatePSBTRequest.prototype.inputs = undefined;

/**
 * Raw locktime. Non-0 value also locktime-activates inputs
 * @member {Number} locktime
 */
CreatePSBTRequest.prototype.locktime = undefined;

/**
 * The outputs (address:amount pairs or {\"data\":\"hex\"})
 * @member {Array.<Object.<String, Object>>} outputs
 */
CreatePSBTRequest.prototype.outputs = undefined;

/**
 * Marks this transaction as BIP125-replaceable
 * @member {Boolean} replaceable
 */
CreatePSBTRequest.prototype.replaceable = undefined;

