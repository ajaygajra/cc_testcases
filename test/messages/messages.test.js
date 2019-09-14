/*************************************************
   Boilerplate ends here for CometChat testing .
**************************************************/

const window = require("browser-env")({
  url: "http://www.runtestcases.com",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});
const fetch = require("node-fetch");
// const FormData = require('form-data');
const CometChat = require("@cometchat-pro/chat").CometChat;

window.fetch = fetch;
global.fetch = fetch;
var fs = require("fs");

/*************************************************
   Boilerplate ends here for CometChat testing .
**************************************************/

const expect = require("chai").expect;

const appId = "100254e8db3d1b",
  uid = "superhero1",
  apiKey = "ebae51bfa38bb5f2f21266bd2e9f58b64c87ab9a",
  receiverID = "superhero2",
  invalidreceiverID = "invalid",
  receiverType = CometChat.RECEIVER_TYPE.USER,
  invalidreceiverType = "invalid",
  messageType = CometChat.MESSAGE_TYPE.TEXT,
  invalidmessageType = "invalid",
  fileMessageType = CometChat.MESSAGE_TYPE.IMAGE,
  invalidFileMessageType = "invalid",
  messageText = "Hello world!",
  emptymessageText = "",
  fileObj = {},
  emptyFileObj = {},
  customData = {
    customField: "YOUR_CUSTOM_VALUE"
  },
  emptyCustomData = {};

