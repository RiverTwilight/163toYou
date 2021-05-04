chrome.runtime.onInstalled.addListener(() => {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					// 只有打开百度才显示pageAction
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: {
							hostEquals: "www.google.com",
							schemes: ["https"],
						},
					}),
				],
				actions: [
					new chrome.declarativeContent.ShowPageAction(),
					new chrome.tabs.executeScript(tabId, {
						file: "addBtn.js",
					}),
				],
			},
		]);
	});
});
