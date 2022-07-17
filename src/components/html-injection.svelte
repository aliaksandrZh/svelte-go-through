<script>
  import { convertStrToPlainText } from '../lib/string-to-template/string-to-template.helper.js';

  let string = `this string contains some <strong>HTML!!!</strong>`;

  const exampleStr = `
    <script>
      let string = \`this string contains some <strong>HTML!!!</strong>\`;
    <\/script>

    <p>{ string }</p>
    <p>{ @html string }</p>`;

  const exampleSnippet = convertStrToPlainText(exampleStr);
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
