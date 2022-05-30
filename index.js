const nodeHtmlToImage = require('node-html-to-image');
const fs = require('fs');
const { generateName } = require('./utils');

const htmlToBase64Image = async (htmlString, options = { quality: 80 }) => {
	try {
		const fileName = generateName();

		await nodeHtmlToImage({
			...options,
			html: htmlString,
			output: fileName,
		});
		const data = fs.readFileSync(fileName, 'base64');
		fs.unlinkSync(fileName);
		return 'data:image/png;base64,' + data;
	} catch (error) {
		console.log(error);
	}
};

module.exports = htmlToBase64Image;
