We want to create a website that will allow someone to create an avatar and select an ability/element.

We need a way to keep track of all of these benders and abilities. We have several different abilities and each ability can be harnessed by more than one bender. However, each bender can only have one power.


Tasks:
1. Create index endpoints for Benders and seed it with at least 3 Benders ##DONE
    1. Benders have a name and favorite snack ##DONE
 2. Create a webpage that lists all of the  names ##DONE
3. Create a Show endpoint for each Bender ##DONE
4. Create a webpage that uses a query string to retrieve and display a single Bender. Their show page should include their name and favorite snack ##DONE
5. Link each Bender’s show page from their name on the index page ##DONE
6. Create API endpoints for Benders and their Bending Art. Remember: a bender can only have one bending art but each bending art can be practiced by multiple benders.
7. Create an index endpoint for Bending Arts and seed it with at least 3 Bending Art forms: Air, Water, Fire, Earth
8. Create a webpage that reads out an ID of the query string and uses it to retrieve and display a Bending Art’s name and description. 
9. Create a relationship between Benders and Bending Arts:
    1. Make sure the Bender’s show and index actions include their Bending Art data
    2. The individual Bender page displays the name of their ability
    3. The name of the ability on the individual Bender page links to that power page
10. You should be able to create a new Bender with:
    1. Name
    2. Favorite Snack
    3. One of the existing Bending Arts ## EXTRA - we did not cover this on Saturday

##STRETCH
11. Add a search filter to the page that narrows the list of Benders to those who have the Bending Art selected by the user. Can add to links so when the user clicks on the name of the power, the Bending Art show page shows the Benders with that Bending Art.
