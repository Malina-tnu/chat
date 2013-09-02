var pubsub = require('./pubsub');
var HttpError = require('error').HttpError;
var log = require('log')(module);

var chat = pubsub.channel('chat');

function Router(connection) {
  var self = this;

  this.connection = connection;

  this.connection.on('open', function(message) {

    var subscription = chat.subscribe('room', function(msg) {
      self.connection.send(msg);
    });

    self.connection.on('close', function() {
      subscription.unsubscribe();
    });

  });
}

Router.prototype.route = function(message) {
  var self = this;

  if (!this.connection.user) {
    this.connection.close(401, "Authentication required to chat");
    return;
  }

  chat.publish('room', {
    username: this.connection.user.get('username'),
    text: message.text
  });

  this.connection.session.save();
};

module.exports = Router;