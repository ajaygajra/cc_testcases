const chai = require('Chai');
var assert = chai.assert;
var expect = chai.expect;
const window = require('browser-env')({
  url: "http://www.runtestcases.com",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});
const CometChat = require('@cometchat-pro/chat').CometChat;
const fetch = require('node-fetch');
window.fetch = fetch;
global.fetch = fetch;
const validappId = "1066625ca50d45b";
const emptyappId = "";
let cometChatSettings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CometChat.AppSettings.REGION_EU).build();
var testCase = [
  {
    "test_description" : "Cometchat init Method without APP ID",
    "method_name" : "CometChat.init()",
    "parameter" : [emptyappId,cometChatSettings],
    "expected_output" : 'error'
  },
  {
    "test_description" : "Cometchat init Method with Valid APP ID",
    "method_name" : "CometChat.init()",
    "parameter" : [validappId,cometChatSettings],
    "expected_output" : 'success'
  }
  
];
     
    


describe('CometChat Initialization Method', function() {

  testCase.map(test=>{

    it( test.test_description, function() {      

      return CometChat.init(...test.parameter).then(
        () => {
          if(test.expected_output === 'success'){
            assert.equal(CometChat.isInitialized(),true)
          }else{
            throw new Error(`Expected success but got error`);
          }
          
        }, 
        error => {
          if(test.expected_output === 'error'){
            expect(error).to.exist;
          }else{
            throw new Error(`Expected error but got success`);
          }
          
        }
      );
    });    
 });


}); 