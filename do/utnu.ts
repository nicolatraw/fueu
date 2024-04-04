interface SuperHero {
  name: string;
  power: string;
}

class Superman implements SuperHero {
  name: string;
  power: string;

  constructor() {
    this.name = 'Superman';
    this.power = 'much-power';
  }

  displayPowers(): void {
    console.log(`${this.name} has the following power: ${this.power}`);
  }
}

const superman = new Superman();
superman.displayPowers();
