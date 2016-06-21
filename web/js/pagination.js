$('.demo1').bootpag({
    total: 5
}).on("page", function(event, num){
    $(".content").html("Page " + num); // or some ajax content loading...

    // ... after content load -> change total to 10
    $(this).bootpag({total: 10, maxVisible: 10});

});

// init bootpag
$('#page-selection').bootpag({
    total: 10
}).on("page", function(event, /* page number here */ num){
     $("#content").html("Insert content"); // some ajax content loading...
});
