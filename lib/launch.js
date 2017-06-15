/* @flow */

module.exports = function name
(
	remote /* :string */,
	dest   /* :string */
)
{
	return [ 'ssh',
	[
		remote,
`cd ${dest}; \
npm install --production --no-optional; \
npm start;`
	]]
}
