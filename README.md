# Full Stack Spotify Clone with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL, Stripe

[<img src="https://github.com/xspooky7/spotify-clone/blob/main/public/preview.png"/>](https://spotify-clone-c-y7.vercel.app/)
 
For DEMO, use [Stripe Testing Cards](https://stripe.com/docs/testing)

### Tech Stack

| [<img src="https://skillicons.dev/icons?i=nextjs" height="40px" width="40px"/>](https://nextjs.org/) |[<img src="https://skillicons.dev/icons?i=react" height="40px" width="40px"/>](https://react.dev/) | [<img src="https://skillicons.dev/icons?i=tailwind" height="40px" width="40px"/>](https://tailwindcss.com/) | [<img src="https://skillicons.dev/icons?i=supabase" height="40px" width="40px"/>](https://supabase.com/) | [<img src="https://skillicons.dev/icons?i=postgres" height="40px" width="40px"/>](https://www.postgresql.org/) | [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" height="40px"/>](https://stripe.com/)|
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| Next.js     | React | Tailwind | Supabase | PostgreSQL | Stripe |

### Key Features

- Song upload
- Stripe integration
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Supabase
- Github authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Play song audio
- Favorites system
- Playlists / Liked songs system
- Advanced Player component
- Stripe recurring payment integration
- How to write POST, GET, and DELETE routes in route handlers (app/api)
- How to fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)
- Handling relations between Server and Child components in a real-time environment
- Cancelling Stripe subscriptions

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/xspooky7/spotify-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Add SQL Tables
Use `database.sql` file, create songs and liked_songs table (there is a video tutorial)

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
