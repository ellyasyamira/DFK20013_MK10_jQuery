$(document).on("pagecreate", "#loginPage", function() {
    
    $("#btnLogin").on("click", function() {
    
        var user = $("#username").val().trim();
        var pass = $("#password").val().trim();

        if (user === "" || pass === "") {
            $("#popupValidation").popup("open");
        } else {

            $(":mobile-pagecontainer").pagecontainer("change", "#infoPage", {
                transition: "flip"
            });
        }
    });
});