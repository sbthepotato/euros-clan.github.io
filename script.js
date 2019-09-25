$(document).ready(function () {

    // keeps the background of the parent of the dropdown red when the dropdown exists
    var roster_drop_button = $("[id='roster-drop-container']");
    var roster_drop_menu = $("[id='roster-drop-menu']");

    roster_drop_menu.hover(function () {
        roster_drop_button.css({ 'border-radius': '7px 7px 0 0' });
    }, function () {
        roster_drop_button.css({ 'border-radius': '7px' });
    });


    // reloads the page when you click on "euros"
    // I think its fucking stupid but Wami likes it for some reason
    var euros_text = $("[id='euros-header-text']");

    $(euros_text).click(function () {
        location.reload();
    });



    // show hide button
    var show_hide_filter = $("[id='show-hide-filter']");
    var show_hide_boss = $("[id='show-hide-boss']");
    var show_hide_manager = $("[id='show-hide-manager']");
    var show_hide_pc = $("[id='show-hide-pc']");
    // filter box
    var filter_box = $("form[id='filter']");
    var founder_roster = $("div[id='founder-roster']");
    var manager_roster = $("div[id='manager-roster']");
    var pc_roster = $("div[id='pc-roster']");

    show_hide_filter.click(function () {
        if (filter_box.css('display') == 'none') {
            filter_box.slideDown();
        } else {
            filter_box.slideUp();
        }
    });

    show_hide_boss.click(function () {
        if (founder_roster.css('display') == 'none') {
            founder_roster.slideDown();
        } else {
            founder_roster.slideUp();
        }
    });

    show_hide_manager.click(function () {
        if (manager_roster.css('display') == 'none') {
            manager_roster.slideDown();
        } else {
            manager_roster.slideUp();
        }
    });

    show_hide_pc.click(function () {
        if (pc_roster.css('display') == 'none') {
            pc_roster.slideDown();
        } else {
            pc_roster.slideUp();
        }
    });



    // check box variables
    var all = $("input[type='checkbox'][value='all']");
    var canada = $("input[type='checkbox'][value='canada']");
    var france = $("input[type='checkbox'][value='france']");
    var germany = $("input[type='checkbox'][value='germany']");
    var uk = $("input[type='checkbox'][value='uk']");
    var ireland = $("input[type='checkbox'][value='ireland']");
    var norway = $("input[type='checkbox'][value='norway']");
    var safrica = $("input[type='checkbox'][value='safrica']");
    var netherlands = $("input[type='checkbox'][value='netherlands']");
    var usa = $("input[type='checkbox'][value='usa']");
    var none = $("input[type='checkbox'][value='none']");


    // player class variables
    var canada_card = $('.canada');
    var france_card = $('.france');
    var germany_card = $('.germany');
    var uk_card = $('.uk');
    var ireland_card = $('.ireland');
    var norway_card = $('.norway');
    var safrica_card = $('.safrica');
    var netherlands_card = $('.netherlands');
    var usa_card = $('.usa');


    // on page load sets all filtering to defaults
    all.prop('checked', true);
    canada.prop('checked', true);
    france.prop('checked', true);
    germany.prop('checked', true);
    uk.prop('checked', true);
    ireland.prop('checked', true);
    norway.prop('checked', true);
    safrica.prop('checked', true);
    netherlands.prop('checked', true);
    usa.prop('checked', true);
    none.prop('checked', false);


    // on page load sets all displays to default
    canada_card.fadeIn();
    france_card.fadeIn();
    germany_card.fadeIn();
    uk_card.fadeIn();
    ireland_card.fadeIn();
    norway_card.fadeIn();
    safrica_card.fadeIn();
    netherlands_card.fadeIn();
    usa_card.fadeIn();


    // all checkbox
    all.on('change', function () {
        if (all.prop('checked')) {
            canada.prop('checked', true);
            denmark.prop('checked', true);
            france.prop('checked', true);
            germany.prop('checked', true);
            uk.prop('checked', true);
            ireland.prop('checked', true);
            norway.prop('checked', true);
            safrica.prop('checked', true);
            netherlands.prop('checked', true);
            usa.prop('checked', true);
            none.prop('checked', false);

            canada_card.fadeIn();
            france_card.fadeIn();
            germany_card.fadeIn();
            uk_card.fadeIn();
            ireland_card.fadeIn();
            norway_card.fadeIn();
            safrica_card.fadeIn();
            netherlands_card.fadeIn();
            usa_card.fadeIn();
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

    // none checkbox
    none.on('change', function () {
        if (none.prop('checked')) {
            all.prop('checked', false);
            canada.prop('checked', false);
            france.prop('checked', false);
            germany.prop('checked', false);
            uk.prop('checked', false);
            ireland.prop('checked', false);
            norway.prop('checked', false);
            safrica.prop('checked', false);
            netherlands.prop('checked', false);
            usa.prop('checked', false);

            canada_card.fadeOut();
            france_card.fadeOut();
            germany_card.fadeOut();
            uk_card.fadeOut();
            ireland_card.fadeOut();
            norway_card.fadeOut();
            safrica_card.fadeOut();
            netherlands_card.fadeOut();
            usa_card.fadeOut();
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

    var admin_social_links = $(".admin").find("ul");
    var player_social_links = $(".player").find("ul");

    var player_flags = $('.flag');
    var player_title = $('.roster-title');
    var player_icons = $('.icon');
    var player_title = $('.roster-title');
    var player_bg = $('.roster-container');



    zoom_level.on('input', function () {
        if (this.value == 1) {
            //sets width and height for cards
            roster_text.css({ 'width': '150px' });
            player_img.css({ 'width': '150px', 'height': '200px' });
            player_icons.css({ 'max-width': '30px', 'max-height': '30px' });

            // removes the social links because theyre too small for this card size, also makes the flags smaller
            admin_social_links.fadeOut(100);
            player_social_links.fadeOut(100);

            // puts flag on new line, centers it and gives it a bit of space from the top
            player_flags.css({ 'display': 'block', 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '2px' });
            player_title.css({ 'font-size': '1.25rem' });
            player_title.css({ 'padding': '5px 0 5px' });
            player_bg.css({ 'height': '65px' });
        } else if (this.value == 2) {
            roster_text.css({ 'width': '270px' });
            player_img.css({ 'width': '270px', 'height': '360px' });
            player_icons.css({ 'max-width': '40px', 'max-height': '40px' });

            // adds the social links back from lowest setting if they were missing
            admin_social_links.fadeIn();
            player_social_links.fadeIn();

            // sets flag back to normal setting of being on the same line and removes the margin
            player_flags.css({ 'display': 'inline', 'margin': '0' });
            // returns font size to normal
            player_title.css({ 'font-size': '1.75rem' });
            player_title.css({ 'padding': '10px 0 5px' });
            player_bg.css({ 'height': '110px' });
        } else if (this.value == 3) {
            roster_text.css({ 'width': '300px' });
            player_img.css({ 'width': '300px', 'height': '400px' });
            player_icons.css({ 'max-width': '40px', 'max-height': '40px' });

            admin_social_links.fadeIn();
            player_social_links.fadeIn();
            player_flags.css({ 'display': 'inline', 'margin': '0' });
            player_title.css({ 'font-size': '1.75rem' });
            player_title.css({ 'padding': '10px 0 5px' });
            player_bg.css({ 'height': '120px' });
        } else {
            roster_text.css({ 'width': '375px' });
            player_img.css({ 'width': '375px', 'height': '500px' });
            player_icons.css({ 'max-width': '56px', 'max-height': '56px' });

            admin_social_links.fadeIn();
            player_social_links.fadeIn();
            player_flags.css({ 'display': 'inline', 'margin': '0' });
            player_title.css({ 'font-size': '1.75rem' });
            player_title.css({ 'padding': '10px 0 5px' });
            player_bg.css({ 'height': '150px' });
        }
    });


    // sets card size based on screen width (only on load)
    if ($(window).width() <= 992) {
        roster_text.css({ 'max-width': '270px' });
        player_img.css({ 'width': '270px', 'height': '360px' });
        zoom_level.prop('value', 2);
    };


});



$(window).on("load", function () {
    var loading = $("div[id='loading-screen']");
    var page = $("div[id='page']");

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