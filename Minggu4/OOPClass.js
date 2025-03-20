class Player {
  static defaultName = "Koko";
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  //   Static methode
  static run() {
    console.log(`${this.defaultName} run!!`);
  }
  attack() {
    // Instance methode
    console.log(`${this.name} attacks Parents Class!`);
  }
  //   Setter Getter Methode
  get play() {
    return `play ${this.name} `;
  }
  set play(newName) {
    console.log(`play ${this.name} `);
  }
}

class Nana extends Player {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  attack() {
    // Instance methode
    super.attack();
    console.log(`${this.name} attacks Child Class!`);
  }
}
const player1 = new Player("Nana", "black");
const nana1 = new Nana("NANA", 24);
console.log(player1);
console.log(nana1);
nana1.attack();
// player1.attack();
// Player.run();
// player1.play = "Kiki";
// player1.play;
// player1.run();
