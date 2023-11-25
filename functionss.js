// JavaScript code
// Define the commerce subjects
const subjects = [
    "Phycology",
    "Sociology",
    "Political science",
    "IT",
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
    // Create a container for the content options
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options-container";

    // Define content options for each subject
    const contentOptions = {
        "Phycology": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "Sociology": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "Political science": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
        "IT": ["Notes", "Chat Bot", "Books", "Questions and Answers"],
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
        "Phycology": {
            " Notes": "Phycology_notes.html",
            " Chat Bot": "Phycology_chat.html",
            " Books": "Phycology_books.html",
            "Questions and Answers": "Phycology_qa.html"
        },
        "Sociology": {
            "Notes": "sociology_notes.html",
            "Chat Bot": "sociology_chat.html",
            "Books": "sociology_books.html",
            "Questions and Answers": "sociology_qa.html"
        },
        "Political science": {
            "Notes": "political_science_notes.html",
            "Chat Bot": "political_science_chat.html",
            "Books": "political_science_books.html",
            "Questions and Answers": "political_science_qa.html"
        },
        "IT": {
            "Notes": "it_notes.html",
            "Chat Bot": "it_chat.html",
            "Books": "it_books.html",
            "Questions and Answers IT": "it_qa.html"
        },
        "English": {
            "Notes": "english_notes.html",
            "Chat Bot": "english_chat.html",
            "Books": "english_books.html",
            "Questions and Answers": "english_qa.html"
        },
        "Physical Education": {
            "Physical Education Notes": "pe_notes.html",
            "Chat Bot": "pe_chat.html",
            "Books": "pe_books.html",
            "Questions and Answers": "pe_qa.html"
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
        // Clear the container to remove subject circles
        subjectsContainer.innerHTML = "";
        addContentOptions(subject);
    });
});
