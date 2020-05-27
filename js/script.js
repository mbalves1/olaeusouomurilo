
/********* criando animacao */
    
    var $target = $(".anime"),
    animationclass = "anime-start";
    offset = $(window).height()
    function animeScroll(){
        var documentTop = $(document).scrollTop();
        
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if(documentTop > itemTop - 350){
                $(this).addClass(animationclass);
            }else{
                $(this).removeClass(animationclass);
            }
        })
    }
    animeScroll();

    $(document).scroll(function(){
        animeScroll();
    })




/************ toggle */

$("teste_button").click(function(){
    $("teste_pa").toggle.removeClass("teste_pa");
  });