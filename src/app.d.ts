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
	type Allergen = {
		id: number;
	}
	type CategoryEntry = {
		title: string;
		description: string | null;
		price: number;
		allergens: Array<Allergen> | never;
	}
	type Category = {
		name: string;
		entries: Array<CategoryEntry>;
	}
}

export {};
