$(document).ready(function () {
    $('.single-item').slick();
    $('.saying-content .slider-stars ').slick({
        // settingname: setting - value
    });


    // $('#pizza').click(function(e) {
    //     e.preventDefault();
    //     var sw = window.screen.width;
    //     if (sw <= 640) {
    //         $('#pizza-content').toggleClass('d-none')
    //     }
    // })
    // hide_all();
    // show_content('#chicken-content');

    $('#all').click(function (e) {
        e.preventDefault();
        show_all();
    });

    $('#pizza').click(function (e) {
        e.preventDefault();
        hide_all();
        show_content('#bread-content');
        addClass()
    });


    $('#chicken').click(function (e) {
        e.preventDefault();
        hide_all();
        show_content('#chicken-content');
        $('.menu-img-2').addClass("default")
    });

    $('#fish').click(function (e) {
        e.preventDefault();
        hide_all();
        show_content('#bread-content');
    });

    $('#sandwich').click(function (e) {
        e.preventDefault();
        hide_all();
        show_content('#sandwich-content');
    });


    $('#meat').click(function (e) {
        e.preventDefault();
        hide_all();
        show_content('#meat-content');
    });


    var sw = window.screen.width;
    if (sw <= 640) {
        // $('#pizza-content').toggleClass('d-none')

        hide_all();

        show_content('#meat-content')

    }


    function hide_all() {
        // var ids = ['#fish-content', '#chicken-content', '#sandwich-content', '#bread-content'];

        $('#fish-content, #chicken-content, #sandwich-content, #bread-content, #meat-content').hide();
    }

    function show_all() {
        // var ids = ['#fish-content', '#chicken-content', '#sandwich-content', '#bread-content'];

        $('#fish-content, #chicken-content, #sandwich-content, #meat-content , #bread-content , meat-content').show();
    }


    function show_content(id) {
        $(id).show();

    }

    function addClass() {
        $('.menu-img').addClass('hide')
    }

});