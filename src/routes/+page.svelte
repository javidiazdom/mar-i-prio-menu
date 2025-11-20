<script lang="ts">
	import { menu } from "../menu";
    import logo from "$lib/assets/mar-i-prio-logo.png";

	let categories: Array<Category> = menu.categories;
	let selectedCategory: Category | undefined = $state(categories[0]);
    
    function setSelectedCategory(selectedCategoryName: string) {
        selectedCategory = categories.find(x => x.name == selectedCategoryName);
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=MonteCarlo&display=swap" rel="stylesheet">
</svelte:head>

<main>
    <div class="header">
        <img alt="Mar i prio logo" src="{logo}" class="logo">
    </div>

    <nav class="navigation">
        {#each categories as category}
            <button class="montecarlo-regular nav-entry" class:selected-button={selectedCategory?.name == category.name} onclick={(e: Event) => setSelectedCategory(category.name)}>{category.name}</button>
        {/each}
    </nav>
    <div class = "content">
        {#each selectedCategory?.entries as entry}
        <div class = "entry-card">
            <h2 class = "cardo-regular">{entry.title}</h2>
            <p>{entry.description}</p>
            <p>{entry.price}€</p>
        </div>
        {/each}
    </div>
</main>

<style>
    main {
        top: 0;
        overflow-y: scroll;
        height: 100vh;
    }

    :global(body) { 
         margin: 0; padding: 0; 
    }

    .cardo-regular {
        font-family: "Cardo", serif;
        font-weight: 400;
        font-style: normal;
    }

    .selected-button {
        color: black;
        background-color: #E7DEAF !important;
    }

    .montecarlo-regular {
        font-family: "MonteCarlo", cursive;
        font-size: 1rem;
        font-weight: 400;
        font-style: normal;
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .navigation {
        width: 100%;
        position: sticky;
        top: 0;
        display: flex;
        height: 3rem;
        background-color: #73AF6F;
        gap: 0.5rem;
        padding: 0.2rem 0.5rem;
        button {
            background-color: transparent;
            border: none;
            width: 100%;
            border-radius: 1rem;
        }
    }

    .entry-card {
        box-shadow:0px 0px 10px rgb(0 0 0 / 20%);
        padding: 0.1rem 1rem;
        border-radius: 1rem;
    }

    .content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }


    .logo {
        height: 5rem;
    }
</style>