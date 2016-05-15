function load() {
    var animations = AnimationHandler;
    var projects = ProjectHandler;
    
    // Load in projects
    animations.init();
    animations.loadProjects();
    
    // Load project handler
    projects.init();
}

var AnimationHandler = {
    init: function() {
        console.log("-- Animations loaded --");
    },
    
    loadProjects: function() {
        [].forEach.call(document.querySelectorAll('.project'), (project) => {
            //console.log(project);
            project.style.opacity = 1;
        });
    }
};

var ProjectHandler = {
    init: function() {
        console.log("-- Projects loaded --");
    }
};

setTimeout(() => load(), 2000);
