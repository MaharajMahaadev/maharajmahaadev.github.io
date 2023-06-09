function navigateTo(sectionId) {
  // Hide all sections
  var sections = document.getElementsByClassName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  // Show the selected section
  var section = document.getElementById(sectionId);
  if (section) {
    section.style.display = 'flex';
  }

  // Remove "active" class from all buttons
  var buttons = document.getElementsByClassName('nav-button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  // Add "active" class to the current button
  var currentButton = document.querySelector(`.nav-button[href='#'][onclick="navigateTo('${sectionId}')"]`);
  if (currentButton) {
    currentButton.classList.add('active');
  }
}

window.addEventListener('DOMContentLoaded', function() {
  navigateTo('home');
});

/*document.addEventListener('DOMContentLoaded', function () {
  const projects = document.querySelectorAll('.project');
  let activeProject = null;

  projects.forEach(function (project) {
    project.addEventListener('click', function () {
      const details = project.querySelector('.project-details');

      if (activeProject !== null && activeProject !== project) {
        const activeDetails = activeProject.querySelector('.project-details');
        activeDetails.style.display = 'none';
      }

      details.style.display = details.style.display === 'none' ? 'block' : 'none';
      activeProject = project;
    });
  });
});*/
document.addEventListener('DOMContentLoaded', function () {
  const projects = document.querySelectorAll('.project');

  projects.forEach(function (project) {
    project.addEventListener('click', function () {
      const details = project.querySelector('.project-details');

      projects.forEach(function (otherProject) {
        const otherDetails = otherProject.querySelector('.project-details');
        if (otherProject !== project) {
          otherDetails.style.display = 'none';
        }
      });

      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
  });
});
