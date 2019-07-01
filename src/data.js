function getDefaultSnippetData() {
    const name1 = "README-New_UI_Details",
        // using + operator avoids the inadvertently introduced tab characters
        body1 = "Dear user, here are some things you need to know in this new UI:\n\n"
            + "1. You need to click on the name or body of the listed snippet to expand it completely. In the following image, "
            + "the purple area shows where you can click to expand the snippet.\n\n<img src='../imgs/help1.png'>\n\n"
            + "2. Click on the pencil icon to edit and the dustbin icon to delete a snippet/folder.\n"
            + "3. Click on the folder, anywhere in the purple area denoted below, to view its contents.\n\n<img src='../imgs/help2.png'>\n\n"
            + "4. Click on a folder name in the navbar to view its contents. In the example below, the navbar consists of 'Snippets', 'sampleFolder' and 'folder2', "
            + " each nested within the previous.\n\n"
            + "<img src='../imgs/help3.png'>",
        name2 = "clipboard_macro",
        body2 = "Use this snippet anywhere and the following - [[%p]] - will be replaced by "
            + " your clipboard data. Clipboard data includes text that you have previously copied or cut with intention to paste.",
        ts = Date.now(),
        snips = [
            "Snippets",
            ts,
            ["sampleFolder", ts],
            {
                name: "sampleSnippet",
                body:
                    "Hello new user! Thank you for using ProKeys!\n\nThis is a sample snippet. Try using it on any webpage by typing 'sampleSnippet' (snippet name; without quotes), and press the hotkey (default: Shift+Space), and this whole text would come in place of it.",
                timestamp: ts,
            },
            {
                name: "letter",
                body:
                    "(Sample snippet to demonstrate the power of ProKeys snippets; for more detail on Placeholders, see the Help section)\n\nHello %name%,\n\nYour complaint number %complaint% has been noted. We will work at our best pace to get this issue solved for you. If you experience any more problems, please feel free to contact at me@organization.com.\n\nRegards,\n%my_name%,\nDate: [[%d(D-MM-YYYY)]]",
                timestamp: ts,
            },
            {
                name: "brb",
                body: "be right back",
                timestamp: ts,
            },
            {
                name: "my_sign",
                body:
                    "<b>Aquila Softworks ©</b>\n<i>Creator Of ProKeys</i>\n<u>prokeys.feedback@gmail.com</u>",
                timestamp: ts,
            },
            {
                name: "dateArithmetic",
                body:
                    "Use this snippet in any webpage, and you'll see that the following: [[%d(Do MMMM YYYY hh:m:s)]] is replaced by the current date and time.\n\nMoreover, you can perform date/time arithmetic. The following: [[%d(D+5 MMMM+5 YYYY+5 hh-5:m-5:s-5)]] gives the date, month, year, forward by five; and hour, minutes, and seconds backward by 5.\n\nMore info on this in the Help section.",
                timestamp: ts,
            },
            {
                name: "urlMacro",
                body:
                    "Use the URL macro (details in the Help page) to retrieve information about the current webpage URL. For example, when executed on any webpage, the code - [[%u(0)]] - outputs the full website name on which it is executed.",
                timestamp: ts,
            },
            {
                name: name1,
                body: body1,
                timestamp: ts,
            },
            {
                name: name2,
                body: body2,
                timestamp: ts,
            },
        ];

    return snips;
}

const SnipfromObject = function ({ name, body, timestamp }) {
        const nSnip = { name, body };

        // remove "Created on " part from timestamp
        nSnip.timestamp = !timestamp
            ? Date.now() // can be undefined
            : typeof timestamp === "number"
                ? timestamp
                : Date.parse(timestamp.substring(11));

        return nSnip;
    },
    FolderfromArray = function (arr) {
        // during 2.8.0 version, first element of arr
        // was not the name of folder
        if (typeof arr[0] !== "string") {
            arr.unshift("Snippets");
        }

        // 2nd elm is timestamp
        if (typeof arr[1] !== "number") {
            arr.splice(1, 0, Date.now());
        }

        const folder = { name: arr.shift(), undefined, timestamp: arr.shift() };
        folder.list = arr.map(listElm => (Array.isArray(listElm) ? FolderfromArray(listElm) : SnipfromObject(listElm)));

        return folder;
    },
    DATA = {
        snippets: FolderfromArray(getDefaultSnippetData()),
        blockedSites: [],
        charsToAutoInsertUserList: [["(", ")"], ["{", "}"], ["\"", "\""], ["[", "]"]],
        dataVersion: 1,
        language: "English",
        hotKey: ["shiftKey", " "],
        dataUpdateVariable: true,
        matchDelimitedWord: true,
        tabKey: false,
        snipNameDelimiterList: " @#$%&*+-=(){}[]:\"'/_<>?!.,",
        omniboxSearchURL: "https://www.google.com/search?q=SEARCH",
        wrapSelectionAutoInsert: true,
        ctxEnabled: true,
    };


export { DATA };
