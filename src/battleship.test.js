import { Ship, Gameboard } from "./battleship.js"

describe("Ship Module Unit Tests", () => {
    const ship = new Ship(2);
    it("Not Sunk", () => { 
        ship.hit();
        expect(ship.isSunk()).toBe(false); 
    });

    it("Is Sunk", () => { 
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
})