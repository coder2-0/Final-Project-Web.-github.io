document.addEventListener("DOMContentLoaded", function () {
    var rows = document.querySelectorAll("tbody tr");

    function toggleDescription(row) {
        row.classList.toggle("show-description");
    }

    rows.forEach(function (row) {
        row.addEventListener("click", function (event) {
            toggleDescription(this);
            event.stopPropagation();
        });

        row.addEventListener("touchstart", function (event) {
            toggleDescription(this);
            event.stopPropagation();
        });
    });

    window.addEventListener("resize", function () {
        console.log("Window resized!");
    });

    var form = document.getElementById("yourFormId");
    form.addEventListener("submit", function (event) {
        console.log("Form submitted!");
        event.preventDefault();
    });
});
