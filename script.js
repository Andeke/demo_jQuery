$(document).ready(function()
{

    $("#add_item").click(function(event)
    {
        event.preventDefault();

        var first_name  = $("#first_name").val();
        var last_name   = $("#last_name").val();
        var age         = $("#age").val();
        var country     = $("#country").val();
        var profession  = $("#profession").val();

        if(first_name !== "" && last_name !== "" && age !== "" && country !== "" && profession !== "")
        {

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

            $("#item_form").trigger("reset");

            $("#first_name").focus();
        }
    });

    $("#list_of_items").on("click", ".item_details", function(event)
    {
        event.preventDefault();

        if($(this).parent().parent().children(".item_age_profession").is(":hidden"))
        {
            $(this).parent().parent().children(".item_age_profession").slideDown("slow")
        }
        else
        {
            $(this).parent().parent().children(".item_age_profession").slideUp("slow", function()
            {
                $(this).parent().parent().children(".item_age_profession").hide();
            });

        }
    });

});
