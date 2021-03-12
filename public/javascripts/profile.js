const followbtn = document.getElementById('follow-button');

const followerId = followbtn.dataset.profileuser
const answer = followbtn.dataset.answer
let btnBool;

if (answer == "true") {
  //if initially following
  followbtn.classList.remove("follow-button__following");
  followbtn.classList.add("follow-button__unfollowing")
  followbtn.innerHTML = "Unfollow"
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
    followbtn.innerHTML = "Unfollow"
  }



  btnBool = !btnBool;
})

