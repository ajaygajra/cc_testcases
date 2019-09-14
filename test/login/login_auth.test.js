const chai = require("Chai");
var expect = chai.expect;
var chaiHttp = require('chai-http');
const window = require("browser-env")({
  url: "http://www.runtestcases.com",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});
const CometChat = require("@cometchat-pro/chat").CometChat;

const fetch = require("node-fetch");

window.fetch = fetch;
global.fetch = fetch;

var uid = "superhero1";
var appId = "247908b08eab7";
var api_key = "9c3607b6862f23477741472cbb0ac1beffa9a410";
var valid_auth_token = "superhero1_6102e84f8f49755023f1aa714eb0eff19be858d0";
var invalid_auth_token = "invalid";
var empty_auth_token = "";

chai.use(chaiHttp);

  const testCaseLoginAuthValid = [
    {
      test_description: "Cometchat login with Auth Token Method with Valid Auth_TOKEN",
      parameter: [],
      method_name: "CometChat.login()",
      expected_output: 'success'
    }
  ];

  const testCaseLoginAuthInvalid = [
    {
      test_description: "Cometchat login with Auth Token Method with Invalid Auth_TOKEN",
      parameter: [],
      method_name: "CometChat.login()",
      expected_output: 'error'
    }
  ];

  const testCaseLoginAuthEmpty = [
    {
      test_description: "Cometchat login with Auth Token Method with Empty Auth_TOKEN",
      parameter: [],
      method_name: "CometChat.login()",
      expected_output: 'error'
    }
  ];

  // Login Method - Authtoken
describe("CometChat Login Method - VALID Auth Token", function() {
    this.timeout(0);
    var authToken;
    before(async function() {
      if (!CometChat.isInitialized()) {
        let cometChatSettings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CometChat.AppSettings.REGION_US).build();
        await CometChat.init(appId,cometChatSettings);
      }
      expect(CometChat.isInitialized()).to.be.true;
    });
  
    testCaseLoginAuthValid.map(test => {
      it(test.test_description, function() {
        chai
          .request('https://api-us.cometchat-dev.com/v2.0/')
          .post('users/'+uid+'/auth_tokens')
          .set('appId', appId)
          .set('apiKey', api_key)
          .end(function(err,res){
            if(err){
              console.log(err);
            }else{
              authToken = res.body.data.authToken;
              return cometchatLoginAuth(test.expected_output,authToken);
            }
          });
      });
    });

  });

  describe("CometChat Login Method - INVALID AND EMPTY Auth Token", function() {
    this.timeout(0);
    before(async function() {
      if (!CometChat.isInitialized()) {
        let cometChatSettings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CometChat.AppSettings.REGION_US).build();
        await CometChat.init(appId,cometChatSettings);
      }
      expect(CometChat.isInitialized()).to.be.true;
    });

    testCaseLoginAuthInvalid.map(test => {
      it(test.test_description, function() {
        return cometchatLoginAuth(test.expected_output,"invalid");
      });
    });

    testCaseLoginAuthEmpty.map(test => {
      it(test.test_description, function() {
        return cometchatLoginAuth(test.expected_output,"invalid");
      });
    });

  });

  function cometchatLoginAuth(expected_output,arguments_1){
    return ()=> {
      CometChat.login(arguments_1).then(
        user => {
          if(expected_output === 'success'){
            if(user){
              expect(user).to.be.an.instanceof(CometChat.User);
              cometchatLogout();
            }
          }else{
            throw new Error(`Expected error but got success`);
          }
        },
        error => {
          if(expected_output === 'error'){
            expect(error).to.be.an.instanceof(CometChat.CometChatException);
          }else{
            throw new Error(`Expected success but got error`);
          }
        }
      );
    }
  }

  function cometchatLogout() {
    return CometChat.logout().then(
      () => {
        expect(true).to.be.true;
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  }