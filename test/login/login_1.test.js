const chai = require("Chai");
var expect = chai.expect;
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

const valid_appId = "247908b08eab7";
const valid_uid = "superhero1";
const invalid_uid = "invalid";
const empty_uid = "";
const valid_api_key = "9c3607b6862f23477741472cbb0ac1beffa9a410";
const invalid_api_key = "invalid";
const empty_api_key = "";

var testCaseLogin = [
  {
    test_description:
      "Cometchat login with API KEY Method with Valid UID, Valid APIKEY",
    parameter: [valid_uid, valid_api_key],
    method_name: "CometChat.login()",
    expected_output: 'success'
  }
];

var testCaseInvalidLogin = [
  {
    test_description:
      "Cometchat login with API KEY Method with Valid UID, Invalid APIKEY",
    parameter: [valid_uid, invalid_api_key],
    method_name: "CometChat.login()",
    expected_output: 'error'
  },
  {
    test_description:
      "Cometchat login with API KEY Method with Invalid UID, Valid APIKEY",
    parameter: [invalid_uid, valid_api_key],
    method_name: "CometChat.login()",
    expected_output: 'error'
  },
  {
    test_description:
      "Cometchat login with API KEY Method with Invalid UID, Invalid APIKEY",
    parameter: [invalid_uid, invalid_api_key],
    method_name: "CometChat.login()",
    expected_output: 'error'
  },
  {
    test_description:
      "Cometchat login with API KEY Method with Empty UID, Valid APIKEY",
    parameter: [empty_uid, valid_api_key],
    method_name: "CometChat.login()",
    expected_output: 'error'
  },
  {
    test_description:
      "Cometchat login with API KEY Method with Empty UID, Invalid APIKEY",
    parameter: [empty_uid, invalid_api_key],
    method_name: "CometChat.login()",
    expected_output: 'error'
  },
  {
    test_description:
      "Cometchat login with API KEY Method with Empty UID, Empty APIKEY",
    parameter: [empty_uid, empty_api_key],
    method_name: "CometChat.login()",
    expected_output: 'error'
  },
  {
    test_description:
      "Cometchat login with API KEY Method with Invalid UID, Emtpy APIKEY",
    parameter: [invalid_uid, empty_api_key],
    method_name: "CometChat.login()",
    expected_output: 'error'
  },
  {
    test_description:
      "Cometchat login with API KEY Method with Valid UID, Empty APIKEY",
    parameter: [valid_uid, empty_api_key],
    method_name: "CometChat.login()",
    expected_output: 'error'
  }
]

// Login Method
describe("CometChat Login Method - valid test cases", function() {
  this.timeout(0);

  before(async function() {
    if (!CometChat.isInitialized()) {
      let cometChatSettings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CometChat.AppSettings.REGION_US).build();
      await CometChat.init(valid_appId,cometChatSettings);
    }
    expect(CometChat.isInitialized()).to.be.true;
  });
  
  testCaseLogin.map(test => {
    it(test.test_description, function() {
      return cometchatLogin(test.expected_output,...test.parameter);
    });
  });
});

describe("CometChat Login Method - invalid test cases", function() {
  this.timeout(0);

  before(async function() {
    if (!CometChat.isInitialized()) {
      let cometChatSettings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CometChat.AppSettings.REGION_US).build();
      await CometChat.init(valid_appId,cometChatSettings);
    }
    expect(CometChat.isInitialized()).to.be.true;
  });
  
  testCaseInvalidLogin.map(test => {
    it(test.test_description, function() {
      return cometchatLogin(test.expected_output,...test.parameter);
    });
  });

});

function cometchatLogin(expected_output,...args) {
    return CometChat.login(...args).then(
      async user => {
        if(expected_output === 'success'){
          if(user){
            expect(user).to.be.an.instanceof(CometChat.User);
            await cometchatLogout();
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