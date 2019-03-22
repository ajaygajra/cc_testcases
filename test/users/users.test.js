/**********************************************
   Boilerplate ends here for CometChat testing .
 **********************************************/
const window = require('browser-env')({
    url: "http://www.runtestcases.com",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
});
const fetch = require('node-fetch');
const CometChat = require('@cometchat-pro/chat').CometChat;
window.fetch = fetch;
global.fetch = fetch;

/***************************************
   Boilerplate ends here for CometChat.
 ***************************************/



var chai = require('chai');
var expect = require('chai').expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const assert = require('chai').assert;

const appId = "1089f54cd9e81d",
    uid = "jstestuser1",
    invalidUid = 'jstestuser',
    invalidApiKey = '3de4f1672b44a43f1593ea03a27e3b3202a3869C',
    apiKey = "fe9d19181100853ce4aab9c096ea851716cd9554";



describe('Get the current loggedin user', function () {
    this.timeout(10000);    

    before(async function () {
        await CometChat.init(appId);
        if (CometChat.isInitialized()) {
            let user = await CometChat.login(uid, apiKey);
            expect(user).to.be.instanceof(CometChat.AppUser);
        }
    });


    it('Should get the current logged in user\'s information', function () {
        return CometChat.getLoggedinUser().should.eventually.have.property('uid');
    });

    it('Should get the user list', function () {
        var limit = 30;
        var usersRequest = new CometChat.UsersRequestBuilder().setLimit(limit).build();
        return usersRequest.fetchNext().should.eventually.to.be.an.instanceof(Array)
    });

    it('Should get the user list without limit', function () {
        var usersRequest = new CometChat.UsersRequestBuilder().setLimit(0).build();
        return usersRequest.fetchNext().should.eventually.to.be.an.instanceof(Array)
    });

    it('Should get the user list without limit1', function () {
        var limit=0;
        var usersRequest = new CometChat.UsersRequestBuilder().setLimit(limit).build();
        return usersRequest.fetchNext().should.eventually.to.be.an.instanceof(Array)
    });




      after("logout", function () {
          console.log("logging out");
          return CometChat.logout().then(() => {              
              expect(true).to.be.true;
          }, error => {             
              expect(error).to.be.an.instanceof(CometChat.CometChatException);
          });
      });
});
