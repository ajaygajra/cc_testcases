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
const CometChat = require("@cometchat-pro/chat").CometChat;

window.fetch = fetch;
global.fetch = fetch;

// import testCaseMessageBuilder  from './MessageRequestBuilder';

/*************************************************
   Boilerplate ends here for CometChat testing .
**************************************************/

var chai = require("chai");
const expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

var appId = "247908b08eab7",
  uid = "superhero1",
  apiKey = "9c3607b6862f23477741472cbb0ac1beffa9a410",
  receiverID = "superhero3",
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
  emptyCustomData = {},
  editedMessageText = "Hi everyone",
  emptyeditedMessageText = "",
  validMessageId = 242,
  invalidMessageId = -10,
  validUnreadUid = "superhero3",
  validUnreadGuid = "supergroup",
  invalidUnreadUid = "super",
  invalidUnreadGuid = "superhero3",
  emptyUnreadUid = "",
  emptyUnreadGuid = "",
  nullMessageId = null,
  validUndeliveredUid = "superhero3",
  validUndeliveredGuid = "supergroup",
  invalidUndeliveredUid = "super",
  invalidUndeliveredGuid = "superhero3",
  emptyUndeliveredUid = "",
  emptyUndeliveredGuid = "",
  validLimit = 30,
  negativeLimit = -21,
  zeroLimit = 0,
  validKeyWord = 'cap',
  invalidKeyWord = '10',
  emptyKeyWord = '',
  otherUid = 'superhero2',
  invalidOtherUid = 'invalid',
  otherGuid = 'jeetgroup',
  validTimestamp = Date.now(),
  invalidTimestamp = -Math.abs(validTimestamp),
  validMuid = 'muid',
  invalidMuid = -10,
  emptyMuid = '',
  validMetaData = {
    latitude: "50.6192171633316",
    longitude: "-72.68182268750002"
  },
  invalidMetaData = 'metadata',
  emptyMetaData = '';

