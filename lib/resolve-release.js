/* @flow */

var absolute = require('path').isAbsolute
var join = require('path').join

module.exports = (release /* :string */) =>
{
	if (absolute(release))
	{
		return release
	}
	else
	{
		return join(process.cwd(), 'release', release)
	}
}
