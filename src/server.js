import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
// import cors from 'cors';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

// var whitelist = [/\.localhost$/, /\.fonts.gstatic\.com$/]
// var corsOptions = {
// 	origin: "*"
// }

polka() // You can also use Express
	.use(
		// cors(corsOptions),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
