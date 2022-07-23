<script>
  import { EXAMPLE_SNIPPET } from "../constants/examples.js";

  let string = `this string contains some <strong>HTML!!!</strong>`;

  const exampleSnippet = EXAMPLE_SNIPPET.HTML_INJECTION;
</script>

<h2 class="section-example--title">HTML Injection</h2>

<div class="section-example">
  <div class="section-example__view">
    <p>{ string }</p>
    <p>{ @html string }</p>
  </div>

  <div class="section-example__code">
    <pre>
      { @html exampleSnippet }
    </pre>
  </div>
</div>
