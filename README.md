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
