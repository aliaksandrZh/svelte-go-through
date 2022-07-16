<script>
  import Interpolation from './components/interpolation.svelte';
</script>

<header>
    <h1>Svelte go through</h1>
</header>

<main>

    <section>
      <Interpolation/>
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
