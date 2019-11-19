const chai = require("Chai");
var assert = chai.assert;
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
const valid_api_key = "9c3607b6862f23477741472cbb0ac1beffa9a410";
const valid_uid = "superhero1";
const valid_group = "jeetgroup";
const valid_group_private = "superhero_private";

var testCaseGroupBuilder = [
  {
    test_description:
      "Cometchat GroupRequestBuilder valid setLimit , valid setSearchKeyWord , build",
    method_name: "CometChat.GroupRequestBuilder",
    parameter: {
      setLimit: {
        flag: true,
        data: 10
      },
      setSearchKeyWord: {
        flag: true,
        data: "super"
      },
      build: {
        flag: true
      }
    },
    expect_output: "success"
  },

  {
    test_description:
      "Cometchat GroupRequestBuilder valid setLimit , invalid setSearchKeyWord , build",
    method_name: "CometChat.GroupRequestBuilder",
    parameter: {
      setLimit: {
        flag: true,
        data: 10
      },
      setSearchKeyWord: {
        flag: false,
        data: "invalid"
      },
      build: {
        flag: true
      }
    },
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat GroupRequestBuilder invalid setLimit , valid setSearchKeyWord , build",
    method_name: "CometChat.GroupRequestBuilder",
    parameter: {
      setLimit: {
        flag: false,
        data: 10
      },
      setSearchKeyWord: {
        flag: true,
        data: "super"
      },
      build: {
        flag: true
      }
    },
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat GroupRequestBuilder invalid setLimit , invalid setSearchKeyWord , build",
    method_name: "CometChat.GroupRequestBuilder",
    parameter: {
      setLimit: {
        flag: false,
        data: 10
      },
      setSearchKeyWord: {
        flag: false,
        data: "super"
      },
      build: {
        flag: true
      }
    },
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat GroupRequestBuilder valid setLimit , valid setSearchKeyWord , false build",
    method_name: "CometChat.GroupRequestBuilder",
    parameter: {
      setLimit: {
        flag: true,
        data: 10
      },
      setSearchKeyWord: {
        flag: true,
        data: "super"
      },
      build: {
        flag: false
      }
    },
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat GroupRequestBuilder valid setLimit , invalid setSearchKeyWord , false build",
    method_name: "CometChat.GroupRequestBuilder",
    parameter: {
      setLimit: {
        flag: true,
        data: 10
      },
      setSearchKeyWord: {
        flag: false,
        data: "invalid"
      },
      build: {
        flag: false
      }
    },
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat GroupRequestBuilder invalid setLimit , valid setSearchKeyWord , false build",
    method_name: "CometChat.GroupRequestBuilder",
    parameter: {
      setLimit: {
        flag: false,
        data: 10
      },
      setSearchKeyWord: {
        flag: true,
        data: "super"
      },
      build: {
        flag: false
      }
    },
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat GroupRequestBuilder invalid setLimit , invalid setSearchKeyWord , false build",
    method_name: "CometChat.GroupRequestBuilder",
    parameter: {
      setLimit: {
        flag: false,
        data: 10
      },
      setSearchKeyWord: {
        flag: false,
        data: "super"
      },
      build: {
        flag: false
      }
    },
    expect_output: "error"
  }
];

var testCaseGetGroup = [
  {
    test_description: "Cometchat getGroup valid GUID",
    method_name: "CometChat.getGroup",
    parameter: ["jeetgroup"],
    expect_output: "success"
  },
  {
    test_description: "Cometchat getGroup Invalid GUID",
    method_name: "CometChat.getGroup",
    parameter: ["random_group"],
    expect_output: "error"
  }
];

