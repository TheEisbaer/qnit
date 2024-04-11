export const TourDetailsPage = {
  title: () => cy.get("h1"),

  location: () => cy.get(".property-value").eq(0),
  duration: () => cy.get(".property-value").eq(1),
  operator: () => cy.get(".property-value").eq(2),

  bookTour: () => cy.get("form[action*='book-tour.html'] input[type='submit']"),
};
