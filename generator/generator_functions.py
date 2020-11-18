def makePlayerCard(name, rank, country, twitch, youtube, twitter, steam, char1, char2, char3):
    print(name, rank, country, twitch, youtube, twitter, steam, char1, char2, char3, "\n")
    rosterCard = "<article class=\"" + rank + " " + country + " col\"> \n"
    if not char2:
        rosterCard += "<img class=\"player-bg\" src=\"images/Roster/"+name.lower()+"_"+char1+".jpg\"> \n" 
    else:
        rosterCard += "<div id=\""+name.lower()+"-carousel\" class=\"carousel slide player-bg\" data-ride=\"carousel\" \
                data-interval=\"10000\"> \
                <div class=\"carousel-inner\"> \
                <div class=\"carousel-item active\"> \
                <img src=\"images/Roster/"+name.lower()+"_"+char1+".jpg\"> \
                </div> \
                <div class=\"carousel-item\"> \
                <img src=\"images/Roster/"+name.lower()+"_"+char2+".jpg\"> \
                </div> "
        if char3: 
            rosterCard += "<div class=\"carousel-item\"> \
                    <img src=\"images/Roster/"+name.lower()+"_"+char3+".jpg\"> \
                    </div>"
        rosterCard += "</div>\
                <a class=\"carousel-control-prev\" href=\"#" + name.lower() + "-carousel\" data-slide=\"prev\"> \
                <span class=\"carousel-control-prev-icon\"></span> \
                </a> \
                <a class=\"carousel-control-next\" href=\"#" + name.lower() + "-carousel\" data-slide=\"next\"> \
                <span class=\"carousel-control-next-icon\"></span> \
                </a> \
                </div>"
    rosterCard += "<div class=\"roster-container\"> \n \
        <h3 class=\"roster-title\"> \n \
        <a target=\"_blank\" href=\"https://steamcommunity.com/" + steam + "\"> \n" \
        + name + "</a> <img class=\"flag icon\" src=\"images/flags/" + country + ".svg  \"> \n \
        </h3> \n \
        <ul> \n" 
    if twitch:
        rosterCard += "<li> \n \
        <a target=\"_blank\" href=\"https://www.twitch.tv/" + twitch + "\"> \n \
        <img src=\"images/player-card-logos/GlitchBadge_Purple_256px.png\" class=\"icon\"> \n \
        </a> \n \
        </li> \n"
    else: 
        rosterCard += "<li> \n \
        <img src=\"images/player-card-logos/GlitchBadge_Purple_256px.png\" class=\"hidden icon\"> \n \
        </li> \n" 
    if youtube:
        rosterCard +=  "<li> \n \
        <a target=\"_blank\" href=\"https://www.youtube.com/" + youtube + "\"> \n \
        <img src=\"images/player-card-logos/youtube_social_square_red.png\" class=\"icon\"> \n \
        </a> \n \
        </li> \n" 
    else: 
        rosterCard +=  "<li> \n \
        <img src=\"images/player-card-logos/youtube_social_square_red.png\" class=\"hidden icon\"> \n \
        </li> \n" 
    if twitter:
        rosterCard += "<li> \n \
        <a target=\"_blank\" href=\"https://twitter.com/" + twitter + "\">\n \
        <img src=\"images/player-card-logos/Twitter_Social_Icon_Square_Color.png\" class=\"icon\"> \n \
        </a> \n \
        </li> \n" 
    else:
        rosterCard += "<li> \n \
        <img src=\"images/player-card-logos/Twitter_Social_Icon_Square_Color.png\" class=\"hidden icon\"> \n \
        </li> \n" 
    rosterCard += "</ul> \n \
        </div> \n \
        </article> \n \n \n \n"
    return rosterCard