const string = "hello!";
const dinner = "I would love to!";

"Hello!".toUpperCase();
function shout(string) {
  return string.toUpperCase();
}
"Hello.".toLowerCase();
function whisper(string) {
  return string.toLowerCase(console.log("I can't hear you!"));
}

function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase("I can't hear you!"));
}
logShout(string);
logWhisper(string);

// function sayHiToHeadphonedRoommate(string) {
//   if (
//     (string === string.toLowerCase(),
//     function () {
//       console.log("I can't hear you!");
//     })
//   );
// }
// sayHiToHeadphonedRoommate(string);

function sayHiToHeadphonedRoommate(string, dinner) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  if (dinner === dinner) {
    return "I would love to!";
  }
}
