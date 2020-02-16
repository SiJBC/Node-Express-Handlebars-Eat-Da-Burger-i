$(document).ready(function() {

  // devour button
  $(".devourBtn").on("click", function(event) {

      // get ID of burger
      const id = $(this).data("id");

      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
          type: "PUT"
      }).then(() => {
              // Reload the page to get the updated list
              location.reload();
          }
      );

  });

  // delete button
  $(".deleteBtn").on("click", function(event) {
      console.log("click")

      // get ID of burger
      const id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burger/" + id, {
          type: "DELETE"
      }).then(() => {
              // Reload the page to get the updated list
              location.reload();
          }
      );
  });

  // ADD button
  $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      // Create object for POST request
      let burgerName = { name: $("#burgerName").val().trim()};                               

      // Send the POST request.
      $.ajax("/api/burger", {
      type: "POST",
      data: burgerName
      }).then(() => {
          // Reload the page to get the updated list
          location.reload();
          console.log(burgerName)
      }
      );
  });

  

}); // Ending of Ready Function