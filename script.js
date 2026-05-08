// ================= UPLOAD FORM =================

const uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const file = document.getElementById("fileUpload").files[0];

    if(title === "" || description === "" || !file){

        alert("Please fill all fields!");

        return;
    }

    alert(
        "File Uploaded Successfully!\n\n" +
        "Title: " + title +
        "\nFile Name: " + file.name
    );

    uploadForm.reset();

});

// ================= BUTTON EFFECT =================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});