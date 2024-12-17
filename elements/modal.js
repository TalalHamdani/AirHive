console.log('Modal script loaded');

// Function to load the modal dynamically
function loadModal() {
    // Check if the modal is already in the DOM
    const modalExists = document.getElementById('sign-in-modal');
    if (!modalExists) {
        // Fetch modal.html file if it doesn't exist
        fetch('elements/modal.html')
            .then(response => response.text())
            .then(data => {
                // Append the modal HTML to the body
                document.body.insertAdjacentHTML('beforeend', data);
                initializeModal(); // Initialize modal functionality
            })
            .catch(err => console.error('Error loading modal:', err));
    } else {
        initializeModal(); // Initialize modal functionality if it already exists
    }
}

// Function to initialize modal functionality
function initializeModal() {
    // Get modal element
    const modal = document.getElementById('sign-in-modal');

    // Get open modal button
    const openModalButton = document.getElementById('sign-in-btn'); // Ensure this button exists in your HTML

    // Get close button
    const closeButton = document.getElementById('sign-in-close');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listener to open the modal
    if (openModalButton) {
        openModalButton.addEventListener('click', openModal);
    } else {
        console.error('Open modal button not found');
    }

    // Event listener for the close button
    closeButton.addEventListener('click', closeModal);

    // Event listener for the window to close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Event listener for form submission
    const form = modal.querySelector('.form'); // Ensure to select the form within the modal
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        // Here you can add your authentication logic
        console.log('Email:', email);
        console.log('Password:', password);

        // Close the modal after submission (optional)
        closeModal();
    });
}

// Load the modal when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', loadModal);