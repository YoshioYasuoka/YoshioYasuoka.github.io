// This code runs when the page loads
$(function() {

  $(".list-group-item").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    elementThatWasClicked.remove();
  })

})