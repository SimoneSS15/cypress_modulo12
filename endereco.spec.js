/// <reference types="cypress"/>

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(()=>{
        cy.visit('Minha conta') // vai acessar a página de login
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        //Cadastro de endereço
    });
});