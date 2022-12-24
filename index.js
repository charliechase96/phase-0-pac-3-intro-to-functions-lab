function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log("HELLO".toUpperCase());
}
function logWhisper(string) {
    console.log("hello".toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    const checkForLowerCase = string === string.toLowerCase();
    const checkForUpperCase = string === string.toUpperCase();

    console.log(checkForLowerCase);
    console.log(checkForUpperCase);
    if (checkForLowerCase)  {
        return "I can't hear you!";
    }
    if (checkForUpperCase)  {
        return "YES INDEED!"
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}