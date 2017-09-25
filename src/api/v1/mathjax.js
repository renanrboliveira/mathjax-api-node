import resource from 'resource-router-middleware';
import mjAPI from 'mathjax-node';

// a simple TeX-input example
mjAPI.config({
MathJax: {
	SVG: {
		font: "TeX"
	}
}
});
mjAPI.start();

export default () => resource({
	id : 'mathjax',
	index({ query }, res) {
		res.setHeader('content-type', 'image/svg+xml')
		mjAPI.typeset({
		math: query.formula,
		format: 'TeX',
		svg: true
		}, function (data) {
			if (!data.errors) {
				res.end(data.svg);
			}   
		});
	}
});
