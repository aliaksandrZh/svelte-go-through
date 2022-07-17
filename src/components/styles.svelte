<script>
  import { convertStrToPlainText } from '../lib/string-to-template/string-to-template.helper.js';

  const exampleStr = `
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur cumque deleniti distinctio dolor esse ipsum libero minima neque quae qui, quidem quod rem sit tenetur totam vero voluptatem.</p>

  <style>
    p {
      color: red;
    }
  </\style>`;

  const exampleSnippet = convertStrToPlainText(exampleStr);
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
