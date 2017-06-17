/* @flow */
/* :: import type { T_Rootpath as Rootpath } from 'rootpath' */

module.exports = function
(
	release /* :Rootpath */,
	remote  /* :string */,
	dest    /* :string */
)
{
	return [ 'rsync',
	[
		'--verbose',
		'--progress',
		'--delete',
		'--recursive',
		'--times',
		'--links',
		'--copy-unsafe-links',
		`${ release() }/`,
		`${ remote }:${ dest }/`
	]]
}
