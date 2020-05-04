$(document).ready(function () {

    // keeps the background of the parent of the dropdown red when the dropdown exists
    var roster_drop_button = $("[id='roster-drop-container']");
    var roster_drop_menu = $("[id='roster-drop-menu']");

    roster_drop_menu.hover(function () {
        roster_drop_button.css({ 'border-radius': '7px 7px 0 0' });
    }, function () {
        roster_drop_button.css({ 'border-radius': '7px' });
    });



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



    // check box variables
    var all = $("input[type='checkbox'][value='all']");
    var belgium = $("input[type='checkbox'][value='belgium']");
    var france = $("input[type='checkbox'][value='france']");
    var germany = $("input[type='checkbox'][value='germany']");
    var italy = $("input[type='checkbox'][value='italy']");
    var luxembourg = $("input[type='checkbox'][value='luxembourg']");
    var norway = $("input[type='checkbox'][value='norway']");
    var safrica = $("input[type='checkbox'][value='safrica']");
    var netherlands = $("input[type='checkbox'][value='netherlands']");
    var uk = $("input[type='checkbox'][value='uk']");
    var usa = $("input[type='checkbox'][value='usa']");
    var none = $("input[type='checkbox'][value='none']");


    // player class variables
    var belgium_card = $('.belgium');
    var france_card = $('.france');
    var germany_card = $('.germany');
    var italy_card = $('.italy');
    var luxembourg_card = $('.luxembourg');
    var norway_card = $('.norway');
    var safrica_card = $('.safrica');
    var netherlands_card = $('.netherlands');
    var uk_card = $('.uk');
    var usa_card = $('.usa');


    // on page load sets all filtering to defaults
    all.prop('checked', true);
    belgium.prop('checked', true);
    france.prop('checked', true);
    germany.prop('checked', true);
    italy.prop('checked', true);
    luxembourg.prop('checked', true);
    norway.prop('checked', true);
    safrica.prop('checked', true);
    netherlands.prop('checked', true);
    uk.prop('checked', true);
    usa.prop('checked', true);
    none.prop('checked', false);


    // on page load sets all displays to default
    belgium_card.fadeIn();
    france_card.fadeIn();
    germany_card.fadeIn();
    italy_card.fadeIn();
    luxembourg_card.fadeIn();
    norway_card.fadeIn();
    safrica_card.fadeIn();
    netherlands_card.fadeIn();
    uk_card.fadeIn();
    usa_card.fadeIn();


    // if everything is checked this will recheck 'all'
    function allChecked() {
        if (belgium.prop('checked') && france.prop('checked') &&
            germany.prop('checked') && italy.prop('checked') &&
            luxembourg.prop('checked') && norway.prop('checked') &&
            safrica.prop('checked') && netherlands.prop('checked') &&
            uk.prop('checked') && usa.prop('checked')) {
            all.prop('checked', true);
        }
    }

    // if everything is unchecked this will recheck 'none'
    function noneChecked() {
        if (belgium.prop('checked') == false && france.prop('checked') == false &&
            germany.prop('checked') == false && italy.prop('checked') == false &&
            luxembourg.prop('checked') == false && norway.prop('checked') == false &&
            safrica.prop('checked') == false && netherlands.prop('checked') == false &&
            uk.prop('checked') == false && usa.prop('checked') == false) {
            none.prop('checked', true);
        }
    }

    // all checkbox
    all.on('change', function () {
        if (all.prop('checked')) {
            belgium.prop('checked', true);
            france.prop('checked', true);
            germany.prop('checked', true);
            italy.prop('checked', true);
            luxembourg.prop('checked', true);
            norway.prop('checked', true);
            safrica.prop('checked', true);
            netherlands.prop('checked', true);
            uk.prop('checked', true);
            usa.prop('checked', true);
            none.prop('checked', false);

            belgium_card.fadeIn();
            france_card.fadeIn();
            germany_card.fadeIn();
            italy_card.fadeIn();
            luxembourg_card.fadeIn();
            norway_card.fadeIn();
            safrica_card.fadeIn();
            netherlands_card.fadeIn();
            uk_card.fadeIn();
            usa_card.fadeIn();
        }
    });

    belgium.on('change', function () {
        if (belgium.prop('checked')) {
            none.prop('checked', false);
            belgium_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            belgium_card.fadeOut();
            noneChecked();
        }
    });

    france.on('change', function () {
        if (france.prop('checked')) {
            none.prop('checked', false);
            france_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            france_card.fadeOut();
            noneChecked();
        }
    });

    // germany checkbox
    germany.on('change', function () {
        if (germany.prop('checked')) {
            none.prop('checked', false);
            germany_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            germany_card.fadeOut();
            noneChecked();
        }
    });

    italy.on('change', function () {
        if (italy.prop('checked')) {
            none.prop('checked', false);
            italy_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            italy_card.fadeOut();
            noneChecked();
        }
    });

    // luxembourg checkbox
    luxembourg.on('change', function () {
        if (luxembourg.prop('checked')) {
            none.prop('checked', false);
            luxembourg_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            luxembourg_card.fadeOut();
            noneChecked();
        }
    });

    // norway checkbox
    norway.on('change', function () {
        if (norway.prop('checked')) {
            none.prop('checked', false);
            norway_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            norway_card.fadeOut();
            noneChecked();
        }
    });

    // south africa checkbox
    safrica.on('change', function () {
        if (safrica.prop('checked')) {
            none.prop('checked', false);
            safrica_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            safrica_card.fadeOut();
            noneChecked();
        }
    });

    // netherlands checkbox
    netherlands.on('change', function () {
        if (netherlands.prop('checked')) {
            none.prop('checked', false);
            netherlands_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            netherlands_card.fadeOut();
            noneChecked();
        }
    });

    // uk checkbox
    uk.on('change', function () {
        if (uk.prop('checked')) {
            none.prop('checked', false);
            uk_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            uk_card.fadeOut();
            noneChecked();
        }
    });

    // usa checkbox
    usa.on('change', function () {
        if (usa.prop('checked')) {
            none.prop('checked', false);
            usa_card.fadeIn();
            allChecked();
        } else {
            all.prop('checked', false);
            usa_card.fadeOut();
            noneChecked();
        }
    });

    // none checkbox
    none.on('change', function () {
        if (none.prop('checked')) {
            all.prop('checked', false);
            belgium.prop('checked', false);
            france.prop('checked', false);
            germany.prop('checked', false);
            italy.prop('checked', false);
            luxembourg.prop('checked', false);
            uk.prop('checked', false);
            norway.prop('checked', false);
            safrica.prop('checked', false);
            netherlands.prop('checked', false);
            usa.prop('checked', false);

            belgium_card.fadeOut();
            france_card.fadeOut();
            germany_card.fadeOut();
            italy_card.fadeOut();
            luxembourg_card.fadeOut();
            norway_card.fadeOut();
            safrica_card.fadeOut();
            netherlands_card.fadeOut();
            uk_card.fadeOut();
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
    var mve_social_links = $(".mve").find("ul");

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
            mve_social_links.fadeOut(100);

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
            mve_social_links.fadeIn();

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
            mve_social_links.fadeIn();
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

    var endTime = (new Date()).getTime();
    var millisecondsLoading = endTime - startTime;
    var seconds = millisecondsLoading / 1000 ;
    console.log(seconds)
    $('#time').text(seconds+0.5)
});