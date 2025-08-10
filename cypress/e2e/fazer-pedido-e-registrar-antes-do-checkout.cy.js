/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";
import HeaderPage from "../pages/HeaderPage";
import AllProductsPage from "../pages/AllProductsPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";
import RegisterFormPage from "../pages/RegisterFormPage";
import CheckoutPage from "../pages/CheckoutPage";
import PaymentPage from "../pages/PaymentPage";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const fullName = firstName + " " + lastName;
const confirmationFullName = fullName;
const randomEmail = faker.internet.email();
const confirmationEmail = randomEmail;
const randomPassword = faker.internet.password();
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
const fullAddress =
  randomCity + " " + randomState + "\n\t\t\t\t\t\t\t\t" + randomZipCode;
const priceFirstItem = 500;
const priceSecondItem = 400;
const totalPrice = priceFirstItem + priceSecondItem;
const additionalComment = faker.lorem.sentence({ min: 10, max: 20 });
const cardNumber = faker.finance.creditCardNumber();
const cardCVC = faker.finance.creditCardCVV();
const randomMonthNumber = Math.floor(Math.random() * 12) + 1;
const randomYearNumber = faker.helpers.rangeToNumber({
  min: new Date().getFullYear(),
  max: 2030,
});

describe("Place order and register before checkout test suite", () => {
  it("Place order and register before checkout test", () => {
    HeaderPage.getSignupLink().click();
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
    HeaderPage.getProductsLink().click();
    AllProductsPage.getAddFirstProduct().click();
    AllProductsPage.getContinueShoppingBtn().click();
    AllProductsPage.getAddSecondProduct().click();
    AllProductsPage.getViewCartBtn().click();
    cy.get("tr.cart_menu td").should(($tds) => {
      expect($tds).to.have.length(6);
      expect($tds[0]).to.have.text("Item");
      expect($tds[1]).to.have.text("Description");
      expect($tds[2]).to.have.text("Price");
      expect($tds[3]).to.have.text("Quantity");
      expect($tds[4]).to.have.text("Total");
      expect($tds[5]).to.have.text("");
    });
    cy.get('a[href="/product_details/1"]').contains("Blue Top").should("exist");
    cy.get('a[href="/product_details/2"]')
      .contains("Men Tshirt")
      .should("exist");
    cy.get('tr[id="product-1"] td.cart_price p')
      .contains(`Rs. ${priceFirstItem}`)
      .should("be.visible");
    cy.get('tr[id="product-2"] td.cart_price p')
      .contains(`Rs. ${priceSecondItem}`)
      .should("be.visible");
    cy.get('tr[id="product-1"] button.disabled')
      .contains("1")
      .should("be.visible");
    cy.get('tr[id="product-2"] button.disabled')
      .contains("1")
      .should("be.visible");
    cy.get('tr[id="product-1"] td.cart_total p')
      .contains(`Rs. ${priceFirstItem}`)
      .should("be.visible");
    cy.get('tr[id="product-2"] td.cart_total p')
      .contains(`Rs. ${priceSecondItem}`)
      .should("be.visible");
    CartPage.getProceedToCheckoutBtn().click();
    cy.get("div.step-one h2.heading")
      .contains("Address Details")
      .should("exist");
    cy.get("ul.address.item.box li").should(($lis) => {
      expect($lis).to.have.length(8);
      expect($lis[0]).to.have.attr("class", "address_title");
      expect($lis[1]).to.have.text(`Mrs. ${fullName}`);
      expect($lis[2]).to.have.text(companyName);
      expect($lis[3]).to.have.text(address);
      expect($lis[4]).to.have.text("");
      expect($lis[5]).to.have.text(fullAddress);
      expect($lis[6]).to.have.text(country);
      expect($lis[7]).to.have.text(randomPhoneNumber);
    });
    cy.get("ul.address.alternate_item.box li").should(($lis) => {
      expect($lis).to.have.length(8);
      expect($lis[0]).to.have.attr("class", "address_title");
      expect($lis[1]).to.have.text(`Mrs. ${fullName}`);
      expect($lis[2]).to.have.text(companyName);
      expect($lis[3]).to.have.text(address);
      expect($lis[4]).to.have.text("");
      expect($lis[5]).to.have.text(fullAddress);
      expect($lis[6]).to.have.text(country);
      expect($lis[7]).to.have.text(randomPhoneNumber);
    });
    cy.get("div.step-one h2.heading")
      .contains("Review Your Order")
      .should("exist");
    cy.get('a[href="/product_details/1"]').contains("Blue Top").should("exist");
    cy.get('a[href="/product_details/2"]')
      .contains("Men Tshirt")
      .should("exist");
    cy.get('tr[id="product-1"] td.cart_price p')
      .contains(`Rs. ${priceFirstItem}`)
      .should("be.visible");
    cy.get('tr[id="product-2"] td.cart_price p')
      .contains(`Rs. ${priceSecondItem}`)
      .should("be.visible");
    cy.get('tr[id="product-1"] button.disabled')
      .contains("1")
      .should("be.visible");
    cy.get('tr[id="product-2"] button.disabled')
      .contains("1")
      .should("be.visible");
    cy.get('tr[id="product-1"] td.cart_total p')
      .contains(`Rs. ${priceFirstItem}`)
      .should("be.visible");
    cy.get('tr[id="product-2"] td.cart_total p')
      .contains(`Rs. ${priceSecondItem}`)
      .should("be.visible");
    cy.get('td[colspan="2"] h4')
      .children("b")
      .should("have.text", "Total Amount");
    cy.get("td p.cart_total_price")
      .contains(`Rs. ${totalPrice}`)
      .should("be.visible");
    CheckoutPage.getMessageField().type(additionalComment, { delay: 0 });
    CheckoutPage.getPlaceOrderBtn().click();
    PaymentPage.getNameField().type(fullName, { delay: 0 });
    PaymentPage.getCardNumberField().type(cardNumber, { delay: 0 });
    PaymentPage.getCardCVC().type(cardCVC, { delay: 0 });
    PaymentPage.getExpirationMonth().type(randomMonthNumber, { delay: 0 });
    PaymentPage.getExpirationYear().type(randomYearNumber, { delay: 0 });
    PaymentPage.getConfirmOrderBtn().click();
    cy.on("window:confirm", (t) => {
      expect(t).to.equal(" Your order has been placed successfully! ");
    });
    cy.get("div.col-sm-9.col-sm-offset-1 p")
      .contains("Congratulations! Your order has been confirmed!")
      .should("exist");
    HeaderPage.getDeleteAccount().click();
    cy.get("div.col-sm-9.col-sm-offset-1 p:nth-child(2)")
      .contains("Your account has been permanently deleted!")
      .should("be.visible");
  });
});
