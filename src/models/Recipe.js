export default class Recipe {
  constructor(title, description, ingredients) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
  }

  static save(store) {
    store.dispatch("RECIPE_SAVE", {
      title: this.title,
      description: this.description,
      ingredients: this.ingredients
    });
  }
}
