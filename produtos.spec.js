/// <reference types="cypress"/>


describe('Funcionalidade página de produtos', () => {
    beforeEach(()=>{
        cy.visit('produtos')
    });

    it('Deve selecionar um peoduto da lista', ()=>{
        cy.get('[class="product-block grid"]')
        //.first() //seleciona o primeiro produto
        //.last() // seleciona o segundo
       // .eq(2) // seleciona o terceiro produto
      .contains('Abominable Hoodie')
      .click()
    });
    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()// produto
            cy.get('.button-variable-item-M').click()// tamanho
            cy.get('.button-variable-item-Green').click()// cor
            cy.get('.input-text').clear().type(quantidade)// quantidade
            cy.get('.single_add_to_cart_button').click()// botão adicionar

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)// validação do carrinho
            cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho')// outra validação do carrinho
    });

    it('Deve adicionar produtos usando comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', '2')
    });

    it('Deve adicionar produtos usando comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'L', 'Blue', '2')
    });
});


