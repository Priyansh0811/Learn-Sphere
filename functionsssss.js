// Define the subjects
const subjects = [
    "Physics",
    "Chemistry",
    "Mathematics",
    "English",
    "Biology",
    "Physical Education"
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
        "Physics": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "Chemistry": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "Mathematics": ["Notes", "Chat", "Books", "Questions and Answers"],
        "English": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "Biology": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "Physical Education": ["Notes", "Chat Bot", "Books", "Questions and Answers"]
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
        "Physics": {
            "Notes": "physics_notes12.html",
            "Chat Bot": "physics_ai_chat12.html",
            "Books": "physics_books12.html",
            "Questions and Answers": "physics_qa12.html"
        },
        "Chemistry": {
            "Notes": "chemistry_notes12.html",
            "Chat Bot": "chemistry_ai_chat12.html",
            "Books": "chemistry_books12.html",
            "Questions and Answers": "chemistry_qa12.html"
        },
        "Mathematics": {
            "Notes": "math_notes12.html",
            "Chat": "math_ai_chat12.html",
            "Books": "math_books12.html",
            "Questions and Answers": "math_qa12.html"
        },
        "English": {
            "Notes": "english_notes12.html",
            "Chat Bot": "english_ai_chat12.html",
            "Books": "english_books12.html",
            "Questions and Answers": "english_qa12.html"
        },
        "Biology": {
            "Notes": "biology_notes12.html",
            "Chat Bot": "biology_ai_chat12.html",
            "Books": "biology_books12.html",
            "Questions and Answers": "biology_qa12.html"
        },
        "Physical Education": {
            "Notes": "pe_notes12.html",
            "Chat Bot": "pe_ai_chat12.html",
            "Books": "pe_books12.html",
            "Questions and Answers": "pe_qa12.html"
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