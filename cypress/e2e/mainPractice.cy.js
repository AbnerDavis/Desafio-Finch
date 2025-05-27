/// <reference types="cypress" />

describe("Autenticação", () => {
  beforeEach(() => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get("#header_logo").should("be.visible");
  });

  it("deve criar uma nova conta", () => {
    cy.accountCreate();
  });

  it("deve exibir erro ao tentar logar com e-mail vazio", () => {
    cy.emailEmpty();
  });

  it("deve exibir erro ao tentar logar com senha vazia", () => {
    cy.passwordEmpty();
  });

  it("deve realizar login com sucesso", () => {
    cy.loginUser();
  });
});

describe("Endereço", () => {
  beforeEach(() => {
    cy.loginUser();
  });

  it("deve criar o primeiro endereço", () => {
    cy.get("body").then(($body) => {
      if ($body.find('a[title="Add my first address"]').length > 0) {
        cy.get('a[title="Add my first address"]').click();
        cy.createAddress();
        cy.log("*** Criar primeiro endereço concluído com sucesso ***");
      } else {
        cy.get(".myaccount-link-list > :nth-child(3) > a > span").should(
          "be.visible"
        );
        cy.log(
          "*** Não foi possível encontrar o link para adicionar o primeiro endereço ***",
          " ***. Você já tem um endereço cadastrado ***"
        );
      }
    });
  });

  it("deve editar endereço durante processo de compra", () => {
    cy.url().then((url) => {
      if (!url.endsWith("/index.php")) {
        cy.visit("http://www.automationpractice.pl/index.php");
      }
    });
    cy.contains("a", "Women").click();
    cy.contains("a.product-name", "Blouse").click();
    cy.get("#color_8").click();
    cy.get("#add_to_cart").should("be.visible").click();
    cy.get('span[title="Continue shopping"]').click();
    cy.get(".shopping_cart a").should("contain", "1");

    cy.contains("a", "Women").click();
    cy.contains("a.product-name", "Printed Summer Dress").click();
    cy.get("#color_11").click();
    cy.get("#add_to_cart").should("be.visible").click();
    cy.get('a[title="Proceed to checkout"]').click();

    cy.get("a.button.btn.btn-default.standard-checkout").click();

    cy.get('#address_delivery a[title="Update"]').should("be.visible").click();

    cy.createAddress();

    cy.contains("button", "Proceed to checkout").click();
    cy.get("#cgv").check();
    cy.contains("button", "Proceed to checkout").click();

    cy.get(".cheque").click();

    cy.contains("button", "I confirm my order").click();
    cy.get(".alert").should("be.visible");
  });

  it("remover endereço cadastrado", () => {
    cy.get("body").then(($body) => {
      const addFirstAddressLink = $body.find('a[title="Add my first address"]');
      if (addFirstAddressLink.length && addFirstAddressLink.is(":visible")) {
        cy.log(
          "*** Você não tem endereço cadastrado ***",
          "*** Adicione um endereço ***"
        );
      } else {
        cy.log(
          "Você tem endereço para excluir !!!",
          "*** Excluindo endereço ***"
        );
        cy.get('a[title="My addresses"]').click();
        cy.get(".last_item").should("be.visible");
        cy.contains("span", "Delete").click();
        cy.get(".alert").should("be.visible");
      }
    });
  });
});

describe("upload", () => {
  beforeEach(() => {
    cy.loginUser();
  });
  it("deve realizar upload de arquivo", () => {
    cy.uploadFile();
  });
});