var testCaseCreateGroup = [
  {
    test_description:
      "Cometchat createGroup valid  GUID, valid groupName, public groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "test", CometChat.GROUP_TYPE.PUBLIC, "123"],
    expect_output: "success"
  },
  {
    test_description:
      "Cometchat createGroup valid  GUID, valid groupName, Private groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "test", CometChat.GROUP_TYPE.PRIVATE, "123"],
    expect_output: "success"
  },
  {
    test_description:
      "Cometchat createGroup valid  GUID, valid groupName, Private groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "test", CometChat.GROUP_TYPE.PRIVATE, ""],
    expect_output: "success"
  },

  {
    test_description:
      "Cometchat createGroup valid  GUID, valid groupName, Password groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "test", CometChat.GROUP_TYPE.PASSWORD, "123"],
    expect_output: "success"
  },

  {
    test_description:
      "Cometchat createGroup valid  GUID, valid groupName, Password groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "test", CometChat.GROUP_TYPE.PASSWORD, ""],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup valid  GUID, valid groupName, Empty groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "test", "", "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup valid  GUID, valid groupName, Empty groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "test", "", ""],
    expect_output: "error"
  },

  //------------------------------------------

  {
    test_description:
      "Cometchat createGroup valid  GUID, Empty groupName, public groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "", CometChat.GROUP_TYPE.PUBLIC, "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup valid  GUID, empty groupName, public groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "", CometChat.GROUP_TYPE.PUBLIC, ""],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup valid  GUID, empty groupName, Private groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "", CometChat.GROUP_TYPE.PRIVATE, "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup valid  GUID, empty groupName, Private groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "", CometChat.GROUP_TYPE.PRIVATE, ""],
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat createGroup valid  GUID, empty groupName, Password groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "", CometChat.GROUP_TYPE.PASSWORD, "123"],
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat createGroup valid  GUID, empty groupName, Password groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "", CometChat.GROUP_TYPE.PASSWORD, ""],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup valid  GUID, empty groupName, Empty groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "", "", "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup valid  GUID, empty groupName, Empty groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", "", "", ""],
    expect_output: "error"
  },

  //===============================================================================================================

  {
    test_description:
      "Cometchat createGroup Empty  GUID, valid groupName, public groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["", "test", CometChat.GROUP_TYPE.PUBLIC, "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, valid groupName, public groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["", "test", CometChat.GROUP_TYPE.PUBLIC, ""],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, valid groupName, Private groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["", "test", CometChat.GROUP_TYPE.PRIVATE, "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, valid groupName, Private groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["", "test", CometChat.GROUP_TYPE.PRIVATE, ""],
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat createGroup Empty  GUID, valid groupName, Password groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["", "test", CometChat.GROUP_TYPE.PASSWORD, "123"],
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat createGroup Empty  GUID, valid groupName, Password groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["", "test", CometChat.GROUP_TYPE.PASSWORD, ""],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, valid groupName, Empty groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["", "test", "", "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, valid groupName, Empty groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["", "test", "", ""],
    expect_output: "error"
  },

  //---------------------------------------------------------------------------------------------------------------

  {
    test_description:
      "Cometchat createGroup Empty  GUID, Empty groupName, public groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["", "", CometChat.GROUP_TYPE.PUBLIC, "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, empty groupName, public groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["", "", CometChat.GROUP_TYPE.PUBLIC, ""],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, empty groupName, Private groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["", "", CometChat.GROUP_TYPE.PRIVATE, "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, empty groupName, Private groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["", "", CometChat.GROUP_TYPE.PRIVATE, ""],
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat createGroup Empty  GUID, empty groupName, Password groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["", "", CometChat.GROUP_TYPE.PASSWORD, "123"],
    expect_output: "error"
  },

  {
    test_description:
      "Cometchat createGroup Empty  GUID, empty groupName, Password groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["", "", CometChat.GROUP_TYPE.PASSWORD, ""],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, empty groupName, Empty groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["", "", "", "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat createGroup Empty  GUID, empty groupName, Empty groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["", "", "", ""],
    expect_output: "error"
  }
];

var testCaseJoinGroup = [
  {
    test_description:
      "Cometchat joinGroup valid  GUID,  Public groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", CometChat.GROUP_TYPE.PUBLIC, "123"],
    expect_output: "success"
  },
  {
    test_description:
      "Cometchat joinGroup valid  GUID,  Public groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", CometChat.GROUP_TYPE.PUBLIC, ""],
    expect_output: "success"
  },
  {
    test_description:
      "Cometchat joinGroup valid  GUID,  Private groupType, valid password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", CometChat.GROUP_TYPE.PRIVATE, "123"],
    expect_output: "error"
  },
  {
    test_description:
      "Cometchat joinGroup valid  GUID,  Private groupType, Empty password",
    method_name: "CometChat.getGroup",
    parameter: ["valid", CometChat.GROUP_TYPE.PRIVATE, ""],
    expect_output: "error"
  }
];

var testCaseAddMembersToGroup = [
  {
    test_description: "Cometchat addMembersToGroup valid  GUID",
    method_name: "CometChat.addMembersToGroup",
    parameter: ["valid", "valid", []],
    expect_output: "success"
  },
  {
    test_description: "Cometchat addMembersToGroup valid  GUID",
    method_name: "CometChat.addMembersToGroup",
    parameter: ["valid", "invalid", []],
    expect_output: "error"
  },
  {
    test_description: "Cometchat addMembersToGroup valid  GUID",
    method_name: "CometChat.addMembersToGroup",
    parameter: ["invalid", "valid", []],
    expect_output: "error"
  },
  {
    test_description: "Cometchat addMembersToGroup valid  GUID",
    method_name: "CometChat.addMembersToGroup",
    parameter: ["invalid", "invalid", []],
    expect_output: "error"
  }
];

