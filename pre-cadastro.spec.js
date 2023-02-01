/// <reference types="cypress"/>
//var faker = require('faker'); // adicionando o faker que foi instalado
//var faker =  require('@faker-js/faker')
var faker = require('faker-br');

describe('Funcionalidade Pré cadastro', () => {//descrição da funcionalidade
   beforeEach(() =>{
    cy.visit('minha-conta')
   });
   
    it('Deve completar o pré cadastro com sucesso', () => { // cenário
        let emailFaker = faker.internet.email()// variávéis
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()


        cy.get('#reg_email').type(emailFaker)// cria um e-mail fake
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()// link detalhes da compra
        cy.get('#account_first_name').type(nomeFaker)// gera um nome
        cy.get('#account_last_name').type(sobrenomeFaker)// gera um sobre nome
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')// teste que comprova a modificação dos dados
    });
     
    it.only('Deve efetuar o pre cadastro com comandos customizados', () => {
        let emailFaker2 = faker.internet.email()// variavél que gera um e-mail novo
        cy.precadastro(emailFaker2, 'senha!@#forte', 'Simone', 'Santos')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')// teste que comprova a modificação dos dados
    });

});