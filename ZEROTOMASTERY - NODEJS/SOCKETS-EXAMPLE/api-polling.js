const POLL_RATE = 500;

setInterval(() => {
  messages = await fetch("https://api.mychat.com/messages");
  console.log(messages);
}, POLL_RATE);
