// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	type Menu = {
		categories: Array<Category>;
		allergens: Dictionary<Allergen>;
	}
	type CategoryEntry = {
		title: string;
		description: string | null;
		price: number;
		allergens: Array<int> | never;
	}
	type Category = {
		name: string;
		entries: Array<CategoryEntry>;
	}
	type Allergen = {
		name: string;
		color: string;
		colordark: string;
	}
	type LanguageOption = {
		displayName: string;
		value: string;
	}
	interface Dictionary<T> {
		[Key: number]: T;
	}
	interface Dictionary<T> {
		[Key: string]: T;
	}
}

export {};
