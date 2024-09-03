describe('Table Tests', () => {
    // This will run before each test case
    beforeEach(() => {
        // Visit the page where the table is located
        cy.visit('/'); // Replace with your actual page URL or route
    });

    it('should have 5 table rows', () => {
        // Wait for the table rows to appear before asserting
        cy.get('table tr', { timeout: 10000 }).should('have.length', 6); // 5 rows + 1 header row = 6 total
    });

    it('should have correct styles on td and th elements', () => {
        // Wait for td and th elements to appear before asserting
        cy.get('td, th', { timeout: 10000 })
            .should('have.css', 'border-radius', '5px')
            .and('have.css', 'padding', '8px')
            .and('have.css', 'border', '1px solid rgb(0, 0, 0)');

        cy.get('tr:nth-child(odd) td').should('have.css', 'background-color', 'rgb(242, 242, 242)');
        cy.get('tr:nth-child(even) td').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });

    it('should contain correct table headers', () => {
        // Wait for the th elements to appear before asserting
        cy.get('th', { timeout: 10000 }).first().should('contain', 'Table-Header 1');
        cy.get('th', { timeout: 10000 }).last().should('contain', 'Table-Header 2');
    });
});
