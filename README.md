# Simon Game

## Project Overview
The Simon Game is a classic memory game that challenges players to repeat a sequence of colors and sounds. The game consists of a series of lights and sounds that the player must memorize and replicate. It is built using HTML, CSS, JavaScript, and jQuery.

## Technologies Used
- **HTML**: For the structure of the game interface.
- **CSS**: For styling the game elements and layout.
- **JavaScript**: For game logic and interactivity.
- **jQuery**: For simplifying DOM manipulation and event handling.

## JavaScript Functions in `game.js`
The `game.js` file contains the core logic of the Simon Game. Here are some key functions:

1. **startGame()**: Initializes the game, resets the score, and starts the sequence.
2. **nextSequence()**: Generates the next color in the sequence and plays the corresponding sound.
3. **checkAnswer(currentLevel)**: Compares the player's input with the generated sequence to determine if the answer is correct.
4. **gameOver()**: Handles the end of the game, displays a game over message, and resets the game.

## How to Clone the Project
To clone the Simon Game project, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Run the following command:
   ```bash
   git clone https://github.com/yourusername/simon-game.git
   ```
4. Navigate into the cloned directory:
   ```bash
   cd simon-game
   ```
5. Open the `index.html` file in your web browser to play the game.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
