<script>
  import { EXAMPLE_SNIPPET } from "../constants/examples.js";

  let hWorld = "Hello world";
  let svelteImgPath = "svelte.svg";
  let altText = "logo";

  const exampleSnippet = EXAMPLE_SNIPPET.INTERPOLATION;
</script>

<h2 class="section-example--title">Interpolation</h2>

<div class="section-example">
 <div class="section-example__view">
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur cumque deleniti distinctio dolor esse
     ipsum libero minima neque <b> { hWorld } </b>quae qui, quidem quod rem sit tenetur totam vero voluptatem.</p>
   <br/>
   <img src={svelteImgPath} alt={altText}/>
   <br/>
   <br/>
   <img alt={altText}/>
 </div>

  <div class="section-example__code">
      <pre>
      { @html exampleSnippet}
    </pre>
  </div>
</div>
