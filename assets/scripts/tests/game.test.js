/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore} = require("../game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct id's", () => {
        expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4']);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = ['button1', 'button2', 'button3', 'button4'];
        game.playerMoves = ['button1', 'button2', 'button3', 'button4'];
        document.getElementById('score').innerText = '42';
        newGame();
    })
    test("should set the game score to 0", () => {
        expect(game.score).toEqual(0);
    });
    test("should set the current game to an empty array", () => {
        expect(game.currentGame).toEqual([]);
    });
    test("should set the player moves to an empty array", () => {
        expect(game.playerMoves).toEqual([]);
    });
    test('should display 0 for the element with an id of score', () => {
        expect(document.getElementById('score').innerText).toEqual(0);
    })
    
});