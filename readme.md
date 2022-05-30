# html-to-base64-image

> Html to base64 Image

## Install

```sh
npm i html-to-base64-image
# or
yarn add html-to-base64-image
```

## Usage

```js
const htmlToBase64Image = require('../index');

htmlToBase64Image('<button>Hello</button>').then((data) => {
	console.log(data);
});
```
