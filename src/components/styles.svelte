<script>
  import { EXAMPLE_SNIPPET } from "../constants/examples.js";

  const exampleSnippet = EXAMPLE_SNIPPET.STYLING;
</script>

<h2 class="section-example--title">Styling</h2>

<div class="section-example">
  <div class="section-example__view">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur cumque deleniti distinctio dolor esse
      ipsum libero minima neque quae qui, quidem quod rem sit tenetur totam vero voluptatem.</p>
  </div>

  <div class="section-example__code">
      <pre>
      { @html exampleSnippet }
    </pre>
  </div>
</div>

<style>
  p {
    color: red;
  }
</style>
