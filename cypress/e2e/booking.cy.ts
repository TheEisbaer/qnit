import { HomePage } from "../pages";
import {
  BookingResultPage,
  BookingReviewPage,
  BookingStep1Page,
  BookingStep2Page,
  BookingStep3Page,
} from "../pages/booking.page";
import { SearchResultsPage } from "../pages/searchResults.page";
import { TourDetailsPage } from "../pages/tourDetails.page";

beforeEach(() => {
  cy.login(Cypress.env("user"), Cypress.env("password"));
});

describe("Booking", () => {
  it("should book a tour", () => {
    HomePage.search().type("Swiss Alps{enter}");
    SearchResultsPage.tourResults().eq(0).click();

    TourDetailsPage.title().should("have.text", "Hut to Hut in the Swiss Alps");
    TourDetailsPage.location().should("contain.text", "Zurich, Switzerland");
    TourDetailsPage.duration().should("contain.text", "7 days");
    TourDetailsPage.operator().should("contain.text", "Magnolia Travels");
    TourDetailsPage.bookTour().click();

    BookingStep1Page.adults().type("2");
    BookingStep1Page.youths().type("1");

    BookingStep1Page.upgrades().eq(0).check().should("be.checked");
    BookingStep1Page.upgrades().eq(1).check().should("be.checked");

    BookingStep1Page.meal().select("Yes");

    BookingStep1Page.next().click();

    BookingStep2Page.mealOption("gluten-free").check();
    BookingStep2Page.mealNotes().type("Gluten-free noodles only please");

    BookingStep2Page.next().click();

    BookingStep3Page.firstName().type("Dominik");
    BookingStep3Page.lastName().type("Niebuhr");
    BookingStep3Page.email().type("dominik.niebuhr@example.com");

    BookingStep3Page.next().click();

    BookingReviewPage.adultsCount().should("have.text", "2");
    BookingReviewPage.youthCount().should("have.text", "1");

    BookingReviewPage.mealRequirement().should("have.text", "Yes");

    BookingReviewPage.upgrades(0).should("have.text", "$39 Airport Pickup");
    BookingReviewPage.upgrades(1).should("have.text", "$99 Carbon Offset");

    BookingReviewPage.confirm().click();

    BookingResultPage.error().should("not.exist");
  });
});
