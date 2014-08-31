$(document).ready(function() {

    // Reaktion av tryck på länk
    $("#add_item").click(function(event) {
        event.preventDefault();

        // Hämta värdena ur formuläret
        var first_name  = $("#first_name").val();
        var last_name   = $("#last_name").val();
        var age         = $("#age").val();
        var country     = $("#country").val();
        var profession  = $("#profession").val();

        // Lägg till element i lista om formuläret innehåller inmatad data
        if(first_name !== "" && last_name !== "" && age !== "" && country !== "" && profession !== "")
        {
            // var item = "<div class=\"item\">" + first_name + " " + last_name + "</div>";

            var item = "<div class=\"item\">" +
                            "<div class=\"first_row\">" +
                               "<span class=\"span_first_name\">" + first_name + "</span> " +
                               "<span class=\"span_last_name\">" + last_name + "</span>" +
                               "<a class=\"item_remove\" href=\"#\">Remove</a>"+
                               "<a class=\"item_edit\" href=\"#\">Edit</a>"+
                               "<a class=\"item_details\" href=\"#\">Details</a>" +
                            "</div>"+
                            "<div class=\"item_age_profession\">Age: <span class=\"span_age\">"+age+
                                "</span> Country: <span class=\"span_country\">"+country+
                                "</span> Profession: <span class=\"span_profession\">"+profession+"</span></div>"+
                       "</div>";

            $("#list_of_items").append(item);

            // Töm formuläret på inmatad data
            $("#item_form").trigger("reset");

            // Sätt fokus i formuläret efter att data har inmatats
            $("#first_name").focus();
        }
    });

    // Reagera på klickning av detalj-knappen
    $("#list_of_items").on("click", ".item_details", function(event) {
        event.preventDefault();

        if($(this).parent().parent().children(".item_age_profession").is(":hidden"))
        {
            // Visa detaljer
            $(this).parent().parent().children(".item_age_profession").slideDown("slow")
        }
        else
        {
            // Göm detaljer
            $(this).parent().parent().children(".item_age_profession").slideUp("slow", function() {
                $(this).parent().parent().children(".item_age_profession").hide();
            });

        }
    });

});
