# lack
A Slack clone

Built to modernize my React skills.

## Getting Started
### Prerequisites
Bun v1.1.36. 
```
curl -fsSL https://bun.sh/install | bash -s "bun-v1.1.36"
```
Or, find installation instructions [here](https://bun.sh/docs/installation#:~:text=To%20install%20a%20specific%20version%20of%20Bun%2C%20you%20can%20pass,or%20bun%2Dv1.1.1%20.).

Convex v1.17.3
```
```
Or, find installation instructions [here]().

### Installation
1. Clone this repository.
```
git clone git@github.com:Meeshbhoombah/lack.git
```

2. `cd` into the repository.
```
cd lack/
```

3. Install dependencies with Bun.
```
bun install
```

### Development
1. Run the Next.js frontend development server with Bun.
```
bun run dev
```

2. Run the Convex development server with Bun.
```
bunx convex dev
```

3. Create a GitHub App (for lack's GitHub sign-in feature). Find instructions 
   [here](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app#registering-a-github-app). 
   Use the generated [HTTP Actions URL](https://labs.convex.dev/auth/config/oauth#callback-url) 
   as the Callback URL when creating a GitHub App (it can also temporarily 
   serve as the App's Webhook URL).
 
4. Set the GitHub App Client ID within the Convex backend with Bun.
```
bunx convex env set AUTH_GITHUB_ID yourgithubclientid
```

5. Generate a Client Secret within the GitHub App. Find rough instructions 
   [here](https://docs.github.com/en/apps/creating-github-apps/writing-code-for-a-github-app/building-a-login-with-github-button-with-a-github-app#store-the-client-id-and-client-secret).
   This is a tutorial by GitHub for building a login button. It provides steps
   for locating the section of a GitHub App's settings that will generate a
   Client Secret, but also includes extra information. Ignore the suggestions
   to add information to a `.env` file and/or `Gemfile`.

6. Set the GitHub App Client Secret within the Convex backend with Bun.
```
bunx convex env set AUTH_GITHUB_SECRET yourgithubsecret
```

## Built With
- Bun
- Next.js
- React
- Tailwind
- PostCSS
- shadcn/ui
- Convex

