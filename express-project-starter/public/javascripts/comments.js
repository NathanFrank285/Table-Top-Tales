window.addEventListener('DOMContentLoaded', async(event)=>{

    const newCommentButton = document.querySelector(".newComment__submit")
    newCommentButton.addEventListener("click", async (event) =>{

        const textBox = document.querySelector(".newComment__text")
        const storyId = textBox.getAttribute("storyid")
        const commentBody = textBox.value

        // toDo - how to verify that the person sending this comment is logged in?

        const body = { commentBody, storyId }
        try {
            const newComment = await fetch("/comments", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })} catch (error) {

        }
        textBox.value = "now posted"
    })


})
