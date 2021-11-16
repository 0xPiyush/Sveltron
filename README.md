# svelte-electron

<h2>A template that helps you use Svelte in Electron Apps.</h2>

- Hot reload
- Packaging
<br>
<h3>To get started clone this repository or click the "Use this template" button.</h3>
<br>

```
git clone https://github.com/0xPiyush/svelte-electron <my-app-name>

cd <my-app-name>
```

<h3>Next, install dependencies: </h3>

```
npm install
```

<h3>Then run the following command to start the app in development mode with hot reload: </h3>

```
npm run dev
```

<h3>To package your app run: </h3>

```
npm run package:linux
        or
npm run package:win
        or
npm run package:mac
```

<p>To change the app name and other properties, modify the package.json file just as you would in a normal Electron app.</p>
<br>
<p>The Svelte entry point is in <strong>./src/App.svelte</strong>
<br>
All the frontend code is in <strong>./public</strong> and <strong>./src</strong> directories</p>
<br>
<p>The Electron entry point is in: <br>
<strong>./electron/main.js</strong></p>
