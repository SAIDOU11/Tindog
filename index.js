import dogsData from "./data.js";
import Dog from "./dogs.js";

let dogsArray = ["Teddy", "Rex", "Bella"];

let hasBeenLiked = false;
let hasBeenSwiped = false;

const getNewDog = () => {
  const nextDogData = dogsData[dogsArray.shift()];
  return nextDogData ? new Dog(nextDogData) : {};
};

const like = () => {
  document.getElementById("like").addEventListener("click", () => {
    console.log("button like");
    hasBeenLiked = true;
    document.querySelector(".stamp-like").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".stamp-like").classList.add("hidden");
      if (hasBeenLiked) {
        return (document.body.innerHTML = ` 
    <div class="find-love">
      <h2>Congratulations <br> your find <br> your love</h2> 
      <h2>❤️</h2>
    </div>  
    `);
      }
    }, 3000);
  });
};
like();

const dislike = () => {
  document.getElementById("dislike").addEventListener("click", () => {
    console.log("button dislike");
    hasBeenSwiped = true;
    document.querySelector(".stamp-none").classList.remove("hidden");

    setTimeout(() => {
      document.querySelector(".stamp-none").classList.add("hidden");
      if (hasBeenSwiped) {
        if (dogsArray.length > 0) {
          dogProfil = getNewDog();
          render();
        } else {
          return (document.body.innerHTML = ` 
            <div class="no-love">
              <h2>We're sorry <br> there is <br> no love for you</h2> 
              <h2>💔</h2>
            </div>  
            `);
        }
      }
    }, 2000);
  });
};
dislike();
let dogProfil = getNewDog();

function render() {
  document.getElementById("dog-image").innerHTML = dogProfil.renderNameBio();
}
render();
