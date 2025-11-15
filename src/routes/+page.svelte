<script lang="ts">
	import { menu } from "../menu";

	let categories: Array<Category> = menu.categories;
	let selectedCategory: Category | undefined = $state(categories[0]);
    
    function setSelectedCategory(selectedCategoryName: string) {
        selectedCategory = categories.find(x => x.name == selectedCategoryName);
    }
</script>

<nav>
    {#each categories as category}
        <button onclick={(e: Event) => setSelectedCategory(category.name)}>{category.name}</button>
    {/each}
</nav>

<div>
    <h1>{selectedCategory?.name}</h1>
    {#each selectedCategory?.entries as entry}
        <h2>{entry.title}</h2>
        <p>{entry.description}</p>
    {/each}
</div>