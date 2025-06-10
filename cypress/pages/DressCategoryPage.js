class DressCategoryPage{
  getMenCategoryLink(){
    return cy.get('h4 a[href="#Men"] span')
  }

  getJeansCategoryLink(){
    return cy.get('div[id="Men"] div.panel-body ul li a[href="/category_products/6"]')
  }
}

export default new DressCategoryPage();