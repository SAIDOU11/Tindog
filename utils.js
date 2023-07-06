const like = () => {
  document.getElementById("like").addEventListener("click", () => {
    console.log("button like");
    document.querySelector(".stamp-like").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".stamp-like").classList.add("hidden");
    }, 3000);
  });
};

const dislike = () => {
  document.getElementById("dislike").addEventListener("click", () => {
    console.log("button dislike");
    document.querySelector(".stamp-none").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".stamp-none").classList.add("hidden");
    }, 1000);
  });
};

export { like, dislike };
