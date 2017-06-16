/* @flow */
/* :: type Command = string[] | string */

module.exports = function pipeline (...commands /* :Command[] */)
{
	return flatten(commands).join('; ')
}

function flatten (items)
{
	return Array.prototype.concat.apply([], items)
}
