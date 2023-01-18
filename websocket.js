var socket = new WebSocket("ws://4.88.99.77:443/com.test/chat");

socket.message = onMessage;

function onMessage(event){
      var message = event.data;
      
      $("#chatContent").append("<span class=\"message\">" + message + "</span>");
}

function sendMessage(){
      var message = $("#message").val();
      socket.send(message);
      }
