<template>
  <div class="game-container">
  </div>
</template>

<script>
import GameFoo from '../game/stage.js';

export default {
  name: 'GameStage',
  mounted: function () {
    this.game = new GameFoo({
      el: this.$el
    });
    this.game.setup();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
