<var socket = new WebSocket("ws://localhost:8080/chat");

socket.message = onMessage;

function onMessage(event){
      var message = event.data;
      
      $("#chatContent").append("<span class=\"message\">" + message + "</span>");
}

function sendMessage(){
      var message = $("#message").val();
      socket.send(message);
      }
