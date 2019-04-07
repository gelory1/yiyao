<template>
  <div>
    <router-link
      v-for="depart in departs"
      :key="depart.id"
      :to="`/abilityselection/${depart.id}`"
    >
      <div>
        {{depart.name}}
      </div>
    </router-link>
  </div>
</template>

<script>
import DataOption from "./config.js";

export default {
  name: "FoorTwo",
  data() {
    return {
      departs: DataOption.departs
    };
  },
  mounted() {
    // this.departs = DataOption.departs;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
