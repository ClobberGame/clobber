<template>
  <div class="game-container">
  </div>
</template>

<script>
import Stage from '@/game/stage';

export default {
  name: 'GameStage',
  mounted: function () {
    this.game = new Stage({
      el: this.$el
    });
    this.game.setup();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
