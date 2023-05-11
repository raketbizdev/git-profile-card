const axios = require("axios");
const ProfileCard = require("./ProfileCard");

module.exports = async (req, res) => {
  const username = req.query.username;

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const userData = response.data;
    const profileCard = new ProfileCard(userData);
    const svgContent = profileCard.generateSVG();

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svgContent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
};
