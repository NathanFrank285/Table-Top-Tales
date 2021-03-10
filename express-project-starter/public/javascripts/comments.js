window.addEventListener('DOMContentLoaded', async(event)=>{

    const newCommentButton = document.querySelector(".newComment__submit")
    newCommentButton.addEventListener("click", async(event) =>{

        const textBox = document.querySelector(".newComment__text")
        const storyId = textBox.getAttribute("storyid") 
        const body = textBox.innerText
        // toDo - how to verify that the person sending this comment is logged in?

        const newComment = await fetch()

    })


})