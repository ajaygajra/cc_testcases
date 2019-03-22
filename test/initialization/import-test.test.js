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

/******************************************
   Boilerplate ends here for CometChat testing.
 ******************************************/


const expect = require('chai').expect;
describe('Exports the correct objects', function() {
    it('should export raw objects', function()  {    
            expect(CometChat).to.exist;
    });
});