import { version } from '../../package.json';
import { Router } from 'express';
import mathjax from './v1/mathjax';

export default () => {
	let api = Router();

	// mount the mathjax resource
	api.use('/v1/mathjax', mathjax());

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
