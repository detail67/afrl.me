$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        //formError();
        //submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                //submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();

    //submitMSG(true, "Message Submitted!")
    setTimeout(function(){ $("#submit-status").text(">"); }, 500);
    setTimeout(function(){ $("#submit-status").text("> >"); }, 1000);
    setTimeout(function(){ $("#submit-status").text("> > >"); }, 1500);
    setTimeout(function(){ $("#submit-status").text(""); }, 2000);
    setTimeout(function(){ $("#submit-status").text(">"); }, 2500);
    setTimeout(function(){ $("#submit-status").text("> >"); }, 3000);
    setTimeout(function(){ $("#submit-status").text("> > >"); }, 3500);
    setTimeout(function(){ $("#submit-status").text("✔"); }, 4000);
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}