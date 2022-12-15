jQuery(document).ready(function(){
    jQuery("#btn").click(function(){
        if(jQuery("#video").get(0).paused){
            jQuery("#video").trigger('play');
            jQuery(".content").fadeOut();
            jQuery("#btn").html("STOP");
            jQuery(".wrapper").css("background-image", "none")
            jQuery("#video").css("display", "block")

        }   else{
            jQuery("#video").trigger('pause');
            jQuery("#btn").html("START");
            jQuery(".content").fadeIn();
            jQuery(".wrapper").css("background-image", "")
        }
    })
});

function aparecer1(){
    let aparecer = document.querySelector(".boxcontent1");
        if( aparecer.style.display=="block" ){
            aparecer.style.display="none";
        }   else{
            aparecer.style.display="block"
        }
}

function aparecer2(){
    let aparecer = document.querySelector(".boxcontent2");
        if( aparecer.style.display=="block" ){
            aparecer.style.display="none";
        }   else{
            aparecer.style.display="block"
        }
}

function aparecer3(){
    let aparecer = document.querySelector(".boxcontent3");
        if( aparecer.style.display=="block" ){
            aparecer.style.display="none";
        }   else{
            aparecer.style.display="block"
        }
}

function aparecer4(){
    let aparecer = document.querySelector(".boxcontent4");
        if( aparecer.style.display=="block" ){
            aparecer.style.display="none";
        }   else{
            aparecer.style.display="block"
        }
}



