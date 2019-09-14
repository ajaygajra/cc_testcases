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
var expect = require("chai").expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised).should();
const assert = require("chai").assert;

const appId = "100254e8db3d1b",
  uid = "superhero1",
  invalidUid = "adxasd",
  apiKey = "ebae51bfa38bb5f2f21266bd2e9f58b64c87ab9a",
  validLimit = 30,
  negativeLimit = -21,
  zeroLimit = 0,
  validKeyWord = 'cap',
  invalidKeyWord = '10',
  emptyKeyWord = '',
  emptyStatus = '',
  validStatus = 'online',
  invalidStatus = 'status';

describe("User Test Cases", function() {
  this.timeout(0);

  before(async function() {
    await CometChat.init(appId);
    if (CometChat.isInitialized()) {
      let user = await CometChat.login(uid, apiKey);
      expect(user).to.be.instanceof(CometChat.AppUser);
    }
  });

  // it("Should get the current logged in user's information", function() {
  //   return CometChat.getLoggedinUser().then(
  //     user => {
  //       expect(user).have.property("uid");
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  /*
  *********************************************************
  ************************USER LIST************************
  *********************************************************
  */

  /* NO METHODS START */

  // it("Should get the user list without any methods", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder().build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList)
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // /* NO METHODS END */

  // /* LIMIT START */

  // it("Should get the user list with limit 0", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(zeroLimit)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the user list with valid limit", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length);
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return an error if negative limit is passed to setLimit()", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       console.log(error);
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return error if empty limit is passed to setLimit()", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder().setLimit().build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length);
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       console.log(error)
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // /* LIMIT END */

  // /* SEARCH KEYWORD START */

  // it("Should get the user list with vaild search keyword", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return error if invalid keyword is passed to setSearchKeyWord()", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length)
  //       expect(userList.length).to.be.equal(0);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the user list with empty search keyword", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList.length).to.be.equal(0);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }  
  //   );
  // });

  // /* SEARCH KEYWORD END */

  // /* STATUS START */

  // it("Should get the user list with status online", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setStatus(validStatus)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length)
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the user list with status offline", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setStatus("offline")
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the user list with status empty", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setStatus(emptyStatus)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length)
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the user list with invalid status", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setStatus(invalidStatus)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length)
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // /* STATUS END */

  // /* HIDE BLOCKED USER START */

  // it("Should get the user list with hideBlockedUsers true", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .hideBlockedUsers(true)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length)
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the user list with hideBlockedUsers false", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .hideBlockedUsers(false)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });
  
  // it("Should get the user list with hideBlockedUsers empty", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .hideBlockedUsers()
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length)
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the user list with hideBlockedUsers invalid", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .hideBlockedUsers('abcd')
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length)
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // /* HIDE BLOCKED USER END */

  // /* ALL METHODS START */

  // it("Should get the user list with all valid params", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setStatus(validStatus)
  //     .hideBlockedUsers(false)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList);
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the user list with empty hideBlockedUser", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setStatus(validStatus)
  //     .hideBlockedUsers()
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length)
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the user list with invalid status", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setStatus(invalidStatus)
  //     .hideBlockedUsers(false)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return userList if invalid status and empty hideBlockedUsers is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setStatus(invalidStatus)
  //     .hideBlockedUsers()
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       console.log(userList.length)
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return userList if invalid keyword is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setStatus(validStatus)
  //     .hideBlockedUsers(false)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList.length).to.be.equal(0);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return an error if invalid keyword and empty hideBlockedUsers is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setStatus(validStatus)
  //     .hideBlockedUsers()
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList.length).to.be.equal(0);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid keyword and invalid status is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setStatus(invalidStatus)
  //     .hideBlockedUsers(true)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList.length).to.be.equal(0);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid keyword, invalid status and empty hideBlockedUsers is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setStatus(invalidStatus)
  //     .hideBlockedUsers()
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList.length).to.be.equal(0);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid limit is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setStatus(validStatus)
  //     .hideBlockedUsers(false)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid limit and empty hideBlockedUsers is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setStatus(validStatus)
  //     .hideBlockedUsers()
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid limit and invalid status is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setStatus(invalidStatus)
  //     .hideBlockedUsers(false)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid limit, invalid status and empty hideBlockedUser is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setStatus(invalidStatus)
  //     .hideBlockedUsers()
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid limit and invalid keyword is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setStatus(validStatus)
  //     .hideBlockedUsers(false)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid limit, invalid keyword and empty hideBlockedUsers is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setStatus(validStatus)
  //     .hideBlockedUsers()
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid limit, invalid keyword and invalid status is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setStatus(invalidKeyWord)
  //     .hideBlockedUsers(false)
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if invalid limit, invalid keyword, invalid status and empty hideBlockedUsers is passed", function() {
  //   var usersRequest = new CometChat.UsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setStatus(invalidStatus)
  //     .hideBlockedUsers()
  //     .build();
  //   return usersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // /* ALL METHODS END */

  // /*
  // ********************************************************
  // ********************USER INFORMATION********************
  // ********************************************************
  // */

  // it("Should get the user info with correct appId", function() {
  //   CometChat.getUser(uid).then(
  //     user => {
  //       expect(user).to.be.an.instanceof(CometChat.User) && expect(user.uid).to.be.equal(uid);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return error on invalid UID", function() {
  //   CometChat.getUser(invalidUid).then(
  //     user => {
  //       expect(user).to.be.an.instanceof(CometChat.User);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException) && expect(error.code).to.be.equal('ERR_UID_NOT_FOUND');
  //     }
  //   );
  // });

  /*
  ********************************************************
  ***********************BLOCK USER***********************
  ********************************************************
  */

  // it("Should return list of blocked users on valid array of users passed", function() {
  //   var usersList = ["superhero2"];
  //   CometChat.blockUsers(usersList).then(
  //     list => {
  //       console.log(list);
  //       expect(list[usersList[0]].success).to.be.true;
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return error when invalid array of users is passed", function() {
  //   var usersList = ["asdwer1"];
  //   CometChat.blockUsers(usersList).then(
  //     list => {
  //       console.log(list);
  //       expect(list[usersList[0]].success).to.be.false;
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return list of blocked users on empty array of users passed", function() {
  //   var usersList = [];
  //   CometChat.blockUsers(usersList).then(
  //     list => {
  //       console.log(list)
  //       expect(list[usersList[0]].success).to.be.false;
  //     },
  //     error => {
  //       console.log(error)
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  /*
  ********************************************************
  **********************UNBLOCK USER**********************
  ********************************************************
  */

  // it("Should return list of users (who are unblocked succesfully) on valid array of users passed", function() {
  //   var usersList = ["superhero2"];
  //   CometChat.unblockUsers(usersList).then(
  //     list => {
  //       expect(list[usersList[0]].success).to.be.true;
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return list of users (who are unblocked succesfully) on invalid array of users passed", function() {
  //   var usersList = ["asdwer1"];
  //   CometChat.unblockUsers(usersList).then(
  //     list => {
  //       console.log(list)
  //       expect(list[usersList[0]].success).to.be.false;
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return list of users (who are unblocked succesfully) on empty array of users passed", function() {
  //   var usersList = [];
  //   CometChat.unblockUsers(usersList).then(
  //     list => {
  //       console.log(list)
  //       expect(list[usersList[0]].success).to.be.false;
  //     },
  //     error => {
  //       console.log(error)
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  /*
  ********************************************************
  ******************LIST OF BLOCKED USER******************
  ********************************************************
  */

  /* GET LIST OF BLOCKED USERS WITH NO METHODS START */

  // it("Should get the blocked user list with no methods", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder().build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  /* GET LIST OF BLOCKED USERS WITH NO METHODS END */

  /* GET LIST OF BLOCKED USERS WITH LIMIT START */

  // it("Should get the blocked user list with zero limit", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(zeroLimit)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return an error if negative limit is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return an error if empty limit is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit()
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should get the blocked user list with valid limit", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  /* GET LIST OF BLOCKED USERS WITH LIMIT END */

  /* GET LIST OF BLOCKED USERS WITH SEARCH KEYWORD START */

  // it("Should get the blocked user list with valid keyword", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return an error if invalid keyword is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the blocked user list with empty keyword", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(emptyKeyWord)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  /* GET LIST OF BLOCKED USERS WITH SEARCH KEYWORD END */

  /* GET LIST OF BLOCKED USERS WITH SET DIRECTION START */

  // it("Should get the blocked user list with setDirection BLOCKED_BY_ME", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the blocked user list with setDirection HAS_BLOCKED_ME", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should get the blocked user list with setDirection BOTH", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  /* GET LIST OF BLOCKED USERS WITH SET DIRECTION END */

  /* GET LIST OF BLOCKED USERS ALL METHOD START */

  // it("Should get the blocked user list with valid params", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return blocked user list if empty direction is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setDirection()
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //     },
  //     error => {
  //       expect(error).be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return userList with 0 users if invalid keyword is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setDirection('BOTH')
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList.length).to.be.equal(0);
  //     },
  //     error => {
  //       expect(error).be.an.instanceof(CometChat.CometChatException);
  //       throw new Error(`Expected success but got error`);
  //     }
  //   );
  // });

  // it("Should return userList with 0 users if invalid keyword and empty direction is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(validLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setDirection()
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList.length).to.be.equal(0)
  //     },
  //     error => {
  //       expect(error).be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return error if invalid limit is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return error if invalid limit and empty direction is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(validKeyWord)
  //     .setDirection()
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return error if invalid limit and invalid keyword is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

  // it("Should return error if invalid limit, invalid keyword and empty direction is passed", function() {
  //   var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
  //     .setLimit(negativeLimit)
  //     .setSearchKeyWord(invalidKeyWord)
  //     .setDirection()
  //     .build();
  //   return blockedUsersRequest.fetchNext().then(
  //     userList => {
  //       expect(userList).to.be.an.instanceof(Array);
  //       throw new Error(`Expected error but got success`);
  //     },
  //     error => {
  //       expect(error).to.be.an.instanceof(CometChat.CometChatException);
  //     }
  //   );
  // });

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