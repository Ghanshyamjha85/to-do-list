$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){ 
    e.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(this).remove();
      
    });
});

$("input[type='text']").keypress(function (e) { 
    if(e.which === 13)
    {
        var addText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + addText +"</li>");
        $(this).val("");
    }
});

$("h1 i").click(function (e) { 
    $("input").fadeToggle();    
});