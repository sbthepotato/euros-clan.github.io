$(document).ready(function () {

    // show hide button
    var show_hide_filter = $("[id='show-hide-filter']");

    // filter box
    var filter_box = $("form[id='filter']");

    show_hide_filter.click(function () {
        if (filter_box.css('display') == 'none') {
            filter_box.slideDown();
        } else {
            filter_box.slideUp();
        }
    });

    // checkbox variables & set filtering to default
    //{{checkox variables}}

    // player class variables & set all card displays to on
    //{{player class variables}}

    //{{AllNoneChecked}}

    //{{JScheckboxes}}

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
    var player_social_links = $(".member").find("ul");
    var mve_social_links = $(".mve").find("ul");

    var player_flags = $('.flag');
    var player_title = $('.roster-title');
    var player_icons = $('.icon');
    var player_title = $('.roster-title');
    var player_bg = $('.roster-container');
    var legend_box = $('.legend-box');

    zoom_level.on('input', function () {
        if (this.value == 1) {
            // removes the social links because theyre too small for this card size, also makes the flags smaller
            admin_social_links.fadeOut();
            player_social_links.fadeOut(function () {
                //sets width and height for cards
                roster_text.css({ 'width': '150px' });
                legend_box.css({ 'width': '150px' });
                player_img.css({ 'width': '150px', 'height': '200px' });
                player_icons.css({ 'max-width': '30px', 'max-height': '30px' });

                // puts flag on new line, centers it and gives it a bit of space from the top
                player_flags.css({ 'display': 'block', 'margin-left': 'auto', 'margin-right': 'auto', 'margin-top': '2px' });
                player_title.css({ 'font-size': '1.25rem' });
                player_title.css({ 'padding': '5px 0 5px' });
                player_bg.css({ 'height': '65px' });
            });
            mve_social_links.fadeOut();


        } else if (this.value == 2) {
            // adds the social links back from lowest setting if they were missing
            roster_text.css({ 'width': '270px' });
            legend_box.css({ 'width': '270px' });
            player_img.css({ 'width': '270px', 'height': '360px' });
            player_icons.css({ 'max-width': '40px', 'max-height': '40px' });

            // adds the social links back from lowest setting if they were missing
            admin_social_links.fadeIn();
            player_social_links.fadeIn();
            mve_social_links.fadeIn();

            // sets flag back to normal setting of being on the same line and removes the margin
            player_flags.css({ 'display': 'inline', 'margin': '0' });
            // returns font size to normal
            player_title.css({ 'font-size': '1.75rem' });
            player_title.css({ 'padding': '10px 0 5px' });
            player_bg.css({ 'height': '110px' });
        } else if (this.value == 3) {
            roster_text.css({ 'width': '300px' });
            legend_box.css({ 'width': '300px' });
            player_img.css({ 'width': '300px', 'height': '400px' });
            player_icons.css({ 'max-width': '40px', 'max-height': '40px' });

            admin_social_links.fadeIn();
            player_social_links.fadeIn();
            mve_social_links.fadeIn();

            player_flags.css({ 'display': 'inline', 'margin': '0' });
            player_title.css({ 'font-size': '1.75rem' });
            player_title.css({ 'padding': '10px 0 5px' });
            player_bg.css({ 'height': '120px' });
        } else {
            roster_text.css({ 'width': '375px' });
            legend_box.css({ 'width': '375px' });
            player_img.css({ 'width': '375px', 'height': '500px' });
            player_icons.css({ 'max-width': '56px', 'max-height': '56px' });

            admin_social_links.fadeIn();
            player_social_links.fadeIn();
            mve_social_links.fadeIn();

            player_flags.css({ 'display': 'inline', 'margin': '0' });
            player_title.css({ 'font-size': '1.75rem' });
            player_title.css({ 'padding': '10px 0 5px' });
            player_bg.css({ 'height': '150px' });
        }
    });


    // sets card size based on screen width (only on load)
    if ($(window).width() <= 992) {
        roster_text.css({ 'max-width': '270px' });
        legend_box.css({ 'width': '270px' });
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

    // takes current time, converts it to seconds, adds half a second because animations, limits decimals to 3
    $('#time').text(((new Date().getTime() - startTime) / 1000 + 0.5).toFixed(3));
});