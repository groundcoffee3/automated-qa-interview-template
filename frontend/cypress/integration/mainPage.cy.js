import MainPage from '../pages/mainPage';

describe('Main Page Tests', () => {
  const mainPage = new MainPage();
  const searchTerms = ['Skywalker', 'Last', 'New Hope', 'Sith', 'Solo'];

  beforeEach(() => {
    mainPage.visit();
  });

  it('should display the Get Films button', () => {
    mainPage.getGetFilmsButton().should('be.visible');
  });

  it('should display the search input', () => {
    mainPage.getSearchInput().should('be.visible');
  });

  it('should allow typing in the search input', () => {
    const query = 'Skywalker';
    mainPage.typeSearch(query);
    mainPage.getSearchInput().should('have.value', query);
  });

  it('should click the Get Films button', () => {
    mainPage.clickGetFilmsButton();
    cy.get('.films-container').children().should('have.length.at.least', 1);
  });

  searchTerms.forEach((term) => {
    it(`should search for ${term} and display results`, () => {
      mainPage.typeSearch(term);
      mainPage.clickSearchButton();
      cy.get('.films-container').children().should('have.length.at.least', 1);
    });
  });
});
