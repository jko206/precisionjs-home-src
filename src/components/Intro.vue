<template>
  <!-- prettier-ignore -->
  <div>
# PrecisionJS: Better Math in JS

## Introduction

`0.3 === 0.2 + 0.1` is `false`?

I encountered this problem first when I was working on an application
that relied on math. After pulling out my hair for a few hours, I
learned that in JS `0.1 + 0.2` evaluates to `0.30000000000000004`. I
latered learned that this has something to do with the number being
converted to binary and back to decimal.

Some of the suggestions around it was to simply round it to the number
you want, based on the the tolerable error rate. But, being a math guy,
this didn't sit well with me. So from thence forward, I set out to
create a math library that could calculate to arbitrary precision.

Since I first conceived the idea, `BigInt` has been implemented, and I
plan on using that soon, too, but where BigInt isn't possible, I want my
PrecisionJS library to shine.

There are other math libraries that do what I currently have, but I'm
going to take it further. My first plan is to enable basic arithmetics,
such as additions, subtractions, multiplication and division.
  </div>
</template>

<script>
export default {};
</script>

<style></style>
