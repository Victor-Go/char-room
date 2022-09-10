import { UserStatus } from "../types/user";

export const BOT_ANSWERS = {
  [UserStatus.ONLINE]: [{
      message: "Hey {userName} !"
  }, {
      message: "Oops, I'm so sorry, got to go now."
  }, {
      message: "Get in touch with you soon, bye."
  }],
  [UserStatus.AWAY]: [{
      message: "(Auto reply) Hi {userName}, I'm away, please phone me if urgent."
  }],
  [UserStatus.PLAYING]: [{
      message: "(Auto reply) Hi {userName}, Cannot reply you now, will get back to you later."
  }]
};

export const BOT_NAMES = [{
  username: "Denzil Llewellyn",
  userId: "denzilL"
}, {
  username: "Diarmait McEachern",
  userId: "diarmaitM"
}, {
  username: "Hosea Ragnvald",
  userId: "hoseaR"
}, {
  username: "LeonuserId Titianus",
  userId: "leonuserIdT"
}, {
  username: "Abbas Bożydar",
  userId: "abbasB"
}, {
  username: "Aybek Philandros",
  userId: "aybekP"
}, {
  username: "Jean Arce",
  userId: "jeanA"
}, {
  username: "Sharon Santo",
  userId: "sharonS"
}, {
  username: "Douglas Medley",
  userId: "douglasM"
}];

export const RANDOM_TALK = [
  "Hi all",
  "Anyone here?",
  "What would you be doing if you were not here right now?",
  "What are you doing now?",
  "Long time no see {userName}",
  "What was the biggest life change you've gone through?",
  "Welcome {userName} !",
  "How are you {userName} ?"
];

export const REPLY_TIMEOUT = 1000;
export const REFRESH_BOT_INTERVAL = 30 * 1000;
export const RANDOM_TALK_INTERVAL = 10 * 1000;
