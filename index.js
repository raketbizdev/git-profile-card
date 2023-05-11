const axios = require("axios");
const { send } = require("micro");
const { router, get } = require("microrouter");
const url = require("url");
const ProfileCard = require("./ProfileCard");

const handler = async (req, res) => {
  const query = url.parse(req.url, true).query;
  const username = query.username;

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (!username) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 400;
    res.end(
      JSON.stringify({
        status: "error",
        message: 'Error: Missing "username" query parameter.',
      })
    );
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
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=profile-card.svg"
    );
    res.statusCode = 200;
    res.end(svgContent);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end(`Error fetching data: ${error.message}`);
  }
};

module.exports = router(get("/", handler));
