
// This script adds the toolbar to the webpage

// javascript to add button functionality
    // define possible button id's:
    let buttonNames = ["about", "blog", "contact", "donate"];
    // take action
    document.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") { //Ensure it's a button
            if (buttonNames.includes(event.target.id)){ // Figure out which button
                window.parent.location.href = "https://cameronstorer.github.io/ctech/" + event.target.id;
            }
        }
    });

//Include toolbar.html into element with id addToolbar.
includeHTML("addToolbar", "../toolbar/toolbar.html");
