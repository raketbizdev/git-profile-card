const axios = require("axios");
const { send } = require("micro");
const { router, get } = require("microrouter");
const url = require("url");
const ProfileCard = require("./ProfileCard"); // Update the file path if necessary

const handler = async (req, res) => {
  const query = url.parse(req.url, true).query;
  const username = query.username;

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (!username) {
    send(res, 400, 'Error: Missing "username" query parameter.');
    return;
  }

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const userData = response.data;
    const profileCard = new ProfileCard(userData);
    const svgContent = profileCard.generateSVG();

    res.setHeader("Content-Type", "image/svg+xml");
    send(res, 200, svgContent);
  } catch (error) {
    console.error(error);
    send(res, 500, `Error fetching data: ${error.message}`); // Provide a more detailed error message
  }
};

module.exports = router(get("/", handler));
