import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html color-scheme={'light'} lang='en'>
			<Head>
				<link rel='icon' href='/favicon/tennis_favicon.ico' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};
export default Document;
