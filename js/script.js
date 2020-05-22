
/********* criando animacao */
    
    var $target = $(".anime"),
    animationclass = "anime-start";
    offset = $(window).height()*1/4
    function animeScroll(){
        var documentTop = $(document).scrollTop();
        
        $target.each(function(){
            var itemTop = $(this).offset().top;
            if(documentTop > itemTop - 200){
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