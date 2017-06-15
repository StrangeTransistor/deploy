/* @flow */

var resolve = require('./resolve-release')
var rsync   = require('./rsync')
var launch  = require('./launch')

var spawn = require('child_process').spawnSync

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

	spawn(...rsync(release, remote, dest), { stdio: 'inherit' })
	spawn(...launch(remote, dest), { stdio: 'inherit' })
}

function shortcut (msg /* :string */, code /* :number */ = 1)
{
	console.error(msg)
	process.exit(code)
}
