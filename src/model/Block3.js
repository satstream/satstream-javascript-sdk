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
import BtcTx3 from './BtcTx3';

/**
 * The Block3 model module.
 * @module model/Block3
 * @version 1.0.21
 */
export default class Block3 {
  /**
   * Constructs a new <code>Block3</code>.
   * @alias module:model/Block3
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Block3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Block3} obj Optional instance to populate.
   * @return {module:model/Block3} The populated <code>Block3</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Block3();
      if (data.hasOwnProperty('bits'))
        obj.bits = ApiClient.convertToType(data['bits'], 'String');
      if (data.hasOwnProperty('chainwork'))
        obj.chainwork = ApiClient.convertToType(data['chainwork'], 'String');
      if (data.hasOwnProperty('confirmations'))
        obj.confirmations = ApiClient.convertToType(data['confirmations'], 'Number');
      if (data.hasOwnProperty('difficulty'))
        obj.difficulty = ApiClient.convertToType(data['difficulty'], 'Number');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('mediantime'))
        obj.mediantime = ApiClient.convertToType(data['mediantime'], 'Number');
      if (data.hasOwnProperty('merkleroot'))
        obj.merkleroot = ApiClient.convertToType(data['merkleroot'], 'String');
      if (data.hasOwnProperty('nTx'))
        obj.nTx = ApiClient.convertToType(data['nTx'], 'Number');
      if (data.hasOwnProperty('nextblockhash'))
        obj.nextblockhash = ApiClient.convertToType(data['nextblockhash'], 'String');
      if (data.hasOwnProperty('nonce'))
        obj.nonce = ApiClient.convertToType(data['nonce'], 'Number');
      if (data.hasOwnProperty('previousblockhash'))
        obj.previousblockhash = ApiClient.convertToType(data['previousblockhash'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('strippedsize'))
        obj.strippedsize = ApiClient.convertToType(data['strippedsize'], 'Number');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
      if (data.hasOwnProperty('tx'))
        obj.tx = ApiClient.convertToType(data['tx'], [BtcTx3]);
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'Number');
      if (data.hasOwnProperty('versionHex'))
        obj.versionHex = ApiClient.convertToType(data['versionHex'], 'String');
      if (data.hasOwnProperty('weight'))
        obj.weight = ApiClient.convertToType(data['weight'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} bits
 */
Block3.prototype.bits = undefined;

/**
 * @member {String} chainwork
 */
Block3.prototype.chainwork = undefined;

/**
 * @member {Number} confirmations
 */
Block3.prototype.confirmations = undefined;

/**
 * @member {Number} difficulty
 */
Block3.prototype.difficulty = undefined;

/**
 * @member {String} hash
 */
Block3.prototype.hash = undefined;

/**
 * @member {Number} height
 */
Block3.prototype.height = undefined;

/**
 * @member {Number} mediantime
 */
Block3.prototype.mediantime = undefined;

/**
 * @member {String} merkleroot
 */
Block3.prototype.merkleroot = undefined;

/**
 * @member {Number} nTx
 */
Block3.prototype.nTx = undefined;

/**
 * @member {String} nextblockhash
 */
Block3.prototype.nextblockhash = undefined;

/**
 * @member {Number} nonce
 */
Block3.prototype.nonce = undefined;

/**
 * @member {String} previousblockhash
 */
Block3.prototype.previousblockhash = undefined;

/**
 * @member {Number} size
 */
Block3.prototype.size = undefined;

/**
 * @member {Number} strippedsize
 */
Block3.prototype.strippedsize = undefined;

/**
 * @member {Number} time
 */
Block3.prototype.time = undefined;

/**
 * List of fully detailed transactions
 * @member {Array.<module:model/BtcTx3>} tx
 */
Block3.prototype.tx = undefined;

/**
 * @member {Number} version
 */
Block3.prototype.version = undefined;

/**
 * @member {String} versionHex
 */
Block3.prototype.versionHex = undefined;

/**
 * @member {Number} weight
 */
Block3.prototype.weight = undefined;

