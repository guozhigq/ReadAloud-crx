console.log("[readAloud background] 💆‍♂️ This is the background page.");

// 浏览器右键上下文添加事件
chrome.contextMenus.create({
    id: "some-command2",
    title: "朗读以下内容：%s", // %s表示选中的文字
    contexts: ["all"],
});
chrome.contextMenus.onClicked.addListener(getword);
function getword(info) {
    console.log(info.selectionText + " was clicked.");
}

