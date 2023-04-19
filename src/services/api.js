export async function getCategories() {
  // Implemente aqui
  const URL = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categorias = await URL.json();
  return categorias;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const URL = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categorias = await URL.json();
  return categorias;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
