function scrollTitle() {
    document.querySelector("#title").scrollIntoView({behavior:"smooth"})
    
}

function scrollSkill(){
     document.querySelector("#Skills").scrollIntoView({behavior:"smooth", block:"end"});
}
function scrollProject(){
    $("nav-project").click(function() {
        $('html,body').animate({
            scrollTop: $("#projects").offset().top},
            'slow');
    });}
function scrollContact(params) {
    document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
}