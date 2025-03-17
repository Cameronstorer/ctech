async function includeHTML(elementId, filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      document.getElementById(elementId).innerHTML = html;
    } catch (error) {
      console.error("Error including HTML:", error);
    }
  }
  
//Include toolbar.html into element with id addToolbar.
includeHTML("addToolbar", "../toolbar/toolbar.html");
