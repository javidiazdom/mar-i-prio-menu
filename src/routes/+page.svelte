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


<div class="header">
    <img alt="Mar i prio logo" src="{logo}" class="logo">
</div>

<nav class="navigation">
    {#each categories as category}
        <button class="montecarlo-regular" class:selected-button={selectedCategory?.name == category.name} onclick={(e: Event) => setSelectedCategory(category.name)}>{category.name}</button>
    {/each}
</nav>

<div>
    <h1 class = "cardo-regular"> {selectedCategory?.name}</h1>
    {#each selectedCategory?.entries as entry}
        <h2 class = "cardo-regular">{entry.title}</h2>
        <p>{entry.description}</p>
    {/each}
</div>



<style>
    .cardo-regular {
        font-family: "Cardo", serif;
        font-weight: 400;
        font-style: normal;
    }

    .selected-button {
        color: white;
        background-color: aqua !important;
    }

    .montecarlo-regular {
        font-family: "MonteCarlo", cursive;
        font-weight: 400;
        font-style: normal;
    }

    .header {
        width: 100%;
    }

    .navigation {
        width: 100%;
        position: sticky;
        display: flex;
        height: 3rem;
        button {
            background-color: transparent;
            border: none;
            width: 100%;
            border: 1px solid black
        }
    }

    .logo {
        height: 5rem;
    }
</style>