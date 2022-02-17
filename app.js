const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            winStatus: null,
        };
    },
    computed: {
        monsterHealthStyles() {
            return { width: (this.monsterHealth > 0 ? this.monsterHealth : 0) + "%" };
        },
        playerHealthStyles() {
            return { width: (this.playerHealth > 0 ? this.playerHealth : 0) + "%" };
        },
    },
    watch: {
        playerHealth(v) {
            if (v < 0) {
                this.winStatus = false;
            }
        },
        monsterHealth(v) {
            if (v < 0 && this.playerHealth > 0) {
                this.winStatus = true;
            }
        },
    },
    methods: {
        playerAttack() {
            const value = Math.floor(Math.random() * (12 - 5)) + 5;
            this.monsterHealth -= value;
            this.monsterAttack();
            this.round++;
        },
        monsterAttack() {
            const value = Math.floor(Math.random() * (20 - 10)) + 10;
            this.playerHealth -= value;
        },
        playerSpecialAttack() {
            const value = Math.floor(Math.random() * (25 - 12)) + 12;
            this.monsterHealth -= value;
            this.monsterAttack();
            this.round++;
        },
        playerHeal() {
            const value = Math.floor(Math.random() * (20 - 5)) + 5;
            this.playerHealth += value;
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
            this.monsterAttack();
            this.round++;
        },
        playerSurrender() {},
    },
});

app.mount("#game");
