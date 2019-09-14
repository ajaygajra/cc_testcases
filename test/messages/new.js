{
    test_description: "Cometchat MessagesRequestBuilder valid parameters",
    method_name: "CometChat.MessagesRequestBuilder",
    parameter: {
      setUID: {
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