/* @flow */

var spawn = require('child_process').spawnSync

var rootpath = require('rootpath')

var resolve = require('./resolve-release')
var rsync   = require('./rsync')
var launch  = require('./launch')


module.exports = function deploy (argv /* :string[] */)
{
	var cwd = rootpath(process.cwd())

	if (argv.length < 1)
	{
		shortcut('supply {release like `battle`}' +
			' {remote like `host` or `ip`}' +
			' {remote dir}'
		)
	}

	if (argv.length < 2)
	{
		shortcut('supply {remote}')
	}

	if (argv.length < 3)
	{
		shortcut('supply {remote dir}')
	}

	var [ release, remote, dest ] = argv

	release = resolve(cwd, release)

	if (! release)
	{
		shortcut('release not found')
	}

	/* @flow-off */
	release = rootpath((release /* :string */))

	observe(rsync(release, remote, dest))
	observe(launch(release, remote, dest))
}

function shortcut (msg /* :string */, code /* :number */ = 1)
{
	console.error(msg)
	process.exit(code)
}

function observe (args)
{
	return spawn(...args, { stdio: 'inherit' })
}
