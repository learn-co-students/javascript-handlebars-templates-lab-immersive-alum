function createRecipe(){
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredients = []
  var nodes = document.getElementsByName("ingredients")
  for (let node of nodes) {
    if (node.value !== "") {
      ingredients.push(node.value)
    }
  }
  var recipe = { name, description, ingredients }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}

function displayEditForm(){
  var name = document.getElementById("recipe-name").innerText
  var description = document.getElementById("recipe-description").innerText
  var nodes = document.getElementsByName("recipe-ingredients")
  var ingredients = []
  for (let node of nodes) ingredients.push(node.innerText);
  var recipe = { name, description, ingredients }
  var editFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(editFormTemplate)
  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe(){
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredients = []
  var nodes = document.getElementsByName("ingredients")
  for (let node of nodes) {
    if (node.value !== "") {
      ingredients.push(node.value)
    }
  }
  var recipe = { name, description, ingredients }
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function handlebarsSetup() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', (ingredient) => new Handlebars.SafeString('<li name="recipe-ingredients">' + ingredient + '</li>'))
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function formInit(){
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate);
  document.getElementById("main").innerHTML = template()
}

function init() {
  handlebarsSetup()
  formInit()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
