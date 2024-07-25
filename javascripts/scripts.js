

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    const projects = document.querySelectorAll('.portfolio-item');
    const closeButtons = document.querySelectorAll('.close-button');

    projects.forEach(project => {
        project.addEventListener('click', () => {
            const detailId = project.getAttribute('data-detail');
            document.getElementById(detailId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const detailId = button.getAttribute('data-close');
            document.getElementById(detailId).style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        const details = document.querySelectorAll('.project-detail');
        details.forEach(detail => {
            if (event.target === detail) {
                detail.style.display = 'none';
            }
        });
    });
});
