/**********************************************
 Boilerplate ends here for CometChat testing .
**********************************************/
const window = require("browser-env")({
  url: "http://www.runtestcases.com",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});
const fetch = require("node-fetch");
const CometChat = require("@cometchat-pro/chat").CometChat;
window.fetch = fetch;
global.fetch = fetch;

/***************************************
 Boilerplate ends here for CometChat.
***************************************/

var chai = require("chai");
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised).should();
const assert = chai.assert;

var appId = "247908b08eab7",
  uid = "superhero1",
  invalidUid = "adxasd",
  apiKey = "9c3607b6862f23477741472cbb0ac1beffa9a410",
  validLimit = 30,
  negativeLimit = -21,
  zeroLimit = 0,
  validKeyWord = 'cap',
  invalidKeyWord = 12,
  emptyKeyWord = '',
  emptyStatus = '',
  validStatus = 'online',
  invalidStatus = 'status';

describe("User Test Cases", function() {
  this.timeout(0);

  before(async function() {
    if (!CometChat.isInitialized()) {
      let cometChatSettings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CometChat.AppSettings.REGION_US).build();
      await CometChat.init(appId,cometChatSettings);
    }
    expect(CometChat.isInitialized()).to.be.true;
    let user = await CometChat.login(uid, apiKey);
    expect(user).to.be.instanceof(CometChat.AppUser);
  });

  it("Should get the current logged in user's information", function() {
    return CometChat.getLoggedinUser().then(
      user => {
        expect(user).have.property("uid");
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        throw new Error(`Expected success but got error`);
      }
    );
  });

  /*
  *********************************************************
  ************************USER LIST************************
  *********************************************************
  */

  /* NO METHODS START */

  it("Should return error without any methods", function() {
    var usersRequest = new CometChat.UsersRequestBuilder().build();
    return usersRequest.fetchNext().then(
      userList => {
        throw new Error(`Expected error but got success`);
        // expect(userList.length).to.be.greaterThan(0) && expect(userList).to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        // throw new Error(`Expected success but got error`);
      }
    );
  });

  /* NO METHODS END */

  /* ALL METHODS START */

  it("Should get the user list with all valid params", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(validLimit)
      .setSearchKeyword(validKeyWord)
      .setStatus(validStatus)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).to.be.an.instanceof(Array);
      },
      error => {
        console.log(error)
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        throw new Error(`Expected success but got error`);
      }
    );
  });

  it("Should return error with invalid status", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(validLimit)
      .setSearchKeyword(validKeyWord)
      .setStatus(invalidStatus)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).to.be.an.instanceof(Array);
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  it("Should return error if invalid keyword is passed", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(validLimit)
      .setSearchKeyword(invalidKeyWord)
      .setStatus(validStatus)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        console.log(userList);
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  it("Should return error if invalid keyword and invalid status is passed", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(validLimit)
      .setSearchKeyword(invalidKeyWord)
      .setStatus(invalidStatus)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        throw new Error(`Expected error but got success`);
        // expect(userList.length).to.be.equal(0) || expect(userList).to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  it("Should return an error if invalid limit is passed", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(negativeLimit)
      .setSearchKeyword(validKeyWord)
      .setStatus(validStatus)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).to.be.an.instanceof(Array);
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  it("Should return an error if invalid limit and invalid status is passed", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(negativeLimit)
      .setSearchKeyword(validKeyWord)
      .setStatus(invalidStatus)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).to.be.an.instanceof(Array);
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  it("Should return an error if invalid limit and invalid keyword is passed", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(negativeLimit)
      .setSearchKeyword(invalidKeyWord)
      .setStatus(validStatus)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).to.be.an.instanceof(Array);
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  it("Should return an error if invalid limit, invalid keyword and invalid status is passed", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(negativeLimit)
      .setSearchKeyword(invalidKeyWord)
      .setStatus(invalidKeyWord)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).to.be.an.instanceof(Array);
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  /* ALL METHODS END */

  /*
  ********************************************************
  ********************USER INFORMATION********************
  ********************************************************
  */

  it("Should get the user info with correct appId", function() {
    CometChat.getUser(uid).then(
      user => {
        expect(user).to.be.an.instanceof(CometChat.User) && expect(user.uid).to.be.equal(uid);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        throw new Error(`Expected success but got error`);
      }
    );
  });

  it("Should return error on invalid UID", function() {
    CometChat.getUser(invalidUid).then(
      user => {
        expect(user).to.be.an.instanceof(CometChat.User);
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException) && expect(error.code).to.be.equal('ERR_UID_NOT_FOUND');
      }
    );
  });

  /*
  ********************************************************
  ***********************BLOCK USER***********************
  ********************************************************
  */

  it("Should return list of blocked users on valid array of users passed", function() {
    var usersList = ["superhero2"];
    CometChat.blockUsers(usersList).then(
      list => {
        expect(list[usersList[0]].success).to.be.true;
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        throw new Error(`Expected success but got error`);
      }
    );
  });

  it("Should return error when invalid array of users is passed", function() {
    var usersList = ["asdwer1"];
    CometChat.blockUsers(usersList).then(
      list => {
        throw new Error(`Expected error but got success`);
        // expect(list[usersList[0]].success).to.be.false;
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        // throw new Error(`Expected success but got error`);
      }
    );
  });

  it("Should return error on empty array of users passed", function() {
    var usersList = [];
    CometChat.blockUsers(usersList).then(
      list => {
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        
      }
    );
  });

  /*
  ********************************************************
  **********************UNBLOCK USER**********************
  ********************************************************
  */

  it("Should return list of users (who are unblocked succesfully) on valid array of users passed", function() {
    var usersList = ["superhero2"];
    CometChat.unblockUsers(usersList).then(
      list => {
        expect(list[usersList[0]].success).to.be.true;
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        throw new Error(`Expected success but got error`);
      }
    );
  });

  it("Should return list of users (who are unblocked succesfully) on invalid array of users passed", function() {
    var usersList = ["asdwer1"];
    CometChat.unblockUsers(usersList).then(
      list => {
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        // throw new Error(`Expected success but got error`);
      }
    );
  });

  it("Should return error on empty array of users passed", function() {
    var usersList = [];
    CometChat.unblockUsers(usersList).then(
      list => {
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  /*
  ********************************************************
  ******************LIST OF BLOCKED USER******************
  ********************************************************
  */

  /* GET LIST OF BLOCKED USERS WITH NO METHODS START */

  it("Should return eror with no methods", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder().build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        throw new Error(`Expected error but got success`);
        // expect(userList).to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        // throw new Error(`Expected success but got error`);
      }
    );
  });

  /* GET LIST OF BLOCKED USERS WITH NO METHODS END */

  /* GET LIST OF BLOCKED USERS ALL METHOD START */

  it("Should get the blocked user list with valid params", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(validLimit)
      .setSearchKeyWord(validKeyWord)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
        throw new Error(`Expected success but got error`);
      }
    );
  });


  it("Should return userList with 0 users if invalid keyword is passed", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(validLimit)
      .setSearchKeyWord(invalidKeyWord)
      .setDirection('BOTH')
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).be.an.instanceof(CometChat.CometChatException);
        
      }
    );
  });


  it("Should return error if invalid limit is passed", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(negativeLimit)
      .setSearchKeyWord(validKeyWord)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).to.be.an.instanceof(Array);
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });


  it("Should return error if invalid limit and invalid keyword is passed", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(negativeLimit)
      .setSearchKeyWord(invalidKeyWord)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).to.be.an.instanceof(Array);
        throw new Error(`Expected error but got success`);
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  /* GET LIST OF BLOCKED USERS ALL METHOD END */

  after("logout", function() {
    console.log("logging out");
    return CometChat.logout().then(
      () => {
        expect(true).to.be.true;
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });
});