# GitHub Profile Card Generator

A serverless function to generate a GitHub profile card as an SVG image, which can be embedded in your GitHub README.

![Profile Card](https://git-profile-card.vercel.app/?username=raketbizdev)

## Usage

1. Deploy the serverless function to your preferred platform (e.g., Vercel, Netlify).
2. Embed the generated profile card in your GitHub README by adding the following line:

```markdown
![GitHub Profile Card](https://git-profile-card.vercel.app/?username=your-username)
```

Replace `https://git-profile-card.vercel.app/?username=your-username` with the URL of your deployed serverless function and `your-username` with the GitHub username for which you want to generate the profile card.

## Customization

To create different styles and designs for the profile card or accept additional query parameters to determine which style to use, modify the ProfileCard class in ProfileCard.js. You can add new methods or use inheritance to create subclasses for different styles of profile cards.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT
