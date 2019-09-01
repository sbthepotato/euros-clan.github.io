$(document).ready(function () {

    // keeps the background of the parent of the dropdown red when the dropdown exists
    var roster_drop_button = $("[id='roster-drop-container']");
    var roster_drop_menu = $("[id='roster-drop-menu']");

    roster_drop_menu.hover(function () {
        roster_drop_button.css({ 'background-color': '#dd2222' });
        roster_drop_button.css({ 'border-radius': '7px 7px 0 0' });
    }, function () {
        roster_drop_button.css({ 'background-color': 'transparent' });
        roster_drop_button.css({ 'border-radius': '7px' });
    });


    // reloads the page when you click on "euros"
    // I think its fucking stupid but Wami likes it for some reason
    var euros_text = $("[id='euros-header-text']");

    $(euros_text).click(function () {
        location.reload();
    });



    // show hide button
    var show_hide_filter = $("span[id='show-hide-filter']");
    var show_hide_boss = $("span[id='show-hide-boss']");
    var show_hide_manager = $("span[id='show-hide-manager']");
    var show_hide_member = $("span[id='show-hide-member']");

    // filter box
    var filter_box = $("form[id='filter']");
    var founder_roster = $("div[id='founder-roster']");
    var manager_roster = $("div[id='manager-roster']");
    var member_roster = $("div[id='member-roster']");

    show_hide_filter.click(function () {
        if (show_hide_filter.text() == "˅") {
            show_hide_filter.text("˄");
            filter_box.slideDown();
        } else {
            show_hide_filter.text('˅');
            filter_box.slideUp();
        }
    });

    show_hide_boss.click(function () {
        if (show_hide_boss.text() == "˅") {
            show_hide_boss.text("˄");
            founder_roster.slideDown();
        } else {
            show_hide_boss.text('˅');
            founder_roster.slideUp();
        }
    });

    show_hide_manager.click(function () {
        if (show_hide_manager.text() == "˅") {
            show_hide_manager.text("˄");
            manager_roster.slideDown();
        } else {
            show_hide_manager.text('˅');
            manager_roster.slideUp();
        }
    });

    show_hide_member.click(function () {
        if (show_hide_member.text() == "˅") {
            show_hide_member.text("˄");
            member_roster.slideDown();
        } else {
            show_hide_member.text('˅');
            member_roster.slideUp();
        }
    });



    // check box variables
    var all = $("input[type='checkbox'][value='all']");
    var australia = $("input[type='checkbox'][value='australia']");
    var canada = $("input[type='checkbox'][value='canada']");
    var denmark = $("input[type='checkbox'][value='denmark']");
    var france = $("input[type='checkbox'][value='france']");
    var germany = $("input[type='checkbox'][value='germany']");
    var uk = $("input[type='checkbox'][value='uk']");
    var ireland = $("input[type='checkbox'][value='ireland']");
    var norway = $("input[type='checkbox'][value='norway']");
    var safrica = $("input[type='checkbox'][value='safrica']");
    var sweden = $("input[type='checkbox'][value='sweden']");
    var netherlands = $("input[type='checkbox'][value='netherlands']");
    var usa = $("input[type='checkbox'][value='usa']");
    var wales = $("input[type='checkbox'][value='wales']");
    var none = $("input[type='checkbox'][value='none']");


    // player class variables
    var australia_card = $('.australia');
    var canada_card = $('.canada');
    var denmark_card = $('.denmark');
    var france_card = $('.france');
    var germany_card = $('.germany');
    var uk_card = $('.uk');
    var ireland_card = $('.ireland');
    var norway_card = $('.norway');
    var safrica_card = $('.safrica');
    var sweden_card = $('.sweden');
    var netherlands_card = $('.netherlands');
    var usa_card = $('.usa');
    var wales_card = $('.wales');


    // on page load sets all filtering to defaults
    all.prop('checked', true);
    australia.prop('checked', true);
    canada.prop('checked', true);
    denmark.prop('checked', true);
    france.prop('checked', true);
    germany.prop('checked', true);
    uk.prop('checked', true);
    ireland.prop('checked', true);
    norway.prop('checked', true);
    safrica.prop('checked', true);
    sweden.prop('checked', true);
    netherlands.prop('checked', true);
    usa.prop('checked', true);
    wales.prop('checked', true);
    none.prop('checked', false);


    // on page load sets all displays to default
    australia_card.fadeIn();
    canada_card.fadeIn();
    denmark_card.fadeIn();
    france_card.fadeIn();
    germany_card.fadeIn();
    uk_card.fadeIn();
    ireland_card.fadeIn();
    norway_card.fadeIn();
    safrica_card.fadeIn();
    sweden_card.fadeIn();
    netherlands_card.fadeIn();
    usa_card.fadeIn();
    wales_card.fadeIn();


    // all checkbox
    all.on('change', function () {
        if (all.prop('checked')) {
            australia.prop('checked', true);
            canada.prop('checked', true);
            denmark.prop('checked', true);
            france.prop('checked', true);
            germany.prop('checked', true);
            uk.prop('checked', true);
            ireland.prop('checked', true);
            norway.prop('checked', true);
            safrica.prop('checked', true);
            sweden.prop('checked', true);
            netherlands.prop('checked', true);
            usa.prop('checked', true);
            wales.prop('checked', true);
            none.prop('checked', false);

            australia_card.fadeIn();
            canada_card.fadeIn();
            denmark_card.fadeIn();
            france_card.fadeIn();
            germany_card.fadeIn();
            uk_card.fadeIn();
            ireland_card.fadeIn();
            norway_card.fadeIn();
            safrica_card.fadeIn();
            sweden_card.fadeIn();
            netherlands_card.fadeIn();
            usa_card.fadeIn();
            wales_card.fadeIn();
        }
    });

    // australia checkbox
    australia.on('change', function () {
        if (australia.prop('checked')) {
            none.prop('checked', false);
            australia_card.fadeIn();
        } else {
            all.prop('checked', false);
            australia_card.fadeOut();
        }
    });

    // canada checkbox
    canada.on('change', function () {
        if (canada.prop('checked')) {
            none.prop('checked', false);
            canada_card.fadeIn();
        } else {
            all.prop('checked', false);
            canada_card.fadeOut();
        }
    });

    // denmark checkbox
    denmark.on('change', function () {
        if (denmark.prop('checked')) {
            none.prop('checked', false);
            denmark_card.fadeIn();
        } else {
            all.prop('checked', false);
            denmark_card.fadeOut();
        }
    });

    // france checkbox
    france.on('change', function () {
        if (france.prop('checked')) {
            none.prop('checked', false);
            france_card.fadeIn();
        } else {
            all.prop('checked', false);
            france_card.fadeOut();
        }
    });

    // germany checkbox
    germany.on('change', function () {
        if (germany.prop('checked')) {
            none.prop('checked', false);
            germany_card.fadeIn();
        } else {
            all.prop('checked', false);
            germany_card.fadeOut();
        }
    });

    // uk checkbox
    uk.on('change', function () {
        if (uk.prop('checked')) {
            none.prop('checked', false);
            uk_card.fadeIn();
        } else {
            all.prop('checked', false);
            uk_card.fadeOut();
        }
    });

    // ireland checkbox
    ireland.on('change', function () {
        if (ireland.prop('checked')) {
            none.prop('checked', false);
            ireland_card.fadeIn();
        } else {
            all.prop('checked', false);
            ireland_card.fadeOut();
        }
    });

    // norway checkbox
    norway.on('change', function () {
        if (norway.prop('checked')) {
            none.prop('checked', false);
            norway_card.fadeIn();
        } else {
            all.prop('checked', false);
            norway_card.fadeOut();
        }
    });

    // south africa checkbox
    safrica.on('change', function () {
        if (safrica.prop('checked')) {
            none.prop('checked', false);
            safrica_card.fadeIn();
        } else {
            all.prop('checked', false);
            safrica_card.fadeOut();
        }
    });

    // sweden checkbox
    sweden.on('change', function () {
        if (sweden.prop('checked')) {
            none.prop('checked', false);
            sweden_card.fadeIn();
        } else {
            all.prop('checked', false);
            sweden_card.fadeOut();
        }
    });

    // netherlands checkbox
    netherlands.on('change', function () {
        if (netherlands.prop('checked')) {
            none.prop('checked', false);
            netherlands_card.fadeIn();
        } else {
            all.prop('checked', false);
            netherlands_card.fadeOut();
        }
    });

    // usa checkbox
    usa.on('change', function () {
        if (usa.prop('checked')) {
            none.prop('checked', false);
            usa_card.fadeIn();
        } else {
            all.prop('checked', false);
            usa_card.fadeOut();
        }
    });

    // wales checkbox
    wales.on('change', function () {
        if (wales.prop('checked')) {
            none.prop('checked', false);
            wales_card.fadeIn();
        } else {
            all.prop('checked', false);
            wales_card.fadeOut();
        }
    });

    // none checkbox
    none.on('change', function () {
        if (none.prop('checked')) {
            all.prop('checked', false);
            australia.prop('checked', false);
            canada.prop('checked', false);
            denmark.prop('checked', false);
            france.prop('checked', false);
            germany.prop('checked', false);
            uk.prop('checked', false);
            ireland.prop('checked', false);
            norway.prop('checked', false);
            safrica.prop('checked', false);
            sweden.prop('checked', false);
            netherlands.prop('checked', false);
            usa.prop('checked', false);
            wales.prop('checked', false);

            australia_card.fadeOut();
            canada_card.fadeOut();
            denmark_card.fadeOut();
            france_card.fadeOut();
            germany_card.fadeOut();
            uk_card.fadeOut();
            ireland_card.fadeOut();
            norway_card.fadeOut();
            safrica_card.fadeOut();
            sweden_card.fadeOut();
            netherlands_card.fadeOut();
            usa_card.fadeOut();
            wales_card.fadeOut();
        }
    });


    // radio buttons
    var hide_img = $("input[type='radio'][value='hide-img']");
    var show_img = $("input[type='radio'][value='show-img']");

    // player images and text box
    // also used for zoom slider
    var player_img = $('.player-bg');
    var roster_text = $('.roster-container');

    // restore defaults
    show_img.prop('checked', true);

    show_img.on('change', function () {
        if (show_img.prop('checked')) {
            player_img.fadeIn();
            roster_text.css({ position: 'absolute' });
        }
    });

    hide_img.on('change', function () {
        if (hide_img.prop('checked')) {
            player_img.fadeOut(function () {
                roster_text.css({ position: 'relative' });
            });
        }
    });



    // zoom slider
    var zoom_level = $("input[type='range'][id='zoom-level']");

    // restore default zoom
    zoom_level.prop('value', 3);

    var player_card = $('.player');
    var manager_card = $('.manager');
    var founder_social_links = $(".founder").find("ul");
    var manager_social_links = $(".manager").find("ul");
    var player_social_links = $(".player").find("ul");

    var player_flags = $('.flag');
    var player_title = $('.roster-title')


    zoom_level.on('input', function () {
        if (this.value == 1) {
            //sets width and height for cards
            roster_text.css({ 'max-width': '150px' });
            player_img.css({ 'width': '150px', 'height': '200px' });

            // removes the social links because theyre too small for this card size
            founder_social_links.css({ 'display': 'none' });
            manager_social_links.css({ 'display': 'none' });
            player_social_links.css({ 'display': 'none' });

            // changes height of grey background
            roster_text.css({ 'height': '65px' })

            // puts flag on new line, centers it and gives it a bit of space from the top
            player_flags.css({ 'display': 'block', 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '2px' });
            player_title.css({ 'font-size': '17px' });

            // removes old bootstrap class
            player_card.removeClass('col-xs-6 col-md-4 col-lg-3');
            player_card.removeClass('col-xs-12 col-md-6 col-lg-4');
            player_card.removeClass('col-xs-12 col-md-12 col-lg-6');
            // manager_card.removeClass('col-xs-12');

            // sets bootstrap grid
            player_card.addClass('col-xs-4 col-md-3 col-lg-2');
            // manager_card.addClass('col-xs-6');
        } else if (this.value == 2) {
            roster_text.css({ 'max-width': '270px' });
            player_img.css({ 'width': '270px', 'height': '360px' });

            // adds the social links back from lowest setting if they were missing
            founder_social_links.css({ 'display': 'block' });
            manager_social_links.css({ 'display': 'block' });
            player_social_links.css({ 'display': 'block' });

            // sets flag back to normal setting of being on the same line and removes the margin
            player_flags.css({ 'display': 'inline', 'margin': '0' });
            // returns font size to normal
            player_title.css({ 'font-size': '24px' });
            // returns height to normal
            roster_text.css({ 'height': '90px' })

            // removes class from everywhere in case of skipped step
            player_card.removeClass('col-xs-4 col-md-3 col-lg-2');
            player_card.removeClass('col-xs-12 col-md-6 col-lg-4');
            player_card.removeClass('col-xs-12 col-md-12 col-lg-6');
            // manager_card.removeClass('col-xs-12');

            player_card.addClass('col-xs-6 col-md-4 col-lg-3');
            // manager_card.addClass('col-xs-6');
        } else if (this.value == 3) {
            roster_text.css({ 'max-width': '300px' });
            player_img.css({ 'width': '300px', 'height': '400px' });

            founder_social_links.css({ 'display': 'block' });
            manager_social_links.css({ 'display': 'block' });
            player_social_links.css({ 'display': 'block' });
            player_flags.css({ 'display': 'inline', 'margin': '0' });
            player_title.css({ 'font-size': '24px' });
            roster_text.css({ 'height': '90px' })

            player_card.removeClass('col-xs-4 col-md-3 col-lg-2');
            player_card.removeClass('col-xs-6 col-md-4 col-lg-3');
            player_card.removeClass('col-xs-12 col-md-12 col-lg-6');
            // manager_card.removeClass('col-xs-6');

            player_card.addClass('col-xs-12 col-md-6 col-lg-4')
            // manager_card.addClass('col-xs-12');
        } else {
            roster_text.css({ 'max-width': '375px' });
            player_img.css({ 'width': '375px', 'height': '500px' });

            founder_social_links.css({ 'display': 'block' });
            manager_social_links.css({ 'display': 'block' });
            player_social_links.css({ 'display': 'block' });
            player_flags.css({ 'display': 'inline', 'margin': '0' });
            player_title.css({ 'font-size': '24px' });
            roster_text.css({ 'height': '90px' })

            player_card.removeClass('col-xs-4 col-md-3 col-lg-2');
            player_card.removeClass('col-xs-6 col-md-4 col-lg-3');
            player_card.removeClass('col-xs-12 col-md-6 col-lg-4');
            // manager_card.removeClass('col-xs-6');

            player_card.addClass('col-xs-12 col-md-12 col-lg-6');
            // manager_card.addClass('col-xs-12');
        }
    });

});



$(window).on("load", function () {
    // window on load shouldnt run until images have loaded    
    var loading = $("div[id='loading-screen']");
    var page = $("div[id='page']");

    // slow fade in banner text elements
    var logo = $("div[id='logo']");
    var nav = $("[id='nav-list']");
    var intro = $("div[id='intro']");


    loading.fadeOut("fast", function () {
        page.fadeIn("fast", function () {
            logo.fadeIn(2000);
            intro.fadeIn(2000);
            nav.fadeIn(2000);
        });
    });
});