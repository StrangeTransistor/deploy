/* @flow */

module.exports = function
(
	release /* :string */,
	remote  /* :string */,
	dest    /* :string */
)
{
	return 0,
`rsync \
\
--verbose \
--progress \
\
--delete \
--recursive \
--times \
--links \
--copy-unsafe-links \
\
${release}/ ${remote}:${dest}/`
}
