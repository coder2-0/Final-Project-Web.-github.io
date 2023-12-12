//JS CODE FOR THE FAMILY SECTION
document.addEventListener("DOMContentLoaded", function() {
    var familyInfoDiv = document.getElementById("familyInfo");

    var knowMoreBtn = document.getElementById("knowMoreBtn");

    var unlockBtn = document.getElementById("unlockBtn");

    var petImage = document.querySelector(".pet");

    knowMoreBtn.addEventListener("click", function() {
        var familyMember = prompt("Which family member would you like to know more about? (e.g., parents, uncle, aunt, grandparents, siblings)");

        if (familyMember) {
            familyMember = familyMember.toLowerCase();
            switch (familyMember) {
                case "parents":
                    displayFamilyInfo("Parents", "They are an essential part of my life, providing love and support.");
                    break;
                case "uncle":
                    displayFamilyInfo("Uncle", "He is a cherished member of our joint family, adding joy and camaraderie.");
                    break;
                case "aunt":
                    displayFamilyInfo("Aunt", "She is a wonderful presence in our family, contributing to our happiness.");
                    break;
                case "grandparents":
                    displayFamilyInfo("Grandparents", "They are the pillars of our family, offering wisdom and affection.");
                    break;
                    case "siblings":
                    displayFamilyInfo("Siblings", "They are an important part of my life and always support me. They add colors to my colorless life.");
                    break;
                default:
                    displayFamilyInfo("Invalid Choice", "Please enter a valid family member (e.g., parents, uncle, aunt, grandparents, siblings).");
                    break;
            }
        }
    });

    unlockBtn.addEventListener("click", function() {
        petImage.style.display = "block";
        displayFamilyInfo("Meet Simi, My Pet Husky", "She is my favorite pet, and I love her a lot. I miss her, and I want to meet her really soon.");
    });

    function displayFamilyInfo(title, content) {
        familyInfoDiv.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p>";
    }
});