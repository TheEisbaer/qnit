import {
  AboutPage,
  ContactPage,
  DestinationsPage,
  HomePage,
  MembersPage,
  StoriesPage,
  ToursPage,
} from "../pages";

beforeEach(() => {
  cy.login(Cypress.env("user"), Cypress.env("password"));
});

describe("Navigation", () => {
  it("tours should navigate to correct page", () => {
    HomePage.tours().click();
    HomePage.tourActive().click();
    ToursPage.title().should("contain.text", "Active");

    HomePage.tours().click();
    HomePage.tourBeach().click();
    ToursPage.title().should("contain.text", "Beach");

    HomePage.tours().click();
    HomePage.tourCultural().click();
    ToursPage.title().should("contain.text", "Cultural");

    HomePage.tours().click();
    HomePage.tourEcotourism().click();
    ToursPage.title().should("contain.text", "Ecotourism");

    HomePage.tours().click();
    HomePage.tourFamily().click();
    ToursPage.title().should("contain.text", "Family");

    HomePage.tours().click();
    HomePage.tourOffPath().click();
    ToursPage.title().should("contain.text", "Off").and("contain.text", "Path");
  });

  it("destinations should navigate to correct page", () => {
    HomePage.destinations().click();
    HomePage.destinationNorthAmerica().click();
    DestinationsPage.title().should("contain.text", "North America");

    HomePage.destinations().click();
    HomePage.destinationSouthAmerica().click();
    DestinationsPage.title().should("contain.text", "South America");

    HomePage.destinations().click();
    HomePage.destionationEurope().click();
    DestinationsPage.title().should("contain.text", "Europe");

    HomePage.destinations().click();
    HomePage.destinationAfrica().click();
    DestinationsPage.title().should("contain.text", "Africa");

    HomePage.destinations().click();
    HomePage.destinationAsia().click();
    DestinationsPage.title().should("contain.text", "Asia");

    HomePage.destinations().click();
    HomePage.destinationPolar().click();
    DestinationsPage.title().should("contain.text", "Polar");
  });

  it("stories should navigate to correct page", () => {
    HomePage.stories().click();
    StoriesPage.title().should("contain.text", "Stories");
  });

  it("about should navigate to correct page", () => {
    HomePage.about().click();
    AboutPage.title().should("contain.text", "About");
  });

  it("contact should navigate to correct page", () => {
    HomePage.contact().click();
    ContactPage.title().should("contain.text", "Contact");
  });

  it("members should navigate to correct page", () => {
    HomePage.members().click();
    MembersPage.title().should("contain.text", "Members");
  });
});
