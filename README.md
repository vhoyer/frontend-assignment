# Intricately Front-End Challenge

> **Note from author :D**
>
> I spend about 29 hours and a half to complete this challenge. I will not try to hide, I went crazy on it, if you read the requirements you will see I kinda did a lot more than needed, but I just couldn't help myself. I took the opportunity of the test to practice those new things I was learning about design systems and I think I did the best I could in there.
> 
> That said, after the 24th hour I got a little tired of doing this test so I kinda rushed into doing the tests requirements, but I think in the end I managed to keep the quality of the code high enough it would survive a code review session :D. Hope you like my code and maybe draw some inspiration from it.

Requirements and design mocks are available [here](https://docs.google.com/document/d/1B3ofnK0Nc2Dawtpj1fLky9ekzqjjri_EjDXQv8Nmpiw/edit#heading=h.rmoqo627p0vn). But a here is a summary:
## Project Specifications
Your challenge is to build an application with the following designs:

### Menu 1 - Company Data

- Company Name field must be validated by the presence of its value.
- Company Spend field accepts only positive numbers and formats the provided number into currency when blurred out of.
- Company Spend Ability accepts two inputs, the first one is the Minimum spend and the second is Maximum spend. It validates based on the relation between the two inputs, minimum spend shouldn’t be larger than maximum spend.
- Additional Notes should show a modal with textarea input when the user clicks on the Additional Notes textarea input. Text entered in the modal should appear in the Additional Notes section.

### Menu 2 - Company Page
- No additional requirements here!

## Rules and Requirements
- You must use Vue.js :)
- The styling has to be custom made, no CSS libraries allowed.
- Build on top of this boilerplate.
- Usage of other CSS accents is allowed. SCSS is preferred and provided as a default, but feel free to use whichever suits you best. Tune the build system as needed to allow for it.
- Your project should be versioned with Git and published in a public repository.
- Utilize Vuex for data management.
- Please build the UI using the design without detailed technical specs.
- We value your time, so you don’t need to spend more than 4 hours on this assignment - we just want to have an idea of how you do things. You can replace the unfinished components with placeholders (for example a block with just a background).
- The minimum requirements for the assignment are:
  - It has all components created, even if they are just empty placeholder blocks.
  - It has the page layout in place with those empty components with background colors.
  - We can switch pages with the main left-hand menu.
  - Company Spend and Company Spend Ability must be validated.
  - The Additional Notes modal must be implemented.
  - You should have at least one component automated unit test, and another for a Vuex data store.
  - For the UI, try to focus on the page body, the navbar and footer can be replaced with an empty block.

## Prerequisites

[Node](https://nodejs.org/en/) 8.4.0 and [npm](https://www.npmjs.com/get-npm) 5.4.1

All commands described in this document should be executed from the project's root directory.

## Getting Started

Clone the repo, install all project's dependencies with `npm install`, and run `npm start`. When it's done building, the app is accessible from `localhost:8080`.
