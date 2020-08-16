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

$(function(){
    $(".enlarge").click(function() {
        $(".modal-zoom").attr("src", $(this).find("img").attr('src'))
    })
})

$(".editmodal").click((e) =>{
    let idbtn = e.target.id
    console.log(idbtn);
    switch (idbtn) {
        case "covid":
            $(".modal-title-mini").text("COVID 19 Cases")
            $(".modal-body-mini").text("A web that gets API from COVID 19 API and display the current info of COVID casualty numbers. Link Below")
            $(".btn-link").attr('href', "#linkhere" );
          break;
        
        case "mailchimp" :
            $(".modal-title-mini").text("MailChimp POST API")
            $(".modal-body-mini").text("A webpage that able to input your email to MailChimp API currently connected to my account. Link Below. ")
            $(".btn-link").attr('href', "#linkhere" );
        case "drum" :
            $(".modal-title-mini").text("drum")
            $(".modal-body-mini").text("Just like the title says, a drum kit. clickable and keyboard press sensitive. Link Below")
            $(".btn-link").attr('href', "#linkhere" );
        default:
            break;
    }
})
