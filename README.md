Overview

A modern, responsive portfolio website template with a soothing color palette and clean design. This template is designed to showcase your work, skills, and professional information in an eye-friendly, modern format.



Features

Modern Design System: Clean, soothing color palette with soft blues and grays

Fully Responsive: Works perfectly on desktop, tablet, and mobile devices

Single Page Application (SPA): Smooth page transitions without reloading

5 Main Sections: Home, Projects, Skills, GitHub, and Contact

Interactive Elements: Hover effects, smooth animations, and modern UI components

Contact Form: Integrated with Formspree for easy form handling

Social Media Integration: Links to your professional profiles

Customizable: Easy to modify colors, content, and layout



File Structure

your-portfolio/
├── index.html          # Main HTML file
├── styles.css          # Main CSS file with all styles
├── script.js           # JavaScript for interactivity
└── README.md           # This documentation file



Customization Guide

1. Personal Information
2. 
Replace all placeholder text marked with <!-- REPLACE: --> comments:

In index.html:

Update <title> tag with your name and job title

Change "Your Name" in the logo and footer

Update your professional tagline and introduction in the About section

Replace project descriptions, titles, and links

Update skills and expertise sections

Add your GitHub stats and links

Update contact information (email, phone, location)

Add your social media links

Important links to update:

GitHub project links

Live demo links

LinkedIn, Twitter, GitHub, Instagram profiles

Formspree form action URL

Email (mailto: links)

Phone number (tel: links)


2. Styling Customization

In styles.css:

The color palette uses CSS custom properties for easy customization:

css
:root {
    /* Color Palette */
    --primary-color: #0d1821;      /* Dark blue/navy */
    --secondary-color: #6c87c5;    /* Soft blue */
    --accent-color: #8ac6d1;       /* Light blue/teal */
    --light-color: #f8f9fa;        /* Off-white */
    --dark-color: #0a141b;         /* Darker navy */
    --text-color: #2d3748;         /* Dark gray for text */
    --text-light: #718096;         /* Light gray for secondary text */
    --success-color: #68b684;      /* Green for success states */
    --card-bg: #ffffff;            /* White for cards */
    --header-bg: #ffffff;          /* White for header */
    --surface-color: #f0f4f8;      /* Light blue-gray for surfaces */
    --border-color: #e2e8f0;       /* Light gray for borders */
    --highlight: #9dc6e0;          /* Highlight color */
    --muted: #94a3b8;              /* Muted color for subtle elements */
}


3. Projects

Add your projects by:

Creating new .project-card elements

Adding project images (or gradient backgrounds)

Writing project descriptions

Adding relevant tags

Linking to GitHub repos and live demos


4. Skills

Update skills by:

Modifying the skill tags in the About section

Updating the skills services cards

Adding your learning goals

Adjusting skill proficiency levels (in the CSS)


5. GitHub Integration

To showcase your GitHub stats:

Replace placeholder stats with your actual numbers

Add links to your repositories

Consider integrating GitHub API for dynamic stats (requires additional JavaScript)



Formspree Setup

Go to Formspree.io and create an account

Create a new form

Copy your unique form endpoint URL

Replace YOUR_FORMSPREE_LINK_HERE in the form action attribute

Test the form to ensure emails are delivered correctly



Browser Support

Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)



Performance Optimization

All images are loaded efficiently

CSS is optimized with modern techniques

JavaScript is minimal and focused on essential functionality

Fonts are loaded from Google Fonts CDN

Icons are from Font Awesome CDN

Accessibility Features

Semantic HTML structure

ARIA labels where needed

Sufficient color contrast

Keyboard navigation support

Focus states for interactive elements



License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.


Support

For issues or questions:

Check the code comments for guidance

Review the customization steps above

Contact via github


Credits

Font Awesome for icons

Google Fonts for Inter typeface

Formspree for form handling

Modern CSS techniques and design patterns


Updates & Maintenance

Regularly update:

Project portfolio with new work

Skills and learning sections

Contact information

Social media links

Performance optimizations as needed
