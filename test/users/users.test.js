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

const appId = "1089f54cd9e81d",
  uid = "jstestuser1",
  invalidUid = "jstestuser",
  invalidApiKey = "3de4f1672b44a43f1593ea03a27e3b3202a3869C",
  apiKey = "fe9d19181100853ce4aab9c096ea851716cd9554";

describe("Get the current loggedin user", function() {
  this.timeout(10000);

  before(async function() {
    await CometChat.init(appId);
    if (CometChat.isInitialized()) {
      let user = await CometChat.login(uid, apiKey);
      expect(user).to.be.instanceof(CometChat.AppUser);
    }
  });

  it("Should get the current logged in user's information", function() {
    return CometChat.getLoggedinUser().then(
      user => {
        expect(user).should.eventually.have.property("uid");
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /*
   *********************************************************
   ************************USER LIST************************
   *********************************************************
   */

  /* NO METHODS START */

  it("Should get the user list without any methods", function() {
    var usersRequest = new CometChat.UsersRequestBuilder().build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* NO METHODS END */

  /* LIMIT START */

  it("Should get the user list with limit 0", function() {
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid limit", function() {
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with negative limit", function() {
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty limit", function() {
    var usersRequest = new CometChat.UsersRequestBuilder().setLimit().build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* LIMIT END */

  /* SEARCH KEYWORD START */

  it("Should get the user list with vaild search keyword", function() {
    var keyword = "group";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword", function() {
    var keyword = "axevd";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword", function() {
    var keyword = "";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* SEARCH KEYWORD END */

  /* STATUS START */

  it("Should get the user list with status online", function() {
    var limit = 30;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with status offline", function() {
    var limit = 30;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* STATUS END */

  /* HIDE BLOCKED USER  START */

  it("Should get the user list with hideBlockedUsers true", function() {
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with hideBlockedUsers false", function() {
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* HIDE BLOCKED USER END */

  /* LIMIT AND SEARCH KEYWORD START */

  it("Should get the user list with valid search keyword and 0 limit", function() {
    var keyword = "group";
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and 0 limit", function() {
    var keyword = "";
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and 0 limit", function() {
    var keyword = "axevd";
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and valid limit", function() {
    var keyword = "group";
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and valid limit", function() {
    var keyword = "";
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and valid limit", function() {
    var keyword = "axevd";
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and empty limit", function() {
    var keyword = "group";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and empty limit", function() {
    var keyword = "";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and empty limit", function() {
    var keyword = "axevd";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and negative limit", function() {
    var keyword = "group";
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and negative limit", function() {
    var keyword = "";
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and negative limit", function() {
    var keyword = "axevd";
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* LIMIT AND SEARCH KEYWORD END */

  /* LIMIT AND STATUS START */

  it("Should get the user list with limit 0 and status online", function() {
    var limit = 0;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid limit and status online", function() {
    var limit = 30;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with negative limit and status online", function() {
    var limit = -10;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty limit and status online", function() {
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with limit 0 and status offline", function() {
    var limit = 0;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid limit and status offline", function() {
    var limit = 30;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with negative limit and status offline", function() {
    var limit = -10;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty limit and status offline", function() {
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* LIMIT AND STATUS END */

  /* LIMIT AND HIDE BLOCKED USERS START */

  it("Should get the user list with limit 0 and hideBlockedUsers true", function() {
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid limit and hideBlockedUsers true", function() {
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with negative limit hideBlockedUsers true", function() {
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty limit and hideBlockedUsers true", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with limit 0 and hideBlockedUsers false", function() {
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid limit and hideBlockedUsers false", function() {
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with negative limit hideBlockedUsers false", function() {
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty limit and hideBlockedUsers false", function() {
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* LIMIT AND HIDE BLOCKED USERS END */

  /* SEARCH KEYWORD AND STATUS START */

  it("Should get the user list with vaild search keyword and status online", function() {
    var keyword = "group";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and status online", function() {
    var keyword = "axevd";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and status online", function() {
    var keyword = "";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with vaild search keyword and status offline", function() {
    var keyword = "group";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and status offline", function() {
    var keyword = "axevd";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and status offline", function() {
    var keyword = "";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* SEARCH KEYWORD AND STATUS END */

  /* SEARCH KEYWORD AND HIDE BLOCKED USERS START */

  it("Should get the user list with vaild search keyword and hideBlockedUsers true", function() {
    var keyword = "group";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and hideBlockedUsers true", function() {
    var keyword = "axevd";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and hideBlockedUsers true", function() {
    var keyword = "";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with vaild search keyword and hideBlockedUsers false", function() {
    var keyword = "group";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and hideBlockedUsers false", function() {
    var keyword = "axevd";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and hideBlockedUsers false", function() {
    var keyword = "";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* SEARCH KEYWORD AND HIDE BLOCKED USERS END */

  /* STATUS AND HIDE BLOCKED USERS START */

  it("Should get the user list with status online and hideBlockedUsers true", function() {
    var limit = 30;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with status online and hideBlockedUsers false", function() {
    var limit = 30;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with status offline and hideBlockedUsers true", function() {
    var limit = 30;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with status offline and hideBlockedUsers false", function() {
    var limit = 30;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* STATUS AND HIDE BLOCKED USERS END */

  /* LIMIT, SEARCH KEYWORD AND STATUS START */

  it("Should get the user list with valid search keyword and 0 limit and status online", function() {
    var keyword = "group";
    var limit = 0;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and 0 limit and status online", function() {
    var keyword = "";
    var limit = 0;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and 0 limit and status online", function() {
    var keyword = "axevd";
    var limit = 0;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and valid limit and status online", function() {
    var keyword = "group";
    var limit = 30;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and valid limit and status online", function() {
    var keyword = "";
    var limit = 30;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and valid limit and status online", function() {
    var keyword = "axevd";
    var limit = 30;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and empty limit and status online", function() {
    var keyword = "group";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and empty limit and status online", function() {
    var keyword = "";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and empty limit and status online", function() {
    var keyword = "axevd";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and negative limit and status online", function() {
    var keyword = "group";
    var limit = -10;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and negative limit and status online", function() {
    var keyword = "";
    var limit = -10;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and negative limit and status online", function() {
    var keyword = "axevd";
    var limit = -10;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and 0 limit and status offline", function() {
    var keyword = "group";
    var limit = 0;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and 0 limit and status offline", function() {
    var keyword = "";
    var limit = 0;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and 0 limit and status offline", function() {
    var keyword = "axevd";
    var limit = 0;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and valid limit and status offline", function() {
    var keyword = "group";
    var limit = 30;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and valid limit and status offline", function() {
    var keyword = "";
    var limit = 30;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and valid limit and status offline", function() {
    var keyword = "axevd";
    var limit = 30;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and empty limit and status offline", function() {
    var keyword = "group";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and empty limit and status offline", function() {
    var keyword = "";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and empty limit and status offline", function() {
    var keyword = "axevd";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and negative limit and status offline", function() {
    var keyword = "group";
    var limit = -10;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and negative limit and status offline", function() {
    var keyword = "";
    var limit = -10;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and negative limit and status offline", function() {
    var keyword = "axevd";
    var limit = -10;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* LIMIT, SEARCH KEYWORD AND STATUS END */

  /* LIMIT, SEARCH KEYWORD AND HIDE BLOCKED USERS START */

  it("Should get the user list with valid search keyword and 0 limit and hideBlockedUsers true", function() {
    var keyword = "group";
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and 0 limit and hideBlockedUsers true", function() {
    var keyword = "";
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and 0 limit and hideBlockedUsers true", function() {
    var keyword = "axevd";
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and valid limit and hideBlockedUsers true", function() {
    var keyword = "group";
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and valid limit and hideBlockedUsers true", function() {
    var keyword = "";
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and valid limit and hideBlockedUsers true", function() {
    var keyword = "axevd";
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and empty limit and hideBlockedUsers true", function() {
    var keyword = "group";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and empty limit and hideBlockedUsers true", function() {
    var keyword = "";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and empty limit and hideBlockedUsers true", function() {
    var keyword = "axevd";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and negative limit and hideBlockedUsers true", function() {
    var keyword = "group";
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and negative limit and hideBlockedUsers true", function() {
    var keyword = "";
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and negative limit and hideBlockedUsers true", function() {
    var keyword = "axevd";
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and 0 limit and hideBlockedUsers false", function() {
    var keyword = "group";
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and 0 limit and hideBlockedUsers false", function() {
    var keyword = "";
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and 0 limit and hideBlockedUsers false", function() {
    var keyword = "axevd";
    var limit = 0;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and valid limit and hideBlockedUsers false", function() {
    var keyword = "group";
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and valid limit and hideBlockedUsers false", function() {
    var keyword = "";
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and valid limit and hideBlockedUsers false", function() {
    var keyword = "axevd";
    var limit = 30;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and empty limit and hideBlockedUsers false", function() {
    var keyword = "group";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and empty limit and hideBlockedUsers false", function() {
    var keyword = "";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and empty limit and hideBlockedUsers false", function() {
    var keyword = "axevd";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid search keyword and negative limit and hideBlockedUsers false", function() {
    var keyword = "group";
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and negative limit and hideBlockedUsers false", function() {
    var keyword = "";
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and negative limit and hideBlockedUsers false", function() {
    var keyword = "axevd";
    var limit = -10;
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyWord(keyword)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* LIMIT, SEARCH KEYWORD AND HIDE BLOCKED USERS END */

  /* LIMIT, STATUS AND HIDE BLOCKED USERS START */

  it("Should get the user list with limit 0 and status online and hideBlockedUsers false", function() {
    var limit = 0;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid limit and status online and hideBlockedUsers false", function() {
    var limit = 30;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with negative limit and status online and hideBlockedUsers false", function() {
    var limit = -10;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty limit and status online and hideBlockedUsers false", function() {
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with limit 0 and status offline and hideBlockedUsers false", function() {
    var limit = 0;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid limit and status offline and hideBlockedUsers false", function() {
    var limit = 30;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with negative limit and status offline and hideBlockedUsers false", function() {
    var limit = -10;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty limit and status offline and hideBlockedUsers false", function() {
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with limit 0 and status online and hideBlockedUsers true", function() {
    var limit = 0;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid limit and status online and hideBlockedUsers true", function() {
    var limit = 30;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with negative limit and status online and hideBlockedUsers true", function() {
    var limit = -10;
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty limit and status online and hideBlockedUsers true", function() {
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with limit 0 and status offline and hideBlockedUsers true", function() {
    var limit = 0;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with valid limit and status offline and hideBlockedUsers true", function() {
    var limit = 30;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with negative limit and status offline and hideBlockedUsers true", function() {
    var limit = -10;
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty limit and status offline and hideBlockedUsers true", function() {
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit()
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* LIMIT, STATUS AND HIDE BLOCKED USERS END */

  /* SEARCH KEYWORD, STATUS AND HIDE BLOCKED USERS START */

  it("Should get the user list with vaild search keyword and status online and hideBlockedUsers true", function() {
    var keyword = "group";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and status online and hideBlockedUsers true", function() {
    var keyword = "axevd";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and status online and hideBlockedUsers true", function() {
    var keyword = "";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with vaild search keyword and status offline and hideBlockedUsers true", function() {
    var keyword = "group";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and status offline and hideBlockedUsers true", function() {
    var keyword = "axevd";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and status offline and hideBlockedUsers true", function() {
    var keyword = "";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(true)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with vaild search keyword and status online and hideBlockedUsers false", function() {
    var keyword = "group";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and status online and hideBlockedUsers false", function() {
    var keyword = "axevd";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and status online and hideBlockedUsers false", function() {
    var keyword = "";
    var status = "online";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with vaild search keyword and status offline and hideBlockedUsers false", function() {
    var keyword = "group";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with invalid search keyword and status offline and hideBlockedUsers false", function() {
    var keyword = "axevd";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the user list with empty search keyword and status offline and hideBlockedUsers false", function() {
    var keyword = "";
    var status = "offline";
    var usersRequest = new CometChat.UsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setStatus(status)
      .hideBlockedUsers(false)
      .build();
    return usersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* SEARCH KEYWORD, STATUS AND HIDE BLOCKED USERS END */

  /*
   ********************************************************
   ********************USER INFORMATION********************
   ********************************************************
   */

  it("Should get the user info with correct appId", function() {
    var UID = "superhero1";
    CometChat.getUser(UID).then(
      user => {
        expect(user).to.be.an.instanceof(CometChat.User);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should return error on invalid UID", function() {
    var UID = "asda";
    CometChat.getUser(UID).then(
      user => {
        expect(user).to.not.exist();
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  /*
   ********************************************************
   ***********************BLOCK USER***********************
   ********************************************************
   */

  it("Should return list of blocked users on valid array of users passed", function() {
    var usersList = ["superhero1", "superhero2"];
    CometChat.blockUsers(usersList).then(
      list => {
        expect(list).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should return list of blocked users on invalid array of users passed", function() {
    var usersList = ["asdwer1"];
    CometChat.blockUsers(usersList).then(
      list => {
        cexpect(list).to.not.exist();
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  it("Should return list of blocked users on empty array of users passed", function() {
    var usersList = [];
    CometChat.blockUsers(usersList).then(
      list => {
        expect(list).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /*
   ********************************************************
   **********************UNBLOCK USER**********************
   ********************************************************
   */

  it("Should return list of blocked users on valid array of users passed", function() {
    var usersList = ["superhero1", "superhero2"];
    CometChat.unblockUsers(usersList).then(
      list => {
        expect(list).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should return list of blocked users on invalid array of users passed", function() {
    var usersList = ["asdwer1"];
    CometChat.unblockUsers(usersList).then(
      list => {
        cexpect(list).to.not.exist();
      },
      error => {
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }
    );
  });

  it("Should return list of blocked users on empty array of users passed", function() {
    var usersList = [];
    CometChat.unblockUsers(usersList).then(
      list => {
        expect(list).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /*
   ********************************************************
   ******************LIST OF BLOCKED USER******************
   ********************************************************
   */

  /* GET LIST OF BLOCKED USERS WITH NO METHODS START */

  it("Should get the blocked user list with no methods", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder().build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* GET LIST OF BLOCKED USERS WITH NO METHODS END */

  /* GET LIST OF BLOCKED USERS WITH LIMIT START */

  it("Should get the blocked user list with zero limit", function() {
    var limit = 0;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit", function() {
    var limit = -10;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit", function() {
    var limit = 30;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* GET LIST OF BLOCKED USERS WITH LIMIT END */

  /* GET LIST OF BLOCKED USERS WITH SEARCH KEYWORD START */

  it("Should get the blocked user list with valid keyword", function() {
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with invalid keyword", function() {
    var keyword = "awesd";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty keyword", function() {
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* GET LIST OF BLOCKED USERS WITH SEARCH KEYWORD END */

  /* GET LIST OF BLOCKED USERS WITH SET DIRECTION START */

  it("Should get the blocked user list with setDirection BLOCKED_BY_ME", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with setDirection HAS_BLOCKED_ME", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with setDirection BOTH", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* GET LIST OF BLOCKED USERS WITH SET DIRECTION END */

  /* GET LIST OF BLOCKED USERS WITH LIMIT AND SEARCH KEYWORD START */

  it("Should get the blocked user list with zero limit and empty keyword", function() {
    var limit = 0;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and valid keyword", function() {
    var limit = 0;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and invalid keyword", function() {
    var limit = 0;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and empty keyword", function() {
    var limit = -10;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and valid keyword", function() {
    var limit = -10;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and invalid keyword", function() {
    var limit = -10;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and empty keyword", function() {
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and valid keyword", function() {
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and invalid keyword", function() {
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and empty keyword", function() {
    var limit = 30;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and valid keyword", function() {
    var limit = 30;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and invalid keyword", function() {
    var limit = 30;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* GET LIST OF BLOCKED USERS WITH LIMIT AND SEARCH KEYWORD END */

  /* GET LIST OF BLOCKED USERS WITH LIMIT AND DIRECTION START */

  it("Should get the blocked user list with zero limit and direction BLOCKED_BY_ME", function() {
    var limit = 0;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and direction BLOCKED_BY_ME", function() {
    var limit = -10;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and direction BLOCKED_BY_ME", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and direction BLOCKED_BY_ME", function() {
    var limit = 30;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and direction HAS_BLOCKED_ME", function() {
    var limit = 0;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and direction HAS_BLOCKED_ME", function() {
    var limit = -10;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and direction HAS_BLOCKED_ME", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and direction HAS_BLOCKED_ME", function() {
    var limit = 30;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and direction BOTH", function() {
    var limit = 0;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and direction BOTH", function() {
    var limit = -10;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and direction BOTH", function() {
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and direction BOTH", function() {
    var limit = 30;
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* GET LIST OF BLOCKED USERS WITH LIMIT AND DIRECTION END */

  /* GET LIST OF BLOCKED USERS WITH SEARCH KEYWORD AND DIRECTION START */

  it("Should get the blocked user list with valid keyword and direction BLOCKED_BY_ME", function() {
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with invalid keyword and direction BLOCKED_BY_ME", function() {
    var keyword = "awesd";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty keyword and direction BLOCKED_BY_ME", function() {
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid keyword and direction HAS_BLOCKED_ME", function() {
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with invalid keyword and direction HAS_BLOCKED_ME", function() {
    var keyword = "awesd";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty keyword and direction HAS_BLOCKED_ME", function() {
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid keyword and direction BOTH", function() {
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with invalid keyword and direction BOTH", function() {
    var keyword = "awesd";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty keyword and direction BOTH", function() {
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setSearchKeyWord(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* GET LIST OF BLOCKED USERS WITH SEARCH KEYWORD AND DIRECTION END */

  /* GET LIST OF BLOCKED USERS WITH LIMIT, SEARCH KEYWORD AND DIRECTION START */

  it("Should get the blocked user list with zero limit and empty keyword and direction BLOCKED_BY_ME", function() {
    var limit = 0;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and valid keyword and direction BLOCKED_BY_ME", function() {
    var limit = 0;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and invalid keyword and direction BLOCKED_BY_ME", function() {
    var limit = 0;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and empty keyword and direction BLOCKED_BY_ME", function() {
    var limit = -10;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and valid keyword and direction BLOCKED_BY_ME", function() {
    var limit = -10;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and invalid keyword and direction BLOCKED_BY_ME", function() {
    var limit = -10;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and empty keyword and direction BLOCKED_BY_ME", function() {
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and valid keyword and direction BLOCKED_BY_ME", function() {
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and invalid keyword and direction BLOCKED_BY_ME", function() {
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and empty keyword and direction BLOCKED_BY_ME", function() {
    var limit = 30;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and valid keyword and direction BLOCKED_BY_ME", function() {
    var limit = 30;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and invalid keyword and direction BLOCKED_BY_ME", function() {
    var limit = 30;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BLOCKED_BY_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and empty keyword and direction HAS_BLOCKED_ME", function() {
    var limit = 0;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and valid keyword and direction HAS_BLOCKED_ME", function() {
    var limit = 0;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and invalid keyword and direction HAS_BLOCKED_ME", function() {
    var limit = 0;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and empty keyword and direction HAS_BLOCKED_ME", function() {
    var limit = -10;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and valid keyword and direction HAS_BLOCKED_ME", function() {
    var limit = -10;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and invalid keyword and direction HAS_BLOCKED_ME", function() {
    var limit = -10;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and empty keyword and direction HAS_BLOCKED_ME", function() {
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and valid keyword and direction HAS_BLOCKED_ME", function() {
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and invalid keyword and direction HAS_BLOCKED_ME", function() {
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and empty keyword and direction HAS_BLOCKED_ME", function() {
    var limit = 30;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and valid keyword and direction HAS_BLOCKED_ME", function() {
    var limit = 30;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and invalid keyword and direction HAS_BLOCKED_ME", function() {
    var limit = 30;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.HAS_BLOCKED_ME)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and empty keyword and direction BOTH", function() {
    var limit = 0;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and valid keyword and direction BOTH", function() {
    var limit = 0;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with zero limit and invalid keyword and direction BOTH", function() {
    var limit = 0;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and empty keyword and direction BOTH", function() {
    var limit = -10;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and valid keyword and direction BOTH", function() {
    var limit = -10;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with negative limit and invalid keyword and direction BOTH", function() {
    var limit = -10;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and empty keyword and direction BOTH", function() {
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and valid keyword and direction BOTH", function() {
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with empty limit and invalid keyword and direction BOTH", function() {
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit()
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and empty keyword and direction BOTH", function() {
    var limit = 30;
    var keyword = "";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and valid keyword and direction BOTH", function() {
    var limit = 30;
    var keyword = "super";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  it("Should get the blocked user list with valid limit and invalid keyword and direction BOTH", function() {
    var limit = 30;
    var keyword = "ase";
    var blockedUsersRequest = new CometChat.BlockedUsersRequestBuilder()
      .setLimit(limit)
      .setSearchKeyword(keyword)
      .setDirection(CometChat.BlockedUsersRequest.directions.BOTH)
      .build();
    return blockedUsersRequest.fetchNext().then(
      userList => {
        expect(userList).should.eventually.to.be.an.instanceof(Array);
      },
      error => {
        expect(error).to.not.exist();
      }
    );
  });

  /* GET LIST OF BLOCKED USERS WITH LIMIT, SEARCH KEYWORD AND DIRECTION END */

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
