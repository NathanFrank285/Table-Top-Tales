window.addEventListener('DOMContentLoaded', async(event)=>{

    const newCommentButton = document.querySelector(".newComment__submit")
    newCommentButton.addEventListener("click", async(event) =>{

        const textBox = document.querySelector(".newComment__text")
        const storyId = textBox.getAttribute("storyid") 
        const commentBody = textBox.innerText
        // console.log(commentBody)
        // toDo - how to verify that the person sending this comment is logged in?

        const body = { commentBody, storyId }

        const newComment = await fetch("/comments", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        // console.log(newComment)
        textBox.innerText = ""
    })


})