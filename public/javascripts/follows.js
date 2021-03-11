const followbtn = document.getElementById('follow-button');

const profileUserId = followbtn.dataset.profileUserId
const loggedinUserId = followbtn.dataset.localuser
const answer = followbtn.dataset.answer

console.log(followbtn.dataset);
if (answer == "true") {
  followbtn.classList.remove("follow-button__following");
  followbtn.classList.add("follow-button__unfollowing")
  followbtn.innerHTML = "Unfollow"
} else {
  followbtn.classList.remove("follow-button__unfollowing");
  followbtn.classList.add("follow-button__following")
  followbtn.innerHTML = "Follow"
}


// followbtn.addEventListener('click', async (e) => {
//   e.preventDefault();
//   const user = followbtn.dataset.user;
//   const follower = followbtn.dataset.follower;



//   const res = await fetch('/follow/new-follow', {
//     method: "POST",
//     headers: new Headers({ "Content-Type": "application/json" }),
//     body: JSON.stringify({ userId, followerId })
//   })
//   const response = await res.json();
// })

