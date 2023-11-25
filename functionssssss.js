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
        "Phycology": ["Notes", "Chat Bot", "Books", "Q&A"],
        "Sociology": ["Notes", "Chat Bot", "Books", "Q&A"],
        "Political science": ["Notes", "Chat Bot", "Books", "Q&A"],
        "IT": ["Notes", "Chat Bot", "Books", "Q&A"],
        "English": ["Notes", "Chat Bot", "Books", "Q&A"],
        "Physical Education": ["Notes", "Chat Bot", "Books", "Q&A"]
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
            "Notes": "phycology_notes13.html",
            "Chat Bot": "phycology_chat13.html",
            "Books": "phycology_books13.html",
            "Q&A": "phycology_qa13.html"
        }, 
        "Sociology": {
            "Notes": "sociology_notes13.html",
            "Chat Bot": "sociology_chat13.html",
            "Books": "sociology_books13.html",
            "Q&A": "sociology_qa13.html"
        },
        "Political science": {
            "Notes": "political_science_notes13.html",
            "Chat Bot": "political_science_chat13.html",
            "Books": "political_science_books13.html",
            "Q&A": "political_science_qa13.html"
        },
        "IT": {
            "Notes": "it_notes13.html",
            "Chat Bot": "it_chat13.html",
            "Books": "it_books13.html",
            "Q&A": "it_qa13.html"
        },
        "English": {
            "Notes": "english_notes12.html",
            "Chat Bot": "english_chat12.html",
            "Books": "english_books12.html",
            "Q&A": "english_qa12.html"
        },
        "Physical Education": {
            "Notes": "pe_notes12.html",
            "Chat Bot": "pe_chat12.html",
            "Books": "pe_books12.html",
            "Q&A": "pe_qa12.html"
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
