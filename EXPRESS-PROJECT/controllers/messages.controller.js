function getMessages(req, res) {
  res.send('<ul><li>"Hello Albert!"</li></ul>');
}
function postMessage(req, res) {
  res.send('<ul>"Updating Messages"</ul>');
}

module.exports = {
  getMessages,
  postMessage,
};
