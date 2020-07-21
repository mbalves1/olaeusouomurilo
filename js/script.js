
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


/*************************** */ 

$('nav a').click(function(event){
    event.preventDefault();
    let id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - 60
    }, 700);
    
});


/**
 * 
 */
const seta = document.querySelector('.bi-chevron-double-down')

seta.addEventListener('click', scrollTo);




function scrollTo(event){
    event.preventDefault();
    const el = document.querySelector('.standard').offsetTop
    window.scroll({
        top: el - 120,
        behavior: "smooth"
    })
}