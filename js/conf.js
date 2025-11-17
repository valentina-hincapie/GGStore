const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function (e) {
        e.preventDefault();
        const $parent = $(this).closest(".dashboard-nav-dropdown");
        const isOpen = $parent.hasClass('show');
        // close others
        $('.dashboard-nav-dropdown').removeClass('show').find('.dashboard-nav-dropdown-toggle').attr('aria-expanded','false');
        if (!isOpen) {
            $parent.addClass('show');
            $(this).attr('aria-expanded','true');
        } else {
            $parent.removeClass('show');
            $(this).attr('aria-expanded','false');
        }
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });

    // close dropdowns when clicking outside
    $(document).on('click', function (e) {
        if ($(e.target).closest('.dashboard-nav').length === 0) {
            $('.dashboard-nav-dropdown.show').removeClass('show');
        }
    });

    // close on Escape
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
            $('.dashboard-nav-dropdown.show').removeClass('show');
        }
    });
});