describe("Message test casess", function() {
  this.timeout(10000);
  describe("Start message test cases", function() {
    before(async function() {
      if (!CometChat.isInitialized()) {
        await CometChat.init(appId);
      }
      expect(CometChat.isInitialized()).to.be.true;
      let user = await CometChat.login(uid, apiKey);
      expect(user).to.be.instanceof(CometChat.AppUser);
    });

    /*
     ********************************************************
     *******************TEXT MESSAGE START*******************
     ********************************************************
     */

    it("Should send TextMessage if all arguments are valid/correct.", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.TextMessage);
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    it("Should not send TextMessage if messageText is empty", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        emptymessageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException) &&
            expect(error.code).to.equal("ERR_EMPTY_MESSAGE_TEXT");
        }
      );
    });

    it("Should return an error if messageType is invalid", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        invalidmessageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if messageType is invalid and messageText is empty", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        emptymessageText,
        invalidmessageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverType is invalid", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        messageType,
        invalidreceiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverType is invalid and messageText is empty", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        emptymessageText,
        messageType,
        invalidreceiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverType and messageType is invalid", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        invalidmessageType,
        invalidreceiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverType and messageType is invalid and messageText is empty", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        emptymessageText,
        invalidmessageType,
        invalidreceiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID is invalid", function() {
      var textMessage = new CometChat.TextMessage(
        invalidreceiverID,
        messageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID is invalid and messageText is empty", function() {
      var textMessage = new CometChat.TextMessage(
        invalidreceiverID,
        emptymessageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID, messsageType is invalid", function() {
      var textMessage = new CometChat.TextMessage(
        invalidreceiverID,
        messageText,
        invalidmessageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID, messageType is invalid and messageText is empty", function() {
      var textMessage = new CometChat.TextMessage(
        invalidreceiverID,
        emptymessageText,
        invalidmessageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID, receiverType is invalid", function() {
      var textMessage = new CometChat.TextMessage(
        invalidreceiverID,
        messageText,
        messageType,
        invalidreceiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID and receiverType is invalid and messageText is empty", function() {
      var textMessage = new CometChat.TextMessage(
        invalidreceiverID,
        emptymessageText,
        messageType,
        invalidreceiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID, messageType and receiverType is invalid", function() {
      var textMessage = new CometChat.TextMessage(
        invalidreceiverID,
        messageText,
        invalidmessageType,
        invalidreceiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if all the arguments are either empty or invalid", function() {
      var textMessage = new CometChat.TextMessage(
        invalidreceiverID,
        emptymessageText,
        invalidmessageType,
        invalidreceiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    /*
     ********************************************************
     ********************TEXT MESSAGE END********************
     ********************************************************
     */

    /*
     *******************************************************
     ******************MEDIA MESSAGE START******************
     *******************************************************
     */

    it("Should send MediaMessage if all arguments are valid/correct.", function() {
      var mediaMessage = new CometChat.MediaMessage(
        receiverID,
        fileObj,
        fileMessageType,
        receiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.MediaMessage) &&
            expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
            expect(message.getReceiver()).to.equal(receiverID);
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    it("Should not send MediaMessage if fileObj is empty", function() {
      var mediaMessage = new CometChat.MediaMessage(
        receiverID,
        emptyFileObj,
        fileMessageType,
        receiverType
      );

      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if fileMessageType is invalid", function() {
      var mediaMessage = new CometChat.MediaMessage(
        receiverID,
        fileObj,
        invalidFileMessageType,
        receiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if fileMessageType is invalid and fileObj is empty", function() {
      var mediaMessage = new CometChat.MediaMessage(
        receiverID,
        emptyFileObj,
        invalidFileMessageType,
        receiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverType is invalid", function() {
      var mediaMessage = new CometChat.MediaMessage(
        receiverID,
        fileObj,
        fileMessageType,
        invalidreceiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverType is invalid and fileObj is empty", function() {
      var mediaMessage = new CometChat.MediaMessage(
        receiverID,
        emptyFileObj,
        fileMessageType,
        invalidreceiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverType and fileMessageType is invalid", function() {
      var mediaMessage = new CometChat.MediaMessage(
        receiverID,
        fileObj,
        invalidFileMessageType,
        invalidreceiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverType and fileMessageType is invalid and fileObj is empty", function() {
      var mediaMessage = new CometChat.MediaMessage(
        receiverID,
        emptyFileObj,
        invalidFileMessageType,
        invalidreceiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID is invalid", function() {
      var mediaMessage = new CometChat.MediaMessage(
        invalidreceiverID,
        fileObj,
        fileMessageType,
        receiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID is invalid and fileObj is empty", function() {
      var mediaMessage = new CometChat.MediaMessage(
        invalidreceiverID,
        emptyFileObj,
        fileMessageType,
        receiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID, messsageType is invalid", function() {
      var mediaMessage = new CometChat.MediaMessage(
        invalidreceiverID,
        fileObj,
        invalidFileMessageType,
        receiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID, fileMessageType is invalid and fileObj is empty", function() {
      var mediaMessage = new CometChat.MediaMessage(
        invalidreceiverID,
        emptyFileObj,
        invalidFileMessageType,
        receiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID, receiverType is invalid", function() {
      var mediaMessage = new CometChat.MediaMessage(
        invalidreceiverID,
        fileObj,
        fileMessageType,
        invalidreceiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID and receiverType is invalid and fileObj is empty", function() {
      var mediaMessage = new CometChat.MediaMessage(
        invalidreceiverID,
        emptyFileObj,
        fileMessageType,
        invalidreceiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID, messageType and receiverType is invalid", function() {
      var mediaMessage = new CometChat.MediaMessage(
        invalidreceiverID,
        fileObj,
        invalidFileMessageType,
        invalidreceiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if all the arguments are either empty or invalid", function() {
      var mediaMessage = new CometChat.MediaMessage(
        invalidreceiverID,
        emptyFileObj,
        invalidFileMessageType,
        invalidreceiverType
      );
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if all the arguments are either empty or invalid", function() {
      var mediaMessage = new CometChat.MediaMessage("", "", "", "");
      return CometChat.sendMediaMessage(mediaMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    /*
     *******************************************************
     *******************MEDIA MESSAGE END*******************
     *******************************************************
     */

    /*
     ******************************************************
     *****************CUSTOM MESSAGE START*****************
     ******************************************************
     */

    it("Should send TextMessage if all arguments are valid/correct", function() {
      var customMessage = new CometChat.CustomMessage(
        receiverID,
        receiverType,
        customData
      );
      return CometChat.sendCustomMessage(customMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.CustomMessage) &&
            expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
            expect(message.getReceiver()).to.equal(receiverID);
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    it("Should return an error if customData is empty", function() {
      var customMessage = new CometChat.CustomMessage(
        receiverID,
        receiverType,
        emptyCustomData
      );
      return CometChat.sendCustomMessage(customMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.CustomMessage) &&
            expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
            expect(message.getReceiver()).to.equal(receiverID);
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    it("Should return an error if receiverType is invalid", function() {
      var customMessage = new CometChat.CustomMessage(
        receiverID,
        invalidreceiverType,
        emptyCustomData
      );
      return CometChat.sendCustomMessage(customMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverType is invalid and customData is empty", function() {
      var customMessage = new CometChat.CustomMessage(
        receiverID,
        invalidreceiverType,
        emptyCustomData
      );
      return CometChat.sendCustomMessage(customMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID is invalid", function() {
      var customMessage = new CometChat.CustomMessage(
        invalidreceiverID,
        receiverType,
        customData
      );
      return CometChat.sendCustomMessage(customMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID is invalid and customData is empty", function() {
      var customMessage = new CometChat.CustomMessage(
        invalidreceiverID,
        receiverType,
        emptyCustomData
      );
      return CometChat.sendCustomMessage(customMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if receiverID and receiverType is invalid", function() {
      var customMessage = new CometChat.CustomMessage(
        invalidreceiverID,
        invalidreceiverType,
        customData
      );
      return CometChat.sendCustomMessage(customMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if all arguments are either empty or invalid.", function() {
      var customMessage = new CometChat.CustomMessage(
        invalidreceiverID,
        invalidreceiverType,
        emptyCustomData
      );
      return CometChat.sendCustomMessage(customMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    it("Should return an error if customeMessage is empty", function() {
      var customMessage = new CometChat.CustomMessage("", "", "");
      return CometChat.sendCustomMessage(customMessage).then(
        message => {
          expect(message).to.not.exist();
        },
        error => {
          expect(error).to.be.an.instanceOf(CometChat.CometChatException);
        }
      );
    });

    /*
     ******************************************************
     ******************CUSTOM MESSAGE END******************
     ******************************************************
     */

    /*
     ******************************************************
     ******************EDIT MESSAGE START******************
     ******************************************************
     */

    it("Should send edited TextMessage", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.TextMessage) &&
            expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
            expect(message.getReceiver()).to.equal(receiverID);
          let messageId = message.id;
          let textMessage = new CometChat.TextMessage(
            receiverID,
            messageText,
            messageType,
            receiverType
          );
          textMessage.setId(messageId);
          CometChat.editMessage(textMessage).then(
            message => {
              expect(message).to.be.an.instanceof(CometChat.TextMessage);
            },
            error => {
              expect(error).to.not.exist();
            }
          );
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    it("Should return error while sending edited TextMessage if edited message id is invalid", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.TextMessage) &&
            expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
            expect(message.getReceiver()).to.equal(receiverID);
          let textMessage = new CometChat.TextMessage(
            receiverID,
            messageText,
            messageType,
            receiverType
          );
          textMessage.setId("1112222");
          CometChat.editMessage(textMessage).then(
            message => {
              expect(message).to.not.exist();
            },
            error => {
              expect(error).to.be.an.instanceOf(CometChat.CometChatException);
            }
          );
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    it("Should return error while sending edited TextMessage if edited message is empty", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.TextMessage) &&
            expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
            expect(message.getReceiver()).to.equal(receiverID);
          let textMessage = new CometChat.TextMessage("", "", "", "");
          textMessage.setId(message.id);
          CometChat.editMessage(textMessage).then(
            message => {
              expect(message).to.not.exist();
            },
            error => {
              expect(error).to.be.an.instanceOf(CometChat.CometChatException);
            }
          );
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    /*
     ******************************************************
     *******************EDIT MESSAGE END*******************
     ******************************************************
     */

    /*
     ******************************************************
     *****************DELETE MESSAGE START*****************
     ******************************************************
     */

    it("Should delete the TextMessage", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.TextMessage) &&
            expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
            expect(message.getReceiver()).to.equal(receiverID);
          let messageId = message.id;
          CometChat.deleteMessage(messageId).then(
            message => {
              expect(message).to.be.an.instanceof(CometChat.TextMessage);
            },
            error => {
              expect(error).to.not.exist();
            }
          );
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    it("Should return error while deleting TextMessage if messageId is invalid", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.TextMessage) &&
            expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
            expect(message.getReceiver()).to.equal(receiverID);
          CometChat.deleteMessage("1112222").then(
            message => {
              expect(message).to.not.exist();
            },
            error => {
              expect(error).to.be.an.instanceOf(CometChat.CometChatException);
            }
          );
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    it("Should return error while deleting TextMessage if messageId is empty", function() {
      var textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        messageType,
        receiverType
      );
      return CometChat.sendMessage(textMessage).then(
        message => {
          expect(message).to.be.an.instanceof(CometChat.TextMessage) &&
            expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
            expect(message.getReceiver()).to.equal(receiverID);
          CometChat.deleteMessage("").then(
            message => {
              expect(message).to.not.exist();
            },
            error => {
              expect(error).to.be.an.instanceOf(CometChat.CometChatException);
            }
          );
        },
        error => {
          expect(error).to.not.exist();
        }
      );
    });

    /*
     ******************************************************
     ******************DELETE MESSAGE END******************
     ******************************************************
     */

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
});
