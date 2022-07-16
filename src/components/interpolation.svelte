<script>
  let hWorld = "Hello world";
  let svelteImgPath = "svelte.svg";
  let altText = "logo";
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
       &lt;script&gt;
        <span class="indent">let hWorld = "Hello world";</span>
        <span class="indent">let svelteImgPath = "svelte.svg";</span>
        <span class="indent">let altText = "logo";</span>
      &lt;/script&gt;

      &lt;p&gt;
        <span class="indent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur cumque deleniti distinctio dolor esse ipsum libero minima neque  &lt;b&gt;&#123; hWorld &#125;&lt;b&gt;quae qui, quidem quod rem sit tenetur totam vero voluptatem.
        </span>
      &lt;/p&gt;

     &lt;img src=&#123;svelteImgPath&#125; alt=&#123;altText&#125;/&gt;

     &lt;img alt=&#123;altText&#125;/&gt;
    </pre>
  </div>
</div>
