const responses = {
    'hello|hi|hey': [
        "Hi there! What's on your mind",
        "Hello! How can I help you", 
        "Hey! How are you feeling today"
    ],
    'how are you': [
        "I'm doing well, how are you?", 
        "I'm fine, thanks for asking!"
    ],
    '(.*) mother|father|family|parent(.*)': [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?"
    ],
    'I am (.*)': [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?"
    ],
    'I feel (.*)': [
        "Tell me more about feeling {0}", 
        "Why do you feel {0}?"
    ],
    '(.*) I need (.*)': [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn’t need {1}?"
    ],
    'I want (.*)': [
        "What would it mean if you got {0}?",
        "Why do you want {0}?",
        "What would having {0} bring to your life?"
    ],
    'I think (.*)': [
        "Why do you think {0}?",
        "What makes you think {0}?",
        "Are you sure that {0}?"
    ],
    'I dont know(.*)': [
        "Why don't you know {0}?",
        "What makes it difficult to know {0}?",
        "Would you like to explore this further?"
    ],
    'my (.*)': [
        "Let's discuss your {0}", 
        "Why is your {0} important to you?"
    ],
    'yes|yeah': [
        "You seem quite sure about this.",
        "I see. Please tell me more.",
        "I understand. Go on..."
    ],
    'no|nope': [
        "Why not?",
        "Can you explain why no?",
        "I see. Tell me more about your thoughts."
    ],
    'why (.*)?': [
        "What do you think?",
        "Why do you think {0}?",
        "What are your thoughts on this?"
    ],
    'because (.*)': [
        "Is that the real reason?",
        "What other reasons might there be?",
        "Does that reason explain anything else?"
    ],
    '(.*) (sorry|apologize)(.*)': [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "It’s okay to feel that way."
    ],
    'bye|goodbye|exit': [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I'm here if you need to talk again."
    ],
    '(.*)': [
        "Tell me more.", 
        "Please continue.", 
        "Go on."
    ]
};

const reflections = {
    "i": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am",
};

function reflect(text) {
    const words = text.toLowerCase().split(" ");
    const reflectedWords = words.map(word => reflections[word] || word);
    return reflectedWords.join(" ");
}

function respond(userInput){
    for (const pattern in responses){
        const regex = new RegExp(pattern, 'i');
        const match = userInput.match(regex);
        if (match){
            const responseArray = responses[pattern];
            const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
            const reflectedGroups = match.slice(1).map(reflect);
            return randomResponse.replace(/{(\d+)}/g, (match, number) => reflectedGroups[number] || match);
        }
    }
    return "I'm sorry, I don't understand.";
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Display user message
    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = "";

    // Get ELIZA's response and display it
    const elizaResponse = getElizaResponse(userInput);
    setTimeout(() => displayMessage(elizaResponse, 'bot'), 500); // Add delay for realism
}

function displayMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

// Test Suite
console.log(respond("I want to be happy"));
console.log(respond("why is life so hard?"));
console.log(respond("I think you're helpful"));
console.log(respond("because I'm tired"));
console.log(respond("I dont know what to do"));