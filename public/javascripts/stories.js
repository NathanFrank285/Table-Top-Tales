window.addEventListener('DOMContentLoaded', async(event)=>{


  const delButton = document.querySelector(".confirmDelete__delete")
    delButton.addEventListener('click', async (event)=>{
      let storyId = event.target.id
      try {const res = await fetch(`/stories/${storyId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const {userId} = await res.json()
        window.location.href = `/profile/${{userId}}`;
      }
    } catch (error) {
        console.log(error);
      }

    })




})
