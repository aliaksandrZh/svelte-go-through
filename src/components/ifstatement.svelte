<script>
    let user = { loggedIn: false };

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }

    $: console.log('User is logged in ', user.loggedIn)
</script>

<div>
    <p>
        Logged in <b>{user.loggedIn}</b>
    </p>
</div>

{#if user.loggedIn}
    <button on:click={toggle}>
        Log out
    </button>
{/if}

{#if !user.loggedIn}
    <button on:click={toggle}>
        Log in
    </button>
{/if}