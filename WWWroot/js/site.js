// Bundler App JavaScript

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Bundler App initialized');
    
    // Add some interactive features
    initializeNavigation();
    initializeBundlingDemo();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Navigation clicked:', this.textContent);
        });
    });
}

// Bundling demonstration functionality
function initializeBundlingDemo() {
    // Add bundling status indicator
    const statusElement = document.createElement('div');
    statusElement.id = 'bundling-status';
    statusElement.innerHTML = '<small class="text-success">✓ Assets bundled and minified</small>';
    statusElement.style.position = 'fixed';
    statusElement.style.bottom = '10px';
    statusElement.style.right = '10px';
    statusElement.style.background = 'rgba(255, 255, 255, 0.9)';
    statusElement.style.padding = '5px 10px';
    statusElement.style.borderRadius = '4px';
    statusElement.style.border = '1px solid #ddd';
    
    document.body.appendChild(statusElement);
    
    // Show bundling info on click
    statusElement.addEventListener('click', function() {
        showBundlingInfo();
    });
}

// Show bundling information
function showBundlingInfo() {
    const info = {
        webOptimizer: 'Runtime bundling enabled',
        buildBundler: 'Build-time minification configured',
        cacheControl: 'Cache busting with versioning',
        environment: document.location.hostname.includes('localhost') ? 'Development' : 'Production'
    };
    
    console.group('Bundling Configuration');
    Object.keys(info).forEach(key => {
        console.log(`${key}: ${info[key]}`);
    });
    console.groupEnd();
    
    alert('Bundling information logged to console. Press F12 to view.');
}

// Utility functions for bundling
window.BundlerApp = {
    version: '1.0.0',
    getBundleInfo: function() {
        return {
            css: ['site.css', 'bootstrap.min.css'],
            js: ['site.js', 'bootstrap.min.js'],
            bundled: true,
            minified: window.location.hostname !== 'localhost'
        };
    }
};
