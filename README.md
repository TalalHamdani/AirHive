AirHive Project

Overview
AirHive is a dynamic front-end only web application designed to provide users with an immersive video-based experience. The platform includes functionalities for user authentication, subscriptions, and personalized content. Users can explore and manage pre-uploaded video content seamlessly while enjoying a user-friendly interface.

Features:

Authentication
• JSON-based Authentication: User authentication is managed using a simple JSON file to store and verify user credentials.
• Session Persistance: Session persistance using localStorage.
• Dynamic Navbar: Displays user profile or sign-in button based on the authentication state.

Video Management
• Pre-Uploaded Videos: Videos are pre-uploaded and stored locally within the project directory.
• Upload Modal: Currently allows user interaction but does not support video uploads.
• Conditional Access: Pages like Subscriptions, Saved Videos, and Playlists show tailored content based on user authentication status.

User Experience
• Dark Mode Toggle: Users can switch between light and dark modes, with preferences stored in localStorage.
• Responsive Design: Optimized for various devices with an adaptable layout.

Sidebar
• Collapsible Sidebar: Users can toggle the sidebar’s state, which is saved using localStorage to maintain their preference across sessions.

Pages
• Home Page: Displays pre-set videos.
• Trending Page: Displays trending videos.
• Subscriptions Page: Shows personalized subscriptions if logged in; otherwise, prompts for login.
• Playlists and Saved Videos: Tailored content based on user authentication.

Technologies Used:

Frontend
• HTML, CSS, JavaScript: Core web technologies for structure, styling, and interactivity.

Hosting
• Vercel: Deployment and hosting platform for seamless scalability and performance
• Domain: https://airhive-pk.vercel.app

Contributors:
• Syed Talal Hamdani
• Ahmad Jawad