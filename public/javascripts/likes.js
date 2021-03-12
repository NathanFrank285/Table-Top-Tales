window.addEventListener('DOMContentLoaded', async (event) => {

  const likeButton = document.getElementById("storybtns__like");
  likeButton.addEventListener('click', async (event) => {
    try {
      const userId = likeButton.dataset["userid"]
      const likeableId = likeButton.dataset["likeableid"];
      const likeableType = likeButton.dataset["likeabletype"];
      console.log(userId, likeableId, likeableType);
      const body = {userId, likeableId, likeableType};

      const res = await fetch("/likes/api/new", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      let response = await res.json();
      //todo if we get a succesful like response, change the color of the like button! think about potential errors to show
      console.log(response);
    } catch (error) {

    }

  })




})
