 const video = document.getElementById("intro-video");
 const studentForm = document.getElementById("studentForm");
 const formHeading = document.querySelector("h1");

 // Hide the form and form heading initially
 studentForm.style.display = "none";
 formHeading.style.display = "none";

 // Add an event listener to ensure the video is loaded before attempting to play
 video.addEventListener("loadeddata", function() {
    video.play();
 });

 // Add an event listener to detect the end of the video
 video.addEventListener("ended", function() {
    // Hide the video
    video.style.display = "none";
    // Show the form and the form heading
    studentForm.style.display = "block";
    formHeading.style.display = "block";
 });

 // Event listener for the form submission
 studentForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const selectedClass = document.getElementById("class").value;

    // Define the URLs for different classes
   // Define the URLs for different classes
 const classURLs = {
    "9": "class9.html",
    "10": "class10.html",
    "11sc": "class11science.html",
    "11com": "class11commerce.html",
    "11arts": "class11arts.html",
    "12sc": "class12science.html",
    "12com": "class12commerce.html",
    "12arts": "class12arts.html",
 };

    
     if (classURLs[selectedClass]) {
        // Redirect to the appropriate class page
        window.location.href = classURLs[selectedClass];
    } 
});

// Rest of your code for getting subjects


