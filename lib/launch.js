/* @flow */
/* :: import type { T_Rootpath as Rootpath } from 'rootpath' */

var exists = require('fs').existsSync

var pipe = require('./cmd-pipe')

module.exports = function name
(
	release /* :Rootpath */,
	remote  /* :string */,
	dest    /* :string */
)
{
	var cmd = []

	if (exists(release('package.json')))
	{
		cmd = cmd.concat(
		[
			`cd ${ dest }`,
			'npm install --production --no-optional',
			'npm start',
		])
	}
	else
	{
		console.info('no package.json found')

		cmd = cmd.concat(
		[
			'sudo nginx -s reload',
		])
	}

	return [ 'ssh', [ remote, pipe(cmd) ]]
}
