// mocha.js, chai.js, zombies.js are loaded by script tags in index.html
var expect = chai.expect;

describe('Item', function() {
  var item;
  beforeEach(function() {
    item = new Item('test');
  });
  it('Item should be a function', function() {
    expect(Item).to.be.a('function');
  });
  it('Item should have a name property', function() {
    expect(Item).has.property('name');
  });
});

describe('Weapon', function() {
  var weapon;
  beforeEach(function() {
    weapon = new Weapon('axe', 50);
  });
  it('Weapon is an instanceof Item', function() {
    expect(weapon).is.instanceof(Item);
  });
  it('Weapon should have a damage property', function() {
    expect(weapon).has.property('damage');
  });
  it("Test weapon's name should be axe", function() {
    expect(weapon.name).to.equal('axe');
  });
});

describe('Food', function() {
  var food;
  beforeEach(function() {
    food = new Food('cookie', 50);
  });
  it('Food is an instanceof Item', function() {
    expect(food).is.instanceof(Item);
  });
  it("Test food's name should be cookie", function() {
    expect(food.name).to.equal('cookie');
  });
  it("Test food's energy should be 50", function() {
    expect(food.energy).to.equal(50);
  });
});

describe('Player', function() {
  var player;
  var cookie = new Food('cookie', 20);
  var candy = new Food('candy', 10);
  var axe = new Weapon('axe', 20);
  var sword = new Weapon('sword', 25);
  beforeEach(function() {
    player = new Player('me', 100, 20, 10);
  });
  it("Player is a function", function() {
    expect(Player).to.be.a('function');
  });
  it("Test player has an isAlive property", function() {
    expect(player).has.property('isAlive');
  });
  it("Test player has equipped property", function() {
    expect(player).has.property('equipped');
  });
  it("Player has a getPack method", function() {
    expect(Player).respondTo('getPack');
  });
  it("Player has a getMaxHealth method", function() {
    expect(Player).respondTo('getMaxHealth');
  });
  it("Player has a checkPack method", function() {
    expect(Player).respondTo('checkPack');
  });
  it("Player has a takeItem method", function() {
    expect(Player).respondTo('takeItem');
  });
  it("Test player can take Food", function() {
    expect(player.takeItem(cookie)).to.be.true;
  });
  it("Test player can take a Weapon", function() {
    expect(player.takeItem(sword)).to.be.true;
  });
  it("Test player cannot take more than 3 items", function() {
    player.takeItem(cookie);
    player.takeItem(candy);
    player.takeItem(axe);
    expect(player.takeItem(new Item('test'))).to.be.false;
  });
  it("Test player removed candy from his pack", function() {
    player.takeItem(candy);
    expect(player.discardItem(candy)).to.be.true;
  });
  it("Test player cannot removed test Item from pack", function() {
    expect(player.discardItem(new Item('test'))).to.be.false;
  });
  it("Test player equipped his axe", function() {
    player.takeItem(axe);
    player.equip(axe);
    expect(player.equipped).to.equal(axe);
  });
  it("Test player can pack the axe, and use the sword", function() {
    player.takeItem(sword);
    player.useItem(sword);
    expect(player.equippedWith()).to.equal(sword.name);
  });
  it("Test player does not have axe equipped", function() {
    expect(player.equippedWith()).to.not.equal(axe.name);
  });
  it("Test player can eat a cookie", function() {
    player.takeItem(cookie);
    player.eat(cookie);
    expect(player.health).to.equal(120);
  });
});

describe('Zombie', function() {
  var zombie;
  beforeEach(function() {
    zombie = new Zombie(100, 20, 10);
  });
  it("Test zombie health is 100", function() {
    expect(zombie.health).to.equal(100);
  });
  it("Zombie has an isAlive property", function() {
    expect(zombie).has.property('isAlive');
  });
  it("FastZombie is an instanceof Zombie", function() {
    var fast = new FastZombie(50,5,5);
    expect(fast).is.instanceof(FastZombie);
  });
  it("StrongZombie is an instanceof Zombie", function() {
    var strong = new StrongZombie(50,5,5);
    expect(strong).is.instanceof(StrongZombie);
  });
  it("RangedZombie is an instanceof Zombie", function() {
    var ranged = new RangedZombie(50,5,5);
    expect(ranged).is.instanceof(RangedZombie);
  });
  it("ExplodingZombie is an instanceof Zombie", function() {
    var explode = new ExplodingZombie(50,5,5);
    expect(explode).is.instanceof(ExplodingZombie);
  });
});

/*
var Zombie = require('../zombies');
describe('Zombie', function () {
  var zombie;

  beforeEach(function() {
    zombie = new Zombie(100, 10, 5);
  });
  it('Zombie should be a function', function() {
    expect(Zombie).to.be.a('function');
  });
});
*/
  /*
  var joeTheZombie;
  beforeEach(function() {
    joeTheZombie = new ToxicZombie();
  });

  it('should have a speed', function() {
    joeTheZombie.should.have.property('speed');
  });
  */