<script>
  import { EXAMPLE_SNIPPET } from "../constants/examples.js";

  let count = 0;

  $: if (count >= 10) {
    alert('count is dangerously high!');
    count = 9;
  }

  $: {
    console.log('the count is ' + count);
  }

  function increaseCounter() {
    count += 1;
  }

  const exampleSnippet = EXAMPLE_SNIPPET.REACTIVITY;
</script>

<h2 class="section-example--title">Reactivity</h2>

<div class="section-example">
  <div class="section-example__view">
    <button on:click={increaseCounter}>
      Clicked { count } { count === 1 ? 'time' : 'times' }
    </button>
  </div>

  <div class="section-example__code">
      <pre>
        { @html exampleSnippet }
    </pre>
  </div>
</div>


<style>
  button {
    padding: 10px 20px;
  }
</style>