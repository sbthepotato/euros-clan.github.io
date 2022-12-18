$(document).ready(function () {
        // checkbox variables & set filtering to default
        var all = $("input[type='checkbox'][value='all']");
        all.prop('checked', true);
        var none = $("input[type='checkbox'][value='none']");
        none.prop('checked', false);
        var gb = $("input[type='checkbox'][value='gb']");
        gb.prop('checked', true);
        var se = $("input[type='checkbox'][value='se']");
        se.prop('checked', true);
        var de = $("input[type='checkbox'][value='de']");
        de.prop('checked', true);
        var nl = $("input[type='checkbox'][value='nl']");
        nl.prop('checked', true);
        var us = $("input[type='checkbox'][value='us']");
        us.prop('checked', true);
        var ch = $("input[type='checkbox'][value='ch']");
        ch.prop('checked', true);
        var fr = $("input[type='checkbox'][value='fr']");
        fr.prop('checked', true);
        var hu = $("input[type='checkbox'][value='hu']");
        hu.prop('checked', true);
        var no = $("input[type='checkbox'][value='no']");
        no.prop('checked', true);


        // player class variables & set all card displays to on
        var gb_card = $('.gb');
        gb_card.fadeIn();
        var se_card = $('.se');
        se_card.fadeIn();
        var de_card = $('.de');
        de_card.fadeIn();
        var nl_card = $('.nl');
        nl_card.fadeIn();
        var us_card = $('.us');
        us_card.fadeIn();
        var ch_card = $('.ch');
        ch_card.fadeIn();
        var fr_card = $('.fr');
        fr_card.fadeIn();
        var hu_card = $('.hu');
        hu_card.fadeIn();
        var no_card = $('.no');
        no_card.fadeIn();


        // if everything is checked this will recheck 'all'
        function allChecked() {
                if (gb.prop('checked')
                        && se.prop('checked')
                        && de.prop('checked')
                        && nl.prop('checked')
                        && us.prop('checked')
                        && ch.prop('checked')
                        && fr.prop('checked')
                        && hu.prop('checked')
                        && no.prop('checked')
                ) { all.prop('checked', true); }
        }
        // if everything is unchecked this will recheck 'none'
        function noneChecked() {
                if (gb.prop('checked') == false
                        && se.prop('checked') == false
                        && de.prop('checked') == false
                        && nl.prop('checked') == false
                        && us.prop('checked') == false
                        && ch.prop('checked') == false
                        && fr.prop('checked') == false
                        && hu.prop('checked') == false
                        && no.prop('checked') == false
                ) { none.prop('checked', true); }
        }


        all.on('change', function () {
                if (all.prop('checked')) {
                        none.prop('checked', false); gb.prop('checked', true);
                        gb_card.fadeIn();
                        se.prop('checked', true);
                        se_card.fadeIn();
                        de.prop('checked', true);
                        de_card.fadeIn();
                        nl.prop('checked', true);
                        nl_card.fadeIn();
                        us.prop('checked', true);
                        us_card.fadeIn();
                        ch.prop('checked', true);
                        ch_card.fadeIn();
                        fr.prop('checked', true);
                        fr_card.fadeIn();
                        hu.prop('checked', true);
                        hu_card.fadeIn();
                        no.prop('checked', true);
                        no_card.fadeIn();
                }
        });
        none.on('change', function () {
                if (none.prop('checked')) {
                        all.prop('checked', false);
                        gb.prop('checked', false);
                        gb_card.fadeOut();
                        se.prop('checked', false);
                        se_card.fadeOut();
                        de.prop('checked', false);
                        de_card.fadeOut();
                        nl.prop('checked', false);
                        nl_card.fadeOut();
                        us.prop('checked', false);
                        us_card.fadeOut();
                        ch.prop('checked', false);
                        ch_card.fadeOut();
                        fr.prop('checked', false);
                        fr_card.fadeOut();
                        hu.prop('checked', false);
                        hu_card.fadeOut();
                        no.prop('checked', false);
                        no_card.fadeOut();
                }
        });
        gb.on('change', function () {
                if (gb.prop('checked')) {
                        none.prop('checked', false);
                        gb_card.fadeIn();
                        allChecked();
                } else {
                        all.prop('checked', false);
                        gb_card.fadeOut();
                        noneChecked();
                }
        });
        se.on('change', function () {
                if (se.prop('checked')) {
                        none.prop('checked', false);
                        se_card.fadeIn();
                        allChecked();
                } else {
                        all.prop('checked', false);
                        se_card.fadeOut();
                        noneChecked();
                }
        });
        de.on('change', function () {
                if (de.prop('checked')) {
                        none.prop('checked', false);
                        de_card.fadeIn();
                        allChecked();
                } else {
                        all.prop('checked', false);
                        de_card.fadeOut();
                        noneChecked();
                }
        });
        nl.on('change', function () {
                if (nl.prop('checked')) {
                        none.prop('checked', false);
                        nl_card.fadeIn();
                        allChecked();
                } else {
                        all.prop('checked', false);
                        nl_card.fadeOut();
                        noneChecked();
                }
        });
        us.on('change', function () {
                if (us.prop('checked')) {
                        none.prop('checked', false);
                        us_card.fadeIn();
                        allChecked();
                } else {
                        all.prop('checked', false);
                        us_card.fadeOut();
                        noneChecked();
                }
        });
        ch.on('change', function () {
                if (ch.prop('checked')) {
                        none.prop('checked', false);
                        ch_card.fadeIn();
                        allChecked();
                } else {
                        all.prop('checked', false);
                        ch_card.fadeOut();
                        noneChecked();
                }
        });
        fr.on('change', function () {
                if (fr.prop('checked')) {
                        none.prop('checked', false);
                        fr_card.fadeIn();
                        allChecked();
                } else {
                        all.prop('checked', false);
                        fr_card.fadeOut();
                        noneChecked();
                }
        });
        hu.on('change', function () {
                if (hu.prop('checked')) {
                        none.prop('checked', false);
                        hu_card.fadeIn();
                        allChecked();
                } else {
                        all.prop('checked', false);
                        hu_card.fadeOut();
                        noneChecked();
                }
        });
        no.on('change', function () {
                if (no.prop('checked')) {
                        none.prop('checked', false);
                        no_card.fadeIn();
                        allChecked();
                } else {
                        all.prop('checked', false);
                        no_card.fadeOut();
                        noneChecked();
                }
        });


        // radio buttons
        var hide_img = $('input[type=\'radio\'][value=\'hide-img\']');
        var show_img = $('input[type=\'radio\'][value=\'show-img\']');

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
        var zoom_level = $('input[type=\'range\'][id=\'zoom-level\']');

        // restore default zoom
        zoom_level.prop('value', 3);

        var admin_social_links = $('.admin').find('ul');
        var player_social_links = $('.member').find('ul');
        var mve_social_links = $('.mve').find('ul');

        var player_flags = $('.flag');
        var player_title = $('.roster-title');
        var player_icons = $('.icon');
        var player_title = $('.roster-title');
        var player_bg = $('.roster-container');
        var legend_box = $('.legend-box');

        zoom_level.on('input', function () {
                if (this.value == 1) {
                        // removes the social links because theyre too small for this card size,
                        // also makes the flags smaller
                        admin_social_links.fadeOut();
                        player_social_links.fadeOut(function () {
                                // sets width and height for cards
                                roster_text.css({ 'width': '150px' });
                                legend_box.css({ 'width': '150px' });
                                player_img.css({ 'width': '150px', 'height': '200px' });
                                player_icons.css({ 'max-width': '30px', 'max-height': '30px' });

                                // puts flag on new line, centers it and gives it a bit of space from
                                // the top
                                player_flags.css({
                                        'display': 'block',
                                        'margin-left': 'auto',
                                        'margin-right': 'auto',
                                        'margin-top': '2px'
                                });
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

                        // sets flag back to normal setting of being on the same line and removes
                        // the margin
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


$(window).on('load', function () {
        var loading = $('div[id=\'loading-screen\']');
        var page = $('div[id=\'page\']');

        var logo = $('div[id=\'logo\']');
        var nav = $('[id=\'nav-list\']');
        var intro = $('div[id=\'intro\']');

        loading.fadeOut('fast', function () {
                page.fadeIn('fast', function () {
                        logo.fadeIn(2000);
                        intro.fadeIn(2000);
                        nav.fadeIn(2000);
                });
        });
        // takes current time, converts it to seconds, adds half a second because
        // animations, limits decimals to 3
        $('#time').text(((new Date().getTime() - startTime) / 1000 + 0.5).toFixed(3));
});