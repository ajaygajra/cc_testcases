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

const expect = require("chai").expect;

const appId = "1089f54cd9e81d",
  uid = "jstestuser1",
  invalidUid = "jstestuser",
  invalidApiKey = "3de4f1672b44a43f1593ea03a27e3b3202a3869C",
  apiKey = "fe9d19181100853ce4aab9c096ea851716cd9554",
  authToken = "jstestuser1_01def4b6af98b28b7a9a00d55c57460eb1081b7f",
  extraArgs = 'any';

describe("Login test cases", function() {
  this.timeout(100000);
  describe("Login with userId and apiKey", function() {
    before(async function() {
      if (!CometChat.isInitialized()) await CometChat.init(appId);

      expect(CometChat.isInitialized()).to.be.true;
    });

    it("Should not login with empty userId and apiKey", function() {
      return CometChat.login("", "").then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          console.log(error);
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("MISSING_PARAMETERS");
        }
      );
    });

    it("Should return an error on empty apiKey", function() {
      return CometChat.login(uid, "").then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("MISSING_PARAMETERS");
        }
      );
    });

    it("Should return an error on empty userid", function() {
      return CometChat.login("", apiKey).then(
        user => {
          expect(user).to.not.exist;
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("MISSING_PARAMETERS");
        }
      );
    });

    it("Should return an error on invalid UID", function() {
      return CometChat.login(invalidUid, apiKey).then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("ERR_UID_NOT_FOUND");
        }
      );
    });

    it("Should return an error on invalid apiKey", function() {
      return CometChat.login(uid, invalidApiKey).then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("AUTH_ERR_APIKEY_NOT_FOUND");
        }
      );
    });

    it("should return error on invalid UID and invalid apiKey", function() {
      return CometChat.login(invalidUid, invalidApiKey).then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("AUTH_ERR_APIKEY_NOT_FOUND");
        }
      );
    });

    it("Should return CometChat.user", function() {
      return CometChat.login(uid, apiKey).then(
        user => {
          expect(user).to.be.an.instanceof(CometChat.User);
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    it("Should not login with empty userId and apiKey", function() {
      return CometChat.login("", "",extraArgs).then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          console.log(error);
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("MISSING_PARAMETERS");
        }
      );
    });

    it("Should return an error on empty apiKey", function() {
      return CometChat.login(uid, "",extraArgs).then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("MISSING_PARAMETERS");
        }
      );
    });

    it("Should return an error on empty userid", function() {
      return CometChat.login("", apiKey,extraArgs).then(
        user => {
          expect(user).to.not.exist;
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("MISSING_PARAMETERS");
        }
      );
    });

    it("Should return an error on invalid UID", function() {
      return CometChat.login(invalidUid, apiKey,extraArgs).then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("ERR_UID_NOT_FOUND");
        }
      );
    });

    it("Should return an error on invalid apiKey", function() {
      return CometChat.login(uid, invalidApiKey,extraArgs).then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("AUTH_ERR_APIKEY_NOT_FOUND");
        }
      );
    });

    it("should return error on invalid UID and invalid apiKey", function() {
      return CometChat.login(invalidUid, invalidApiKey,extraArgs).then(
        user => {
          expect(user).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.equal("AUTH_ERR_APIKEY_NOT_FOUND");
        }
      );
    });

    it("Should return CometChat.user", function() {
      return CometChat.login(uid, apiKey,extraArgs).then(
        user => {
          expect(user).to.be.an.instanceof(CometChat.User);
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    after("logout", function() {
      console.log("logging out");
      return CometChat.logout().then(
        () => {
          console.log("logged out");
          expect(true).to.be.true;
        },
        error => {
          console.log("logged out but error");
          expect(error).to.be.an.instanceof(CometChat.CometChatException);
        }
      );
    });
  });

  describe("Login with authToken", function() {
    before(async function() {
      await CometChat.init(appId);
      expect(CometChat.isInitialized()).to.be.true;
    });

    it("Should not login with empty authToken", function () {
        return  CometChat.login("").then(user => {
            expect(user).to.not.exist();
        }, error => {
            console.log(error);
            expect(error).to.be.an.instanceof(CometChat.CometChatException) && expect(error).to.have.property('code') && expect(error.code).to.equal('MISSING_PARAMETERS');
        });
    });

    it("Should not login with invalid authToken", function () {
        return CometChat.login("authToken").then(user => {
            expect(user).to.not.exist();
        }, error => {

             expect(error).to.be.an.instanceof(CometChat.CometChatException) && expect(error).to.have.property('code') && expect(error.code).to.equal('AUTH_ERR_AUTH_TOKEN_NOT_FOUND');
        });
    });

    it("Should login with authToken", function () {
      return CometChat.login(authToken).then(user => {
            expect(user).to.be.an.instanceof(CometChat.User);
        }, error => {
            console.log(error);
            expect(error).to.not.exist();
        });
    });

    it("Should not login with empty authToken", function () {
      return  CometChat.login("",extraArgs).then(user => {
          expect(user).to.not.exist();
      }, error => {
          console.log(error);
          expect(error).to.be.an.instanceof(CometChat.CometChatException) && expect(error).to.have.property('code') && expect(error.code).to.equal('MISSING_PARAMETERS');
      });
  });

  it("Should not login with invalid authToken", function () {
      return CometChat.login("authToken",extraArgs).then(user => {
          expect(user).to.not.exist();
      }, error => {

           expect(error).to.be.an.instanceof(CometChat.CometChatException) && expect(error).to.have.property('code') && expect(error.code).to.equal('AUTH_ERR_AUTH_TOKEN_NOT_FOUND');
      });
  });

  it("Should login with authToken", function () {
    return CometChat.login(authToken,extraArgs).then(user => {
          expect(user).to.be.an.instanceof(CometChat.User);
      }, error => {
          console.log(error);
          expect(error).to.not.exist();
      });
  });

    after("logout", function () {
        console.log("logging out");
        return CometChat.logout().then(() => {
            console.log("logged out");
            expect(true).to.be.true;
        }, error => {
            console.log("logged out but error");
            expect(error).to.be.an.instanceof(CometChat.CometChatException);
        });
    })
  });
});