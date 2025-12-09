// Page Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-container').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.querySelector(`.nav-link[data-page="${pageId.replace('-page', '')}"]`).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize page navigation
document.addEventListener('DOMContentLoaded', function() {
    // Set home as active page
    showPage('home-page');
    
    // Add click events to navigation links
    document.querySelectorAll('.nav-link, .footer-link, .logo').forEach(link => {
        link.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            showPage(`${page}-page`);
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
    
    // Add click events to buttons with data-page attribute
    document.querySelectorAll('.btn[data-page]').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            showPage(`${page}-page`);
        });
    });
    
    // Mobile Menu Toggle
    document.querySelector('.mobile-menu').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.textContent.toLowerCase();
            
            // Filter projects
            projectCards.forEach(card => {
                if(filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    const tags = card.querySelectorAll('.project-tag');
                    let hasTag = false;
                    
                    tags.forEach(tag => {
                        if(tag.textContent.toLowerCase().includes(filterValue)) {
                            hasTag = true;
                        }
                    });
                    
                    card.style.display = hasTag ? 'block' : 'none';
                }
            });
        });
    });

    // Form Submission with Formspree
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(this);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert('Sorry, there was an error sending your message. Please try again or email me directly at your.email@gmail.com');
            console.error('Form submission error:', error);
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
});