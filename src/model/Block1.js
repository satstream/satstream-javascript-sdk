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

/**
 * The Block1 model module.
 * @module model/Block1
 * @version 1.0.43
 */
export default class Block1 {
  /**
   * Constructs a new <code>Block1</code>.
   * @alias module:model/Block1
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Block1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Block1} obj Optional instance to populate.
   * @return {module:model/Block1} The populated <code>Block1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Block1();
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
        obj.tx = ApiClient.convertToType(data['tx'], ['String']);
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
Block1.prototype.bits = undefined;

/**
 * @member {String} chainwork
 */
Block1.prototype.chainwork = undefined;

/**
 * @member {Number} confirmations
 */
Block1.prototype.confirmations = undefined;

/**
 * @member {Number} difficulty
 */
Block1.prototype.difficulty = undefined;

/**
 * @member {String} hash
 */
Block1.prototype.hash = undefined;

/**
 * @member {Number} height
 */
Block1.prototype.height = undefined;

/**
 * @member {Number} mediantime
 */
Block1.prototype.mediantime = undefined;

/**
 * @member {String} merkleroot
 */
Block1.prototype.merkleroot = undefined;

/**
 * @member {Number} nTx
 */
Block1.prototype.nTx = undefined;

/**
 * @member {String} nextblockhash
 */
Block1.prototype.nextblockhash = undefined;

/**
 * @member {Number} nonce
 */
Block1.prototype.nonce = undefined;

/**
 * @member {String} previousblockhash
 */
Block1.prototype.previousblockhash = undefined;

/**
 * @member {Number} size
 */
Block1.prototype.size = undefined;

/**
 * @member {Number} strippedsize
 */
Block1.prototype.strippedsize = undefined;

/**
 * @member {Number} time
 */
Block1.prototype.time = undefined;

/**
 * @member {Array.<String>} tx
 */
Block1.prototype.tx = undefined;

/**
 * @member {Number} version
 */
Block1.prototype.version = undefined;

/**
 * @member {String} versionHex
 */
Block1.prototype.versionHex = undefined;

/**
 * @member {Number} weight
 */
Block1.prototype.weight = undefined;

