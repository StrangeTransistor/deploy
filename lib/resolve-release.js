/* @flow */
/* :: import type { T_Rootpath as Rootpath } from 'rootpath' */

var absolute = require('path').isAbsolute

module.exports = function
(
	rootpath /* :Rootpath*/,
	release  /* :string */
)
{
	if (absolute(release))
	{
		return release
	}
	else
	{
		return rootpath('release', release)
	}
}
