def makePlayerCard(name, rank, country, twitch, youtube, twitter, steam, char1, char2, char3):
    print(name, rank, country, twitch, youtube,
          twitter, steam, char1, char2, char3, "\n")
    rosterCard = "<article class=\""+rank+" "+country+" col\">\n"
    if not char2:
        rosterCard += "<img class=\"player-bg\" src=\"images/Roster/"+name.lower()+"_"+char1+".jpg\">\n"
    else:
        rosterCard += "<div id=\""+name.lower()+"-carousel\" class=\"carousel slide player-bg\" data-ride=\"carousel\"\
        data-interval=\"10000\">\n\
        <div class=\"carousel-inner\">\n\
        <div class=\"carousel-item active\">\n\
        <img src=\"images/Roster/"+name.lower()+"_"+char1+".jpg\">\n\
        </div>\n\
        <div class=\"carousel-item\">\n\
        <img src=\"images/Roster/"+name.lower()+"_"+char2+".jpg\">\n\
        </div>\n"
        if char3:
            rosterCard += "<div class=\"carousel-item\">\n\
            <img src=\"images/Roster/"+name.lower()+"_"+char3+".jpg\">\n\
            </div>\n"
        rosterCard += "</div>\n\
        <a class=\"carousel-control-prev\" href=\"#"+name.lower()+"-carousel\" data-slide=\"prev\">\n\
        <span class=\"carousel-control-prev-icon\"></span>\n\
        </a>\n\
        <a class=\"carousel-control-next\" href=\"#"+name.lower()+"-carousel\" data-slide=\"next\">\n\
        <span class=\"carousel-control-next-icon\"></span>\n\
        </a>\n\
        </div>"
    rosterCard += "<div class=\"roster-container\">\n\
    <h3 class=\"roster-title\">\n\
    <a target=\"_blank\" href=\"https://steamcommunity.com/"+steam+"\">\n"+name+"</a>\n\
    <img class=\"flag icon\" src=\"images/flags/"+country+".svg\">\n\
    </h3>\n\
    <ul>\n"
    if twitch:
        rosterCard += "<li>\n\
        <a target=\"_blank\" href=\"https://www.twitch.tv/"+twitch+"\">\n\
        <img src=\"images/player-card-logos/GlitchBadge_Purple_256px.png\" class=\"icon\">\n\
        </a>\n\
        </li>\n"
    else:
        rosterCard += "<li>\n\
        <img src=\"images/player-card-logos/GlitchBadge_Purple_256px.png\" class=\"hidden icon\">\n\
        </li>\n"
    if youtube:
        rosterCard += "<li>\n\
        <a target=\"_blank\" href=\"https://www.youtube.com/"+youtube+"\">\n\
        <img src=\"images/player-card-logos/youtube_social_square_red.png\" class=\"icon\">\n\
        </a>\n\
        </li>\n"
    else:
        rosterCard += "<li>\n\
        <img src=\"images/player-card-logos/youtube_social_square_red.png\" class=\"hidden icon\">\n\
        </li>\n"
    if twitter:
        rosterCard += "<li>\n\
        <a target=\"_blank\" href=\"https://twitter.com/"+twitter+"\">\n\
        <img src=\"images/player-card-logos/Twitter_Social_Icon_Square_Color.png\" class=\"icon\">\n\
        </a>\n\
        </li>\n"
    else:
        rosterCard += "<li>\n\
        <img src=\"images/player-card-logos/Twitter_Social_Icon_Square_Color.png\" class=\"hidden icon\">\n\
        </li>\n"
    rosterCard += "</ul>\n\
    </div>\n\
    </article>\n\n"
    return rosterCard
