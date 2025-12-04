<script lang="ts">
	import { spanish } from "../menu/es-ES";
	import { english } from "../menu/en-UK";
	import { german } from "../menu/de-GE";
	import { italian } from "../menu/it-IT";
    import logo from "$lib/assets/mar-i-prio-logo.png";
    import favicon from "$lib/assets/mar-i-prio-logo.ico";

    let menus: Dictionary<Menu> = {
        "es-ES": spanish,
        "en-UK": english,
        "de-GE": german,
        "it-IT": italian
    }
    let languages: Array<LanguageOption> = [
        {
            displayName: "🇪🇸 Español",
            value: "es-ES"
        }, 
        {
            displayName: "🇬🇧 English",
            value: "en-UK"
        },
        {
            displayName: "🇩🇪 Deutsch",
            value: "de-GE"
        },
        {
            displayName: "🇮🇹 Italiano",
            value: "it-IT"
        }
    ];
    
    let selectedLanguage:string = $state("es-ES");
    let menu = $derived(menus[selectedLanguage]);
    let selectedCategory: Category | undefined = $derived(menu.categories[0]);
    
    function setSelectedCategory(selectedCategoryName: string) {
        selectedCategory = menu.categories.find(x => x.name == selectedCategoryName);
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
        <select name="language" bind:value={selectedLanguage} class="language-selector roboto">    
        {#each languages as language}
            <option value="{language.value}">{language.displayName}</option>
        {/each}
        </select>
    </div>

    <nav class="navigation">
        {#each menu.categories as category}
            <button class="roboto nav-entry" class:selected-button={selectedCategory?.name == category.name} onclick={(e: Event) => setSelectedCategory(category.name)}>{category.name}</button>
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
                        style={`color: ${menu.allergens[allergen].colordark}; background-color: ${menu.allergens[allergen].color}; border-color: ${menu.allergens[allergen].colordark}`}
                        >{menu.allergens[allergen].name}</div>
                    {/each}
                </div>
                <p class="price roboto">{entry.price % 1 == 0 ? entry.price : entry.price.toFixed(2)}€</p>
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

    .language-selector {
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        padding: 0.4rem;
        outline: none;
        border-radius: 0.6rem;
        border: 2px solid var(--border-color-1)
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
        width: fit-content;
        margin: 0;
        text-align: center;
        justify-content: center;
        align-content: center;
        font-size: 1.5rem;
        font-weight: 500 !important;
    }

    :global(body) { 
        margin: 0; 
        padding: 0;
        background-color: var(--bg-color-1);
        --card-bg-color: white;
        --bg-color-1: #F2F4F6;
        --bg-color-2: #98C9A3;
        --bg-color-3: #dde7dc;
        --border-color-1: #c8cece;
        --bg-color-4: #34623f;
        --acc-color-1: #EDEEC9;
        --dark-font: #1e2f23;
        --light-font: #d6d6d6;
    }

    .selected-button {
        color: black;
        background-color: white !important;
        border: 2px solid var(--border-color-1) !important;
    }

        
    .roboto {
        font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }
    
    .bold {
        font-weight: bold;
    }

    .light {
        font-weight: 400;
    }

    .header {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .navigation {
        position: sticky;
        top: 0;
        display: flex;
        height: 2.5rem;
        gap: 0.5rem;
        overflow-x: scroll;
        padding: 0.2rem 0.2rem;
        border: 2px solid var(--border-color-1);
        background-color: var(--bg-color-1);
        border-radius: 0.7rem;
        margin: 0px 0.2rem;
        -ms-overflow-style: none;  
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        .nav-entry {
            background-color: transparent;
            border: none;
            width: fit-content;
            border-radius: 0.7rem;
            font-size: 1.1rem;
            padding: 0rem 1.3rem;
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
            font-size: 1.4rem;
            margin: 0.7rem 0;
        }
        .text {
            margin: 1rem .3rem 1.2rem 0rem;
            text-align: left;
            font-size: 1.15rem;
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
        border: 2px solid var(--border-color-1);
    }
</style>