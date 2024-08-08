"use strict";

describe("Login and Logout Test 1", () => {
  it("should login and logout for user 1", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("user888@gmail.com", "1234567890");
    cy.get("#open-navigation-menu-mobile").click();
    cy.contains("Log out").click();
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});

describe("Login and Logout Test 2", () => {
  it("should login and logout for user 2", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("testowyqa@qa.team", "QA!automation-1");
    cy.get("#open-navigation-menu-mobile").click();
    cy.contains("Log out").click();
    cy.url().should("eq", "https://www.edu.goit.global/account/login");
  });
});