export const HomePage = {
  tours: () => cy.get('[href="#"]').eq(0),

  tourActive: () => cy.getByPartialHref("/tour-type~active~.html"),
  tourBeach: () => cy.getByPartialHref("/tour-type~beach~.html"),
  tourCultural: () => cy.getByPartialHref("/tour-type~cultural~.html"),
  tourEcotourism: () => cy.getByPartialHref("/tour-type~ecotourism~.html"),
  tourFamily: () => cy.getByPartialHref("/tour-type~family~.html"),
  tourOffPath: () => cy.getByPartialHref("/tour-type~offPath~.html"),

  destinations: () => cy.get('[href="#"]').eq(1),

  destinationNorthAmerica: () =>
    cy.getByPartialHref("/destination~northAmerica~.html"),
  destinationSouthAmerica: () =>
    cy.getByPartialHref("/destination~southAmerica~.html"),
  destionationEurope: () => cy.getByPartialHref("/destination~europe~.html"),
  destinationAfrica: () => cy.getByPartialHref("/destination~africa~.html"),
  destinationAsia: () => cy.getByPartialHref("/destination~asia~.html"),
  destinationPolar: () => cy.getByPartialHref("/destination~polar~.html"),

  stories: () => cy.getByPartialHref("/stories.html"),
  about: () => cy.getByPartialHref("/about.html"),
  contact: () => cy.getByPartialHref("/contact.html"),
  members: () => cy.getByPartialHref("/members.html"),
  search: () => cy.get("#nav-search"),
  logout: () => cy.getByPartialHref("/members/login.html?mgnlLogout=true"),
  profile: () => cy.getByPartialHref("/members/profile-update.html"),

  tourFinderSearch: () => cy.get(".finder-search-home"),
  tourFinderDuration: () => cy.get('[name="duration"]'),
  tourFinderType: () => cy.get('[name="tourTypes"]'),
  findTour: () => cy.get(".finder-home button"),

  activeCard: () => cy.get(".category-card-content").eq(0),
  cultureCard: () => cy.get(".category-card-content").eq(1),
  offPathCard: () => cy.get(".category-card-content").eq(2),

  english: () => cy.get('a[title="English"]'),
  german: () => cy.get('a[title="German"]'),
};
