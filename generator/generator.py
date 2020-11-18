import json
import shutil
from collections import Counter

from generator_functions import makePlayerCard

# open json file
jsonroster = open('members.json',)

# convert file to dict
rosterDB = json.load(jsonroster)

jsonroster.close()

# sort dict alphabetically 
sortedroster = sorted(rosterDB.items())

roster = ""
countrylist = []

# for each member
for i in sortedroster:
    # this is where all the info on somebody is
    data = i[1][0]
    roster += makePlayerCard(data['name'], data['rank'], data['country'], data['twitch'], data['youtube'], data['twitter'], data['steam'], data['char1'], data['char2'], data['char3'])
    countrylist.append(data['country'])

basefile = open('base.html', "rt")

resultfile = open("../index.html", "wt")

for line in basefile: 
    resultfile.write(line.replace('{{roster}}', roster))

basefile.close()
resultfile.close()