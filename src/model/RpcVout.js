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
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RpcScriptPubKey', 'model/RpcUtxoRune'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RpcScriptPubKey'), require('./RpcUtxoRune'));
  } else {
    // Browser globals (root is window)
    if (!root.SatstreamApi) {
      root.SatstreamApi = {};
    }
    root.SatstreamApi.RpcVout = factory(root.SatstreamApi.ApiClient, root.SatstreamApi.RpcScriptPubKey, root.SatstreamApi.RpcUtxoRune);
  }
}(this, function(ApiClient, RpcScriptPubKey, RpcUtxoRune) {
  'use strict';

  /**
   * The RpcVout model module.
   * @module model/RpcVout
   * @version 1.0
   */

  /**
   * Constructs a new <code>RpcVout</code>.
   * @alias module:model/RpcVout
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RpcVout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RpcVout} obj Optional instance to populate.
   * @return {module:model/RpcVout} The populated <code>RpcVout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('n'))
        obj.n = ApiClient.convertToType(data['n'], 'Number');
      if (data.hasOwnProperty('rune_holdings'))
        obj.runeHoldings = ApiClient.convertToType(data['rune_holdings'], [RpcUtxoRune]);
      if (data.hasOwnProperty('scriptPubKey'))
        obj.scriptPubKey = RpcScriptPubKey.constructFromObject(data['scriptPubKey']);
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} n
   */
  exports.prototype.n = undefined;

  /**
   * @member {Array.<module:model/RpcUtxoRune>} runeHoldings
   */
  exports.prototype.runeHoldings = undefined;

  /**
   * @member {module:model/RpcScriptPubKey} scriptPubKey
   */
  exports.prototype.scriptPubKey = undefined;

  /**
   * @member {Number} value
   */
  exports.prototype.value = undefined;


  return exports;

}));
