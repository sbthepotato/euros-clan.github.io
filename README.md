# Euros website

This is the code for the website of euros, a destiny clan.

`generator/` contains the functions to generate the card layout on the site. To run the generator you simply go into its directory and do `python generator.py`. If the directory structure hasn't been modified it will create the player cards it should.

## Generator logic

The generator checks the `euros.json` file for a list of all members in the clan. Each member has a name which will contain the correct casing, their rank, country, twitch, youtube, twitter and steam url.

For each member the generator will check the images directory if it can find an image for that members characters.

- If it finds one it will create the HTML code for a single image.
- If it finds multiple images it will create a carousel with random order for the images.
- If no image is found it will randomly select one of the placeholder images.

After each player card is made the generator will also find all the unique countries and count how many members belonging to each country there is in the clan. This is for the country filter boxes to display the correct countries and number of members next to it.

The country identification information is then used to create the Javascript for the filter boxes to actually work.

All of the created HTML and Javascript is inserted in template files based on finding a specific section of the files.

More detail can be found in comments in the files. The `generator.py` file contains the working part of the code while `generator_functions.py` contains the functions used.
