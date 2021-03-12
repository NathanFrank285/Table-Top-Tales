window.addEventListener('DOMContentLoaded', async (event) => {

  const likeButton = document.getElementById("storybtns__like");
  likeButton.addEventListener('click', async (event) => {
    try {
      // console.log(likeButton.classList.contains('liked-false'))
      if(likeButton.classList.contains('liked-false')){
        const userId = likeButton.dataset["userid"]
        const likeableId = likeButton.dataset["likeableid"];
        const likeableType = likeButton.dataset["likeabletype"];
        const body = {userId, likeableId, likeableType};

        const res = await fetch("/likes/api/new", {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
          if(res.ok){
            likeButton.classList.replace('liked-false', 'liked-true')
          }
      } else {
        const userId = likeButton.dataset["userid"]
        const likeableId = likeButton.dataset["likeableid"];
        const likeableType = likeButton.dataset["likeabletype"];
        const body = {userId, likeableId, likeableType};
        console.log(body)
        const res = await fetch("/likes/api/unlike", {
          method: "DELETE",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
        if(res.ok){   
          likeButton.classList.replace('liked-true', 'liked-false')
        }
      }
    } catch (error) {

    }

  })




})
