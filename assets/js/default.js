$(document).ready(function(){
    // Toggle side navigation menu
    $(document).on('click', '.open_btn', function() {
        $("#sideNavMenu").toggleClass('opened_menu');
    });

    // Close button for side navigation menu
    $(document).on('click', '.close_btn', function() {
        $("#sideNavMenu").removeClass('opened_menu');
    });
});