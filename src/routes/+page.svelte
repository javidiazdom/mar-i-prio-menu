<script lang="ts">
	import { menu } from "../menu";
    import logo from "$lib/assets/mar-i-prio-logo.png";
    import favicon from "$lib/assets/mar-i-prio-logo.ico";

    

	let categories: Array<Category> = menu.categories;
	let selectedCategory: Category | undefined = $state(categories[0]);
    let allergens: Dictionary<Allergen> = menu.allergens;
    
    function setSelectedCategory(selectedCategoryName: string) {
        selectedCategory = categories.find(x => x.name == selectedCategoryName);
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=MonteCarlo&display=swap&family=Montaga&display=swap&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href={favicon}>
</svelte:head>

<main>
    <div class="header">
        <img alt="Mar i prio logo" src="{logo}" class="logo">
    </div>

    <nav class="navigation">
        {#each categories as category}
            <button class="montaga-regular nav-entry" class:selected-button={selectedCategory?.name == category.name} onclick={(e: Event) => setSelectedCategory(category.name)}>{category.name}</button>
        {/each}
    </nav>
    <div class = "content">
        {#each selectedCategory?.entries as entry}
        <div class = "entry-card">
            <h2 class="roboto bold">{entry.title}</h2>
            <p class="roboto light text">{entry.description}</p>
            <div class="bottom">
                <div class="allergens">
                    {#each entry.allergens as allergen}
                    <div 
                        class="allergen roboto"
                        style={`color: ${allergens[allergen].colordark}; background-color: ${allergens[allergen].color}; border-color: ${allergens[allergen].colordark}`}
                        >{allergens[allergen].name}</div>
                    {/each}
                </div>
                <p class="price roboto">{entry.price}€</p>
            </div>
        </div>
        {/each}
    </div>
</main>

<style>
    main {
        top: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 100vh;
    }

    .bottom {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .allergens {
        display: flex;
        overflow: scroll;
        -ms-overflow-style: none;  
        scrollbar-width: none; 
        gap: 0.2rem;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .allergen {
        border-radius: .55rem;
        border: 1px solid black;
        padding: .3rem;
        font-size: .85rem;
        line-height: 1rem;
        height: fit-content;
    }

    .price {
        width: 4rem;
        margin: 0;
        text-align: center;
        justify-content: center;
        align-content: center;
        font-size: 1.4rem;
        font-weight: 500 !important;
    }

    :global(body) { 
        margin: 0; 
        padding: 0;
        background-color: var(--bg-color-1);
        --card-bg-color: white;
        --bg-color-1: #F2F4F6;
        --bg-color-2: #98C9A3;
        --bg-color-3: #BFD8BD;
        --border-color-1: #c8cece;
        --bg-color-4: #34623f;
        --acc-color-1: #EDEEC9;
        --dark-font: #1e2f23;
        --light-font: #faf3dd;
    }

    .selected-button {
        color: black;
        background-color: var(--light-font) !important;
    }

        
    .roboto {
        font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }

    .montaga-regular {
        font-family: "Montaga", serif;
        font-weight: 100;
        font-style: normal;
    }
    
    .bold {
        font-weight: bold;
    }

    .light {
        font-weight: 400;
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .navigation {
        position: sticky;
        top: 0;
        display: flex;
        height: 3rem;
        background-color: var(--bg-color-3);
        gap: 0.5rem;
        overflow-x: scroll;
        padding: 0.2rem 0.5rem;
        border-bottom: 1px solid var(--dark-font);
        border-top: 1px solid var(--dark-font);


        -ms-overflow-style: none;  
        scrollbar-width: none; 
        &::-webkit-scrollbar {
            display: none;
        }
        button {
            background-color: transparent;
            border: none;
            width: fit-content;
            border-radius: 1rem;
            padding: 0rem 2rem;
            white-space: nowrap;
        }
    }

    .entry-card {
        padding: 0.1rem 1rem 1.2rem 1rem;
        border-radius: 1rem;
        color: var(--dark-font);
        background-color: var(--card-bg-color);
        border: 2px solid var(--border-color-1);
        h2 {
            color: var(--bg-color-4);
            font-size: 1.2rem;
            margin: 0.7rem 0;
        }
        .text {
            margin: 1rem .3rem 1.2rem 0rem;
            text-align: left;
            font-size: .9rem;
        }
    }

    .content {
        padding: 1rem 1rem 1rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }


    .logo {
        height: 5rem;
        border-radius: 100%;
        margin: 1rem;
        border: 1px solid var(--bg-color-3);
    }
</style>