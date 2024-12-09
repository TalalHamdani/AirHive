@echo off

:: Create HTML files
echo. > index.html
echo. > video.html

:: Create directories
mkdir css
mkdir js
mkdir img
mkdir img\thumbnails

:: Create CSS files
echo. > css\style.css
echo. > css\bootstrap.css

:: Create JavaScript files
echo. > js\main.js
echo. > js\video.js
echo. > js\data.js

:: Add a placeholder image
echo. > img\logo.png

:: Create README and LICENSE files
echo. > README.md
echo. > LICENSE

:: Create .gitignore
echo. > .gitignore

echo AirHive project structure created successfully!
pause
