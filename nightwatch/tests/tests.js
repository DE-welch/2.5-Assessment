const selectors = require('../test_data/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },

    'Odds and Evens': browser => {

        //precondition
        browser
            //Steps
            //1) Enter numerical entry
            .setValue(selectors.evenOddBox.inputLine, '1,2,3,4,5')
            //2) Click Split button
            .click(selectors.evenOddBox.splitButton)
            //3) Verify results
            .expect.element(selectors.evenOddBox.evensResults).text.to.contain('2,4')
        browser
            .expect.element(selectors.evenOddBox.oddsResults).text.to.contain('1,3,5')
    },
    
    'Filtered Object': browser => {
        browser
            .setValue(selectors.filterObjectBox.inputLine, 'title')
            .click(selectors.filterObjectBox.filterButton)
            .expect.element(selectors.filterObjectBox.resultsBox).text.to.contain('Jimmy')
    },
    
    'Filter String' : browser => {
        browser
            .setValue('input[id="nameFilterInput"]', 'M')
            .click('button[id="nameFilterButton"]')
            .expect.element('span[name="nameFilterResults"]').text.to.equal('Filtered Names: [ "Melody", "Mark", "Maddy" ]')
},

    'Palindrome' : browser => {
        browser
            .setValue('input[name="palindromeInput"]', 'tat')
            .click('button[name="palindromeButton"]')
            .expect.element('span[name="palindromeResults"]').text.to.equal('Palindrome: true')
    },  
    
    'Sum' : browser => {
        browser
            .setValue('input[name="sumInput1"]', '3')
            .setValue('input[name="sumInput2"]', '5')
            .click('button[name="sumButton"]')
            .expect.element('span[name="sumResults"]').text.to.equal('Sum: 8')
    },           



}