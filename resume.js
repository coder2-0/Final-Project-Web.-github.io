// JS CODE FOR RESUME
document.addEventListener("DOMContentLoaded", function() {
    function toggleListVisibility(sectionId) {
        var section = document.getElementById(sectionId);
        var listItems = section.getElementsByTagName("li");

        for (var i = 0; i < listItems.length; i++) {
            listItems[i].classList.toggle("hidden");
        }
    }

    var toggleContactBtn = document.getElementById("toggleContactBtn");
    toggleContactBtn.addEventListener("click", function() {
        document.getElementById("contactInfo").classList.toggle("hidden");
    });

    var resumeSections = document.querySelectorAll(".resume-section");
    resumeSections.forEach(function(section) {
        section.addEventListener("click", function() {
            toggleListVisibility(section.id);
        });
    });
});
