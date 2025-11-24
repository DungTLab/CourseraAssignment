/*
 * Function: upDate(previewPic)
 * Triggered when the user hovers over a thumbnail.
 * previewPic: The <img> element that is currently being hovered.
 */
function upDate(previewPic) {
    // 1. Log to console to verify event triggering
    console.log("Event Triggered: Mouse Over");
    console.log("Alt Text: " + previewPic.alt);
    console.log("Image Source: " + previewPic.src);

    // 2. Get the reference to the div with id="image"
    var imageDiv = document.getElementById("image");

    // 3. Change the text of the div to the alt text of the preview image
    imageDiv.innerHTML = previewPic.alt;

    // 4. Change the background image of the div
    // Note: We must strictly follow the syntax: url('link')
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/*
 * Function: undo()
 * Triggered when the mouse leaves the thumbnail.
 * Resets the div to its original state.
 */
function undo() {
    // 1. Log to console
    console.log("Event Triggered: Mouse Out");

    // 2. Get the reference to the div with id="image"
    var imageDiv = document.getElementById("image");

    // 3. Reset the background image to empty/original
    imageDiv.style.backgroundImage = "url('')";

    // 4. Reset the text back to the original prompt
    // IMPORTANT: This string must match the assignment requirement exactly.
    imageDiv.innerHTML = "Hover over an image below to display here.";
}