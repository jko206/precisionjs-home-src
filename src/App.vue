<template>
  <div id="app">
    <h1>PrcisionJS: Do Math in JS with Precision</h1>
    <div id="motivation">
      <h2>Motivation</h2>
      <p>
        It all started when I was trying to make a math app for elementary
        school students. At one point, I came across a bug that was related to
        decimal numbers. Upon further investigation, I learned that in JS, due
        to conversion of number to binary, decimal numbers weren't very precise.
        As the famous example goes, in JS,
        <code>0.1 + 0.2 === 0.3</code> returns <code>false</code>.
      </p>
      <p>
        Then I also realized that you can't do fraction calculations with
        traditional math libraries.
      </p>
    </div>

    <div id="roadmap">
      <h2>Roadmap</h2>
      <ul>
        <li>
          Implement division with whole numbers
        </li>
        <li>
          Use TypeScript
        </li>
        <li>
          Write rational numbers
        </li>
        <li>
          Arithmetics with rational numbers
        </li>
        <li><code>BigInt</code> support for environments that support it</li>
        <li>
          Common functions, such as greatest common divisor, factorial,
          fibonacci, etc.
        </li>
      </ul>
    </div>

    <div id="demo">
      <h2>Demo</h2>
      <Demo />
    </div>
  </div>
</template>

<script>
import Demo from "./components/Demo";

export default {
  name: "App",
  components: {
    Demo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
