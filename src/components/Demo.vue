<template>
  <div>
    <div>
      <label for="random-number-length">
        Random number length:
        <input
          type="number"
          v-model.number="randomNumberLength"
          id="random-number-length"
        />
      </label>
      <button @click="generateRandomNumber">
        Generate
      </button>
      <button @click="clear">
        Clear
      </button>
    </div>
    <ul v-if="numbers.length">
      <li v-for="number in numbers" :key="number">
        {{ number }}
      </li>
    </ul>
    <div class="ops" v-if="numbers.length > 1">
      <button @click="add">
        + Add all
      </button>
      <!-- <button v-if="numbers.length === 2" @click="subtract">
        - 
      </button> -->
      <button @click="multiply">
        &times; Multiply all
      </button>
    </div>
    <div id="result">
      {{ resultFormatted }}
    </div>
  </div>
</template>

<script>
import { getRandomNumber, formatArnum } from "../util";
import {
  addArnums,
  multiplyArnums,
  subtractArnums,
  getArnum,
} from "precisionjs";

export default {
  data() {
    return {
      numbers: [],
      randomNumberLength: 100,
      result: null,
    };
  },
  computed: {
    resultFormatted() {
      return this.result && this.result.length
        ? formatArnum(this.result)
        : "Nothing here";
    },
  },
  methods: {
    clear() {
      this.numbers = [];
      this.result = null;
    },
    generateRandomNumber() {
      const length =
        this.randomNumberLength && this.randomNumberLength > 0
          ? Math.floor(this.randomNumberLength)
          : 100;
      this.numbers = [...this.numbers, getRandomNumber(length)];
    },
    // arithmetic ops
    add() {
      this.result = addArnums(...this.numbers.map(getArnum));
    },
    multiply() {
      this.result = multiplyArnums(...this.numbers.map(getArnum));
    },
    subtract() {
      this.result = subtractArnums(...this.numbers.map(getArnum));
    },
  },
};
</script>

<style scoped>
li,
#result {
  overflow-wrap: break-word;
}
</style>
