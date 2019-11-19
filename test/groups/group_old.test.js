/**********************************************
   Boilerplate ends here for CometChat testing .
 **********************************************/
// const window = require("browser-env")({
//   url: "http://www.runtestcases.com",
//   contentType: "text/html",
//   includeNodeLocations: true,
//   storageQuota: 10000000
// });
// const fetch = require("node-fetch");
// const CometChat = require("@cometchat-pro/chat").CometChat;
// window.fetch = fetch;
// global.fetch = fetch;

/***************************************
   Boilerplate ends here for CometChat.
 ***************************************/

// var chai = require("chai");
var expect = chai.expect;
// var chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised).should();
// const assert = chai.assert;

var appId = "1066625ca50d45b",
  uid = "superhero1",
  apiKey = "6d84d553fa3a4c8a3f186fe6050c087197b3dc64",
  validLimit = 30,
  negativeLimit = -21,
  validKeyWord = 'cap',
  invalidKeyWord = 10,
  GUID = "buddies",
  groupName = "ABCD",
  groupType = "public",
  password = '1234567890',
  cometChatSettings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CometChat.AppSettings.REGION_EU).build();

describe("Initialize the CometChat and login", function() {
  this.timeout(0);
  before(async function() {
    await CometChat.init(appId,cometChatSettings);
    if (CometChat.isInitialized()) {
      let user = await CometChat.login(uid, apiKey);
      expect(user).to.be.instanceof(CometChat.User);
    }
  });
  describe("Get the group list", function() {
    it("Get the group list with valid limit and searchKeyWord", function() {
        groupRequest = new CometChat.GroupsRequestBuilder()
          .setLimit(validLimit)
          .setSearchKeyWord(validKeyWord)
          .build();
        return groupRequest.fetchNext().then(
            groupList => {
                expect(groupList).to.be.an.instanceof(Array);
            }, error =>{
                expect(error).to.not.exist();
            }
        );
    });

    it("Should return an error when valid limit and invalid searchKeyWord is passed", function() {
        groupRequest = new CometChat.GroupsRequestBuilder()
          .setLimit(validLimit)
          .setSearchKeyWord(invalidKeyWord)
          .build();
        return groupRequest.fetchNext().then(
            groupList => {
                expect(groupList).to.not.exist();
            }, error =>{
                expect(error).to.be.an.instanceof(CometChat.CometChatException);
            }
        );
    });

    it("Should return an error when invalid limit and searchKeyWord is passed", function() {
        groupRequest = new CometChat.GroupsRequestBuilder()
          .setLimit(negativeLimit)
          .setSearchKeyWord(validKeyWord)
          .build();
        return groupRequest.fetchNext().then(
            groupList => {
                expect(groupList).to.not.exist();
            }, error =>{
                expect(error).to.be.an.instanceof(CometChat.CometChatException);
            }
        );
    });

    it("Should return an error when invalid limit and invalid searchKeyWord is passed", function() {
        groupRequest = new CometChat.GroupsRequestBuilder()
          .setLimit(negativeLimit)
          .setSearchKeyWord(invalidKeyWord)
          .build();
        return groupRequest.fetchNext().then(
            groupList => {
                expect(groupList).to.not.exist();
            }, error =>{
                expect(error).to.be.an.instanceof(CometChat.CometChatException);
            }
        );
    });

  });

  describe("Create groups", function() {
    describe("Creating public group", function() {
        this.timeout(0);
        it("Should create public group", function() {
            var public_group = new CometChat.Group(GUID, groupName, groupType);
            return CometChat.createGroup(public_group).then(
              group => {
                expect(group).to.be.an.instanceof(CometChat.Group) && expect(group).to.have.property("hasJoined");
              },
              error => {
                expect(error).to.not.exist;
              }
            );
        });

        it("Should not create public group because it already exists", function() {
            var public_group = new CometChat.Group(GUID, groupName, groupType);
            return CometChat.createGroup(public_group).then(
              group => {
                expect(group).to.not.exist();
              },
              error => {
                expect(error).to.be.an.instanceof(CometChat.CometChatException) && expect(error).to.have.property("details") && expect(error["details"]).to.have.property("guid");
              }
            );
        });
      
      let public_GUID = "test_public_group" + new Date().getTime();
      let notjoined_public_GUID = "jstestgroup2";

      let public_group_name = "Hello Group!";
      let public_group_des =
        "Hello Group! created  at " + new Date().toString();
      let group_type_public = CometChat.GROUP_TYPE.PUBLIC;

      var public_group = new CometChat.Group(
        public_GUID,
        public_group_name,
        group_type_public
      );
      public_group.setDescription(public_group_des);

      let public_group_to_be_joined = "jstestgroup1",
        public_group_to_be_left = "jstestgroup1";

      it("Should create public group", function() {
        return CometChat.createGroup(public_group).then(
          group => {
            expect(group).to.be.an.instanceof(CometChat.Group) &&
              expect(group).to.have.property("hasJoined") &&
              expect(group.getHasJoined()).to.be.true;
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });

      it("Should not create public group since it's already present", function() {
        return CometChat.createGroup(public_group).then(
          group => {
            expect(group).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("details") &&
              expect(error["details"]).to.have.property("guid");
          }
        );
      });

      it("Should get Group information for type=public and status=joined", function() {
        CometChat.getGroup(public_GUID).then(
          group => {
            expect(group).to.be.an.instanceof(CometChat.Group);
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });

      it("Should not  get group information for type=public and status= not joined ", function() {
        CometChat.getGroup(notjoined_public_GUID).then(
          group => {
            expect(group).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_GROUP_NOT_JOINED");
          }
        );
      });

      it("Should join the public group", function() {
        return CometChat.joinGroup(
          public_group_to_be_joined,
          group_type_public
        ).then(
          group => {
            expect(group).to.be.an.instanceof(CometChat.Group) &&
              expect(group).to.haveOwnProperty("hasJoined") &&
              expect(group.getHasJoined()).to.be.true;
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });

      it("Should update the public group which he is not part of", function() {
        var GUID = public_GUID;
        var groupName = "jstestgroup testing";
        var groupType = CometChat.GROUP_TYPE.PUBLIC;
        var group = new CometChat.Group(GUID, groupName, groupType);

        return CometChat.updateGroup(group).then(
          group => {
            expect(group).to.be.an.instanceof(CometChat.Group) &&
              expect(group).to.haveOwnProperty("hasJoined") &&
              expect(group.getName()).to.be.equal(groupName);
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });

      it("Should not update the public group which is not part moderator or admin", function() {
        var GUID = public_group_to_be_joined;
        var groupName = "jstestgroup testing";
        var groupType = CometChat.GROUP_TYPE.PUBLIC;
        var group = new CometChat.Group(GUID, groupName, groupType);

        return CometChat.updateGroup(group).then(
          group => {
            expect(group).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_GROUP_NO_MODERATOR_SCOPE");
          }
        );
      });

      it("Should not join the public group since user is already a member", function() {
        return CometChat.joinGroup(
          public_group_to_be_joined,
          group_type_public
        ).then(
          group => {
            expect(group).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_ALREADY_JOINED");
          }
        );
      });

      it("Should leave the public group", function() {
        return CometChat.leaveGroup(public_group_to_be_left).then(
          hasLeft => {
            expect(hasLeft).to.be.true;
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });

      it("Should not leave the public group since user is not a member", function() {
        return CometChat.leaveGroup(public_group_to_be_left).then(
          hasLeft => {
            expect(error).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_GROUP_NOT_JOINED");
          }
        );
      });
      it("Should delete the public group", function() {
        return CometChat.deleteGroup(public_GUID).then(
          response => {
            expect(response).to.be.true;
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });
      it("Should delete the public group which is not present", function() {
        return CometChat.deleteGroup(public_GUID).then(
          response => {
            expect(response).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_GUID_NOT_FOUND");
          }
        );
      });
      it("Should delete the public group which he is not part of", function() {
        return CometChat.deleteGroup(public_group_to_be_left).then(
          response => {
            expect(response).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_GROUP_NOT_JOINED");
          }
        );
      });
    });

    describe("Creating private group", function() {
      let private_GUID = "test_private_group" + "_" + new Date().getTime();
      let private_group_name = "Hello Group!";
      let private_group_des =
        "Hello Group! created  at " + new Date().toString();
      let group_type_private = CometChat.GROUP_TYPE.PRIVATE;
      let private_group = new CometChat.Group(
        private_GUID,
        private_group_name,
        group_type_private
      );

      let notjoined_private_GUID = "jstestgroup4";
      private_group.setDescription(private_group_des);

      let private_group_to_be_joined = "jstestgroup3",
        private_group_to_be_left = "jstestgroup3";

      it("Should create private group", function() {
        return CometChat.createGroup(private_group).then(
          group => {
            expect(group).to.be.an.instanceof(CometChat.Group) &&
              expect(group).to.have.property("hasJoined") &&
              expect(group.getHasJoined()).to.be.true;
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });

      it("Should not create private group since it's already present", function() {
        return CometChat.createGroup(private_group).then(
          group => {
            expect(group).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("details") &&
              expect(error["details"]).to.have.property("guid");
          }
        );
      });

      it("Should  get Group information for type=private and status=joined", function() {
        CometChat.getGroup(private_GUID).then(
          group => {
            expect(group).to.be.an.instanceof(CometChat.Group);
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });

      it("Should not  get group information for type=private and status= not joined ", function() {
        CometChat.getGroup(notjoined_private_GUID).then(
          group => {
            expect(group).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_GROUP_NOT_JOINED");
          }
        );
      });

      it("Should join the private group", function() {
        return CometChat.joinGroup(
          private_group_to_be_joined,
          group_type_private
        ).then(
          group => {
            expect(group).to.be.an.instanceof(CometChat.Group) &&
              expect(group).to.haveOwnProperty("hasJoined") &&
              expect(group.getHasJoined()).to.be.true;
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });

      it("Should not join the private group since user is already a member", function() {
        return CometChat.joinGroup(
          private_group_to_be_joined,
          group_type_private
        ).then(
          group => {
            expect(group).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_ALREADY_JOINED");
          }
        );
      });

      it("Should leave the private group", function() {
        return CometChat.leaveGroup(private_group_to_be_left).then(
          hasLeft => {
            expect(hasLeft).to.be.true;
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });

      it("Should not leave the private group since user is not a member", function() {
        return CometChat.leaveGroup(private_group_to_be_left).then(
          hasLeft => {
            expect(error).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_GROUP_NOT_JOINED");
          }
        );
      });

      it("Should delete the public group", function() {
        return CometChat.deleteGroup(private_GUID).then(
          response => {
            expect(response).to.be.true;
          },
          error => {
            expect(error).to.not.exist;
          }
        );
      });
      it("Should delete the private group which is not present", function() {
        return CometChat.deleteGroup(private_GUID).then(
          response => {
            expect(response).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_GUID_NOT_FOUND");
          }
        );
      });
      it("Should delete the private group which he is not part of", function() {
        return CometChat.deleteGroup(private_group_to_be_left).then(
          response => {
            expect(response).to.not.exist;
          },
          error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
              expect(error).to.have.property("code") &&
              expect(error.code).to.be.equal("ERR_GROUP_NOT_JOINED");
          }
        );
      });
    });
  });

  describe("Creating password group", function() {
    let password_GUID = "test_password_group" + "_" + new Date().getTime();
    let password_group_name = "Password Test Group One";
    let password_group_des =
      "Hello Group! created  at " + new Date().toString();
    let group_type_password = CometChat.GROUP_TYPE.PASSWORD;
    let password = "password";
    let invlidPassword = "invalidPassword";

    let notjoined_password_GUID = "jstestgroup6";

    let password_group = new CometChat.Group(
      password_GUID,
      password_group_name,
      group_type_password,
      password
    );
    password_group.setDescription(password_group_des);

    let password_group_to_be_left = "jstestgroup5",
      password_group_to_be_joined = "jstestgroup5";

    it("Should create password group", function() {
      return CometChat.createGroup(password_group).then(
        group => {
          expect(group).to.be.an.instanceof(CometChat.Group) &&
            expect(group).to.have.property("hasJoined") &&
            expect(group.getHasJoined()).to.be.true;
        },
        error => {
          expect(error).to.not.exist;
        }
      );
    });

    it("Should not create password group since it's already present", function() {
      return CometChat.createGroup(password_group).then(
        group => {
          expect(group).to.not.exist;
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("details") &&
            expect(error["details"]).to.have.property("guid");
        }
      );
    });

    it("Should get Group information for type=password and status=joined", function() {
      return CometChat.getGroup(password_GUID).then(
        group => {
          expect(group).to.be.an.instanceof(CometChat.Group);
        },
        error => {
          expect(error).to.not.exist;
        }
      );
    });

    it("Should not get group information for type=password and status= not joined ", function() {
      return CometChat.getGroup(notjoined_password_GUID).then(
        group => {
          expect(group).to.not.exist;
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.be.equal("ERR_GROUP_NOT_JOINED");
        }
      );
    });

    it("Should join the password group", function() {
      return CometChat.joinGroup(
        password_group_to_be_joined,
        group_type_password,
        password
      ).then(
        group => {
          expect(group).to.be.an.instanceof(CometChat.Group) &&
            expect(group).to.haveOwnProperty("hasJoined") &&
            expect(group.getHasJoined()).to.be.true;
        },
        error => {
          expect(error).to.not.exist;
        }
      );
    });

    it("Should not join the password group since user is already a member", function() {
      return CometChat.joinGroup(
        password_group_to_be_joined,
        group_type_password,
        password
      ).then(
        group => {
          expect(group).to.not.exist;
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.be.equal("ERR_ALREADY_JOINED");
        }
      );
    });

    it("Should leave the password group", function() {
      return CometChat.leaveGroup(password_group_to_be_left).then(
        hasLeft => {
          expect(hasLeft).to.be.true;
        },
        error => {
          expect(error).to.not.exist;
        }
      );
    });

    it("Should not leave the password group since user is not a member", function() {
      return CometChat.leaveGroup(password_group_to_be_left).then(
        hasLeft => {
          expect(hasLeft).to.not.exist;
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.be.equal("ERR_GROUP_NOT_JOINED");
        }
      );
    });
    it("Should delete the public group", function() {
      return CometChat.deleteGroup(password_GUID).then(
        response => {
          expect(response).to.be.true;
        },
        error => {
          expect(error).to.not.exist;
        }
      );
    });

    it("Should delete the password group which is not present", function() {
      return CometChat.deleteGroup(password_GUID).then(
        response => {
          expect(response).to.not.exist;
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.be.equal("ERR_GUID_NOT_FOUND");
        }
      );
    });
    it("Should delete the private group which he is not part of", function() {
      return CometChat.deleteGroup(password_group_to_be_left).then(
        response => {
          expect(response).to.not.exist;
        },
        error => {
          expect(error).to.be.an.instanceof(CometChat.CometChatException) &&
            expect(error).to.have.property("code") &&
            expect(error.code).to.be.equal("ERR_GROUP_NOT_JOINED");
        }
      );
    });
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
