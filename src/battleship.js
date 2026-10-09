export class Ship {
    constructor(length) {
        this.length = length;
        this.sunk = false;
        this.hits = 0;
    }

    hit() {
        this.hits++
    }

    isSunk() {
        if(this.hit == this.length) {
            return true;
        }

        return false;
    }
}

export class Gameboard {
    constructor() {

    }
}