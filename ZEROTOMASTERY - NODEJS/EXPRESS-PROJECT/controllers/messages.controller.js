const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "images", "ski.jpg"));
  //   res.send('<ul><li>"Hello Albert!"</li></ul>');
}
function postMessage(req, res) {
  res.send('<ul>"Updating Messages"</ul>');
}

module.exports = {
  getMessages,
  postMessage,
};
