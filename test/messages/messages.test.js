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
// const FormData = require('form-data');
const CometChat = require('@cometchat-pro/chat').CometChat;

window.fetch = fetch;
global.fetch = fetch;
var fs = require('fs');



/***************************************
   Boilerplate ends here for CometChat.
 ***************************************/

const expect = require('chai').expect;

const appId = "1089f54cd9e81d",
    uid = "jstestuser1",
    invalidUid = 'jstestuser',
    invalidApiKey = '3de4f1672b44a43f1593ea03a27e3b3202a3869C',
    apiKey = "fe9d19181100853ce4aab9c096ea851716cd9554",
    authToken = "jstestuser1_01def4b6af98b28b7a9a00d55c57460eb1081b7f";


describe("Message test casess", function () {
    this.timeout(10000);
    describe("Start message test cases", function () {
        before(async function () {
            
            if (CometChat.isInitialized()) {
                await CometChat.init(appId);
                let user = await CometChat.login(uid, apiKey);
                expect(user).to.be.instanceof(CometChat.AppUser);
            }
        });
     
        it("should send the message", function () {               

            let receiverID = "jstestuser2",
                messageText = "Hello world!",
                messageType = CometChat.MESSAGE_TYPE.TEXT,
                receiverType = CometChat.RECEIVER_TYPE.USER;

            var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

            return CometChat.sendMessage(textMessage).then(
                message => {
                    expect(message).to.be.an.instanceof(CometChat.TextMessage) && expect(message.getSender()).to.be.an.instanceof(CometChat.User) && expect(message.getReceiver()).to.equal(receiverID);
                },
                error => {
                    expect(error).to.not.exist;
                }
            );
        });

        it("should not send TextMessage if receiverIs blank", function () {
            let receiverID = "",
                messageText = "Hello world!",
                messageType = CometChat.MESSAGE_TYPE.TEXT,
                receiverType = CometChat.RECEIVER_TYPE.USER;

            var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

            return CometChat.sendMessage(textMessage).then(
                message => {
                    expect(message).to.not.exist;
                },
                error => {
                    expect(error).to.be.an.instanceOf(CometChat.CometChatException) && expect(error.details.receiver[0]).to.equal("The receiver field is required.")
                }
            );
        });
        it("should not send TextMessage if receiverIs invalid", function () {
            let receiverID = "jstestuser50",
                messageText = "Hello world!",
                messageType = CometChat.MESSAGE_TYPE.TEXT,
                receiverType = CometChat.RECEIVER_TYPE.USER;

            var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

            return CometChat.sendMessage(textMessage).then(
                message => {
                    expect(message).to.not.exist;
                },
                error => {
                    expect(error).to.be.an.instanceOf(CometChat.CometChatException) && expect(error.code).to.equal("ERR_UID_NOT_FOUND");
                }
            );
        });


        it("should not send TextMessage without/ empty text", function () {
            let receiverID = "jstestuser2",
                messageText = "",
                messageType = CometChat.MESSAGE_TYPE.TEXT,
                receiverType = CometChat.RECEIVER_TYPE.USER;

            var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

            return CometChat.sendMessage(textMessage).then(
                message => {
                    expect(message).to.not.exist;
                },
                error => {
                    expect(error).to.be.an.instanceOf(CometChat.CometChatException) && expect(error.code).to.equal("ERR_EMPTY_MESSAGE_TEXT");
                }
            );
        });


        it("should send the message to group", function () {
            let receiverID = "supergroup",
                messageText = "Hello world!",
                messageType = CometChat.MESSAGE_TYPE.TEXT,
                receiverType = CometChat.RECEIVER_TYPE.GROUP;

            var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

            return CometChat.sendMessage(textMessage).then(
                message => {
                    expect(message).to.be.an.instanceof(CometChat.TextMessage) && expect(message.getSender()).to.be.an.instanceof(CometChat.User) && expect(message.getReceiver()).to.equal(receiverID);
                },
                error => {
                    expect(error).to.not.exist;
                }
            );
        });

        it("should not send TextMessage to group if receiverIs blank", function () {
            let receiverID = "",
                messageText = "Hello world!",
                messageType = CometChat.MESSAGE_TYPE.TEXT,
                receiverType = CometChat.RECEIVER_TYPE.GROUp;

            var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

            return CometChat.sendMessage(textMessage).then(
                message => {
                    expect(message).to.not.exist;
                },
                error => {
                    expect(error).to.be.an.instanceOf(CometChat.CometChatException) && expect(error.details.receiver[0]).to.equal("The receiver field is required.")
                }
            );
        });
        it("should not send TextMessage to group if receiverIs invalid", function () {
            let receiverID = "NOGROUP",
                messageText = "Hello world!",
                messageType = CometChat.MESSAGE_TYPE.TEXT,
                receiverType = CometChat.RECEIVER_TYPE.GROUP;

            var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

            return CometChat.sendMessage(textMessage).then(
                message => {
                    expect(message).to.not.exist;
                },
                error => {
                    expect(error).to.be.an.instanceOf(CometChat.CometChatException) && expect(error.code).to.equal("ERR_GUID_NOT_FOUND");
                }
            );
        });


        it("should not send TextMessage to group without/ empty text", function () {
            let receiverID = "supergroup",
                messageText = "",
                messageType = CometChat.MESSAGE_TYPE.TEXT,
                receiverType = CometChat.RECEIVER_TYPE.GROUP;

            var textMessage = new CometChat.TextMessage(receiverID, messageText, messageType, receiverType);

            return CometChat.sendMessage(textMessage).then(
                message => {
                    expect(message).to.not.exist;
                },
                error => {
                    expect(error).to.be.an.instanceOf(CometChat.CometChatException) && expect(error.code).to.equal("ERR_EMPTY_MESSAGE_TEXT");
                }
            );
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