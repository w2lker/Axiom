$( document ).ready(function() {

  //

});

$( document ).on('click', '.btn-group .dropdown-menu a', function(e){
    e.preventDefault()
    var button = $(this).parents('.btn-group').find('.btn-dropdown')
    button.addClass('dropdown-selected')
    //var dropdown = $(this).parents('.btn-group').find('.dropdown-toggle')
    //dropdown.addClass('dropdown-selected')
    button.text($(this).text())
});