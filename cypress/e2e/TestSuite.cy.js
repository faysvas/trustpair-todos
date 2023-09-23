describe('Tests', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#login').should('be.visible');
    cy.wait(5000);
    cy.get('#login').click({ force: true });

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email').type('test@test.com');
    cy.get('#password').type('test1234');
    cy.get('#login-button').click();
    cy.get('#user-email').contains('test@test.com');
  });

  after(async () => {
    await cy.get('#logout').should('be.visible');
    //  cy.wait(2000)
    await cy.get('#logout').click({ force: true });

    await cy.get('#logout').should('not.exist');
  });

  it('Should add one todo', async () => {
    cy.visit('http://localhost:3000/');
    await cy.get('#user-email').contains('test@test.com');

    await cy.get('.add-todo > .flex').type('Todo 1');
    await cy.get('#add-todo').click();
    cy.wait(5000);
    await cy.get('.todo-title').contains('Todo 1');
    await cy.get('.todo-assignee').contains('Assigned to');
  });

  it('Should complete todo', async () => {
    cy.visit('http://localhost:3000/');
    cy.wait(5000);
    await cy.get('#toggle-todo').click();
    await cy.get('.todo-title.line-through').should('be.visible');
  });

  it('Should delete todo', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(5000);
    cy.get('#delete-todo-button').click();
    cy.get('.todo-title.line-through').should('be.visible');
    cy.get('.todo-title').should('not.exist');
  });
});
