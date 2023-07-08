class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  renderNameBio() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `
    <img class="profil-image" src=${avatar} alt="Profil pic" />
      <div id="name-bio">
        <p class="profil-name">${name}, ${age}</p>
        <p class="profil-bio">${bio}</p>
      </div>
    `;
  }
}

export default Dog;
