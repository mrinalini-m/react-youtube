const getIframeDocument = () => {
  return (
    cy
      .get('iframe')
      // Cypress yields jQuery element, which has the real
      // DOM element under property "0".
      // From the real DOM iframe element we can get
      // the "document" element, it is stored in "contentDocument" property
      // Cypress "its" command can access deep properties using dot notation
      // https://on.cypress.io/its
      .its('0.contentDocument')
      .should('exist')
  )
}

const getIframeBody = () => {
  return getIframeDocument()
    .its('body')
    .should('not.be.undefined')
    .then(cy.wrap)
}

context('Actions', () => {
  it('searches and finds results', () => {
    cy.visit('http://localhost:3000/')
    cy.get("input[type='text']").type('mew cat goes mew{enter}')
  })

  it('renders list of videos returned from search', () => {
    const videoList = cy.get("[data-testid='video-list']")
    videoList.should('exist')
    videoList.children().should('exist')
    videoList.children().children().should('have.length', 5)
    cy.wait(1200)
  })

  it('selects and renders correct video on VideoListItem click', () => {
    const videoList = cy.get("[data-testid='video-list']")
    videoList.children().eq(1).click()
    getIframeBody()
    cy.wait(1000)
  })

  it('plays selected video on selected video play button click', () => {
    const playButton = getIframeBody().find('button[aria-label~="Play"]')
    playButton.eq(0).should('exist')
    playButton.eq(0).click()
  })
})
