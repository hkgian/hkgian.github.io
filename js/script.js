$('ul.nav').find('a').click(function(){
    console.log('PIPPPO');
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    console.log($anchor);
    $('html, body').animate(
        {
         scrollTop: $anchor.top
        },
        500,
        'easeOutExpo');
    return false;
});
