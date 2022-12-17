function getStateNode() {
	for (var i of Object.keys(document.querySelector('#app > div > div'))) {
		if (i.toString().includes('__reactEventHandlers')) {
			for (var j of Object.values(document.querySelector("#app > div > div")[i].children.filter(n => n))) {
				if (j._owner && j._owner.stateNode) {
					return j._owner.stateNode;
				}
			}
		}
	}
}

function findByProp(find) {
	return Object.values(webpackJsonp.push([
			[],
			{
				['']: (_, a, b) => {
					a.cache = b.c;
				}
			},
			[
				['']
			],
		]).cache)
		.find((x) => {
			if (x.exports && x.exports.a && x.exports.a[find]) {
				return x.exports.a;
			}
		})
		.exports.a;
}
getStateNode().state.unlocks = Object.keys(findByProp("UFO"));
getStateNode().forceUpdate();
