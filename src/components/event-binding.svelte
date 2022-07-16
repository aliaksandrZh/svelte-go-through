<script>
  let count = 0;

  function increaseCounter() {
    count += 1;
  }
</script>

<h2 class="section-example--title">Event Binding</h2>

<div class="section-example">
  <div class="section-example__view">
    <button on:click={increaseCounter}>
      Clicked { count } { count === 1 ? 'time' : 'times' }
    </button>
  </div>

  <div class="section-example__code">
      <pre>
       &lt;script&gt;
        <span class="indent">let count = 0;</span>

        <span class="indent">function increaseCounter() &#123;</span>
        <span class="indent"><span class="indent"> count += 1;</span></span>
        <span class="indent">&#125;</span>
      &lt;/script&gt;

      &lt;button on:click=&#123;increaseCounter&#125;&gt;
        <span class="indent">Clicked &#123; count &#125; &#123; count === 1 ? 'time' : 'times' &#125;</span>
      &lt;/button&gt;
    </pre>
  </div>
</div>


<style>
  button {
    padding: 10px 20px;
  }
</style>