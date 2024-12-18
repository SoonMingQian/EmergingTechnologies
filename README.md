# EmergingTechnologies
- [Trigram](#tasks-trigram)
- [Eliza](#eliza)

---

## Tasks (Trigram)

### Prerequisites

- A `words.txt` file containing a list of valid words, one per line.
- English literary works in the `english_works` directory.

---

### Usage

Run the script to generate text and analyze it. The script performs the following steps:

1. Reads and processes the text from the English literary works.
2. Cleans the text to include only uppercase letters, full stops, and spaces.
3. Generates text based on character diagrams and trigrams.
4. Splits the generated text into words and counts the number of valid words.
5. Calculates the percentage of valid words in the generated text.
6. Writes the trigram model to a JSON file (`trigrams.json`).

---

### Code Overview

#### Text Processing

- Combines text from multiple files.
- Cleans the text to include only allowed characters.
- Counts the frequency of each character.

#### Model Building

- Builds a diagram model (`model2`) and a trigram model (`model3`) from the cleaned text.

#### Text Generation

- Generates text using the diagram model and trigram model.

#### Text Analysis

- Splits the generated text into words.
- Counts the number of valid words based on `words.txt`.
- Calculates the percentage of valid words.

#### Output

- Prints the generated text and analysis results.
- Writes the trigram model to `trigrams.json`.

---

## Example Output

- **Generated Text**: Using diagram model (`gen2`) and trigram model (`gen3`).
- **Analysis**: Displays the percentage of valid words in the generated text.

---

### Acknowledgments

- [Project Gutenberg](https://www.gutenberg.org) for providing the English literary works.
- The Python community for the libraries used in this project.

---

## Eliza

ELIZA is an early natural language processing computer program created by Joseph Weizenbaum in the mid-1960s. This project is a modern

### Features

- Simulates conversation using pattern matching and substitution methodology.
- Reflects user input by substituting pronouns to make responses more natural.
- Provides responses based on predefined patterns.

---

## Getting Started

### Link
https://soonmingqian.github.io/EmergingTechnologies/

---

### Usage

1. Open `index.html` in your web browser.
2. Type a message in the input box and click "Send".
3. ELIZA will respond based on the predefined patterns.

---

### Code Structure

- `index.html`: The main HTML file that contains the structure of the chatbot interface.
- `eliza.js`: The JavaScript file that contains the logic for the ELIZA chatbot.
- `style.css`: The CSS file that contains the styles for the chatbot interface.

---

### Functions

- `reflect(text)`: Reflects user input by substituting pronouns.
- `respond(userInput)`: Generates ELIZA's response based on user input.
- `sendMessage()`: Sends a message and displays it in the chat box.
- `displayMessage(text, sender)`: Displays a message in the chat box.
