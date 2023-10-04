const { describe, beforeEach } = require("mocha");

describe ('Vis-a-dream tests', ()=>{

  beforeEach(()=>
      cy.visit("https://www.vis-a-dream.com/")
     )


  it('Verify page title and url for Vis-A-Dream.com page', ()=>
      {                           
        
        cy.title().should('eq','Vis-A-Dream')
        cy.url().should('eq','https://www.vis-a-dream.com/')
      }
    )

   it('Quote Functionality Test', ()=>
      {         
        
        cy.get("#name-yui_3_17_2_1_1690829999013_1874-fname-field").type("Alexandr")
        cy.get("#name-yui_3_17_2_1_1690829999013_1874-lname-field").type("Khorsov")
        cy.get("#email-yui_3_17_2_1_1690829999013_1875-field").type("hhorsorrdsfrvv@gmail.com")
        cy.get(".XxADG6E7bVECCxE_Md1x").click()
        cy.get('#phone-d05c2b18-36ad-445b-81b0-cd4b6e7863d1-country-code-field').select('United States')
        .should('have.value','US')
        cy.get("#phone-d05c2b18-36ad-445b-81b0-cd4b6e7863d1-input-field").type("3055555555")
        cy.get("#text-cfbd9d6a-a2c8-4cc4-afe4-522f32726fee-field").type("Sabohomi")
        cy.get("#website-79f80f32-e84c-4cd5-b008-d6474e6b6824-field").type("sabohomi.com")
        cy.get('#select-fc539ebf-f108-4ea9-906b-96c05a86aacc-field')
        .select('Wedding').should('have.value','Wedding')
        cy.get('#select-7eb3a045-1b69-480c-aebe-b650ce83114c-field')
        .select('100-200').should('have.value','100-200')
        cy.get('#select-a7a8c6f2-1332-4b88-b648-65c7e0a8cc31-field')
        .select('3').should('have.value','3')
        cy.get('#select-e35b08aa-6b04-48b3-adac-43de93954884-field')
        .select('7-10 days').should('have.value','7-10 days')
        cy.get(".VUeniVVUBa9klnBUReyU").should('have.length',10)
        cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(0).click()
        cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(2).click()
        cy.get('#select-1db1fb7e-39eb-4a44-a443-89193176f355-field')
        .select('1').should('have.value','1')  
        cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(4).click()
        cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(6).click()
        cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(8).click()
        cy.get("#textarea-b95b1354-29f2-4f24-b241-e3a147a8315b-field").type("Hello")
        cy.get('input[value="Send"]').click()
      }
    )
      

  it('Website info should be required Test', ()=>
  {         
    cy.visit("https://www.vis-a-dream.com/")
    cy.get("#name-yui_3_17_2_1_1690829999013_1874-fname-field").type("Alexandr")
    cy.get("#name-yui_3_17_2_1_1690829999013_1874-lname-field").type("Khorsov")
    cy.get("#email-yui_3_17_2_1_1690829999013_1875-field").type("Testtest@gmail.com")
    cy.get(".XxADG6E7bVECCxE_Md1x").click()
    cy.get('#phone-d05c2b18-36ad-445b-81b0-cd4b6e7863d1-country-code-field').select('United States')
    .should('have.value','US')
    cy.get("#phone-d05c2b18-36ad-445b-81b0-cd4b6e7863d1-input-field").type("3055555555")
    cy.get("#text-cfbd9d6a-a2c8-4cc4-afe4-522f32726fee-field").type("Sabohomi")
    cy.get('#select-fc539ebf-f108-4ea9-906b-96c05a86aacc-field')
    .select('Wedding').should('have.value','Wedding')
    cy.get('#select-7eb3a045-1b69-480c-aebe-b650ce83114c-field')
    .select('100-200').should('have.value','100-200')
    cy.get('#select-a7a8c6f2-1332-4b88-b648-65c7e0a8cc31-field')
    .select('3').should('have.value','3')
    cy.get('#select-e35b08aa-6b04-48b3-adac-43de93954884-field')
    .select('7-10 days').should('have.value','7-10 days')
    cy.get(".VUeniVVUBa9klnBUReyU").should('have.length',10)
    cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(0).click()
    cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(2).click()
    cy.get('#select-1db1fb7e-39eb-4a44-a443-89193176f355-field')
    .select('1').should('have.value','1')  
    cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(4).click()
    cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(6).click()
    cy.get(".VUeniVVUBa9klnBUReyU").should('contain.text',"Private Property").eq(8).click()
    cy.get("#textarea-b95b1354-29f2-4f24-b241-e3a147a8315b-field").type("Hello")
    cy.get('input[value="Send"]').click()
    cy.get('input[value="Send"]').click()
    cy.get(".mkTKK6Se1WSWC0Psa20C").should('contain.text',"Website is required.").should('be.visible')
  }
)

 
})  