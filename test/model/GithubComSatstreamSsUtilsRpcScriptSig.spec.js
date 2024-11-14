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
    describe('GithubComSatstreamSsUtilsRpcScriptSig', function() {
      beforeEach(function() {
        instance = new SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcScriptSig();
      });

      it('should create an instance of GithubComSatstreamSsUtilsRpcScriptSig', function() {
        // TODO: update the code to test GithubComSatstreamSsUtilsRpcScriptSig
        expect(instance).to.be.a(SatstreamJavascriptSdk.GithubComSatstreamSsUtilsRpcScriptSig);
      });

      it('should have the property asm (base name: "asm")', function() {
        // TODO: update the code to test the property asm
        expect(instance).to.have.property('asm');
        // expect(instance.asm).to.be(expectedValueLiteral);
      });

      it('should have the property hex (base name: "hex")', function() {
        // TODO: update the code to test the property hex
        expect(instance).to.have.property('hex');
        // expect(instance.hex).to.be(expectedValueLiteral);
      });

    });
  });

}));
