/// <reference types = "cypress" />
import { faker } from "@faker-js/faker";
import HeaderPage from "../pages/HeaderPage";
import AuthPage from "../pages/AuthPage";
import RegisterFormPage from "../pages/RegisterFormPage";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const fullName = firstName + " " + lastName;
const confirmationFullName = fullName;
const randomEmail = faker.internet.email();
const confirmationEmail = randomEmail;
const randomPassword = faker.internet.password();
const loginEmail = "oanabarsan@yahoo.com";
const birthDay = faker.helpers.rangeToNumber({ min: 1, max: 30 });
const birthMonth = faker.date.month();
const birthYear = "1990";
const companyName = faker.company.name();
const address = faker.location.streetAddress();
const myCountryArray = [
  "India",
  "United States",
  "Canada",
  "Australia",
  "Israel",
  "New Zealand",
  "Singapore",
];
const country =
  myCountryArray[Math.floor(Math.random() * myCountryArray.length)];
const randomState = faker.location.state();
const randomCity = faker.location.city();
const randomZipCode = faker.location.zipCode();
const randomPhoneNumber = faker.phone.number();
const invalidEmail = "oanabarsan";

describe("Register user test suite", () => {
  it("Register with valid credentials test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getGenderRadioBtn().check().should("be.checked");
    RegisterFormPage.getNameField().should("have.value", confirmationFullName);
    RegisterFormPage.getEmailField().should("have.value", confirmationEmail);
    RegisterFormPage.getPasswordField().type(randomPassword, { delay: 0 });
    RegisterFormPage.getBirthDay().select(birthDay);
    RegisterFormPage.getBirthMonth().select(birthMonth, { force: true });
    RegisterFormPage.getBirthYear().select(birthYear, { force: true });
    RegisterFormPage.getNewsletterCheckbox().check().should("be.checked");
    RegisterFormPage.getOffersCheckbox().check().should("be.checked");
    RegisterFormPage.getFirstName().type(firstName, { delay: 0 });
    RegisterFormPage.getLastName().type(lastName, { delay: 0 });
    RegisterFormPage.getCompanyName().type(companyName, { delay: 0 });
    RegisterFormPage.getStreetAddress().type(address, { delay: 0 });
    RegisterFormPage.getCountry().select(country);
    RegisterFormPage.getState().type(randomState, { delay: 0 });
    RegisterFormPage.getCity().type(randomCity, { delay: 0 });
    RegisterFormPage.getZipCode().type(randomZipCode, { delay: 0 });
    RegisterFormPage.getPhoneNumber().type(randomPhoneNumber, { delay: 0 });
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("div.col-sm-9.col-sm-offset-1>p")
      .contains(
        "Congratulations! Your new account has been successfully created!"
      )
      .should("be.visible");
    RegisterFormPage.getContinueBtn().click();
    cy.get("ul.nav.navbar-nav li:nth-child(10) a")
      .contains(` Logged in as ${fullName}`)
      .should("be.visible");
  });

  it("Log out after register test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getGenderRadioBtn().check().should("be.checked");
    RegisterFormPage.getNameField().should("have.value", confirmationFullName);
    RegisterFormPage.getEmailField().should("have.value", confirmationEmail);
    RegisterFormPage.getPasswordField().type(randomPassword, { delay: 0 });
    RegisterFormPage.getBirthDay().select(birthDay);
    RegisterFormPage.getBirthMonth().select(birthMonth, { force: true });
    RegisterFormPage.getBirthYear().select(birthYear, { force: true });
    RegisterFormPage.getNewsletterCheckbox().check().should("be.checked");
    RegisterFormPage.getOffersCheckbox().check().should("be.checked");
    RegisterFormPage.getFirstName().type(firstName, { delay: 0 });
    RegisterFormPage.getLastName().type(lastName, { delay: 0 });
    RegisterFormPage.getCompanyName().type(companyName, { delay: 0 });
    RegisterFormPage.getStreetAddress().type(address, { delay: 0 });
    RegisterFormPage.getCountry().select(country);
    RegisterFormPage.getState().type(randomState, { delay: 0 });
    RegisterFormPage.getCity().type(randomCity, { delay: 0 });
    RegisterFormPage.getZipCode().type(randomZipCode, { delay: 0 });
    RegisterFormPage.getPhoneNumber().type(randomPhoneNumber, { delay: 0 });
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("div.col-sm-9.col-sm-offset-1>p")
      .contains(
        "Congratulations! Your new account has been successfully created!"
      )
      .should("be.visible");
    RegisterFormPage.getContinueBtn().click();
    cy.get("ul.nav.navbar-nav li:nth-child(10) a")
      .contains(` Logged in as ${fullName}`)
      .should("be.visible");
      HeaderPage.getLogoutLink().click();
    cy.get("ul.nav.navbar-nav li:nth-child(4) a")
      .contains("Signup / Login")
      .should("be.visible");
  });

  it("Try to register with existing email test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(loginEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    cy.get('form[action="/signup"] p')
      .contains("Email Address already exist!")
      .should("be.visible");
  });

  it("Try to register with invalid email test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(invalidEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    cy.get("div.signup-form input[data-qa='signup-email']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Try to register with no input data inserted test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getSubmitBtn().click();
    cy.get("div.signup-form input[data-qa='signup-email']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Try to register with only name inserted in name field test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    cy.get("div.signup-form input[data-qa='signup-email']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Try to register with only email inserted in email field test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    cy.get("div.signup-form input[data-qa='signup-name']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Try to register with no password inserted in password field test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getGenderRadioBtn().check().should("be.checked");
    RegisterFormPage.getNameField().should("have.value", confirmationFullName);
    RegisterFormPage.getEmailField().should("have.value", confirmationEmail);
    RegisterFormPage.getBirthDay().select(birthDay);
    RegisterFormPage.getBirthMonth().select(birthMonth, { force: true });
    RegisterFormPage.getBirthYear().select(birthYear, { force: true });
    RegisterFormPage.getNewsletterCheckbox().check().should("be.checked");
    RegisterFormPage.getOffersCheckbox().check().should("be.checked");
    RegisterFormPage.getFirstName().type(firstName, { delay: 0 });
    RegisterFormPage.getLastName().type(lastName, { delay: 0 });
    RegisterFormPage.getCompanyName().type(companyName, { delay: 0 });
    RegisterFormPage.getStreetAddress().type(address, { delay: 0 });
    RegisterFormPage.getCountry().select(country);
    RegisterFormPage.getState().type(randomState, { delay: 0 });
    RegisterFormPage.getCity().type(randomCity, { delay: 0 });
    RegisterFormPage.getZipCode().type(randomZipCode, { delay: 0 });
    RegisterFormPage.getPhoneNumber().type(randomPhoneNumber, { delay: 0 });
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("div.required.form-group input[data-qa='password']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Try to register with no first name inserted in first name field for address section test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getGenderRadioBtn().check().should("be.checked");
    RegisterFormPage.getNameField().should("have.value", confirmationFullName);
    RegisterFormPage.getEmailField().should("have.value", confirmationEmail);
    RegisterFormPage.getPasswordField().type(randomPassword, { delay: 0 });
    RegisterFormPage.getBirthDay().select(birthDay);
    RegisterFormPage.getBirthMonth().select(birthMonth, { force: true });
    RegisterFormPage.getBirthYear().select(birthYear, { force: true });
    RegisterFormPage.getNewsletterCheckbox().check().should("be.checked");
    RegisterFormPage.getOffersCheckbox().check().should("be.checked");
    RegisterFormPage.getLastName().type(lastName, { delay: 0 });
    RegisterFormPage.getCompanyName().type(companyName, { delay: 0 });
    RegisterFormPage.getStreetAddress().type(address, { delay: 0 });
    RegisterFormPage.getCountry().select(country);
    RegisterFormPage.getState().type(randomState, { delay: 0 });
    RegisterFormPage.getCity().type(randomCity, { delay: 0 });
    RegisterFormPage.getZipCode().type(randomZipCode, { delay: 0 });
    RegisterFormPage.getPhoneNumber().type(randomPhoneNumber, { delay: 0 });
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("p.required.form-group input[data-qa='first_name']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
  it("Try to register with no last name inserted in last name field for address information section test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getGenderRadioBtn().check().should("be.checked");
    RegisterFormPage.getNameField().should("have.value", confirmationFullName);
    RegisterFormPage.getEmailField().should("have.value", confirmationEmail);
    RegisterFormPage.getPasswordField().type(randomPassword, { delay: 0 });
    RegisterFormPage.getBirthDay().select(birthDay);
    RegisterFormPage.getBirthMonth().select(birthMonth, { force: true });
    RegisterFormPage.getBirthYear().select(birthYear, { force: true });
    RegisterFormPage.getNewsletterCheckbox().check().should("be.checked");
    RegisterFormPage.getOffersCheckbox().check().should("be.checked");
    RegisterFormPage.getFirstName().type(firstName, { delay: 0 });
    RegisterFormPage.getCompanyName().type(companyName, { delay: 0 });
    RegisterFormPage.getStreetAddress().type(address, { delay: 0 });
    RegisterFormPage.getCountry().select(country);
    RegisterFormPage.getState().type(randomState, { delay: 0 });
    RegisterFormPage.getCity().type(randomCity, { delay: 0 });
    RegisterFormPage.getZipCode().type(randomZipCode, { delay: 0 });
    RegisterFormPage.getPhoneNumber().type(randomPhoneNumber, { delay: 0 });
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("p.required.form-group input[data-qa='last_name']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Try to register with no state inserted in state field in address information section test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getGenderRadioBtn().check().should("be.checked");
    RegisterFormPage.getNameField().should("have.value", confirmationFullName);
    RegisterFormPage.getEmailField().should("have.value", confirmationEmail);
    RegisterFormPage.getPasswordField().type(randomPassword, { delay: 0 });
    RegisterFormPage.getBirthDay().select(birthDay);
    RegisterFormPage.getBirthMonth().select(birthMonth, { force: true });
    RegisterFormPage.getBirthYear().select(birthYear, { force: true });
    RegisterFormPage.getNewsletterCheckbox().check().should("be.checked");
    RegisterFormPage.getOffersCheckbox().check().should("be.checked");
    RegisterFormPage.getFirstName().type(firstName, { delay: 0 });
    RegisterFormPage.getLastName().type(lastName, { delay: 0 });
    RegisterFormPage.getCompanyName().type(companyName, { delay: 0 });
    RegisterFormPage.getStreetAddress().type(address, { delay: 0 });
    RegisterFormPage.getCountry().select(country);
    RegisterFormPage.getCity().type(randomCity, { delay: 0 });
    RegisterFormPage.getZipCode().type(randomZipCode, { delay: 0 });
    RegisterFormPage.getPhoneNumber().type(randomPhoneNumber, { delay: 0 });
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("p.required.form-group input[data-qa='state']:invalid")
    .invoke("prop", "validationMessage")
    .should("exist");
  });

  it("Try to register with no city inserted in city field for address information section test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getGenderRadioBtn().check().should("be.checked");
    RegisterFormPage.getNameField().should("have.value", confirmationFullName);
    RegisterFormPage.getEmailField().should("have.value", confirmationEmail);
    RegisterFormPage.getPasswordField().type(randomPassword, { delay: 0 });
    RegisterFormPage.getBirthDay().select(birthDay);
    RegisterFormPage.getBirthMonth().select(birthMonth, { force: true });
    RegisterFormPage.getBirthYear().select(birthYear, { force: true });
    RegisterFormPage.getNewsletterCheckbox().check().should("be.checked");
    RegisterFormPage.getOffersCheckbox().check().should("be.checked");
    RegisterFormPage.getFirstName().type(firstName, { delay: 0 });
    RegisterFormPage.getLastName().type(lastName, { delay: 0 });
    RegisterFormPage.getCompanyName().type(companyName, { delay: 0 });
    RegisterFormPage.getStreetAddress().type(address, { delay: 0 });
    RegisterFormPage.getCountry().select(country);
    RegisterFormPage.getState().type(randomState, { delay: 0 });
    RegisterFormPage.getZipCode().type(randomZipCode, { delay: 0 });
    RegisterFormPage.getPhoneNumber().type(randomPhoneNumber, { delay: 0 });
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("p.required.form-group input[data-qa='city']:invalid")
    .invoke("prop", "validationMessage")
    .should("exist");
  });

  it("Try to register user with no zipcode inserted in zipcode field for addredd information section test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getGenderRadioBtn().check().should("be.checked");
    RegisterFormPage.getNameField().should("have.value", confirmationFullName);
    RegisterFormPage.getEmailField().should("have.value", confirmationEmail);
    RegisterFormPage.getPasswordField().type(randomPassword, { delay: 0 });
    RegisterFormPage.getBirthDay().select(birthDay);
    RegisterFormPage.getBirthMonth().select(birthMonth, { force: true });
    RegisterFormPage.getBirthYear().select(birthYear, { force: true });
    RegisterFormPage.getNewsletterCheckbox().check().should("be.checked");
    RegisterFormPage.getOffersCheckbox().check().should("be.checked");
    RegisterFormPage.getFirstName().type(firstName, { delay: 0 });
    RegisterFormPage.getLastName().type(lastName, { delay: 0 });
    RegisterFormPage.getCompanyName().type(companyName, { delay: 0 });
    RegisterFormPage.getStreetAddress().type(address, { delay: 0 });
    RegisterFormPage.getCountry().select(country);
    RegisterFormPage.getState().type(randomState, { delay: 0 });
    RegisterFormPage.getCity().type(randomCity, { delay: 0 });
    RegisterFormPage.getPhoneNumber().type(randomPhoneNumber, { delay: 0 });
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("p.required.form-group input[data-qa='zipcode']:invalid")
    .invoke("prop", "validationMessage")
    .should("exist");
  });

  it("Try to register with no mobile phone number inserted in mobile phone field for address information section test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getGenderRadioBtn().check().should("be.checked");
    RegisterFormPage.getNameField().should("have.value", confirmationFullName);
    RegisterFormPage.getEmailField().should("have.value", confirmationEmail);
    RegisterFormPage.getPasswordField().type(randomPassword, { delay: 0 });
    RegisterFormPage.getBirthDay().select(birthDay);
    RegisterFormPage.getBirthMonth().select(birthMonth, { force: true });
    RegisterFormPage.getBirthYear().select(birthYear, { force: true });
    RegisterFormPage.getNewsletterCheckbox().check().should("be.checked");
    RegisterFormPage.getOffersCheckbox().check().should("be.checked");
    RegisterFormPage.getFirstName().type(firstName, { delay: 0 });
    RegisterFormPage.getLastName().type(lastName, { delay: 0 });
    RegisterFormPage.getCompanyName().type(companyName, { delay: 0 });
    RegisterFormPage.getStreetAddress().type(address, { delay: 0 });
    RegisterFormPage.getCountry().select(country);
    RegisterFormPage.getState().type(randomState, { delay: 0 });
    RegisterFormPage.getCity().type(randomCity, { delay: 0 });
    RegisterFormPage.getZipCode().type(randomZipCode, { delay: 0 });
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("p.required.form-group input[data-qa='mobile_number']:invalid")
    .invoke("prop", "validationMessage")
    .should("exist");
  });

  it("Try to register with no required field filled test", () => {
    HeaderPage.getSignupLink().click();
    AuthPage.getSignupTitle().should("exist");
    AuthPage.getNameField().type(fullName, { delay: 0 });
    AuthPage.getEmailField().type(randomEmail, { delay: 0 });
    AuthPage.getSubmitBtn().click();
    RegisterFormPage.getRegisterTitle().should("exist");
    RegisterFormPage.getCreateAccountBtn().click();
    cy.get("div.required.form-group input[data-qa='password']:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
});
