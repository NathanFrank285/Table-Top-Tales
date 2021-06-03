window.addEventListener("DOMContentLoaded", async (event) => {

  const editButton = document.querySelector(".confirmEdit__edit");
  editButton.addEventListener("click", async (event) => {
    const storyId = document.querySelector(".confirmEdit__edit").id;
    const title = document.getElementById("title").value;
    const hook = document.querySelector(".hook").value;
    const body = document.querySelector(".body").value;
    const picture = document.querySelector(".picture").value;
    // let storyId = event.target.id
    let story = { title, hook, body, picture };
    try {
      const res = await fetch(`/stories/api/${storyId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(story),
      });
      if (res.ok) {
        const { storyId } = await res.json();
        window.location.href = `/stories/${storyId}`;
      }
    } catch (error) {
      console.log(error);
    }
  });
});
