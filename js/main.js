;$(function(){
    "use strict";
    $("#all").css("filter","blur(5px)");
    $("#all").css("-webkit-filter","blur(5px)");
    window.onload=function()
    {
        $("#alert").css("transform","scale(1)");
    };
    $(window).on("keydown",function(event)
    {
        var inputs=document.getElementsByTagName("INPUT");
        var focus=document.activeElement;
        var event=window.event||event;          
        var key=event.keyCode;
        for(var i=0;i<inputs.length;i++)
        {
            if(inputs[i]===focus)break; 
        }
        if(key==13)inputs[i+1].focus();
    });
    $("body").click(function()
    {
        $("#alert").css("transform","scale(0)");
        $("#all").css("-webkit-filter","");
        $("#all").css("filter","");
    });
});
