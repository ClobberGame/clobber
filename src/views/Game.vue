<template>
  <div class="game">
    <GameStage v-once />
    <button @click="incrementScore">
      Increment {{score}}
    </button>
    <span>{{x}} </span>
  </div>

</template>

<script>

import GameStage from '@/components/GameStage.vue'

export default {
  name: 'Game',
  computed: {
    score () {
      return this.$store.state.score
    },
    x () {
      return this.$store.state.x
    }
  },
  methods: {
    incrementScore () {
      this.$store.commit('incrementScore');
    },
    incrementX () {
      this.$store.commit('incrementX');
    }
  },
  components: {
    GameStage
  }
};
</script>
