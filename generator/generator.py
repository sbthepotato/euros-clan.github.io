import json
import shutil
from collections import Counter

from generator_functions import *

# open json file
eurosjson = open('euros.json',)

# convert file to dict
eurosDict = json.load(eurosjson)

eurosjson.close()

# sort dict alphabetically
sortedRoster = sorted(eurosDict.items())

# define function results for later use
roster = ""
filterbox = ""
countrylist = []

# for each member
for i in sortedRoster:
    # this is where all the info on somebody is
    data = i[1][0]
    # make roster cards
    roster += makePlayerCard(data['name'], data['rank'], data['country'], data['twitch'],
                             data['youtube'], data['twitter'], data['steam'])
    # add country of current player to list of all countries
    countrylist.append(data['country'])

# sorty countrylist alphabetically & by number of occurence'
countrylist.sort()
countrylist.sort(key=Counter(countrylist).get, reverse=True)
# remove duplicate entries in country list & put in a new list
countrylistS = list(dict.fromkeys(countrylist))

# make the html checkboxes
filterbox += makeHTMLcheckboxes(countrylistS, countrylist)

# open the template file and the result file
baseHTML = open('base.html', "rt")
resultHTML = open("../index.html", "wt")

# goes through each line in the basefile and writes it to the resultfile,
# if <line> countains keyword we insert what was generated
for line in baseHTML:
    if '{{roster}}' in line:
        resultHTML.write(line.replace('{{roster}}', roster))
        continue
    elif '{{countryfilter}}' in line:
        resultHTML.write(line.replace('{{countryfilter}}', filterbox))
        continue
    resultHTML.write(line)

baseHTML.close()
resultHTML.close()


# all the js
checkboxVars = makeCheckboxVars(countrylistS)
playerClassVars = makePlayerClassVars(countrylistS)
allNoneChecked = makeAllNoneCheck(countrylistS)
jsCheckboxes = makeJScheckboxes(countrylistS)

baseJS = open('base.js', "rt")
resultJS = open("../script.js", "wt")

for line in baseJS:
    if '//{{checkox variables}}' in line:
        resultJS.write(line.replace('//{{checkox variables}}', checkboxVars))
        continue
    elif '//{{player class variables}}' in line:
        resultJS.write(line.replace(
            '//{{player class variables}}', playerClassVars))
        continue
    elif '//{{AllNoneChecked}}' in line:
        resultJS.write(line.replace('//{{AllNoneChecked}}', allNoneChecked))
        continue
    elif '//{{JScheckboxes}}' in line:
        resultJS.write(line.replace('//{{JScheckboxes}}', jsCheckboxes))
        continue
    resultJS.write(line)

baseJS.close()
resultJS.close()
