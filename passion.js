document.addEventListener("DOMContentLoaded", () => {
    let currentContent = 1; 
    const exposureHeading = document.getElementById('exposureHeading');
    const exposureText = document.getElementById('exposureText');
    const industryHeading = document.getElementById('industryHeading');
    const industryText = document.getElementById('industryText');

    
    function toggleContent() {
        if (currentContent === 1) {
            exposureHeading.textContent = 'Early Technological Exposure';
            exposureText.textContent = 'Early technological exposure is crucial in forming a persons love for software development. I am one of many people who have been enthralled with technology since we were little. Writing the initial few lines of code can frequently evoke a feeling of surprise and achievement. The potential to create and innovate through software development becomes a driving force as one goes deeper into the field of programming. This early experience establishes the groundwork for a lifetime interest in software engineering and coding.';
        } else {
            industryHeading.textContent = 'The Tech Industrys Challenging Nature';
            industryText.textContent = 'The passion for software development is mostly fueled by the demanding nature of the tech sector. People need to continuously improve their skills and stay up to date with the latest advancements in the ever changing and dynamic field of technology. This requirement for ongoing education and adaptation encourages a strong sense of commitment to the programming craft. Many engineers have an intense love for what they do, which is partly fueled by the endurance and tenacity needed to manage the challenges of software development.';
        }
        currentContent = 3 - currentContent; 
    }

    
    const changeContentBtn = document.getElementById('changeContentBtn');
    changeContentBtn.addEventListener('click', toggleContent);
});
