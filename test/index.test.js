const htmlToBase64Image = require('../index');

htmlToBase64Image('<button>Hello</button>').then((data) => {
	console.log(data);
});
