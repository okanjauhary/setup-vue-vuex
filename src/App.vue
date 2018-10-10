<template>
    <div>
        <h2 :class="[isActive ? 'active' : '']">{{ say }}</h2>
        <button @click="CHANGE_ACTIVE">{{ isActive ? 'deactive' : 'active' }}</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "Vuex";

export default {
  name: "app",
  computed: {
    ...mapGetters(["say"]),
    isActive() {
      return this.$store.state.hello.isActive;
    }
  },
  methods: {
    ...mapActions(["CHANGE_ACTIVE"])
  }
};
</script>

<style lang="scss">
.active {
  color: green;
}
</style>
