document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle Functionality
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-times');
    const headerLinkContainer = document.querySelector('.header-link');
    const mainNav = document.querySelector('.main-nav');

    // Toggle visibility of header links and main navigation
    menuIcon.addEventListener('click', () => {
        headerLinkContainer.classList.add('visible');
        mainNav.classList.add('active');
        menuIcon.style.display = 'none'; // Hide bars icon
        closeIcon.style.display = 'block'; // Show close icon
    });

    closeIcon.addEventListener('click', () => {
        headerLinkContainer.classList.remove('visible');
        mainNav.classList.remove('active');
        menuIcon.style.display = 'block'; // Show bars icon
        closeIcon.style.display = 'none'; // Hide close icon
    });

    // Ensure menu closes when clicking outside (only for mobile view)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) { // Check if the screen width is mobile
            if (!event.target.closest('.header') && !event.target.closest('.header-link') && !event.target.closest('.main-nav') && !event.target.closest('.fa-bars')) {
                headerLinkContainer.classList.remove('visible');
                mainNav.classList.remove('active');
                menuIcon.style.display = 'block'; // Show bars icon
                closeIcon.style.display = 'none'; // Hide close icon
            }
        }
    });

    // Prevent clicks on menu icon and close icon from propagating to document
    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    closeIcon.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Handle link click event
    const handleLinkClick = (event, links) => {
        event.stopPropagation(); // Prevent document click from triggering

        links.forEach(link => link.classList.remove('active'));
        event.currentTarget.classList.add('active');
    };

    // Header Navigation Active Link Functionality
    const headerNavLinks = document.querySelectorAll('.header-link a');
    headerNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            handleLinkClick(event, headerNavLinks);
        });
    });

    // Main Navigation Active Link Functionality
    const mainNavLinks = document.querySelectorAll('.main-nav ul li a');
    mainNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            handleLinkClick(event, mainNavLinks);
            // Handle dropdown icon change
            const dropdown = link.nextElementSibling;
            const icon = link.querySelector('.dropdown-icon');
            if (dropdown && dropdown.style.display === 'block') {
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');
            } else if (dropdown) {
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-up');
            }
        });
    });

    // Show dropdown on click and toggle icon
    const dropdownIcons = document.querySelectorAll('.dropdown-icon');
    dropdownIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation();
            const dropdown = icon.parentElement.nextElementSibling;
            if (dropdown && dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');
            } else if (dropdown) {
                dropdown.style.display = 'block';
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-up');
            }
        });
    });

    // Remove "active" class when clicking outside of the links
    document.addEventListener('click', function() {
        if (window.innerWidth <= 768) { // Check if the screen width is mobile
            headerNavLinks.forEach(link => link.classList.remove('active'));
            mainNavLinks.forEach(link => link.classList.remove('active'));

            dropdownIcons.forEach(icon => {
                const dropdown = icon.parentElement.nextElementSibling;
                if (dropdown && dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                    icon.classList.remove('fa-caret-up');
                    icon.classList.add('fa-caret-down');
                }
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const searchInput = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-bar .fa-search');
    const closeIcon = document.querySelector('.search-bar .fa-times');
    const searchBar = document.querySelector('.search-bar');

    // Toggle search bar visibility
    searchIcon.addEventListener('click', () => {
        searchBar.classList.add('expanded');
        searchInput.focus();
    });

    closeIcon.addEventListener('click', () => {
        searchBar.classList.remove('expanded');
        searchInput.value = ''; // Optional: Clear the input field
        searchInput.blur();
    });

    // Ensure search bar closes when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-bar')) {
            searchBar.classList.remove('expanded');
            searchInput.value = ''; // Optional: Clear the input field
            searchInput.blur();
        }
    });

    // Prevent clicks on the search bar from closing it
    searchBar.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

// Select the carousel image element
const carouselImage = document.getElementById('carousel-image');

// Select all the carousel icons
const carouselIcons = document.querySelectorAll('.carousel-icon');

// Add click event listener to each icon
carouselIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    // Get the target image src from the data-src attribute
    const targetImageSrc = this.getAttribute('data-src');
    
    // Update the src attribute of the carousel image
    carouselImage.setAttribute('src', targetImageSrc);
  });
});
