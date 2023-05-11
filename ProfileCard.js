class ProfileCard {
  constructor(userData) {
    this.avatar_url = userData.avatar_url || "";
    this.name = userData.name || "";
    this.bio = userData.bio || "";
    this.html_url = userData.html_url || "";
    this.twitter_username = userData.twitter_username || "";
    this.yOffset = 40;
    this.lineHeight = 16;
  }

  generateSVG() {
    const avatarUrl = this.avatar_url || "";
    const avatar = avatarUrl
      ? `<image href="${avatarUrl}" x="20" y="20" width="100" height="100" rx="50"/>`
      : "";

    const name = this.name
      ? `<text x="140" y="30" fill="white" font-family="'Segoe UI', 'Ubuntu', sans-serif" font-size="16" font-weight="bold">${this.name}</text>`
      : "";

    const lines = this.bio.split("\n");
    const bio = this.bio
      ? `<foreignObject x="140" y="${this.yOffset}" width="240" height="80">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Segoe UI', 'Ubuntu', sans-serif; font-size: 14px; line-height: ${
          this.lineHeight
        }px; color: white; width: 100%; height: 100%;">
          ${lines.map((line) => `<p>${line}</p>`).join("")}
        </div>
      </foreignObject>`
      : "";

    const bioHeight = lines.length * this.lineHeight; // Calculate the height of the bio based on the number of lines

    const githubLinkOffset = this.yOffset + bioHeight + 80; // Set the vertical offset for the githubLink

    const githubLink = this.html_url
      ? `<a href="${this.html_url}" target="_blank">
        <rect x="140" y="${githubLinkOffset}" width="100" height="30" rx="5" fill="#0366D6"/>
        <text x="150" y="${
          githubLinkOffset + 20
        }" fill="white" font-family="'Segoe UI', 'Ubuntu', sans-serif" font-size="14">GitHub Profile</text>
      </a>`
      : "";

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="425" height="auto" viewBox="0 0 400 200" fill="none">
        <rect width="400" height="200" rx="10" fill="#282C34"/>
        ${avatar}
        ${name}
        ${bio}
        ${githubLink}
      </svg>
    `;

    return svg;
  }
}

module.exports = ProfileCard;