var testleaveGroup = [
  {
    test_description: "Cometchat leaveGroup valid  GUID",
    method_name: "CometChat.leaveGroup",
    parameter: ["supergroup"],
    expect_output: "success"
  },
  {
    test_description: "Cometchat leaveGroup Invalid  GUID",
    method_name: "CometChat.leaveGroup",
    parameter: ["random_group"],
    expect_output: "error"
  }
];

// GuestRequestBuilder Method
describe("CometChat GuestRequestBuilder Method", function() {
  this.timeout(0);

  before(async function() {
    if (!CometChat.isInitialized()) {
      var appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion("us")
        .build();
      await CometChat.init(valid_appId, appSetting);
    }
    expect(CometChat.isInitialized()).to.be.true;
    let user = await CometChat.login(valid_uid, valid_api_key);
    expect(user).to.be.instanceof(CometChat.AppUser);
  });

  testCaseGroupBuilder.map(test => {
    it(test.test_description, function() {
      var groupsRequest = cometchatBuilderRequest(test.parameter);

      if (!groupsRequest.hasOwnProperty("fetchNext")) {
        assert.isNotOk();
      } else {
        groupsRequest.fetchNext().then(
          groupList => {
            if(test.expect_output === "success"){
                expect(groupList).to.be.exist;
            }else{
                throw new Error(`Expected Success but got Error`);
            }
          },
          error => {
            if(test.expect_output === "error"){
                expect(error).to.be.an.instanceof(CometChat.CometChatException);
            }else{
                throw new Error(`Expected Error but got Success`);
            }
            
          }
        );
      }
    });
  });
});

function cometchatBuilderRequest(args) {
  var groupRequest = new CometChat.GroupsRequestBuilder();

  if (args.setLimit.flag) {
    groupRequest = groupRequest.setLimit(args.setLimit.data);
  }

  if (args.setSearchKeyWord.flag) {
    groupRequest = groupRequest.setSearchKeyword(args.setSearchKeyWord.data);
  }

  if (args.build.flag) {
    groupRequest = groupRequest.build();
    expect(groupRequest).to.be.instanceof(CometChat.GroupsRequest);
  }
  return groupRequest;
}

// GetGroup Method
describe("CometChat GetGroup Method", function() {
  this.timeout(0);

  before(async function() {
    if (!CometChat.isInitialized()) {
      var appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion("us")
        .build();
      await CometChat.init(valid_appId, appSetting);
    }
    expect(CometChat.isInitialized()).to.be.true;
    let user = await CometChat.login(valid_uid, valid_api_key);
    expect(user).to.be.instanceof(CometChat.AppUser);
  });

  testCaseGetGroup.map(test => {
    it(test.test_description, function() {
      CometChat.getGroup(test.parameter[0]).then(
        group => {
            if(test.expect_output === "success"){
                expect(group).to.be.an.instanceof(CometChat.Group);
            }else{
                throw new Error(`Expected Success but got Error`);
            }
        },
        error => {
            if(test.expect_output === "error"){
                expect(error).to.be.an.instanceof(CometChat.CometChatException);
            }else{
                throw new Error(`Expected Error but got Success`);
            }
        }
      );
    });
  });
});

// Create Group Method
describe("CometChat Create Group Method", function() {
  this.timeout(0);

  before(async function() {
    if (!CometChat.isInitialized()) {
      var appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion("us")
        .build();
      await CometChat.init(valid_appId, appSetting);
    }
    expect(CometChat.isInitialized()).to.be.true;
    let user = await CometChat.login(valid_uid, valid_api_key);
    expect(user).to.be.instanceof(CometChat.AppUser);
  });

  testCaseCreateGroup.map(test => {
    it(test.test_description, function() {
      if (test.parameter[0] === "valid") {
        test.parameter[0] = "superhero_" + Date.now();
      }

      var group = new CometChat.Group(...test.parameter);

      CometChat.createGroup(group).then(
        group => {
          if (test.expect_output === "success") {
            expect(group).to.be.an.instanceof(CometChat.Group);
          } else {
            throw new Error(`Expected Error but got Success`);
          }
        },
        error => {
          if (test.expect_output === "error") {
            expect(error).to.be.an.instanceof(CometChat.CometChatException);
          } else {
            throw new Error(`Expected S but got E`);
          }
        }
      );
    });
  });
});

