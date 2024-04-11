import { LoginPage, HomePage } from "../pages";

describe("Login Page", () => {
  it("should successfully login with correct credentials", () => {
    cy.visit("/", { failOnStatusCode: false });
    LoginPage.username().type(Cypress.env("user"));
    LoginPage.password().type(Cypress.env("password"));
    LoginPage.login().click();
    HomePage.profile().should("have.text", Cypress.env("user"));
  });

  it("should show correct error message if credentials are incorrect", () => {
    cy.visit("/", { failOnStatusCode: false });
    LoginPage.username().type("wrong-username");
    LoginPage.password().type("wrong-password");
    LoginPage.login().click();
    LoginPage.error()
      .should("be.visible")
      .and("have.text", "Error during login. Please try again.");
  });
});
