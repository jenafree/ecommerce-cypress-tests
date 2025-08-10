class PaginaLinksCategoriasHome{
  getWomenCategoryLink(){
    return cy.get('h4 a[href="#Women"] span');
  }

  getDressCategory(){
    return cy.get('div[id="Women"] div.panel-body ul li a[href="/category_products/1"]');
  }

  getTopsCategory(){
    return cy.get('div[id="Women"] div.panel-body ul li a[href="/category_products/2"]');
  }

  getSareeCategory(){
    return cy.get('div[id="Women"] div.panel-body ul li a[href="/category_products/7"]');
  }

  getMenCategoryLink(){
    return cy.get('h4 a[href="#Men"] span');
  }

  getTShirtsCategory(){
    return cy.get('div[id="Men"] div.panel-body ul li a[href="/category_products/3"]');
  }

  getJeansCategory(){
    return cy.get('div[id="Men"] div.panel-body ul li a[href="/category_products/6"]');
  }

  getKidsCategoryLink(){
    return cy.get('h4 a[href="#Kids"] span');
  }

  getKidsDressCategory(){
    return cy.get('div[id="Kids"] div.panel-body ul li a[href="/category_products/4"]');
  }

  getTopsShirtsCategory(){
    return cy.get('div[id="Kids"] div.panel-body ul li a[href="/category_products/5"]');
  }
}

export default new PaginaLinksCategoriasHome();