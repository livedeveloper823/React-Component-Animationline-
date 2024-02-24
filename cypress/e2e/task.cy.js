describe('template spec', () => {
  it('Card num calculation', () => {
    cy.viewport(1333, 990)
    cy.visit('http://localhost:3000');
    cy.get('div.card').wait(2000)
  });
  it('Scroll testing (down state)', () => {
    cy.viewport(1333, 990)
    cy.visit('http://localhost:3000');
    cy.get('body')
    cy.scrollTo('bottom').wait(5000)
  });
  it('Scroll testing (up state)', () => {
    cy.viewport(1333, 990)
    cy.visit('http://localhost:3000').wait(5000)
  })
  it('Hover effect', () => {
    cy.viewport(1333, 990)
    cy.visit('http://localhost:3000');
    cy.get('#card').trigger('mouseover').wait(1000)
  })
})