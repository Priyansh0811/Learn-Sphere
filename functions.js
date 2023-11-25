// JavaScript code
// Define the commerce subjects
const subjects = [
    "Accountancy",
    "Economics",
    "Business Studies",
    "Mathematics",
    "English",
    "Physical Education"
    // Add more commerce subjects here
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
    // Clear the container
    subjectsContainer.innerHTML = "";

    // Create a container for the content options
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    // Define content options for each subject
    const contentOptions = {
        "Accountancy": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "Economics": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "Business Studies": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "Mathematics": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "English": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
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
        "Accountancy": {
            "Notes": "accountancy_notes12.html",
            "Chat Bot": "accountancy_chat12.html",
            "Books": "accountancy_books12.html",
            "Questions and Answers": "accountancy_qa12.html"
        },
        "Economics": {
            "Notes": "economics_notes12.html",
            "Chat Bot": "economics_chat12.html",
            "Books": "economics_books12.html",
            "Questions and Answers": "economics_qa12.html"
        },
        "Business Studies": {
            "Notes": "business_notes12.html",
            "Chat Bot": "business_chat12.html",
            "Books": "business_books12.html",
            "Questions and Answers": "business_qa12.html"
        },
        "Mathematics": {
            "Notes": "math_notes12.html",
            "Chat Bot": "math_chat12.html",
            "Books": "math_books12.html",
            "Questions and Answers": "math_qa12.html"
        },
        "English": {
            "Notes": "english_notes12.html",
            "Chat Bot": "english_chat12.html",
            "Books": "english_books12.html",
            "Questions and Answers": "english_qa12.html"
        },
        "Physical Education": {
            "Notes": "pe_notes12.html",
            "Chat Bot": "pe_chat12.html",
            "Books": "pe_books12.html",
            "Questions and Answers": "pe_qa12.html"
        }
        // Define URLs for other commerce subjects and content options similarly
    };

    // Redirect to the appropriate URL
    if (urls[subject] && urls[subject][option]) {
        window.location.href = urls[subject][option];
    } else {
        alert("Content not found. Please select a valid option.");
    }
}

// Loop through commerce subjects to create circles and attach click events
subjects.forEach((subject) => {
    const subjectCircle = createCircle(subject);
    subjectsContainer.appendChild(subjectCircle);

    subjectCircle.addEventListener("click", function () {
        h1Element.innerText = subject;
        addContentOptions(subject);
    });
});
