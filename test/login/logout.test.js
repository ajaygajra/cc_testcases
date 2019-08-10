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
    apiKey = "fe9d19181100853ce4aab9c096ea851716cd9554";

describe("Login test cases", function() {
    this.timeout(10000);
    before(async function() {
        if (!CometChat.isInitialized()) await CometChat.init(appId);
        expect(CometChat.isInitialized()).to.be.true;
    });

    it("Should logout even if an argument is passed", function () {
        let user = await CometChat.login(uid, apiKey);
        expect(user).to.be.instanceof(CometChat.AppUser);
        return CometChat.logout('argument').then(() => {
            expect(true).to.be.true;
        }, error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException);
        });
    });

    it("Should logout when called correctly.", function () {
        let user = await CometChat.login(uid, apiKey);
        expect(user).to.be.instanceof(CometChat.AppUser);
        return CometChat.logout().then(() => {
            expect(true).to.be.true;
        }, error => {
            expect(error).to.be.an.instanceof(CometChat.CometChatException);
        });
    });
});