This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`tailwindcss`](https://tailwindcss.com/docs/text-color) .

## Getting Started

First, run the development server:

```bash
npm run dev #or
next dev #if you have installed globally next js
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About the project

This project is a simple memory card game developed with:
* React
* NextJs Framework
* TypeScript
* Tailwindcss
* Jest (testing)
* Sweet Alert

Aditional features

* Can change de the format of card between 'horizontal' or 'vertical, this is because not all images have the same dimensions and it affects the design of the game. So you can change the type by passing 'format' parameter to the url, like [http://localhost:3000?format=horizontal](http://localhost:3000?format=horizontal) by default is 'vertical'.

* I have added a timer to make it more fun and competitive and always try to beat my record time with as few error points as possible.
* Whenever the game starts, it will show you a congratulations message but it may change according to your game result with points:
    1. If your correct points > error points.
    2. If your correct points < error points.
    3. If your correct points = error points.
* The game will only ask for your name once, so you can feel free to close the browser and reopen the game as your name is stored in your browser's localStorage and will stay there until you clear it.

## Testing

I've left Jest configured for testing and included a couple.

To check the test just run:

```bash
npm test
```


## Demo

You can check the game in my web at [memory-game.oscarr.dev](https://memory-game.oscarr.dev) that was auto-deployed and integrated with Github and [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
