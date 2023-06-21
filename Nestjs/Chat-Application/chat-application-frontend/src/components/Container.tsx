import { useContext, useEffect } from "react";
import { WebsocketContext } from "../contexts/WebsocketContext";

function Container() {
  const socket = useContext(WebsocketContext);

  useEffect(() => {
    let myName: string;
    let message: string;

    // adds the event listeners for click event on the send icon

    setTimeout(() => {
      const form = document.querySelector('.send-container form')! as HTMLFormElement;
      const sendButtonImg = document.querySelector('.send-container img')! as HTMLImageElement;
      const input = document.querySelector('.send-text')! as HTMLInputElement;

      sendButtonImg.addEventListener('click', () => {
        socket.emit('new-message', {
          message: input.value,
          user: myName
        });
        input.value = '';
      })

      // adds the event listeners for submit event of the form

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        socket.emit('new-message', {
          message: input.value,
          user: myName
        });
        form.reset();
      })      
    }, 100);

    // Handling 'connect' when the user will connect to the backend for the first time and emit an event called 'new user joined'
    
    socket.on("connect", () => {
      console.log("Connected!");
      myName = prompt("Enter your name") || '';

      const newUserNotification =  `
        <div class="message new-user-notification">${myName} joined the chat</div>
      `;
      socket.emit("new-user-joined", newUserNotification);
    });

    // Handling 'new message' event by creating a div containing message and appending it to the body of the container of the messages

    socket.on("new-message", (data) => {
      setTimeout(() => {
        if(data.user === undefined){
          message = data.message;
          return;
        }

        const messagesContainer = document.querySelector('.messages-container')! as HTMLDivElement;

        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        newMessage.classList.add('message');
        
  ;
        if(data.user === myName){
          newMessage.classList.add('right');
          messagesContainer.appendChild(newMessage);
        }
        else{ 
          newMessage.classList.add('left');
          messagesContainer.appendChild(newMessage);
        }

        const scrollY = messagesContainer.lastElementChild?.getBoundingClientRect().top || 0;
        console.log(scrollY);
        messagesContainer.scroll(0, scrollY);
      }, 100);
    });

    // Handling 'new user joined' event and showing a message that the <user_name> has joined the chat

    socket.on("new-user-joined", (myHTML) => {
      setTimeout(() => {
        const messagesContainer = document.querySelector('.messages-container')! as HTMLDivElement;
        
        messagesContainer.innerHTML += myHTML;
      }, 100)
    });

    // cleanup functionalities that removes the event listeners

    return () => {
      console.log("Unregistering components");
      socket.off("connect");
      socket.off('new-user-joined');
      socket.off('new-message');
    };
  });

  return (
    <div className="container">
      <div className="header">
        <h1>The Chat Application</h1>
      </div>
      <div className="messages-container">
      </div>

      <div className="send-container">
        <form>
          <input className="send-text" type="text" />
          <img src="./send-message.png" alt="send-button-icon" />
        </form>
      </div>
    </div>
  );
}

export default Container;
