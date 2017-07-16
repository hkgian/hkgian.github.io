
 $(document).ready(function (){
     console.log("ciccio")

    $('ul.nav').find('a').click(function(){
        console.log('PIPPPO');
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        console.log($anchor);
        $('html, body').animate(
            {
             scrollTop: $anchor.top
            },
            300,
            'easeOutExpo');
        return false;
    });


});
