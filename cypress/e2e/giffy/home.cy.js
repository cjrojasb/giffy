describe("Giffy app E2E", () => {
  beforeEach(() => {
    cy.init();
  });

  it("Frontpage can be opened", () => {
    cy.get('[data-testid="logo"]');
  });

  it("Should input search render", () => {
    cy.get('input[name="search"]');
  });

  it("Should input search type avengers", () => {
    cy.get('input[name="search"]').type("avengers");
  });

  it("Should form search is submitted and url is changed", () => {
    cy.get('input[name="search"]').type("avengers");
    cy.get("#search-form").submit();
    cy.url().should("include", "/search/avengers");
    cy.get("#title-search-results").should("contain", "avengers");
  });

  it("Should form search is submitted and next page is clicked", () => {
    cy.get('input[name="search"]').type("avengers");
    cy.get("#search-form").submit();
    cy.get("#search-results-button").should("contain", "Next Page");
  });
});
