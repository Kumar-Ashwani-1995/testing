describe('basic comp',()=>{
    beforeEach(()=>{
        cy.fixture('post.json').as('postJSON')
        cy.server()
        cy.route('https://jsonplaceholder.typicode.com/posts','@postJSON').as('post')
        cy.visit("/");
    })
    it("should display all post",()=>{
        // expect(true).to.equal(false)
        
        cy.contains("basic works!")
        cy.wait('@post')
        cy.get(".post-element").should("have.length",10)
    })
    it('should open task service tab',()=>{
        cy.get(".nav_url").should("have.length",2)
        cy.get(".nav_url").first().click()
        cy.get(".task").should("contain","This is task page.")
    })
    
    
})