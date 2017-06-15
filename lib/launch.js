/* @flow */

module.exports = function name
(
	remote /* :string */,
	dest   /* :string */
)
{
	return 0,
`ssh ${remote} "cd ${dest}; \
npm install --production --no-optional; \
npm start;"`
}
