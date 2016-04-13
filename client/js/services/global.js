angular
  .module('smartclickr')
  .factory('global', [function() {
    var user = '';
    var answeringPoll = '';
    var makingPoll = '';
    var question = 1;
    var logged = false;

    function setUser(InputUser) {
      user = InputUser;
      logged = true;
      console.log("THE NEW USER IS: ", user)
      return user
    }

    function getUser() {
      return user
    }

    function setAPoll(code) {
      answeringPoll = code;
      return answeringPoll
    }

    function getAPoll() {
      return answeringPoll
    }

    function setQuestion(int) {
      question = int;
      console.log("CURRENT QUESTION NUMBER", question)
      return question
    }

    function getQ() {
      return question
    }

    function logged() {
      return logged
    }

    return {
      setUser: setUser,
      getUser: getUser,
      setAPoll: setAPoll,
      getAPoll: getAPoll,
      setQuestion: setQuestion,
      getQ: getQ,
      logged: logged
    };
  }]);