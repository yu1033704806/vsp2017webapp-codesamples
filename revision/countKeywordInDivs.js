var countKeywordInDivs = function(keyword) {
	var divs = document.querySelectorAll("div");
	var count = 0;

	var countKeywords = function(node) {
		var kCount = 0;
		console.log(kCount);
		var children = node.childNodes;
		for (var i = 0; i < children.length; i++) {
			if (children[i].nodeType == 1) {
				// Node
				kCount += countKeywords(children[i]);
			} else if (children[i].nodeType == 3) {
				// Text node
				if (children[i].nodeValue.indexOf(keyword) !== -1)
					kCount += 1;
			}
		}
		return kCount;

	}

	var isRootDiv = function(div) {
		var pNode = div.parentNode;
		while (pNode) {
			if (pNode.tagName == "DIV") {
				return false;
			}
			pNode = pNode.parentNode;
		}
		return true;
	}

	divs.forEach(function(div) {
		if (isRootDiv(div)) {
			count += countKeywords(div);
		}
	});

	return count;
}

window.onload = function() {
	console.log( countKeywordInDivs("world") );
}