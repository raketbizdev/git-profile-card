class ProfileCard {
  constructor(userData) {
    this.avatar_url = userData.avatar_url || "";
    this.name = userData.name || "";
    this.bio = userData.bio || "";
    this.html_url = userData.html_url || "";
    this.twitter_username = userData.twitter_username || "";
  }

  generateCard() {
    const avatarUrl = this.avatar_url || "";
    const avatar = avatarUrl
      ? `<img src="${avatarUrl}" class="card-img-top" alt="Avatar">`
      : "";

    const name = this.name ? `<h5 class="card-title">${this.name}</h5>` : "";

    const bio = this.bio ? `<p class="card-text">${this.bio}</p>` : "";

    const githubLink = this.html_url
      ? `<a href="${this.html_url}" target="_blank" class="btn btn-primary">GitHub Profile</a>`
      : "";

    const card = `
      <div class="card">
        ${avatar}
        <div class="card-body">
          ${name}
          ${bio}
          ${githubLink}
        </div>
      </div>
    `;

    return card;
  }
}

module.exports = ProfileCard;
