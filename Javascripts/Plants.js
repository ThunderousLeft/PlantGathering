

$.getJSON("https://jeremyhouser.github.io/PlantGathering/JSON/plants.json", function(data){
    $.each(data, function(i, field){
        $('#ScrollbarBox').append("<a class='plantsClickable'>" + field.Name + "</a>");
    });
    $('.plantsClickable').on( "click", function(event){
        Alert(event.data.text);
    });
    
});
