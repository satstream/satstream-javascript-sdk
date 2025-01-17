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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SatstreamJavascriptSdk);
  }
}(this, function(expect, SatstreamJavascriptSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AllOfBlockVin2ScriptSig', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.AllOfBlockVin2ScriptSig();
      });

      it('should create an instance of AllOfBlockVin2ScriptSig', function() {
        // TODO: update the code to test AllOfBlockVin2ScriptSig
        expect(instance).to.be.a(SatstreamJavascriptSdk.AllOfBlockVin2ScriptSig);
      });

    });
  });

}));
