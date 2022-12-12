describe("Giffy app E2E", () => {
  it("Frontpage can be opened", () => {
    cy.visit("/");
    cy.get('img[alt="Giffy"]');
  });

  it("Should input search render", () => {
    cy.visit("/")
    cy.get('input[name="search"]');
  })

  it("Should input search type avengers", () => {
    cy.visit("/")
    cy.get('input[name="search"]').type("avengers");
  })

  it("Should form search is submitted", () => {
    cy.visit("/")
    cy.get('input[name="search"]').type("avengers");
    cy.get('#search-form').submit();
  })
});
