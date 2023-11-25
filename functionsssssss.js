// JavaScript code
// Define the Class 10 subjects
const subjects = [
    "Science",
    "Hindi",
    "Social Science",
    "Mathematics",
    "English",
    "IT"
    // Add more subjects here
];

const subjectsContainer = document.getElementById("container");
const h1Element = document.querySelector("h1");

// Function to create circles
function createCircle(text) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.innerText = text;
    return circle;
}

// Function to add content options for a subject
function addContentOptions(subject) {
    // Create a container for the content options
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    // Define content options for each subject
    const contentOptions = {
        "Science": ["Notes", "Chat Bot", "Books", "Q&A"],
        "Hindi": ["Notes", "Chat Bot", "Books", "Q&A"],
        "Social Science": ["Notes", "Chat Bot", "Books", "Q&A"],
        "Mathematics": ["Notes", "Chat Bot", "Books", "Q&A"],
        "English": ["Notes", "Chat Bot", "Books", "Q&A"],
        "IT": ["Notes", "Chat Bot", "Books", "Q&A"]
        // Add more subjects and their content options here
    };

    // Create content option circles
    contentOptions[subject].forEach((option) => {
        const optionCircle = createCircle(option);
        optionCircle.addEventListener("click", function () {
            redirectToContent(subject, option);
        });
        optionsContainer.appendChild(optionCircle);
    });

    // Add the content options container to the page
    subjectsContainer.appendChild(optionsContainer);
}

// Function to redirect to specific content
function redirectToContent(subject, option) {
    // Define the URLs for each subject and content option
    const urls = {
        "Science": {
            "Notes": "science_notes10.html",
            "Chat Bot": "science_chat10.html",
            "Books": "science_books10.html",
            "Q&A": "science_qa10.html"
        },
        "Hindi": {
            "Notes": "hindi_notes10.html",
            "Chat Bot": "hindi_chat10.html",
            "Books": "hindi_books10.html",
            "Q&A": "hindi_qa10.html"
        },
        "Social Science": {
            "Notes": "social_science_notes10.html",
            "Chat Bot": "social_science_chat10.html",
            "Books": "social_science_books10.html",
            "Q&A": "social_science_qa10.html"
        },
        "Mathematics": {
            "Notes": "mathematics_notes10.html",
            "Chat Bot": "mathematics_chat10.html",
            "Books": "mathematics_books10.html",
            "Q&A": "mathematics_qa10.html"
        },
        "English": {
            "Notes": "english_notes10.html",
            "Chat Bot": "english_chat10.html",
            "Books": "english_books10.html",
            "Q&A": "english_qa10.html"
        },
        "IT": {
            "Notes": "it_notes10.html",
            "Chat Bot": "it_chat10.html",
            "Books": "it_books10.html",
            "Q&A": "it_qa10.html"
        }
        // Define URLs for other subjects and content options similarly
    };

    // Redirect to the appropriate URL
    if (urls[subject] && urls[subject][option]) {
        window.location.href = urls[subject][option];
    } else {
        alert("Content not found. Please select a valid option.");
    }
}

// Loop through subjects to create circles and attach click events
subjects.forEach((subject) => {
    const subjectCircle = createCircle(subject);
    subjectsContainer.appendChild(subjectCircle);

    subjectCircle.addEventListener("click", function () {
        h1Element.innerText = subject;
        // Clear the container to remove subject circles
        subjectsContainer.innerHTML = "";
        addContentOptions(subject);
    });
});
