document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card").forEach(card => {
        let itemId = card.dataset.id;
        let reaction = localStorage.getItem(itemId + "-reaction");

        if (reaction === "heart") {
            let heartBtn = card.querySelector(".heart-btn");
            let icon = heartBtn.querySelector("i");

            heartBtn.classList.remove("btn-outline-danger");
            heartBtn.classList.add("btn-danger");
            icon.classList.remove("bi-heart");
            icon.classList.add("bi-heart-fill");
        }
    });

    $(".heart-btn").click(function () {
        let card = $(this).closest(".card");
        let itemId = card.data("id");
        let icon = $(this).find("i");

        if (localStorage.getItem(itemId + "-reaction") === "heart") {
            localStorage.removeItem(itemId + "-reaction");
            $(this).removeClass("btn-danger").addClass("btn-outline-danger");
            icon.removeClass("bi-heart-fill").addClass("bi-heart");
        } else {
            localStorage.setItem(itemId + "-reaction", "heart");
            $(this).removeClass("btn-outline-danger").addClass("btn-danger");
            icon.removeClass("bi-heart").addClass("bi-heart-fill");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    loadComments();
});

function postComment() {
    let commentInput = document.getElementById("commentInput");
    let commentText = commentInput.value.trim();
    if (commentText === "") return;

    let commentData = {
        text: commentText,
        timestamp: new Date().toLocaleString(),
        id: Date.now()
    };

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentData);
    localStorage.setItem("comments", JSON.stringify(comments));

    addCommentToDOM(commentData);
    commentInput.value = "";

    let commentBox = document.getElementById("commentList");
    commentBox.scrollTop = commentBox.scrollHeight;
}

function addCommentToDOM(comment) {
    let commentList = document.getElementById("commentList");
    let newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.setAttribute("data-id", comment.id);
    newComment.innerHTML = `
        <img src="images/anonymouspp.jpg" alt="User Avatar" style="width: 20px; height: 20px;">
        <div class="comment-content">
            <strong>Guest</strong>
            <p>${comment.text}</p>
            <span class="comment-meta">${comment.timestamp}</span>
        </div>
        <div class="btn-group">
            <span class="delete-comment" onclick="deleteComment(${comment.id})"><button class="btn btn-danger">Delete</button</span>
        </div>
            `;
    commentList.appendChild(newComment);
}

function deleteComment(commentId) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments = comments.filter(comment => comment.id !== commentId);
    localStorage.setItem("comments", JSON.stringify(comments));
    document.querySelector(`[data-id='${commentId}']`).remove();
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(comment => addCommentToDOM(comment));
}

document.getElementById("commentInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        postComment();
    }
});