export const SearchResultsPage = {
  pageCount: () => cy.get("em").eq(0),
  tourCount: () => cy.get("em").eq(1),

  pageResults: () =>
    cy
      .get(".list-group")
      .eq(0)
      .within(() => {
        return cy.get("a");
      }),
  tourResults: () =>
    cy
      .get(".list-group")
      .eq(1)
      .within(() => {
        return cy.get("a");
      }),
};
