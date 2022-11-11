<script>
import cellItem from './CellItem.vue'

export default {
  components: {
   cellItem
  },
  data () {
    return {
      board: [['','',''],['','',''],['','','']],
      currentPlayer: 'x',
      nextPlayer:'o',
      winner: null,
      inProgress: true,
      isDrawCount: 9,
      isDraw: false
    }
  },

methods:{
calculateWinner(currentPlayer)
  {
     if (this.winner) return true

    // Horizontal rows
    for (let i=0; i<3; i++) {
      if (this.board[0][i] === currentPlayer 
           && this.board[1][i] === currentPlayer 
           && this.board[2][i] === currentPlayer) {
             this.inProgress = false;
            this.winner = currentPlayer;
        return true;
      }
    }

    // Vertical rows
    for (let i=0; i<3; i++) {
      if (this.board[i][0] === currentPlayer 
          && this.board[i][1] === currentPlayer 
          && this.board[i][2] === currentPlayer) {
            this.inProgress = false;
            this.winner = currentPlayer;
        return true;
      }
    }

    // Diagonals
    if (this.board[0][0] === currentPlayer 
        && this.board[1][1] === currentPlayer 
        && this.board[2][2] === currentPlayer) {
          this.inProgress = false;
            this.winner = currentPlayer;
      return true;
    }

    if (this.board[2][0] === currentPlayer 
        && this.board[1][1] === currentPlayer 
        && this.board[0][2] === currentPlayer) {
          this.inProgress = false;
          this.winner = currentPlayer;
      return true;
    }
    this.isDrawCount--;
    return false;

  },
  resetGame(){
    this.board = [['','',''],['','',''],['','','']];
    this.currentPlayer = this.winner !== null ? this.winner : this.currentPlayer
    this.inProgress = true;
    this.winner = null;
    this.isDraw = false;
    this.isDrawCount = 9;
  },

  markCell(r,c){
    if (!this.inProgress){return}
    if (this.board[r][c] !== '') {
    return; //prevent changing marked cell
    }
    this.board[r][c] = this.currentPlayer;
    this.calculateWinner(this.currentPlayer);
    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x'

    this.$forceUpdate();
    
    if (this.isDrawCount<1){
        this.inProgress = false;
        this.isDraw = true;
    }
    
  }
  }
  }


</script>

<template>
<div class="game">
<div class="board">

<div v-for="(n, c) in 3" :key="c">
    <div v-for="(n, r) in 3" :key="r">
      <cellItem @click="markCell(r,c,currentPlayer)" 
            :disabled="!!inProgress" 
            :value="board[r][c]"></cellItem>
    </div>
  </div>

  <div class="button">
<button @click="resetGame" class="reset-game">Reset Game</button>
</div>
<div class="game-info">
        <p v-if="!inProgress && !isDraw">
          The winner is Player&nbsp;<b :class="winner"> {{ winner }}</b>!&nbsp;
        </p>
        <p v-if="isDraw">
          That's a tie!
        </p>
        <p v-if="inProgress && !isDraw">
          Next turn: Player&nbsp;
          <b :class="currentPlayer">{{ currentPlayer }}</b>
        </p>
      </div>

</div>
</div>
</template>

<style>
.game{
   display: flex;
   align-items: center;
   justify-content: center;
  
}
.board{
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  width: 258px;
  height: 258px;
}

.reset-game{
  margin: 3vmin 9vmin 0;
  padding: .5rem .5rem;
  font-size: 1.25em;
  text-align: center;
  background: rgb(255,105,0);
  color: rgb(255,255,255);
}

.game-info {
  margin: 3vmin 9vmin 0;
  padding: 1rem .5rem;
  font-size: 1.25em;
  text-align: center;
  background: #fff6;
  color: #111;

}
</style>