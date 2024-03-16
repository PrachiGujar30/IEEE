document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtn = document.getElementById("read-more-btn");
    var fullText = document.getElementById("ieee-full-text");
    var shortText = document.getElementById("ieee-short-text");

    readMoreBtn.addEventListener("click", function() {
        if (fullText.style.display === "none") {
            fullText.style.display = "block";
            shortText.style.display = "none";
            readMoreBtn.innerText = "Read Less";
        } else {
            fullText.style.display = "none";
            shortText.style.display = "block";
            readMoreBtn.innerText = "Read More";
        }
    });
});
s