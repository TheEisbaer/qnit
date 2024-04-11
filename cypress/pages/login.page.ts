export const LoginPage = {
  username: () => cy.get("#username"),
  password: () => cy.get("#password"),
  error: () => cy.get("#validation-bubble"),
  login: () => cy.get("button"),
};
