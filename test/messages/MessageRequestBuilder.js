export default testCaseMessageBuilder = [
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
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
    expected_output : CometChat.MessagesRequest
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: validKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: validLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: validMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        flag: true,
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: null
      },
      setSearchKeyword: {
        flag: true ,
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
    expected_output : CometChat.MessagesRequest
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
      },
      hideMessagesFromBlockedUsers:{
        flag: true,
        data: false
      },
      setSearchKeyword: {
        flag: true ,
        data: invalidKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
    expected_output : CometChat.MessagesRequest
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
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
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: negativeLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: false
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
      },
      setUndelivered:{
        flag: true,
        data: null
      },
      setLimit: {
        flag: true,
        data: zeroLimit
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
    expected_output : CometChat.MessagesRequest
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: invalidMessageId
      },
      setTimestamp:{
        flag: false,
        data: validTimestamp
      },
      setUnread:{
        flag: true,
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: invalidOtherUid
      },
      setGUID: {
        flag: true,
        data: invalidotherGuid
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
        data: null
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
        data: emptyKeyWord
      },
      build: {
        flag: true,
      }
    },
    expected_output : CometChat.MessagesRequest
  },
  {
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
        flag: false,
        data: ''
      },
      setGUID: {
        flag: true,
        data: ''
      },
      setMessageId:{
        flag: true,
      },
]