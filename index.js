//work on health bar of player and monster
//buttons like attack, giveup , heal , special attack , new game
//log the attack and everyting

new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    logs: [],
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs=[]
    },
    attack: function () {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      if (this.checkWin()) {
        return;
      }


      this.logs.unshift({
        isPlayer: true,
        text: `Player hits monster ${damage}`,
      });
      this.monsterAttacks()
      this.playerHealth -= this.calculateDamage(2, 8);
      this.checkWin();
    },
    specialAttack: function () {
        var damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage;
      if (this.checkWin()) {
        return;
      }
      this.logs.unshift({
        isPlayer: true,
        text: `Player hits monster ${damage}`,
      });
      

      this.monsterAttacks();
    },
    monsterAttacks: function () {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      
      this.checkWin();
      this.logs.unshift({
        isPlayer: false,
        text: `Monster hit player for ${damage}`,
      });
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        if (confirm("You won! New game")) {
          this.monsterHealth = 0;
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        if (confirm("You lost! New game")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.logs.unshift({
          isPlayer : true,
          text  : `Player heals for 10`
      })
      this.monsterAttacks();
    },
    giveUp: function () {
      this.playerHealth = 0;
      if (this.checkWin()) {
        return;
      }
    },
  },
});
