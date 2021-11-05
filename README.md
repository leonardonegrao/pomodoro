![](./logo.svg)

<p align="center">
  <img src="https://img.shields.io/github/workflow/status/leonardonegrao/pomodoro/CI?style=for-the-badge" />
  <img src="https://img.shields.io/coveralls/github/leonardonegrao/pomodoro?style=for-the-badge" />
  <img src="https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fpomodoro-nine-rho.vercel.app%2F" />
  <img src="https://img.shields.io/github/languages/code-size/leonardonegrao/pomodoro?style=for-the-badge" />
  <img src="https://img.shields.io/github/languages/top/leonardonegrao/pomodoro?style=for-the-badge" />
</p>

# 📃 About

Pomodoro is a time management webapp based on the Pomodoro technique. The design was provided by Frontend Mentor and development was made using Next.js and Styled Components.

It features an animated timer with three types:

- Pomodoro (long period of focus)
- Short Break (short interval to distract yourself)
- Long Break (long interval to rest)

Timers can be paused, resumed and changed. It's possible to change a timer period in minutes, to better suit one's needs.

Another cool tweak is the dynamic theme. The main color and the font can be changed to one of the supported options (three for each).

The project was made to be scalable, with unit testing and CSS-in-JS, among some patterns and features.

<p align="center">
  <img src="./mockups.png" />
</p>

# 💻 Run Locally

The requirements to run this application locally are:

- Node.js and npm (Node's v14 or v16 LTS is recommended);
- Recent version of Chrome, Firefox or a Chromium-based browser (this is only a demo, not focused on compatibility);
- Yarn is optional, but recommended as it was the tool used to manage dependencies.

Once the repository was downloaded or cloned, you'll need to install the dependencies:

```bash
npm install
# or
yarn install
```

With dependencies installed, the project is ready to run!

```bash
npm run dev
# or
yarn dev
```

# 🧪 Run Tests

To run tests it's also required to install dependencies (see above), and then run:

```bash
npm run test
# or
yarn test
```

# 🤝 Tech Stack & Acknowledgements

This project was made with:

- [React.js](https://github.com/facebook/react)
- [Next.js](https://github.com/vercel/next.js/)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Styled Components](https://github.com/styled-components/styled-components)
- [React Testing Library](https://github.com/testing-library/react-testing-library)
- [ESLint](https://github.com/eslint/eslint)
- [Husky](https://github.com/typicode/husky)
- [Vercel](https://vercel.com/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- ☕ + 🎧

A special thanks to [Frontend Mentor](https://www.frontendmentor.io/) for the (great) design 🙏.
