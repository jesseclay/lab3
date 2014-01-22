'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// $("#testjs").click(function(e) {
	// 	$('.jumbotron h1').text("Javascript is connected");
	// });

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
  $("a.thumbnail").click(projectClick);
  $("#testjs").click(updateJumbotron);
  $("#submitBtn").click(formSubmitted);
}

function formSubmitted(e) {
  var project = $("#project.form-control").val();
  var width = $("#width").val();
  var description = $("#description").val();
  console.log(project);
  console.log(width);
  console.log(description);

  $(project).width(width);
  var projDesc = $(project).find(".project-description");
  if (projDesc.length != 0) {
    projDesc.text(description);
  }
  // var project = e.project.val()
}

function updateJumbotron(e) {
  $(this).text("eye sea everything!");
  $(".jumbotron p").addClass("")
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0 || !description.is(":visible")) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
      $(description).hide();
       // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}