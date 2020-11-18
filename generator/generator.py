import json
import shutil
from collections import Counter

from generator_functions import makePlayerCard, makeFilterBox

# open json file
eurosjson = open('euros.json',)

# convert file to dict
eurosDict = json.load(eurosjson)

eurosjson.close()

# sort dict alphabetically
sortedRoster = sorted(eurosDict.items())

roster = ""
filterbox = ""
countrylist = []

# for each member
for i in sortedRoster:
    # this is where all the info on somebody is
    data = i[1][0]
    roster += makePlayerCard(data['name'], data['rank'], data['country'], data['twitch'],
                             data['youtube'], data['twitter'], data['steam'], data['char1'], data['char2'], data['char3'])
    countrylist.append(data['country'])

countrylist = list(dict.fromkeys(countrylist))
countrylist.sort()

for i in countrylist:
    filterbox += makeFilterBox(i)

basefile = open('base.html', "rt")
resultfile = open("../index.html", "wt")

for line in basefile:
    if '{{roster}}' in line:
        resultfile.write(line.replace('{{roster}}', roster))
        continue
    elif '{{countryfilter}}' in line:
        resultfile.write(line.replace('{{countryfilter}}', filterbox))
        continue
    resultfile.write(line)

basefile.close()
resultfile.close()
