const { onAddComputerPage } = require("../support/page_objects/addComputerPage")
const { onEditComputerPage } = require("../support/page_objects/editComputerPage")
const { onSearchComputerPage } = require("../support/page_objects/searchComputerPage")

describe('suite of test cases', () => {
    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('Create a negative test case to ensure a failure validation displays', () => {
        onSearchComputerPage.searchComputer('Commodore 64')
        onSearchComputerPage.enterToComputer('Commodore 64')
        onEditComputerPage.editNameComputerWithEmptyValue()
        onEditComputerPage.errorMessageInvalidValue('Failed to refine type : Predicate isEmpty() did not fail.')
    })

    it('Create a positive test case to ensure that valid data is updated successfully.', () => {
        const computerName = 'Commodore 64'
        const computerNameUpdated = 'Commodore 64' + ' editer'

        onSearchComputerPage.searchComputer(computerName)
        onSearchComputerPage.enterToComputer(computerName)
        onEditComputerPage.editComputerName(computerNameUpdated)
        onSearchComputerPage.successEditComputerMessage(computerNameUpdated)
    })


    it('Filter computer list by “HP” and create a map of the returned data', () => {
        onSearchComputerPage.searchComputer('HP')
        onSearchComputerPage.createMap()
    })

    it('Filter computer list by IBM and return a list of computer names on the LAST page of the results, Print the list of computer names.', () => {
        onSearchComputerPage.searchComputer('IBM')
        onSearchComputerPage.goToLastFilteredPage()
        onSearchComputerPage.findNameComputersInTable()
    })

    // This test scenario will fail, since creating computer is not working, no new computers are created, and when searching that computer, then it throws an error message, and there is no table found, so we should create a bug report for creation functionality
    it('Click the Add a new computer button, enter some data into the various text fields, select Evans & Sutherland from the company dropdown and complete the creation. Verify that thecomputer was created successfully', () => {
        onSearchComputerPage.clickAddNewComputerButton()
        onAddComputerPage.fillComputerName('bruno')
        onAddComputerPage.fillIntroduced('2022-12-12')
        onAddComputerPage.fillDiscontinued('2023-12-12')
        onAddComputerPage.selectCompany('Evans & Sutherland')
        onAddComputerPage.clickCreateThisComputer()
        onSearchComputerPage.successCreateComputerMessage('bruno')
        onSearchComputerPage.searchComputer('bruno')
        onSearchComputerPage.findComputerCreated()
    })
})

/*Create regression testing plan to be enacted upon new builds of this system. Describe what would be
tested, how the plan would be maintained, and how it would be integrated with the deployment
pipeline.
Provide examples of how the QA team and the suite of regression tests produced by the enactment of
this plan fit into the overarching SDLC.

1. The regression testing plan should define:
- on Which OS we will execute
- On Which Browsers
- What time with automation test cases will be executed(generaly automation regression is executed 2 or 1 day previeous the release on regression environment)
2. Once this was defined, then the regression plan should execute:
- Execute egression cycles through manual verification, do not veriry test cases that are covered by automation regression
- Execute automation regression, run all test cases that have been executed (update code if there were changes in old functionality, or locators were changed)
3. Once execution manually and automation were done:
- Then report regression issues found in Jira
- Make sure to inform Scrum master, developers and people interested in the product.
- Track fixes and make sure regression issues were fixed
- Proceed to validated fixes
- Run again Regression execution.
4. Once release has been done, proceed to update automation framework (adding new automated test cases, update code for changes on features, update locators) with continues integration and continues deployment.
5. In SDLC qa team can participate in all phases:
- In Requirements & Analysis, qa's can get information about the new features or changes, so they can advance work and create test cases acording info.
- In Project Planning, qa team can decide which environments, platforms, browsers, devices we will execute test cases
- in Design, we can define the test stratefy, what kind of testing we will perform (positive, negative, corner cases, boundaries, api, performace), and make a proper testing plan.
- In Coding & Implementation we can update the test cases that we advanced, get more solid info from PM's, developers, etc.
- In Testing, we will execute the test cases written, validate stories, bugs, defects in proper testing environments (test, stage, production), executing both manual and automation work.
- in Deployment, we will make sure the features are working properly performing functional testing, E2E testing, Regression testing, Smoke after deployment.
- Maintenance, we need to update automation framework with new test scenarios, update code, locators. Also update test cases and add new ones in test cases management tool (Zephyr, Xray, etc), attend scrum meetings and define which test cases will be automated.
- Repeate this for new features and updates */
