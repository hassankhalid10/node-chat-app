const socket = io()  // Initialize socket connection using Socket.IO to enable real-time communication

let name;  // Declare a variable to store the user's name
let textarea = document.querySelector('#textarea')  // Get the textarea element where users will type messages
let messageArea = document.querySelector('.message__area')  // Get the chat message area where messages will be displayed

// Loop to prompt the user to enter their name until a valid name is provided
do {
    name = prompt('Please Enter your Name: ')
} while(!name)

// Add an event listener to the textarea that listens for the "keyup" event
// This event triggers when the user presses any key
textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {  // Check if the "Enter" key is pressed
        sendMessage(e.target.value)  // Call the sendMessage function and pass the value from the textarea
    }
})

// Function to send the message and append it to the chat area
function sendMessage(message) {
    // Create a message object with the user's name and the message, trimming any extra spaces
    let msg = {
        user: name,
        message: message.trim()
    }

    // Append the outgoing message to the chat area
    appendMessage(msg, 'outgoing')

    // Clear the textarea after sending the message
    textarea.value = ''

    // Scroll to the bottom of the chat area to display the latest message
    scrollToBottom()

    // Emit the message to the server using Socket.IO
    socket.emit('message', msg)
}

// Function to append a message to the chat area
function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')  // Create a new div element for the message
    let className = type  // Set the class type as either 'incoming' or 'outgoing'
    mainDiv.classList.add(className, 'message')  // Add the class for the message type and 'message' class to the div

    // Create the HTML markup for the message, including the user's name and message content
    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup  // Set the inner HTML of the div to the message markup
    messageArea.appendChild(mainDiv)  // Append the message div to the chat area
}

// Listen for incoming messages from the server
socket.on('message', (msg) => {
    // Append the incoming message to the chat area
    appendMessage(msg, 'incoming')
    
    // Scroll to the bottom of the chat area to display the latest message
    scrollToBottom()
})

// Function to scroll the chat area to the bottom, ensuring the latest message is visible
function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}
