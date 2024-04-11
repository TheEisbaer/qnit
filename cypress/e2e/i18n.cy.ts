import { HomePage } from "../pages";

beforeEach(() => {
  cy.login(Cypress.env("user"), Cypress.env("password"));
});

describe("i18n", () => {
  it("should change language to german", () => {
    HomePage.activeCard().should(
      "contain.text",
      "Active holidays for active people"
    );
    HomePage.cultureCard().should("contain.text", "Experiences of a lifetime");
    HomePage.offPathCard().should(
      "contain.text",
      "Unique holidays that take you off the beaten track"
    );
    HomePage.german().click();

    cy.url().should("include", "de");

    HomePage.activeCard().should(
      "contain.text",
      "Aktiver Urlaub für aktive Leute"
    );
    HomePage.cultureCard().should("contain.text", "Einmalige Erlebnisse");
    HomePage.offPathCard().should(
      "contain.text",
      "Einzigartige Ferien abseits der ausgetretenen Pfade"
    );
  });
});
