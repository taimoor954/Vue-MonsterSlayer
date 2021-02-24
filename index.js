//work on health bar of player and monster
//buttons like attack, giveup , heal , special attack , new game
//log the attack and everyting 

new Vue({
    el : "#app",
    data : {
        playerHealth  : 100,
        monsterHealth  : 100,
        gameIsRunning : false,


    },
    methods : {
        startGame : function()
        {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth =100

        }
    }
})