<script>
  let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<h2 class="section-example--title">HTML Injection</h2>

<div class="section-example">
  <div class="section-example__view">
    <p>{ string }</p>
    <p>{ @html string }</p>
  </div>

  <div class="section-example__code">
      <pre>
       &lt;script&gt;
        <span class="indent">let string = `this string contains some &lt;strong&gt;HTML&lt;strong&gt;`;</span>
      &lt;/script&gt;

      &lt;p&gt; &#123; string &#125; &lt;/p&gt;
      &lt;p&gt; &#123; @html string &#125; &lt;/p&gt;
    </pre>
  </div>
</div>
