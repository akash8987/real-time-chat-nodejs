const EventEmitter = require("events");

class ChatServer extends EventEmitter {
    broadcast(message) {
        this.emit("message", message);
    }
}

const chat = new ChatServer();

chat.on("message", (msg) => {
    // message delivered to clients
});

chat.broadcast("Hello World");
