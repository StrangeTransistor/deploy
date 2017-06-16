/* @flow */

var pipe = require('./cmd-pipe')

module.exports = function name
(
	remote /* :string */,
	dest   /* :string */
)
{
	var cmd =
	[
		`cd ${dest}`,
		'npm install --production --no-optional',
		'npm start',
	]

	return [ 'ssh', [ remote, pipe(cmd) ]]
}
