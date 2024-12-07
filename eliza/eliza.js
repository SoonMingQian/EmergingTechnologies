const responses = {
    // Greeting responses
    'hello|hi|hey': [
        "Hi there! What's on your mind?",
        "Hello! How can I help you?", 
        "Hey! How are you feeling today?"
    ],
    // How are you responses
    'how are you': [
        "I'm doing well, how are you?", 
        "I'm fine, thanks for asking!"
    ],
    // Family-related responses
    '(.*) mother|father|family|parent(.*)': [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?"
    ],
    // Responses for "I am" statements
    'I am (.*)': [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?"
    ],
    // Responses for "I feel" statements
    'I feel (.*)': [
        "Tell me more about feeling {0}.", 
        "Why do you feel {0}?"
    ],
    // Responses for "I need" statements
    '(.*) I need (.*)': [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn’t need {1}?"
    ],
    // Responses for "I want" statements
    'I want (.*)': [
        "What would it mean if you got {0}?",
        "Why do you want {0}?",
        "What would having {0} bring to your life?"
    ],
    // Responses for "I think" statements
    'I think (.*)': [
        "Why do you think {0}?",
        "What makes you think {0}?",
        "Are you sure that {0}?"
    ],
    // Responses for "I don't know" statements
    'I dont know(.*)': [
        "Why don't you know {0}?",
        "What makes it difficult to know {0}?",
        "Would you like to explore this further?"
    ],
    // Responses for "my" statements
    'my (.*)': [
        "Let's discuss your {0}.", 
        "Why is your {0} important to you?"
    ],
    // Responses for "yes" or "yeah"
    'yes|yeah': [
        "You seem quite sure about this.",
        "I see. Please tell me more.",
        "I understand. Go on..."
    ],
    // Responses for "no" or "nope"
    'no|nope': [
        "Why not?",
        "Can you explain why no?",
        "I see. Tell me more about your thoughts."
    ],
    // Responses for "why" questions
    'why (.*)?': [
        "What do you think?",
        "Why do you think {0}?",
        "What are your thoughts on this?"
    ],
    // Responses for "because" statements
    'because (.*)': [
        "Is that the real reason?",
        "What other reasons might there be?",
        "Does that reason explain anything else?"
    ],
    // Responses for apologies
    '(.*) (sorry|apologize)(.*)': [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "It’s okay to feel that way."
    ],
    // Responses for goodbyes
    'bye|goodbye|exit': [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I'm here if you need to talk again."
    ],
    // Responses for "can you" questions
    'can you (.*)': [
        "What makes you think I can {0}?",
        "Why do you want me to {0}?",
        "What if I could {0}?"
    ],
    // Responses for "what" questions
    'what (.*)': [
        "Why do you ask?",
        "What do you think?",
        "How would you answer that?"
    ],
    // Responses for "how" questions
    'how (.*)': [
        "How do you suppose?",
        "What do you think?",
        "Can you explain how {0}?"
    ],
    // Default responses
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
    "was": "were",
    "i'd": "you would",
    "i'll": "you will",
    "i've": "you have",
    "i'm": "you are"
};

// Reflect function to swap pronouns
function reflect(text) {
    const words = text.toLowerCase().split(" ");
    const reflectedWords = words.map(word => reflections[word] || word);
    return reflectedWords.join(" ");
}

// Respond function to generate ELIZA's response
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

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Display user message
    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = "";

    // Get ELIZA's response and display it
    const elizaResponse = respond(userInput);
    setTimeout(() => displayMessage(elizaResponse, 'bot'), 500); // Add delay for realism
}

// Function to display a message in the chat box
function displayMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}
