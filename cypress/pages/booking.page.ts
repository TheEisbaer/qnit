export const BookingStep1Page = {
  adults: () => cy.get("#adults"),
  youths: () => cy.get("#youth"),

  upgrades: () => cy.get("input[type='checkbox']"),

  meal: () => cy.get("#meal"),

  next: () => cy.get("#book input[type='submit']"),
};

export const BookingStep2Page = {
  mealOption: (
    value: "gluten-free" | "vegan" | "vegetarian" | "kosher" | "halal" | "none"
  ) => cy.get(`input[value="${value}"]`),

  mealNotes: () => cy.get("#additionalMealNotes"),

  previous: () => cy.get("#book input[type='submit']").eq(0),
  next: () => cy.get("#book input[type='submit']").eq(1),
};

export const BookingStep3Page = {
  title: () => cy.get("#title"),
  firstName: () => cy.get("#firstName"),
  lastName: () => cy.get("#lastName"),
  email: () => cy.get("#email"),
  phone: () => cy.get("#phone"),
  city: () => cy.get("#city"),
  postalOrZip: () => cy.get("#postalOrZip"),
  country: () => cy.get("#country"),
  province: () => cy.get("#province"),
  previous: () => cy.get("#book input[type='submit']").eq(0),
  next: () => cy.get("#book input[type='submit']").eq(1),
};

export const BookingReviewPage = {
  youthCount: () =>
    cy
      .get("table")
      .contains("caption", "Book your tour")
      .parents("table")
      .find("tbody tr")
      .contains("td", "Youth (10-18)")
      .next("td"),
  mealRequirement: () =>
    cy
      .get("table")
      .contains("caption", "Book your tour")
      .parents("table")
      .find("tbody tr")
      .contains("td", "Do you have special meal requirements?")
      .next("td"),
  adultsCount: () =>
    cy
      .get("table")
      .contains("caption", "Book your tour")
      .parents("table")
      .find("tbody tr")
      .contains("td", "Adults (18+)")
      .next("td"),

  upgrades: (index: number) =>
    cy
      .get("table")
      .contains("caption", "Book your tour")
      .parents("table")
      .find("tbody tr")
      .filter((index, element) => {
        // Check if the first column contains the text "Upgrades"
        return Cypress.$(element).find("td:first").text().trim() === "Upgrades";
      })
      .eq(index)
      .then((row) => {
        // Perform actions on the selected row
        cy.wrap(row).find("td:nth-child(2)");
      }),

  mealOption: () =>
    cy
      .get("table")
      .contains("caption", "Meal")
      .parents("table")
      .find("tbody tr")
      .contains("td", "Meal Options")
      .next("td"),

  firstName: () =>
    cy
      .get("table")
      .contains("caption", "Personal details")
      .parents("table")
      .find("tbody tr")
      .contains("td", "First name")
      .next("td"),
  email: () =>
    cy
      .get("table")
      .contains("caption", "Personal details")
      .parents("table")
      .find("tbody tr")
      .contains("td", "Email")
      .next("td"),
  lastName: () =>
    cy
      .get("table")
      .contains("caption", "Personal details")
      .parents("table")
      .find("tbody tr")
      .contains("td", "Last Name")
      .next("td"),

  previous: () => cy.get("#book input[type='submit']").eq(0),
  confirm: () => cy.get("#book input[type='submit']").eq(1),
};

export const BookingResultPage = {
  error: () => cy.get(".error"),
};