// Join Group Method
describe("CometChat Join Group Method", function() {
  this.timeout(0);

  before(async function() {
    if (!CometChat.isInitialized()) {
      var appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion("us")
        .build();
      await CometChat.init(valid_appId, appSetting);
    }
    expect(CometChat.isInitialized()).to.be.true;
    let user = await CometChat.login(valid_uid, valid_api_key);
    expect(user).to.be.instanceof(CometChat.AppUser);
  });

  testCaseJoinGroup.map(test => {
    it(test.test_description, function() {
      if (test.parameter[0] === "valid") {
        if (test.parameter[1] == "public") {
          test.parameter[0] = valid_group;
        }

        if (test.parameter[1] == "private") {
          test.parameter[0] = valid_group_private;
        }
      } else {
        test.parameter[0] = "";
      }

      CometChat.getGroup(test.parameter[0]).then(
        group => {
          if (group.hasJoined) {
            CometChat.leaveGroup(group.guid).then(
              hasLeft => {
                CometChat.joinGroup(...test.parameter).then(
                  group => {
                    if (test.expect_output === "success") {
                      expect(group).to.be.an.instanceof(CometChat.Group);
                    } else {
                        throw new Error(`Expected Error but got Success`);
                    }
                  },

                  error => {
                    if (test.expect_output === "error") {
                      expect(group).to.be.an.instanceof(CometChat.Group);
                    } else {
                        throw new Error(`Expected Sucess but got error`);
                    }
                  }
                );
              },
              error => {
                  //error
              }
            );
          } else {
            CometChat.joinGroup(...test.parameter).then(
              group => {
                if (test.expect_output === "success") {
                  expect(group).to.be.an.instanceof(CometChat.Group);

                  CometChat.leaveGroup(GUID).then(hasLeft => {
                    expect(hasLeft).to.be.an.true;
                  });
                } else {
                    throw new Error(`Expected Error but got Success`);
                }
              },

              error => {
                if (test.expect_output === "error") {
                  expect(error).to.be.an.instanceof(
                    CometChat.CometChatException
                  );
                } else {
                    throw new Error(`Expected Success but got error`);
                }
              }
            );
          }
        },
        error => {
          CometChat.joinGroup(...test.parameter).then(
            group => {
              if (test.expect_output === "success") {
                expect(group).to.be.an.instanceof(CometChat.Group);
                CometChat.leaveGroup(GUID).then(hasLeft => {
                  expect(hasLeft).to.be.an.true;
                });
              } else {
                throw new Error(`Expected Error but got Success`);
              }
            },

            error => {
              if (test.expect_output === "error") {
                expect(error).to.be.an.instanceof(CometChat.CometChatException);
              } else {
                throw new Error(`Expected Success but got error`);
              }
            }
          );
        }
      );
    });
  });
});

//Add Members to Group
describe("CometChat AddMembersToGroup Method", function() {
  this.timeout(0);

  before(async function() {
    if (!CometChat.isInitialized()) {
      var appSetting = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion("us")
        .build();
      await CometChat.init(valid_appId, appSetting);
    }
    expect(CometChat.isInitialized()).to.be.true;
    let user = await CometChat.login(valid_uid, valid_api_key);
    expect(user).to.be.instanceof(CometChat.AppUser);
  });

  testCaseAddMembersToGroup.map(test => {
    it(test.test_description, function() {
      let membersList = [];
      let GUID;

      if (test.parameter[1] === "valid") {
        membersList = [
          new CometChat.GroupMember(
            "new1",
            CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT
          )
        ];
      }

      if (test.parameter[0] == "valid") {
        GUID = "superhero_1";
      } else {
        GUID = "valid_group";
      }

      CometChat.addMembersToGroup(GUID, membersList, []).then(
        response => {
          if (test.expect_output === "success") {
            expect(response).to.exist;
          } else {
            throw new Error(`Expected Error but got Success`);
          }
        },
        error => {
          if (test.expect_output === "error") {
            expect(error).to.be.an.instanceof(CometChat.CometChatException);
          } else {
            throw new Error(`Expected Success but got error`);
          }
        }
      );
    });
  });
});

//leaveGroup
// describe("CometChat Create Group Method", function() {
//   this.timeout(0);

//   before(async function() {
//     if (!CometChat.isInitialized()) {
//       var appSetting = new CometChat.AppSettingsBuilder()
//         .subscribePresenceForAllUsers()
//         .setRegion("us")
//         .build();
//       await CometChat.init(valid_appId, appSetting);
//     }
//     expect(CometChat.isInitialized()).to.be.true;
//     let user = await CometChat.login(valid_uid, valid_api_key);
//     expect(user).to.be.instanceof(CometChat.AppUser);
//   });

//   testleaveGroup.map(test => {
//     it(test.test_description, function() {
//       CometChat.leaveGroup(...test.parameter).then(
//         hasLeft => {
//           if (test.expect_output === "success") {
//             expect(hasLeft).to.be.an.true;
//           } else {
//             throw new Error(`Expected Error but got Success`);
//           }
//         },
//         error => {
//           if (test.expect_output === "error") {
//             expect(error).to.be.an.instanceof(CometChat.CometChatException);
//           } else {
//             throw new Error(`Expected Success but got error`);
//           }
//         }
//       );
//     });
//   });
// });
