class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.start = min;
        this.end = max;
    }

    guess() {
        return Math.ceil((this.end + this.start) / 2);
    }

    lower() {
        this.end = this.guess();
    }

    greater() {
        this.start = this.guess();
    }
}

module.exports = GuessingGame;
