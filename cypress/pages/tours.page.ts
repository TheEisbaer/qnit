export const ToursPage = {
  title: () => cy.get("h1"),

  tour: (index: number) => cy.get(".tour-list a").eq(index),
};
