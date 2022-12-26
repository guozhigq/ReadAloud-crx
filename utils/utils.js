//根据浏览器语言切换语言
export const navigatorLanguage = () => {
    let navigatorLanguage = (
        navigator.language || navigator.browserLanguage
    ).toLowerCase();
    let lang = "zhCN";
    switch (navigatorLanguage) {
        case "zh-CN":
            lang = "中文简体";
            break;
        case "zh-tw":
            lang = "zhTW";
            break;
        case "en":
            lang = "enUS";
            break;
    }
    return lang;
};

export const getVoice = () => {
    if (typeof speechSynthesis === "undefined") {
        return;
    }
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let voices = speechSynthesis.getVoices();
            resolve(voices);
        }, 0);
    }).then((voices) => {
        console.log(voices)
        return voices
    });
};

export const getStorage = () => {
    chrome.storage.local.get((items) => {
        console.log("local get", items);
    });
};
