import { faker } from "@faker-js/faker";
import { chooseRandomGender } from "../support/helpers";
import "cypress-file-upload";

const randomValue = chooseRandomGender();
const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: "age" });
const day = birthDate.getDate().toString();
const month = (birthDate.getMonth() + 1).toString();
const year = birthDate.getFullYear().toString();
const street = faker.location.street();
const city = faker.location.city();
const estate = faker.location.state();
const zipCode = faker.address.zipCode("#####");
const phone = faker.phone.number("(##) 9####-####").replace(/\sx\d+$/, "");

Cypress.Commands.add("selectRandomOption", (selector) => {
  cy.get(selector).then(($el) => {
    const opts = Array.from($el[0].options).slice(1); // Ignora a primeira
    const random = opts[Math.floor(Math.random() * opts.length)];
    cy.get(selector).select(random.value);
  });
});

Cypress.Commands.add("createAddress", () => {
  cy.get("#address1").type(street);
  cy.get("#city").clear().type(city);
  cy.get("#id_state").select(estate);
  cy.get("#postcode").clear().type(zipCode, { delay: 100 });
  cy.get("#phone").clear().type(phone);
  cy.get("#phone_mobile").clear().type(phone);
  cy.get("#other").clear().type(faker.lorem.lines(1));
  cy.get("#alias").clear().type("House");
  cy.get("#submitAddress > span").click();
});

Cypress.Commands.add("accountCreate", () => {
  cy.get(".login").click();
  cy.get("#create-account_form").should("be.visible");
  cy.get("#email_create").type(faker.internet.email());
  cy.get("#SubmitCreate > span").click();

  cy.get("#account-creation_form").should("be.visible");
  cy.get(`input[name="id_gender"][value="${randomValue}"]`).check();
  cy.get("#customer_firstname").type(faker.person.firstName());
  cy.get("#customer_lastname").type(faker.person.lastName());
  cy.get("#email").click();
  cy.get("#passwd").type(faker.internet.password());

  cy.get("#days").select(day);
  cy.get("#months").select(month);
  cy.get("#years").select(year);
  cy.get("#newsletter").click();
  cy.get("#submitAccount > span").click();
});

Cypress.Commands.add("loginUser", () => {
  cy.visit("http://www.automationpractice.pl/index.php");
  cy.get("#header_logo").should("be.visible");
  cy.fixture("userLogin").then((user) => {
    cy.get(".login").click();
    cy.get("#email").type(user.email, { log: false });
    cy.get("#passwd").type(user.password, { log: false });
    cy.get("#SubmitLogin > span").click();
    cy.get(".account").should("contain", user.name);
  });
});

Cypress.Commands.add("emailEmpty", () => {
  cy.get(".login").click();
  cy.get("#passwd").type(faker.internet.password());
  cy.get("#SubmitLogin > span").click();
  cy.contains("There is 1 error").should("be.visible");
});

Cypress.Commands.add("passwordEmpty", () => {
  cy.get(".login").click();
  cy.get("#email").type(faker.internet.email());
  cy.get("#SubmitLogin > span").click();
  cy.contains("There is 1 error").should("be.visible");
});

Cypress.Commands.add("uploadFile", () => {
  cy.get("#contact-link > a").click();
  cy.selectRandomOption("#id_contact");
  cy.selectRandomOption('select[name="id_order"]');
  cy.get("#fileUpload").attachFile("loremIpsum.txt");
  cy.get("#message").type(faker.lorem.paragraph());
  cy.get("#submitMessage").click();
  cy.get(".alert").should("be.visible");
});
