$(document).ready(function() {

    // Reaktion av tryck på länk
    $("#add_item").click(function(event) {
        // så att sidan ej laddas om
        event.preventDefault();

        // Hämta värdena ut formuläret
        var first_name  = $("#first_name").val();
        var last_name   = $("#last_name").val();
        var age         = $("#age").val();
        var profession  = $("#profession").val();

        // Lägg till element
        if(first_name !== "" && last_name !== "" && age !== "" && profession !== "")
        {
            var item = "<div class=\"item\">" + first_name + " " + last_name + "</div>";

            $("#list_of_items").append(item);

            // Töm formuläret
            $("#item_form").trigger("reset");

            // Sätt fokus i formuläret
            $("#first_name").focus();
        }
    });

});
