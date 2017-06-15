/* @flow */

var resolve = require('./resolve-release')
var rsync   = require('./rsync')
var launch  = require('./launch')

var cmd = require('command-promise')

module.exports = function deploy (argv /* :string[] */)
{
	if (argv.length < 1)
	{
		shortcut('supply {release}')
	}

	if (argv.length < 2)
	{
		shortcut('supply {remote}')
	}

	if (argv.length < 3)
	{
		shortcut('supply {destination}')
	}

	var [ release, remote, dest ] = argv

	release = resolve(release)

	Promise.resolve()
	.then(() =>
	{
		return cmd(rsync(release, remote, dest))
	})
	.then(() =>
	{
		return cmd(launch(remote, dest))
	})
	.then(console.log, console.error)
}

function shortcut (msg /* :string */, code /* :number */ = 1)
{
	console.error(msg)
	process.exit(code)
}
