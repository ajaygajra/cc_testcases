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
    this.timeout(100000);
    describe("Start message test cases", function () {
        before(async function () {
            await CometChat.init(appId);
            if (CometChat.isInitialized()) {
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

        it("should create a file", function (done) {
            // fs.readFile('/home/ins-201/Pictures/41912_Tvd4zfc.jpg', 'utf8', function (err, fileContents) {
            //     if (err) throw err;
            //     // tests = JSON.parse(fileContents);
            //     console.log(fileContents);                
            // });

              var filePath = '/home/ins-201/Pictures/41912_Tvd4zfc.jpg';
              var file = fs.readFileSync(filePath);
              var payload = [
                  '------WebKitFormBoundaryS4AeNzAzUP7OArMi',
                  'Content-Disposition: form-data; name="file"; filename="CIMG3456.png"',
                  'Content-Type: image/jpg',
                  '',
                  file,
                  '------WebKitFormBoundaryS4AeNzAzUP7OArMi--'
              ];
              payload = payload.join('\r\n');
              var binaryPayload = new Buffer(payload, 'binary');
            
            // var file = fs.createReadStream("/home/ins-201/Pictures/41912_Tvd4zfc.jpg")
              
                var receiverID = "jstestuser2";
                var messageType = CometChat.MESSAGE_TYPE.FILE;
                var receiverType = CometChat.RECEIVER_TYPE.USER;
                let mediaMessage = new CometChat.MediaMessage(receiverID, binaryPayload, messageType, receiverType);
                console.log({
                    binaryPayload,
                    mediaMessage
                });
                CometChat.sendMessage(mediaMessage).then(
                    message => {
                        // Message sent successfully.
                        console.log("Media message sent successfully", message);
                    },
                    error => {
                        console.log("Media message sending failed with error", error);
                        // Handle exception.
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