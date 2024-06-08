class MainPage {
    visit() {
      cy.visit('/');
    }
  
    getGetFilmsButton() {
      return cy.get('button.btn');
    }
  
    getSearchInput() {
      return cy.get('input.films-search');
    }
  
    getSearchButton() {
      return cy.get('button.search-btn'); // Update with the correct selector for the search button
    }
  
    clickGetFilmsButton() {
      this.getGetFilmsButton().click();
    }
  
    clickSearchButton() {
      this.getSearchButton().click();
    }
  
    typeSearch(query) {
      this.getSearchInput().type(query);
    }
  }
  
  export default MainPage;
  