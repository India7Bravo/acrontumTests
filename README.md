
# Acrontum Automation Test

This project is made for Acrontum. 

What the test does, is it's able to follow the journey of a user logging in, adding a book to their collection and then deleting it at the end so when the tests need to be run again, they're able to perform the same journey without breakage.

**I would also like to say I have added a little bit of code (From line 24 onwards) in the "support/index.json" file to help avoid an error originating from the application code in order for me to proceed with the tests. - If this were a real world scenario, I would inform the developers of the error, ignore it like I did and see if there's any other errors to report on. 

# How to run the tests

* Ensure that you have NPM installed on your machine.
* Ensure that you have Cypress installed on your machine.

If you do not have them installed, please install them from https://nodejs.org/en/download/ and https://www.cypress.io/ before running the tests

* Make sure to either clone or download a copy of the code
* Open the folder in your preferred IDE
* Run: "npx cypress open" in the built in terminal to open cypress

Once Cypress is open, click the button which reads "Run 2 Integration tests".

I hope you enjoy the test :) 





