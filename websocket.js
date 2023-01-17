<var socket = new WebSocket("wss://localhost:443/ws");

socket.message = onMessage;

function onMessage(event){
      var message = event.data;
      
      $("#chatContent").append("<span class=\"message\">" + message + "</span>");
}

function sendMessage(){
      var message = $("#message").val();
      socket.send(message);
      }
