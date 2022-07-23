import { convertStrToPlainText } from "../lib/string-to-template/string-to-template.helper.js";

const interpolation = `
  <script>
    let hWorld = "Hello world";
    let svelteImgPath = "svelte.svg";
    let altText = "logo";
  <\/script>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur cumque deleniti distinctio dolor esse ipsum libero minima neque <b> { hWorld } </b>quae qui, quidem quod rem sit tenetur totam vero voluptatem.</p>
  <br/>
  <img src={svelteImgPath} alt={altText}/>
  <br/>
  <br/>
  <img alt={altText}/>`;

const htmlInjection = `
    <script>
      let string = \`this string contains some <strong>HTML!!!</strong>\`;
    <\/script>

    <p>{ string }</p>
    <p>{ @html string }</p>`;

const eventBinding = `
  <script>
    let count = 0;

    function increaseCounter() {
      count += 1;
    }
  </\script>

  <button on:click={increaseCounter}>
    Clicked { count } { count === 1 ? 'time' : 'times' }
  </button>`;

const styling = `
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur cumque deleniti distinctio dolor esse ipsum libero minima neque quae qui, quidem quod rem sit tenetur totam vero voluptatem.</p>

  <style>
    p {
      color: red;
    }
  </\style>`;

const reactivity = `
  <script>
    let count = 0;

    $: if (count >= 10) {
      alert('count is dangerously high!');
      count = 9;
    }

    $: {
      console.log('the count is ' + count);
    }

    function increaseCounter() {
      count += 1;
    }
  </\script>

  <button on:click={increaseCounter}>
    Clicked { count } { count === 1 ? 'time' : 'times' }
  </button>`;

const exampleSnippets = {
  INTERPOLATION: interpolation,
  STYLING: styling,
  HTML_INJECTION: htmlInjection,
  EVENT_BINDING: eventBinding,
  REACTIVITY: reactivity,
};

const getExamples = () => {
  const examples = {};
  for (let type in exampleSnippets) {
    examples[type] = convertStrToPlainText(exampleSnippets[type]);
  }

  return examples;
};

export const EXAMPLE_SNIPPET = getExamples();