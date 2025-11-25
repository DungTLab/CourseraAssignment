/*
 * Function: upDate(previewPic)
 * Triggered when the user hovers OR focuses on a thumbnail.
 */
function upDate(previewPic) {
    console.log("Event Triggered: Mouse Over or Focus");
    console.log("Alt Text: " + previewPic.alt);
    console.log("Image Source: " + previewPic.src);

    
    var imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/*
 * Function: undo()
 * Triggered when the mouse leaves OR blur event occurs.
 */
function undo() {
    
    console.log("Event Triggered: Mouse Out or Blur");

    
    var imageDiv = document.getElementById("image");

    
    imageDiv.style.backgroundImage = "url('')";

    
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

/*
 * Function: addTabFocus()
 * Triggered by window.onload
 * Loops through all images with class 'preview' and adds tabindex attribute.
 */
function addTabFocus() {
    console.log("Onload event triggered. Adding tabindex...");

    var images = document.querySelectorAll(".preview"); 

    for (var i = 0; i < images.length; i++) {        
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex to image number " + (i + 1));
    }
}

window.onload = addTabFocus;