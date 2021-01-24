$(document).ready(function(){

    $(".burger").on("click", function(e){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        };
        if($(".navigation").hasClass("active")){
            $(".navigation").removeClass("active");
        }else{
            $(".navigation").addClass("active")
        }
    })
})