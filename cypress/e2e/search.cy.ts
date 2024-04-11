import { HomePage, SearchResultsPage, TourDetailsPage } from "../pages";

beforeEach(() => {
  cy.login(Cypress.env("user"), Cypress.env("password"));
});

describe("Search for Europe", () => {
  it("should show 3 results", () => {
    HomePage.search().type("Europe{enter}");

    SearchResultsPage.pageCount()
      .invoke("text")
      .then((text) => {
        cy.wrap(Number(text)).should("be.gte", 3);
      });

    SearchResultsPage.tourCount()
      .invoke("text")
      .then((text) => {
        cy.wrap(Number(text)).should("be.gte", 1);
      });
  });
  it("should show the correct tour", () => {
    HomePage.search().type("Europe{enter}");
    SearchResultsPage.tourResults().eq(0).click();

    TourDetailsPage.title().should(
      "have.text",
      "Spectacular Ammouliani Island"
    );
    TourDetailsPage.location().should("contain.text", "Athens, Greece");
    TourDetailsPage.duration().should("contain.text", "7 days");
    TourDetailsPage.operator().should("contain.text", "Magnolia Travels");
  });
});
