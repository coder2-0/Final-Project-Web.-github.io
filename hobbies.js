//JS CODE FOR HOBBIES
document.addEventListener("DOMContentLoaded", function () {
    var hobbyList = document.getElementById("hobbyList");
    var hobbyTitle = document.getElementById("hobbyTitle");
    var hobbyDescription = document.getElementById("hobbyDescription");
    var hobbyImage = document.getElementById("hobbyImage");

    var hobbiesData = [
        {
            id: "SINGING",
            title: "SINGING",
            description: "I love singing and expressing myself through music. I have won many prices at school in field of singing and was consideres as best singer of my school.",
            image: "singing.jpg",
        },
        {
            id: "DANCING",
            title: "DANCING",
            description: "Dancing is my passion, and I enjoy various dance styles. I think dancing helps me to stay fit and healthy. It is good exercise to keep body in shape.",
            image: "dancing.jpg",
        },
        {
            id: "ATHLETICS",
            title: "ATHLETICS",
            description: "I stay active through athletics and enjoy various sports. I won state medal in 2000m run in Under-19 games. Also, my inspiration is Usain Bolt, who is considered as the fastest man in the world.",
            image: "athletics.jpg",
        },
        {
            id: "CHESS",
            title: "CHESS",
            description: "Chess is a game that challenges my mind and strategic thinking. This game helps me to stay mentally active. This is also useful to make me feel fresh.",
            image: "chess.jpg",
        },
        {
            id: "PUBLIC_SPEAKING",
            title: "PUBLIC SPEAKING",
            description: "I engage in public speaking to express my thoughts and ideas. I often participated in school debate comepitions and bagged many trophies for my school in inter school competition.",
            image: "public_speaking.jpg",
        },
        {
            id: "READING",
            title: "READING",
            description: "Reading is a favorite pastime, and I enjoy exploring different genres. I love to read Science-Fiction books as this is my favourite genre.",
            image: "reading.jpg",
        },
    ];

    hobbyList.addEventListener("click", function (event) {
        var hobbyId = event.target.getAttribute("data-hobby");
        displayHobbyDetails(hobbyId);
    });

    function displayHobbyDetails(hobbyId) {
        var hobby = hobbiesData.find(item => item.id === hobbyId);

        if (hobby) {
            var title = hobby.title;
            var description = hobby.description;
            var image = hobby.image;

            hobbyTitle.textContent = title;
            hobbyDescription.textContent = description;
            hobbyImage.src = image;

            document.getElementById("hobbyDetails").style.display = "block";
        }
    }
});
