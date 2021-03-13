window.addEventListener('DOMContentLoaded', async (event) => {

  const likeButtons = document.querySelectorAll("#storybtns__like");

  for (const likeButton of likeButtons) {
    likeButton.addEventListener('click', async (event) => {
      try {
        // console.log(likeButton.classList.contains('liked-false'))
        if (likeButton.classList.contains('liked-false')) {
          const userId = likeButton.dataset["userid"]
          const likeableId = likeButton.dataset["likeableid"];
          const likeableType = likeButton.dataset["likeabletype"];
          const body = { userId, likeableId, likeableType };

          const res = await fetch("/likes/api/new", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
          });
          if (res.ok) {
            likeButton.classList.replace('liked-false', 'liked-true')
          }
        } else {
          const userId = likeButton.dataset["userid"]
          const likeableId = likeButton.dataset["likeableid"];
          const likeableType = likeButton.dataset["likeabletype"];
          const body = { userId, likeableId, likeableType };
          console.log(body)
          const res = await fetch("/likes/api/unlike", {
            method: "DELETE",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
          });
          if (res.ok) {
            likeButton.classList.replace('liked-true', 'liked-false')
          }
        }
      } catch (error) {

      }

    })
  }
})

// Follow's Button

const followbtn = document.getElementById('storybtns__follow');

const followerId = followbtn.dataset.profileuser
const answer = followbtn.dataset.answer
let btnBool;

if (answer == "true") {
  //if initially following
  followbtn.classList.remove("follow-button__following");
  followbtn.classList.add("follow-button__unfollowing")
  followbtn.innerHTML = "Following"
  btnBool = true;
} else {
  // if not initally following
  followbtn.classList.remove("follow-button__unfollowing");
  followbtn.classList.add("follow-button__following")
  followbtn.innerHTML = "Follow"
  btnBool = false;
}


followbtn.addEventListener('click', async (e) => {
  e.preventDefault();
  if (btnBool) {
    //true then deleting from database

    const res = await fetch('/follow/delete-follow', {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ followerId })
    })
    const response = await res.json();

    followbtn.classList.remove("follow-button__unfollowing");
    followbtn.classList.add("follow-button__following");
    followbtn.innerHTML = "Follow";

  }
  else {
    //if false we are adding to following array. post route
    const res = await fetch('/follow/new-follow', {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ followerId })
    })

    const response = await res.json();

    followbtn.classList.remove("follow-button__following");
    followbtn.classList.add("follow-button__unfollowing")
    followbtn.innerHTML = "Following"
  }



  btnBool = !btnBool;
})

