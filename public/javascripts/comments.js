// const commentsRouter = require("../../routes/api/comments")

window.addEventListener('DOMContentLoaded', async(event)=>{
    //* Deleting a Story

    // document
    //   .getElementById("storybtns__delete")
    //   .addEventListener("click", async (event) => {
    //     // const response = await fetch(`/stories/${id}/delete`)
    //     const id = event.target.storyid
    //     console.log(id);
    //     // window.location.href = `/stories/${id}/delete`;

    //   });

    //* Deleting a comment
  document.addEventListener("click", async (event) => {
    const delbuttonClass = event.target.className;
    const deleteId = event.target.id;


    if (delbuttonClass === "comment__delete") {
      try {
        const res = await fetch(`/comments/${deleteId}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })

          if (!res.ok) {
            throw res;
          } else{
            const div = document.getElementById(`comment-${event.target.id}`)
          div.remove()};
      } catch (err) {
        console.error(err);
      }
    }
  });

  //* Adding a new comment
  const newCommentButton = document.querySelector(".newComment__submit");
  newCommentButton.addEventListener("click", async (event) => {
    const textBox = document.querySelector(".newComment__text");
    const storyId = textBox.getAttribute("storyid");
    const commentBody = textBox.value;

    // toDo - how to verify that the person sending this comment is logged in?

    const body = { commentBody, storyId };
    try {
      const commentJson = await fetch("/comments", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      const newComment = await commentJson.json();
      const { comment, user } = newComment;
      const commentUl = document.querySelector(".commentBox");
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment__div");
      commentDiv.setAttribute("id", `comment-${comment.id}`);
      commentDiv.innerHTML = `
            <li class="comment__body">${comment.body}</li>
            <span class="comment__user">${user.username}</span> <br>
            <button id='${comment.id}' class='comment__delete'> Delete Comment </button>
            `;

      commentUl.appendChild(commentDiv);
    } catch (error) {}
    textBox.value = "";
  });
})
