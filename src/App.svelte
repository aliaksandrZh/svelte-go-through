<script>
  import Interpolation from './components/interpolation.svelte';
  import Styles from './components/styles.svelte';
  import HTMLInjection from './components/html-injection.svelte';
  import EventBinding from './components/event-binding.svelte';
  import Reactivity from './components/reactive.svelte';
</script>

<header>
  <h1>Svelte go through</h1>
</header>

<main>
  <section>
    <Interpolation/>
  </section>

  <section>
    <Styles/>
  </section>

  <section>
    <HTMLInjection/>
  </section>

  <section>
    <EventBinding/>
  </section>

  <section>
    <Reactivity/>
  </section>
</main>

<style>
  header {
    padding: 20px 0;
  }

  header > h1 {
    text-align: center;
  }

  main {
    width: 100%;
    height: 100%;
    background-color: aquamarine;
  }
</style>
