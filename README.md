# Note Taking App

First Next.js Project,

### Technologies Used:

- Next.js 13
- Pocketbase.
- TypeScript
- Turbo Pack (Build Tool By vercel(company that maintains next.js))

## Getting Started

This is a project bootstrapped with .

**First,** Project Setup

```bash
npx create-next-app@latest --ts my-first-app
cd my-first-app
```

**Second,**

- Download Pocketbase from [pocketbase.io](pocketbase.io)
- Navigate to the unzipped directory  
   `cd pocketbase_0.7.9_darwin_arm64`
- Move its executable file to root directory of your project

- Start Pocketbase:  
   `./pocketbase serve`
- Open the [Admin UI](http://127.0.0.1:8090/_/), create collection, and update security rules to allow read/write access.

**Third,** Run the development server:

- If using Pocket Base SDK
  uncomment in notes/page.tsx and comment out the fetch api lines

  ```bash
     npm install pocketbase
  ```

- Edit _package.json_ to use build tool [Turbo Pack](https://turbo.build/pack)  
   `"dev": "next dev --turbo",`

- Start Development Server
  ```bash
      npm run dev
  ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

# Credits

[@Beyond Fireship](https://www.youtube.com/watch?v=__mSgDEOyv8)
