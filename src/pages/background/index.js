console.log("This is the background page.");
console.log("Put the background scripts here.");

chrome.contextMenus.create({
    id: "some-command",
    title: "朗读以下内容：%s", // %s表示选中的文字
    contexts: ["all"], // 只有当选中文字时才会出现此右键菜单
});

chrome.contextMenus.onClicked.addListener(getword);
function getword(info) {
    console.log(info.selectionText + " was clicked.");
}
