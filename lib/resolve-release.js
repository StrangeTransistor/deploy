/* @flow */
/* :: import type { T_Rootpath as Rootpath } from 'rootpath' */

var exists = require('fs').existsSync

module.exports = function
(
	rootpath /* :Rootpath */,
	release  /* :string */
)
{
	if (exists(release))
	{
		return release
	}

	var release_dir = rootpath(release)
	if (exists(release_dir))
	{
		return release_dir
	}

	var release_metalbox = rootpath('release', release)
	if (exists(release_metalbox))
	{
		return release_metalbox
	}

	return null
}