var testCaseTextMessage = [
  {
    test_description: "CometChat TextMessage with valid parameters.",
    parameter: [receiverID, messageText, receiverType],
    expected_output: "success"
  },
  {
    test_description: "CometChat TextMessage with empty messageText.",
    parameter: [receiverID, emptymessageText, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with empty messageText.",
    parameter: [receiverID, emptymessageText, receiverType],
    expected_output: "error"
  },
  {
    test_description: "CometChat TextMessage with invalid receiverType.",
    parameter: [receiverID, messageText, invalidreceiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverType and empty messageText.",
    parameter: [receiverID, emptymessageText, invalidreceiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverType",
    parameter: [
      receiverID,
      messageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverType and empty messageText.",
    parameter: [
      receiverID,
      emptymessageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description: "CometChat TextMessage with invalid receiverID.",
    parameter: [invalidreceiverID, messageText, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverID and empty messageText.",
    parameter: [invalidreceiverID, emptymessageText, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverID.",
    parameter: [
      invalidreceiverID,
      messageText,
      receiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverID and empty messageText.",
    parameter: [
      invalidreceiverID,
      emptymessageText,
      receiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverID and invalid receiverType.",
    parameter: [
      invalidreceiverID,
      messageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverID and invalid receiverType and empty messageText.",
    parameter: [
      invalidreceiverID,
      emptymessageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverID and invalid receiverType.",
    parameter: [
      invalidreceiverID,
      messageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat TextMessage with invalid receiverID and invalid receiverType and empty messageText.",
    parameter: [
      invalidreceiverID,
      emptymessageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description: "CometChat TextMessage with all paramters as null.",
    parameter: [null, null, null],
    expected_output: "error"
  },
  {
    test_description: "CometChat TextMessage with null messsageTxt.",
    parameter: [receiverID, null, receiverType],
    expected_output: "error"
  },
  {
    test_description: "CometChat TextMessage with null textMessage Object.",
    parameter: [null],
    expected_output: "error"
  }
];

var testCaseMediaMessage = [
  {
    test_description: "CometChat MediaMessage with valid parameters.",
    parameter: [receiverID, fileObj, fileMessageType, receiverType],
    expected_output: "success"
  },
  {
    test_description: "CometChat MediaMessage with invalid receiverType.",
    parameter: [receiverID, fileObj, fileMessageType, invalidreceiverType],
    expected_output: "error"
  },
  {
    test_description: "CometChat MediaMessage with invalid FilemessageType.",
    parameter: [receiverID, fileObj, invalidFileMessageType, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with invalid FilemessageType and invalid receiverType.",
    parameter: [
      receiverID,
      fileObj,
      invalidFileMessageType,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description: "CometChat MediaMessage with empty fileObj.",
    parameter: [receiverID, emptyFileObj, fileMessageType, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with empty fileObj and invalid receiverType.",
    parameter: [receiverID, emptyFileObj, fileMessageType, invalidreceiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with empty fileObj and invalid FilemessageType.",
    parameter: [receiverID, emptyFileObj, invalidFileMessageType, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with empty fileObj and invalid FilemessageType and invalid receiverType.",
    parameter: [
      receiverID,
      emptyFileObj,
      invalidFileMessageType,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description: "CometChat MediaMessage with invalid receiverID.",
    parameter: [invalidreceiverID, fileObj, fileMessageType, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with invalid receiverID and invalid receiverType.",
    parameter: [
      invalidreceiverID,
      fileObj,
      fileMessageType,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with invalid receiverID and invalid FileMessageType.",
    parameter: [
      invalidreceiverID,
      fileObj,
      invalidFileMessageType,
      receiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with invalid receiverID and invalid FilemessageType and invalid receiverType.",
    parameter: [
      invalidreceiverID,
      fileObj,
      invalidFileMessageType,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with invalid receiverID and empty fileObj.",
    parameter: [invalidreceiverID, emptyFileObj, fileMessageType, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with invalid receiverID and empty fileObj and invalid receiverType.",
    parameter: [
      invalidreceiverID,
      emptyFileObj,
      fileMessageType,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with invalid receiverID and empty fileObj and invalid FilemessageType.",
    parameter: [
      invalidreceiverID,
      emptyFileObj,
      invalidFileMessageType,
      receiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat MediaMessage with invalid receiverID and empty fileObj and invalid FilemessageType and invalid receiverType.",
    parameter: [
      invalidreceiverID,
      emptyFileObj,
      invalidFileMessageType,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description: "CometChat MediaMessage with all paramters as null.",
    parameter: [null, null, null, null],
    expected_output: "error"
  },
  {
    test_description: "CometChat MediaMessage with null fileObj.",
    parameter: [receiverID, null, fileMessageType, receiverType],
    expected_output: "error"
  },
  {
    test_description: "CometChat MediaMessage with null mediaMessage Object.",
    parameter: [null],
    expected_output: "error"
  }
];

var testCaseCustomMessage = [
  {
    test_description: "CometChat CustomMessage with valid parameters.",
    parameter: [receiverID, receiverType, customData],
    expected_output: "success"
  },
  {
    test_description: "CometChat CustomMessage with empty customData.",
    parameter: [receiverID, receiverType, emptyCustomData],
    expected_output: "error"
  },
  {
    test_description: "CometChat CustomMessage with invalid receiverType.",
    parameter: [receiverID, invalidreceiverType, customData],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat CustomMessage with invalid receiverType and empty customData.",
    parameter: [receiverID, invalidreceiverType, emptyCustomData],
    expected_output: "error"
  },
  {
    test_description: "CometChat CustomMessage with invalid receiverID.",
    parameter: [invalidreceiverID, receiverType, customData],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat CustomMessage with invalid receiverID and empty customData.",
    parameter: [invalidreceiverID, receiverType, emptyCustomData],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat CustomMessage with invalid receiverID and receiverType.",
    parameter: [invalidreceiverID, invalidreceiverType, customData],
    expected_output: "error"
  },
  {
    test_description: "CometChat CustomMessage with all invalid parameter.",
    parameter: [invalidreceiverID, invalidreceiverType, emptyCustomData],
    expected_output: "error"
  },
  {
    test_description: "CometChat CustomMessage with all paramters as null.",
    parameter: [null, null, null],
    expected_output: "error"
  },
  {
    test_description: "CometChat CustomMessage with null customData.",
    parameter: [receiverID, receiverType, null],
    expected_output: "error"
  },
  {
    test_description: "CometChat CustomMessage with null customMessage Object.",
    parameter: [null],
    expected_output: "error"
  }
];

var testCaseEditMessage = [
  {
    test_description: "CometChat EditMessage with valid parameters",
    parameter: [receiverID, editedMessageText, receiverType],
    expected_output: "success"
  },
  {
    test_description: "CometChat EditMessage with empty edited message.",
    parameter: [receiverID, emptyeditedMessageText, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with empty edited messageText.",
    parameter: [
      receiverID,
      emptyeditedMessageText,
      receiverType
    ],
    expected_output: "error"
  },
  {
    test_description: "CometChat EditMessage with invalid receiverType.",
    parameter: [receiverID, messageText, invalidreceiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverType and empty messageText.",
    parameter: [
      receiverID,
      emptyeditedMessageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverType",
    parameter: [
      receiverID,
      messageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverType and empty messageText.",
    parameter: [
      receiverID,
      emptyeditedMessageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description: "CometChat EditMessage with invalid receiverID.",
    parameter: [invalidreceiverID, messageText, receiverType],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverID and empty messageText.",
    parameter: [
      invalidreceiverID,
      emptyeditedMessageText,
      receiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverID",
    parameter: [
      invalidreceiverID,
      messageText,
      receiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverID and empty messageText.",
    parameter: [
      invalidreceiverID,
      emptyeditedMessageText,
      receiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverID and invalid receiverType.",
    parameter: [
      invalidreceiverID,
      messageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverID and invalid receiverType and empty messageText.",
    parameter: [
      invalidreceiverID,
      emptyeditedMessageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverID and invalid receiverType",
    parameter: [
      invalidreceiverID,
      messageText,
      invalidreceiverType
    ],
    expected_output: "error"
  },
  {
    test_description:
      "CometChat EditMessage with invalid receiverID and invalid receiverType and empty messageText.",
    parameter: [
      invalidreceiverID,
      emptyeditedMessageText,
      invalidreceiverType
    ],
    expected_output: "error"
  }
];

var testCaseDeleteMessage = [
  {
    test_description: "CometChat DeleteMessage with valid messageId.",
    parameter: ["valid"],
    expected_output: "success"
  },
  {
    test_description: "CometChat DeleteMessage with invalid messageId.",
    parameter: ["invalid"],
    expected_output: "error"
  },
  {
    test_description: "CometChat DeleteMessage with empty messageId.",
    parameter: ["empty"],
    expected_output: "error"
  }
];

var testCaseGetMessageReceipts = [
  {
    test_description: "Cometchat getMessageReceipts with valid messageId",
    parameter: [validMessageId],
    expected_output: "success"
  },
  {
    test_description: "Cometchat getMessageReceipts with invalid messageId",
    parameter: [invalidMessageId],
    expected_output: "error"
  },
  {
    test_description: "Cometchat getMessageReceipts with null messageId",
    parameter: [nullMessageId],
    expected_output: "error"
  },
  {
    test_description: "Cometchat getMessageReceipts without messageId",
    parameter: [],
    expected_output: "error"
  }
];

var testCaseGetUnreadMessageCountForUser = [
  {
    test_description:
      "Cometchat getUnreadMessageCountForUser with valid parameters",
    parameter: [validUnreadUid, false],
    expected_output: "success"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForUser with invalid parameters",
    parameter: [invalidUnreadUid, "abcd"],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForUser with empty parameters",
    parameter: [emptyUnreadUid, ""],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForUser with null parameters",
    parameter: [null, null],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForUser without parameters",
    parameter: [],
    expected_output: "error"
  }
];

var testCaseGetUnreadMessageCountForGroup = [
  {
    test_description:
      "Cometchat getUnreadMessageCountForGroup with valid parameters",
    parameter: [validUnreadGuid, false],
    expected_output: "success"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForGroup with invalid parameters",
    parameter: [invalidUnreadGuid, "abcd"],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForGroup with empty parameters",
    parameter: [emptyUnreadGuid, ""],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForGroup with null parameters",
    parameter: [null, null],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForGroup without parameters",
    parameter: [],
    expected_output: "error"
  }
];

var testCaseGetUnreadMessageCountForAllUsers = [
  {
    test_description:
      "Cometchat getUnreadMessageCountForAllUsers with valid parameters",
    parameter: [],
    expected_output: "success"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForAllUsers with extra params",
    parameter: [false],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForAllUsers with null extra params",
    parameter: [null],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForAllUsers with null extra params",
    parameter: [""],
    expected_output: "error"
  }
];

var testCaseGetUnreadMessageCountForAllGroups = [
  {
    test_description:
      "Cometchat getUnreadMessageCountForAllGroups with valid parameters",
    parameter: [],
    expected_output: "success"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForAllGroups with extra params",
    parameter: [false],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForAllGroups with empty extra params",
    parameter: [""],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUnreadMessageCountForAllGroups with null extra params",
    parameter: [null],
    expected_output: "error"
  }
];

var testCaseGetUnreadMessageCount = [
  {
    test_description: "Cometchat getUnreadMessageCount with valid parameters",
    parameter: [],
    expected_output: "success"
  },
  {
    test_description: "Cometchat getUnreadMessageCount with extra params",
    parameter: ["extra"],
    expected_output: "error"
  },
  {
    test_description: "Cometchat getUnreadMessageCount with empty extra params",
    parameter: [""],
    expected_output: "error"
  },
  {
    test_description: "Cometchat getUnreadMessageCount with null extra params",
    parameter: [null]
  }
];

var testCaseGetUndeliveredMessageCountForUser = [
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForUser with valid parameters",
    parameter: [validUndeliveredUid, false],
    expected_output: "success"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForUser with invalid parameters",
    parameter: [invalidUndeliveredUid, "abcd"],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForUser with empty parameters",
    parameter: [emptyUndeliveredUid, ""],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForUser with null parameters",
    parameter: [null, null],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForUser without parameters",
    parameter: [],
    expected_output: "error"
  }
];

var testCaseGetUndeliveredMessageCountForGroup = [
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForGroup with valid parameters",
    parameter: [validUndeliveredGuid, false],
    expected_output: "success"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForGroup with invalid parameters",
    parameter: [invalidUndeliveredGuid, "abcd"],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForGroup with empty parameters",
    parameter: [emptyUndeliveredGuid, ""],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForGroup with null parameters",
    parameter: [null, null],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForGroup without parameters",
    parameter: [],
    expected_output: "error"
  }
];

var testCaseGetUndeliveredMessageCountForAllUsers = [
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForAllUsers with valid parameters",
    parameter: [],
    expected_output: "success"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForAllUsers with extra params",
    parameter: [false],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForAllUsers with empty extra params",
    parameter: [""],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForAllUsers with null extra params",
    parameter: [null],
    expected_output: "error"
  }
];

var testCaseGetUndeliveredMessageCountForAllGroups = [
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForAllGroups with valid parameters",
    parameter: [],
    expected_output: "success"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForAllGroups with extra params",
    parameter: [false],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForAllGroups with empty extra params",
    parameter: [""],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCountForAllGroups with null extra params",
    parameter: [null],
    expected_output: "error"
  }
];

var testCaseGetUndeliveredMessageCount = [
  {
    test_description:
      "Cometchat getUndeliveredMessageCount with valid parameters",
    parameter: [],
    expected_output: "success"
  },
  {
    test_description: "Cometchat getUndeliveredMessageCount with extra params",
    parameter: ["extra"],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCount with empty extra params",
    parameter: [""],
    expected_output: "error"
  },
  {
    test_description:
      "Cometchat getUndeliveredMessageCount with null extra params",
    parameter: [null],
    expected_output: "error"
  }
];

var testCaseMessageBuilder = [
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: otherUid
      },
      setGUID: {
        flag: false,
        data: otherGuid
      },
      setMessageId:{
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'success'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: otherUid
      },
      setGUID: {
        flag: false,
        data: otherGuid
      },
      setMessageId:{
        flag: false,
        data: validMessageId
      },
      setTimestamp:{
        flag: true,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'success'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid messageId with valid uid",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: otherUid
      },
      setGUID: {
        flag: false,
        data: otherGuid
      },
      setMessageId:{
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid timestamp with valid uid",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: otherUid
      },
      setGUID: {
        flag: false,
        data: otherGuid
      },
      setMessageId:{
        flag: false,
        data: validMessageId
      },
      setTimestamp:{
        flag: true,
        data: invalidTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid uid with valid messageId",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: invalidOtherUid
      },
      setGUID: {
        flag: false,
        data: otherGuid
      },
      setMessageId:{
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid uid with valid timestamp",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: invalidOtherUid
      },
      setGUID: {
        flag: false,
        data: otherGuid
      },
      setMessageId:{
        flag: false,
        data: validMessageId
      },
      setTimestamp:{
        flag: true,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid uid and messageId",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: invalidOtherUid
      },
      setGUID: {
        flag: false,
        data: otherGuid
      },
      setMessageId:{
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid uid and timestamp",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: invalidOtherUid
      },
      setGUID: {
        flag: false,
        data: otherGuid
      },
      setMessageId:{
        flag: false,
        data: validMessageId
      },
      setTimestamp:{
        flag: true,
        data: invalidTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: otherUid
      },
      setGUID: {
        flag: true,
        data: otherGuid
      },
      setMessageId:{
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'success'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: otherUid
      },
      setGUID: {
        flag: true,
        data: otherGuid
      },
      setMessageId:{
        flag: false,
        data: validMessageId
      },
      setTimestamp:{
        flag: true,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'success'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid messageId with valid Guid",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: otherUid
      },
      setGUID: {
        flag: true,
        data: otherGuid
      },
      setMessageId:{
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid timestamp with valid Guid",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: otherUid
      },
      setGUID: {
        flag: true,
        data: otherGuid
      },
      setMessageId:{
        flag: false,
        data: validMessageId
      },
      setTimestamp:{
        flag: true,
        data: invalidTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid Guid with valid messageId",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidOtherUid
      },
      setMessageId:{
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid Guid with valid timestamp",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidOtherUid
      },
      setMessageId:{
        flag: false,
        data: validMessageId
      },
      setTimestamp:{
        flag: true,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid Guid and messageId",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidOtherUid
      },
      setMessageId:{
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
  {
    test_description: "Cometchat MessagesRequestBuilder invalid Guid and timestamp",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidOtherUid
      },
      setMessageId:{
        flag: false,
        data: validMessageId
      },
      setTimestamp:{
        flag: true,
        data: invalidTimestamp
      },
      setUnread:{
        flag: true,
        data: false
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : 'error'
  },
];

var testCaseMuid = [
  {
    test_description: "CometChat TextMessage with valid Muid",
    parameter: [receiverID, messageText, receiverType],
    Muid: [validMuid],
    expected_output: 'success'
  },
  {
    test_description: "CometChat TextMessage with empty Muid",
    parameter: [receiverID, messageText, receiverType],
    Muid: [emptyMuid],
    expected_output: 'error'
  },
  {
    test_description: "CometChat TextMessage with invalid Muid",
    parameter: [receiverID, messageText, receiverType],
    Muid: [invalidMuid],
    expected_output: 'error'
  },
];

var testCaseMetaData = [
  {
    test_description: "CometChat TextMessage with valid MetaData",
    parameter: [receiverID, messageText, receiverType],
    MetaData: [validMetaData],
    expected_output: 'success'
  },
  {
    test_description: "CometChat TextMessage with invalid MetaData",
    parameter: [receiverID, messageText, receiverType],
    MetaData: [invalidMetaData],
    expected_output: 'error'
  },
  // {
  //   test_description: "CometChat TextMessage with empty MetaData",
  //   parameter: [receiverID, messageText, receiverType],
  //   MetaData: [emptyMetaData],
  //   expected_output: 'error'
  // },
];

describe("Cometchat Message Method", function() {
  this.timeout(0);

  before(async function() {
    if (!CometChat.isInitialized()) {
      let cometChatSettings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CometChat.AppSettings.REGION_US).build();
      await CometChat.init(appId,cometChatSettings);
    }
    expect(CometChat.isInitialized()).to.be.true;
    let user = await CometChat.login(uid, apiKey);
    expect(user).to.be.instanceof(CometChat.AppUser);
  });

  testCaseTextMessage.map(test => {
    it(test.test_description, function() {
      return cometchatTextMessage(test.expected_output,...test.parameter);
    });
  });

  testCaseMediaMessage.map(test => {
    it(test.test_description, function() {
      return cometchatMediaMessage(test.expected_output,...test.parameter);
    });
  });

  // testCaseCustomMessage.map(test => {
  //   it(test.test_description, function() {
  //     return cometchatCustomMessage(test.expected_output,...test.parameter);
  //   });
  // });

  testCaseEditMessage.map(test => {
    it(test.test_description, function() {
      return cometchatEditMessage(test.expected_output,...test.parameter);
    });
  });

  testCaseDeleteMessage.map(test => {
    it(test.test_description, function() {
      return cometchatDeleteMessage(test.expected_output,...test.parameter);
    });
  });

  testCaseGetMessageReceipts.map(test => {
    it(test.test_description, function() {
      return cometchatgetMessageReceipt(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUnreadMessageCountForUser.map(test => {
    it(test.test_description, function() {
      return cometchatgetUnreadMesssageCountForUser(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUnreadMessageCountForGroup.map(test => {
    it(test.test_description, function() {
      return cometchatgetUnreadMesssageCountForGroup(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUnreadMessageCountForAllUsers.map(test => {
    it(test.test_description, function() {
      return cometchatgetUnreadMesssageCountForAllUsers(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUnreadMessageCountForAllGroups.map(test => {
    it(test.test_description, function() {
      return cometchatgetUnreadMesssageCountForAllGroups(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUnreadMessageCount.map(test => {
    it(test.test_description, function() {
      return cometchatgetUnreadMesssageCount(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUndeliveredMessageCountForUser.map(test => {
    it(test.test_description, function() {
      return cometchatgetUndeliveredMesssageCountForUser(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUndeliveredMessageCountForGroup.map(test => {
    it(test.test_description, function() {
      return cometchatgetUndeliveredMesssageCountForGroup(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUndeliveredMessageCountForAllUsers.map(test => {
    it(test.test_description, function() {
      return cometchatgetUndeliveredMesssageCountForAllUsers(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUndeliveredMessageCountForAllGroups.map(test => {
    it(test.test_description, function() {
      return cometchatgetUndeliveredMesssageCountForAllGroups(test.expected_output,...test.parameter);
    });
  });

  testCaseGetUndeliveredMessageCount.map(test => {
    it(test.test_description, function() {
      return cometchatgetUndeliveredMesssageCount(test.expected_output,...test.parameter);
    });
  });

  testCaseMessageBuilder.map(test => {
    it(test.test_description, async function() {
      var messageRequest = cometchatBuilderRequest(test.parameter);
      await messageRequest.fetchNext().then(
        messageList => {
          if(test.expected_output === 'success'){
            expect(messageList).to.be.an.instanceof(Array);
          }else{
            throw new Error(`Expected an error but got success`);
          }
        }, (error) => {
          
          if(test.expected_output == 'error'){
            expect(error).to.be.an.instanceof(Object);
          }else{
            throw new Error(`Expected success but got error`);
          }
        }
      );
    });
  });

  // testCaseMuid.map(test => {
  //   it(test.test_description, function() {
  //     return cometchatMuid(test.Muid,test.expected_output,...test.parameter);
  //   });
  // })

  // testCaseMetaData.map(test => {
  //   it(test.test_description, function() {
  //     return cometchatMetaData(test.MetaData,test.expected_output,...test.parameter);
  //   });
  // })

  after("logout", function() {
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

function cometchatTextMessage(expected_output,...args) {
  if (args.length == 1) {
    var txtMessage = new CometChat.TextMessage(null);
  } else {
    var txtMessage = new CometChat.TextMessage(...args);
  }
  expect(txtMessage).to.be.an.instanceof(CometChat.TextMessage);
  return CometChat.sendMessage(txtMessage).then(
    message => {
      if(expected_output === 'success'){
        expect(message).to.be.an.instanceof(CometChat.TextMessage) && expect(message.getSender()).to.be.an.instanceof(CometChat.User) && expect(message.getReceiver()).to.equal(receiverID);
      }else{
        throw new Error(`Expected error but got success`)
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`)
      }
    }
  );
}

function cometchatMediaMessage(expected_output,...args) {
  if (args.length == 1) {
    var mediaMessage = new CometChat.MediaMessage(null);
  } else {
    var mediaMessage = new CometChat.MediaMessage(...args);
  }
  expect(mediaMessage).to.be.an.instanceof(CometChat.MediaMessage);
  return CometChat.sendMediaMessage(mediaMessage).then(
    message => {
      if(expected_output === 'success'){
        expect(message).to.be.an.instanceof(CometChat.MediaMessage) && expect(message.getSender()).to.be.an.instanceof(CometChat.User) && expect(message.getReceiver()).to.equal(receiverID);
      }else{
        throw new Error(`Expected error but got success`)
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`)
      }
    }
  );
}

function cometchatCustomMessage(expected_output,...args) {
  if (args.length == 1) {
    var customMessage = new CometChat.CustomMessage(null);
  } else {
    var customMessage = new CometChat.CustomMessage(...args);
  }
  expect(customMessage).to.be.an.instanceof(CometChat.CustomMessage);
  return CometChat.sendCustomMessage(customMessage).then(
    message => {
      if(expected_output === 'success'){
        expect(message).to.be.an.instanceof(CometChat.CustomMessage) && expect(message.getSender()).to.be.an.instanceof(CometChat.User) && expect(message.getReceiver()).to.equal(receiverID);
      }else{
        throw new Error(`Expected error but got success`)
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`)
      }
    }
  );
}

function cometchatEditMessage(expected_output,...args) {
  var txtMessage = new CometChat.TextMessage(
    receiverID,
    messageText,
    receiverType
  );
  return CometChat.sendMessage(txtMessage).then(
    message => {
      expect(message).to.be.an.instanceof(CometChat.TextMessage) &&
        expect(message.getSender()).to.be.an.instanceof(CometChat.User) &&
        expect(message.getReceiver()).to.equal(receiverID);
      let textMessage = new CometChat.TextMessage(...args);
      textMessage.setId(message.id);
      CometChat.editMessage(textMessage).then(
        message => {
          if(expected_output === 'success'){
            expect(message).to.be.an.instanceof(CometChat.TextMessage) && expect(message.getSender()).to.be.an.instanceof(CometChat.User) && expect(message.getReceiver()).to.equal(receiverID);
          }else{
            throw new Error(`Expected error but got success`)
          }
        },
        error => {
          if(expected_output === 'error'){
            expect(error).to.be.an.instanceof(CometChat.CometChatException);
          }else{
            throw new Error(`Expected success but got error`)
          }
        }
      );
    },
    error => {
      expect(error).to.be.an.instanceof(CometChat.CometChatException);
    }
  );
}

function cometchatDeleteMessage(expected_output,...args) {
  var textMessage = new CometChat.TextMessage(
    receiverID,
    messageText,
    receiverType
  );
  return CometChat.sendMessage(textMessage).then(
    message => {
      expect(message).to.be.an.instanceof(CometChat.TextMessage) && expect(message.getSender()).to.be.an.instanceof(CometChat.User) && expect(message.getReceiver()).to.equal(receiverID);
      var messageId;
      if (args[0] == "valid") {
        messageId = message.id;
      } else if (args[0] == "invalid") {
        messageId = "123984";
      } else if (args[0] == "empty") {
        messageId = "";
      } else {
        messageId = message.id;
      }
      CometChat.deleteMessage(messageId).then(
        message => {
          if(expected_output === 'success'){
            expect(message).to.be.an.instanceof(CometChat.TextMessage);
          }else{
            throw new Error(`Expected error but got success`);
          }
        },
        error => {
          if(expected_output === 'error'){
            expect(error).to.be.an.instanceof(CometChat.CometChatException);
          }else{
            throw new Error(`Expected success but got error`);
          }
        }
      );
    },
    error => {
      expect(error).to.not.exist();
    }
  );
}

function cometchatgetMessageReceipt(expected_output,...args) {
  CometChat.getMessageReceipts(args).then(
    receipts => {
      if(expected_output === 'success'){
        if (receipts[0]) {
          var result = receipts[0].hasOwnProperty("RECEIPT_TYPE") && receipts[0].hasOwnProperty("sender") && receipts[0].hasOwnProperty("receiver");
          expect(result).to.be.true;
        }else {
          expect(receipts).to.be.empty;
        }
      }else{
        throw new Error(`Expected error but got success`)
      }
    },
    error => {
      if(expected_output === 'error'){
        var result = error.hasOwnProperty("code") && error.hasOwnProperty("message");
        expect(result).to.be.true;
      }else{
        throw new Error(`Expected success but got error`)
      }
    }
  );
}

function cometchatgetUnreadMesssageCountForUser(expected_output,...args) {
  var uid = args[0];
  CometChat.getUnreadMessageCountForUser(uid).then(
    unreadCount => {
      if(expected_output === 'success'){
        if (Object.keys(unreadCount).length === 0) {
          expect(unreadCount).to.be.an.instanceof(Object);
        } else {
          expect(unreadCount[uid]).to.be.greaterThan(0);
        }
      }else{
        throw new Error(`Expected error but got success`);
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`);
      }
      
    }
  );
}

function cometchatgetUnreadMesssageCountForGroup(expected_output,...args) {
  var guid = args[0];
  CometChat.getUnreadMessageCountForGroup(guid).then(
    unreadCount => {
      if(expected_output === 'success'){
        if (Object.keys(unreadCount).length === 0) {
          expect(unreadCount).to.be.an.instanceof(Object);
        } else {
          expect(unreadCount[guid]).to.be.greaterThan(0);
        }
      }else{
        throw new Error(`Expected error but got success`);
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`);
      }
    }
  );
}

function cometchatgetUnreadMesssageCountForAllUsers(expected_output,...args) {
  CometChat.getUnreadMessageCountForAllUsers(args).then(
    unreadCount => {
      if(expected_output === 'success'){
        expect(unreadCount).to.be.an.instanceof(Object);
      }else{
        throw new Error(`Expected error but got success`);
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`);
      }
      
    }
  );
}

function cometchatgetUnreadMesssageCountForAllGroups(expected_output,...args) {
  CometChat.getUnreadMessageCountForAllGroups(args).then(
    unreadCount => {
      if(expected_output === 'success'){
        expect(unreadCount).to.be.an.instanceof(Object);
      }else{
        throw new Error(`Expected error but got success`);
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`);
      }
    }
  );
}

function cometchatgetUnreadMesssageCount(expected_output,...args) {
  CometChat.getUnreadMessageCount(args).then(
    array => {
      if(expected_output === 'success'){
        var result = array.hasOwnProperty("users") && array.hasOwnProperty("groups");
        expect(result).to.be.true;
      }else{
        throw new Error(`Expected error but got success`);
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`);
      }
    }
  );
}

function cometchatgetUndeliveredMesssageCountForUser(expected_output,...args) {
  var uid = args[0];
  CometChat.getUndeliveredMessageCountForUser(uid).then(
    undeliveredCount => {
      if(expected_output === 'success'){
        if (Object.keys(undeliveredCount).length === 0) {
          expect(undeliveredCount).to.be.an.instanceof(Object);
        } else {
          expect(undeliveredCount[uid]).to.be.greaterThan(0);
        }
      }else{
        throw new Error(`Expected error but got success`);
      }
    },
    error => {
      if(expected_output === 'error'){
      expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`);
      }
    }
  );
}

function cometchatgetUndeliveredMesssageCountForGroup(expected_output,...args) {
  var guid = args[0];
  CometChat.getUndeliveredMessageCountForGroup(guid).then(
    undeliveredCount => {
      if(expected_output == 'success'){
        if (Object.keys(undeliveredCount).length === 0) {
          expect(undeliveredCount).to.be.an.instanceof(Object);
        } else {
          expect(undeliveredCount[guid]).to.be.greaterThan(0);
        }
      }else{
        throw new Error(`Expected error got success.`);
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error.`)
      }
    }
  );
}

function cometchatgetUndeliveredMesssageCountForAllUsers(expected_output,...args) {
  CometChat.getUndeliveredMessageCountForAllUsers(args).then(
    undeliveredCount => {
      if(expected_output === 'success'){
        expect(undeliveredCount).to.be.an.instanceof(Object);
      }else{
        throw new Error(`Expected error but got success`);
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`);
      }
    }
  );
}

function cometchatgetUndeliveredMesssageCountForAllGroups(expected_output,...args) {
  CometChat.getUndeliveredMessageCountForAllGroups(args).then(
    undeliveredCount => {
      if(expected_output === 'success'){
        expect(undeliveredCount).to.be.an.instanceof(Object);
      }else{
        throw new Error(`Expected error but got success`);
      }
    },
    error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`);
      }
      
    }
  );
}

function cometchatgetUndeliveredMesssageCount(expected_output,...args) {
  CometChat.getUndeliveredMessageCount(args).then(
    array => {
      if(expected_output == 'success'){
        var result = array.hasOwnProperty("users") && array.hasOwnProperty("groups");
        expect(result).to.be.true;
      }else{
        throw new Error(`Expected error but got success`);
      }
      
    },
    error => {
      if(expected_output == 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected success but got error`);
      }
    }
  );
}

function cometchatBuilderRequest(args){

  var messageRequest = new CometChat.MessagesRequestBuilder();
  
  if(args.setUID.flag){
    messageRequest = messageRequest.setUID(args.setUID.data);
  }

  if(args.setGUID.flag){
    messageRequest = messageRequest.setGUID(args.setGUID.data);
  }

  if(args.setMessageId.flag){
    messageRequest = messageRequest.setMessageId(args.setMessageId.data);
  }

  if(args.setTimestamp.flag){
    messageRequest = messageRequest.setTimestamp(args.setTimestamp.data);
  }

  if(args.setUnread.flag){
    messageRequest = messageRequest.setUnread(args.setUnread.data);
  }

  if(args.setUndelivered.flag){
    messageRequest = messageRequest.setUndelivered(args.setUndelivered.data);
  }

  if(args.setLimit.flag){
    messageRequest = messageRequest.setLimit(args.setLimit.data);
  }

  if(args.hideMessagesFromBlockedUsers.flag){
    messageRequest = messageRequest.hideMessagesFromBlockedUsers(args.hideMessagesFromBlockedUsers.data);
  }

  // if(args.setSearchKeyword.flag){
  //   messageRequest =  messageRequest.setSearchKeyWord(args.setSearchKeyword.data);
  // }

  if(args.build.flag){
    messageRequest = messageRequest.build();
    expect(messageRequest).to.be.instanceof(CometChat.MessagesRequest);
  }

  return messageRequest;  

}

function cometchatMuid(Muid,expected_output,...args){
  var txtMessage = new CometChat.TextMessage(...args);
  txtMessage.setMuid(Muid[0]);
  expect(txtMessage).to.be.an.instanceof(CometChat.TextMessage);
  return CometChat.sendMessage(txtMessage).then(
    message => {
      if(expected_output === 'success'){
        if(message.muid == Muid[0]){
          expect(message).to.be.an.instanceof(CometChat.TextMessage) && expect(message.getSender()).to.be.an.instanceof(CometChat.User) && expect(message.getReceiver()).to.equal(receiverID);
        }else{
          throw new Error(`Invalid Muid`);
        }
      }else{
        throw new Error(`Expected Error but got Success`);
      }
    }, error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected Success but got Error`);
      }
    }
  );
}

function cometchatMetaData(MetaData,expected_output,...args){
  var txtMessage = new CometChat.TextMessage(...args);
  txtMessage.setMetadata(MetaData[0]);
  expect(txtMessage).to.be.an.instanceof(CometChat.TextMessage);
  return CometChat.sendMessage(txtMessage).then(
    message => {
      if(expected_output === 'success'){
        if(typeof MetaData[0] === 'object' && typeof message.data.metadata === 'object'){
          var same = isEquivalent(message.data.metadata, MetaData[0]);
          if(same){
            expect(message).to.be.an.instanceof(CometChat.TextMessage) && expect(message.getSender()).to.be.an.instanceof(CometChat.User) && expect(message.getReceiver()).to.equal(receiverID);
          }else{
            throw new Error(`Invalid MetaData`);
          }
        }else{
          throw new Error(`MetaData Should be an Object`);
        }
      }else{
        throw new Error(`Expected Error but got Success`);
      }
    }, error => {
      if(expected_output === 'error'){
        expect(error).to.be.an.instanceof(CometChat.CometChatException);
      }else{
        throw new Error(`Expected Success but got Error`);
      }
    }
  );
}

function isEquivalent(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);
  if (aProps.length != bProps.length) {
    return false;
  }
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
}