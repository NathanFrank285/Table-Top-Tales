// const commentsRouter = require("../../routes/api/comments")

window.addEventListener('DOMContentLoaded', async(event)=>{

    const newCommentButton = document.querySelector(".newComment__submit")
    
    
    newCommentButton.addEventListener("click", async (event) =>{

        const textBox = document.querySelector(".newComment__text")
        const storyId = textBox.getAttribute("storyid")
        const commentBody = textBox.value

        // toDo - how to verify that the person sending this comment is logged in?

        const body = { commentBody, storyId }
        try {
            const commentJson = await fetch("/comments", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        const newComment = await commentJson.json()
        const { comment, user } = newComment
        const commentUl = document.querySelector(".comment")
        const commentDiv = document.createElement('div')
        commentDiv.classList.add('comment__div')
        commentDiv.innerHTML = 
            `
            <li class="comment__body">${comment.body}</li>
            <span class="comment__user">${user.username}</span> <br>
            <button id='${comment.id}' class='comment__delete'> Delete Comment </button>
            `
        
        commentUl.appendChild(commentDiv)
    } catch (error) {
        
    }
    textBox.value = ""
    })


})
