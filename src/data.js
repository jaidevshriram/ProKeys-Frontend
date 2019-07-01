/* eslint-disable */
// this file is just for reference, temporaro;y

// functions common to Snip and Folder
function Generic() {
    this.matchesUnique = function (name) {
        return this.name.toLowerCase() === name.toLowerCase();
    };

    this.matchesNameLazy = function (text) {
        return new RegExp(text, "i").test(this.name);
    };

    // CAUTION: used only by searchField (since `strippedBody` set)
    this.matchesLazy = function (text) {
        // searching is case-insensitive
        return new RegExp(text, "i").test(this.name + this.strippedBody);
    };

    // CAUTION: used only by searchField (since `strippedBody` set)
    this.matchesWord = function (text) {
        return new RegExp(`\\b${text}\\b`, "i").test(this.name + this.strippedBody);
    };

    // deletes `this` from parent folder
    this.remove = function () {
        const index = Data.snippets.getUniqueObjectIndex(this.name, this.type),
            thisIndex = index[index.length - 1];

        this.getParentFolder().list.splice(thisIndex, 1);
        Folder.setIndices();
    };

    this.getParentFolder = function () {
        let index = Data.snippets.getUniqueObjectIndex(this.name, this.type),
            parent = Data.snippets;

        // last element is `this` index, we want parent so -1
        for (let i = 0, lim = index.length - 1; i < lim; i++) {
            parent = parent.list[index[i]];
        }

        return parent;
    };

    this.moveTo = function (newFolder) {
        const x = this.getDuplicatedObject();
        this.remove();
        Folder.insertObject(x, newFolder);
        return x;
    };

    // a folder cannot be nested under its subfolders, hence a check
    this.canNestUnder = function (newFolder) {
        if (Folder.isFolder(this)) {
            while (newFolder.name !== Folder.MAIN_SNIPPETS_NAME) {
                if (this.name === newFolder.name) {
                    return false;
                }

                newFolder = newFolder.getParentFolder();
            }
        }

        // no need to check for snippets
        return true;
    };

    this.clone = function () {
        /**
         * Mechanism: if a folder X that has objects a, b, c is cloned
         * then new folder is X (1) with objects a (1), b (1), c (1)
         * @param {*} folder
         */
        function cloneIndividualSnippetsOfFolder(folder) {
            let i = 0,
                len = folder.list.length;

            for (; i < len; i++) {
                folder.list[i] = getClone(folder.list[i]);
            }
        }

        /**
         * secondary name to be assigned to a cloned object
         * that has a name like "name (1)"
         * @param {String} name : to use as primary name
         */
        function generateSecondaryName(name, type) {
            let counter = 0,
                found = true,
                newName;

            while (found) {
                newName = `${name} (${++counter})`;
                // we are only concerned whether the object exists
                // and NOT what its index is
                found = Data.snippets.getUniqueObjectIndex(newName, type);
            }

            return newName;
        }

        /**
         * Returns the clone of given object
         * @param {Generic} object to clone
         */
        function getClone(object) {
            let newName = generateSecondaryName(object.name, object.type),
                newObject;

            if (Folder.isFolder(object)) {
                newObject = new Folder(newName, object.list);
                cloneIndividualSnippetsOfFolder(newObject);
            } else {
                newObject = new Snip(newName, object.body);
            }

            return newObject;
        }

        function insertCloneOf(object) {
            const newObject = getClone(object),
                countersMatch = newObject.name.match(/\d+/g),
                counter = countersMatch[countersMatch.length - 1];

            object.insertAdjacent(newObject, counter);

            return newObject;
        }

        return insertCloneOf(this);
    };

    /**
     * @return {Generic} clone of this object
     * (if it is a folder, its snippets' names remain as they were)
     */
    this.getClone = function () {
        if (this.type === Generic.SNIP_TYPE) {
            return new Snip(this.name, this.body, this.timestamp);
        }

        const clonedFolder = new Folder(this.name, [], this.timestamp);
        this.list.forEach((object) => {
            clonedFolder.list.push(object.getClone());
        });

        return clonedFolder;
    };

    /**
     * inserts the given object stepValue places after/before this under the same parent folder list
     * to maintain sanity you should pass the clone of the object you're trying to insert
     * @param {Generic} newObject to be inserted at given position
     * @param {Number} stepValue how far after this to be inserted (default immediately next)
     */
    this.insertAdjacent = function (newObject, stepValue, insertBeforeFlag) {
        const thisName = this.name,
            thisType = this.type,
            thisIndexArray = Data.snippets.getUniqueObjectIndex(thisName, thisType),
            thisIndex = thisIndexArray[thisIndexArray.length - 1],
            parentFolderList = this.getParentFolder().list,
            posToInsertObject = thisIndex + (stepValue ? +stepValue : 1) * (insertBeforeFlag ? 0 : 1);

        parentFolderList.splice(posToInsertObject, 0, newObject);
        Folder.setIndices();
    };
}
/**
 * class added to newly created snip/folder
 * to highlight it
 */
Generic.HIGHLIGHTING_CLASS = "highlighting";
/**
 * returns the DOM element for edit and delete button
 */
Generic.getButtonsDOMElm = function () {
    const divButtons = q.new("div").addClass("buttons");
    divButtons.appendChild(q.new("div").addClass("clone_btn")).attr("title", "Clone");
    divButtons.appendChild(q.new("div").addClass("edit_btn")).attr("title", "Edit");
    divButtons.appendChild(q.new("div").addClass("delete_btn")).attr("title", "Delete");
    return divButtons;
};

Generic.getDOMElement = function (objectNamesToHighlight) {
    objectNamesToHighlight = objectNamesToHighlight === undefined
        ? []
        : !Array.isArray(objectNamesToHighlight)
            ? [objectNamesToHighlight]
            : objectNamesToHighlight;

    const divMain = q.new("div").addClass([this.type, "generic", Snip.DOMContractedClass]),
        img = q.new("img");
    img.src = `../imgs/${this.type}.svg`;

    divMain.appendChild(img);

    // creating the short `div` element
    const divName = q.new("div")
        // text with newlines does not fit in one line
        .html(gTranlateImmune(this.name))
        .addClass("name");
    divName.dataset.name = this.name;
    divMain.appendChild(divName);

    divMain.appendChild(Generic.getButtonsDOMElm());

    if (objectNamesToHighlight.indexOf(this.name) > -1) {
        if (objectNamesToHighlight[0] !== false) {
            divMain.removeClass(Snip.DOMContractedClass);
        }

        // highlight so the user may notice it
        // remove class after 3 seconds else it will
        // highlight repeatedly
        divMain.addClass(Generic.HIGHLIGHTING_CLASS);
        setTimeout(() => {
            divMain.removeClass(Generic.HIGHLIGHTING_CLASS);
        }, 3000);
    }

    return divMain;
};

/**
 * when we attach click handler to div.snip/.folder
 * .buttons div click handlers get overrided
 * @param {Function} handler
 * @returns {Function}
 */
Generic.preventButtonClickOverride = function (handler) {
    return function (e) {
        if (!e.target.matches(".buttons, .buttons div")) {
            handler.call(this, e);
        }
    };
};

Generic.getDuplicateObjectsText = function (text, type) {
    return `A ${type} with name '${text}' already exists (possibly with the same letters in upper/lower case.)`;
};

/**
 * @param {String} name
 * @param {String} type
 * @returns {String} validation result
 */
Generic.isValidName = function (name, type) {
    if (name.length === 0) {
        return "Empty name field";
    }
    if (name.length > OBJECT_NAME_LIMIT) {
        return `Name cannot be greater than ${OBJECT_NAME_LIMIT} characters. Current name has ${name.length
            - OBJECT_NAME_LIMIT} more characters.`;
    }

    // error may occur during no-db-restore
    try {
        const dupeExists = Data.snippets.getUniqueObject(name, type);
        if (dupeExists) { return Generic.getDuplicateObjectsText(name, type); }
        return "true";
    } catch (e) {
        return "true";
    }
};

/**
 * @param {Element} listElm The DOM element .snip or .folder, whose buttons, etc. were clicked
 * @returns {Generic} the snip/folder object associated with the listElm
 */
Generic.getObjectThroughDOMListElm = function (listElm) {
    const isSnip = listElm.classList.contains("snip"),
        type = isSnip ? Generic.SNIP_TYPE : Generic.FOLDER_TYPE,
        { name } = listElm.qClsSingle("name").dataset;

    return Data.snippets.getUniqueObject(name, type);
};

Generic.FOLDER_TYPE = "folder";
Generic.SNIP_TYPE = "snip";
Generic.CTX_START = {};
Generic.CTX_START[Generic.SNIP_TYPE] = `${Generic.SNIP_TYPE}_`;
Generic.CTX_START[Generic.FOLDER_TYPE] = `${Generic.FOLDER_TYPE}_`;
Generic.CTX_SNIP_REGEX = new RegExp(Generic.CTX_START[Generic.SNIP_TYPE]);

function Snip(name, body, timestamp) {
    this.name = name;
    this.body = body;
    this.timestamp = timestamp || Date.now();
    this.type = Generic.SNIP_TYPE;

    this.edit = function (newName, newBody) {
        this.name = newName;
        this.body = newBody;
    };

    // "index" is index of this snip in Data.snippets
    this.getDOMElement = function (objectNamesToHighlight) {
        const divMain = Generic.getDOMElement.call(this, objectNamesToHighlight),
            divName = divMain.qClsSingle("name"),
            // our `div` body element; with Snip body
            divBody = q.new("div").addClass("body");

        function makeSuitableCollapsedDisplay(bodyText) {
            const whitespaceReplacer = " ";

            return bodyText
                .substring(0, Snip.MAX_COLLAPSED_CHARACTERS_DISPLAYED)
                .replace(/\n|<br>/g, whitespaceReplacer)
                .replace(/(<\/[a-z]+>)/gi, `$1${whitespaceReplacer}`);
        }

        function toggleDivBodyText(snip) {
            if (divMain.hasClass(Snip.DOMContractedClass)) {
                // snip.body contains HTML tags/or \n as well
                // insert a space whenever line break or closing tag occurs
                // so (1) set the html, (2) grab and set the text back
                divBody.html(makeSuitableCollapsedDisplay(snip.body));
                divBody.text(divBody.text());

                // during this call is going on, divName has't been shown on screen yet
                // so clientWidth returns zero, hence, wait for a short duration before
                // setting style.width
                setTimeout(() => {
                    divBody.style.width = `calc(100% - 100px - ${divName.clientWidth}px)`;
                }, 1);
            } else {
                divBody.html(snip.body, "", true).style.width = "";
            }
        }

        // if we set divMain.click, then .body gets clicked
        // even when user is selecting text in it
        // hence we should put a selectable but transparent
        // element at the top
        function getClickableElm(node) {
            return q
                .new("div")
                .addClass("clickable")
                .on(
                    "click",
                    Generic.preventButtonClickOverride(() => {
                        divMain.toggleClass(Snip.DOMContractedClass);
                        toggleDivBodyText(node);
                    }),
                );
        }

        toggleDivBodyText(this);
        divMain.appendChild(divBody);

        divMain.appendChild(getClickableElm(this));

        const timestampElm = q
            .new("div")
            .addClass("timestamp")
            .html(Snip.getTimestampString(this));
        divMain.appendChild(timestampElm);

        return divMain;
    };

    this.getDuplicatedObject = function () {
        return new Snip(this.name, this.body, this.timestamp);
    };

    // returns object representation of this Snip object
    this.toArray = function () {
        return {
            name: this.name,
            body: this.body,
            timestamp: this.timestamp,
        };
    };
}
Snip.prototype = new Generic();
Snip.MAX_COLLAPSED_CHARACTERS_DISPLAYED = 200; // issues#67
Snip.DOMContractedClass = "contracted"; // to show with ellipsis
Snip.PASTE_MACRO_REGEX = /\[\[%p\]\]/gi;
Snip.CARET_POSITION_CLASS = "caretPlacement";
Snip.CARET_POSITION_EMPTY_REGEX = /\[\[%c(\(\))?\]\]/;
Snip.CARET_POSITION_STUFFED_REGEX = /\[\[%c\([v^<>\d]+\)\]\]/;
Snip.CARET_POSITION_SELECTION_START_REGEX = /\[\[%c\(s\)\]\]/;
Snip.CARET_POSITION_SELECTION_END_REGEX = /\[\[%c\(e\)\]\]/;
Snip.CARET_POSITION_SELECTION_END_STRING = "[[%c(e)]]";

Snip.fromObject = function (snip) {
    const nSnip = new Snip(snip.name, snip.body);

    // remove "Created on " part from timestamp
    nSnip.timestamp = !snip.timestamp
        ? Date.now() // can be undefined
        : typeof snip.timestamp === "number"
            ? snip.timestamp
            : Date.parse(snip.timestamp.substring(11));

    return nSnip;
};
/**
* @param: timestamp: optional
*/
function getFormattedDate(timestamp) {
    const d = (timestamp ? new Date(timestamp) : new Date()).toString();

    // sample date would be:
    // "Sat Feb 20 2016 09:17:23 GMT+0530 (India Standard Time)"
    return d.substring(4, 15);
}
Snip.getTimestampString = function (snip) {
    return `Created on ${getFormattedDate(snip.timestamp)}`;
};

function Folder(orgName, list, orgTimestamp, isSearchResultFolder) {
    this.name = orgName;
    this.type = Generic.FOLDER_TYPE;
    this.timestamp = orgTimestamp || Date.now();
    this.list = (list || []).slice(0);
    this.isSearchResultFolder = !!isSearchResultFolder;

    function getObjectCount(type) {
        return function () {
            return this.list.reduce(
                (count, object) => (object.type === type ? count + 1 : count),
                0,
            );
        };
    }

    this.getSnippetCount = getObjectCount(Generic.SNIP_TYPE);
    this.getFolderCount = getObjectCount(Generic.FOLDER_TYPE);

    this.getLastFolderIndex = function () {
        let i = 0,
            len = this.list.length;

        while (i < len && Folder.isFolder(this.list[i])) {
            i++;
        }

        return i - 1;
    };

    function adder(isSnippet) {
        /**
         * body is actually .list in case of folder
         */
        return function (name, body, timestamp) {
            const newObj = isSnippet
                ? new Snip(name, body, timestamp)
                : new Folder(name, body, timestamp);

            Folder.insertObject(newObj, this);

            window.latestRevisionLabel = `created ${newObj.type} "${newObj.name}"`;
        };
    }

    this.addSnip = adder(true);

    function editer(type) {
        return function (oldName, newName, body) {
            const object = Data.snippets.getUniqueObject(oldName, type);

            object.edit(newName, body);
            window.latestRevisionLabel = `edited ${type} "${oldName}"`;
        };
    }

    this.editSnip = editer(Generic.SNIP_TYPE);

    this.addFolder = adder(false);

    this.editFolder = editer(Generic.FOLDER_TYPE);

    this.edit = function (newName) {
        this.name = newName;
    };

    this.getDOMElement = function (objectNamesToHighlight) {
        // get prepared divMain from Generic class
        // and add click handler to the divMain and then return it
        return Generic.getDOMElement
            .call(this, objectNamesToHighlight)
            .on("click", Generic.preventButtonClickOverride(this.listSnippets.bind(this)));
    };

    this.getDOMElementFull = function (objectNamesToHighlight) {
        let div = q.new("div"),
            listElm,
            htmlElm,
            emptyDiv,
            len = this.list.length;

        for (let i = 0; i < len; i++) {
            listElm = this.list[i];
            htmlElm = listElm.getDOMElement(objectNamesToHighlight);
            div.appendChild(htmlElm);
        }

        if (len === 0) {
            emptyDiv = q.new("div");
            emptyDiv
                .addClass("empty_folder")
                .html(this.isSearchResultFolder ? "No matches found" : "This folder is empty");
            div.appendChild(emptyDiv);
        }

        return div;
    };

    this.getUniqueObject = function (name, type) {
        const index = this.getUniqueObjectIndex(name, type);

        if (!index) {
            return null;
        }

        let folder = this;

        for (const idx of index) {
            folder = folder.list[idx];
        }

        return folder;
    };

    this.getUniqueObjectIndex = function (name, type) {
        return Folder.indices[type][name.toLowerCase()];
    };

    function getUniqueObjectFn(type) {
        return function (name) {
            return this.getUniqueObject(name, type);
        };
    }

    function getUniqueObjectIndexFn(type) {
        return function (name) {
            return this.getUniqueObjectIndex(name, type);
        };
    }

    this.getUniqueSnip = getUniqueObjectFn(Generic.SNIP_TYPE);

    // return value of index is a n-length array of indexes
    // where each int from 0 to n-2 index in array
    // is the index of folder (0=outermost; n-2=innermost)
    // and (n-1)th value is index of snippet in innnermost folder
    this.getUniqueSnipIndex = getUniqueObjectIndexFn(Generic.SNIP_TYPE);

    this.getUniqueFolder = getUniqueObjectFn(Generic.FOLDER_TYPE);

    this.getUniqueFolderIndex = getUniqueObjectIndexFn(Generic.FOLDER_TYPE);

    // called whens searching starts
    // removes all tags from text and stores as new prperty
    // tags present in snippets might interfere with search
    // we only should work with plaintext
    this.stripAllSnippetsTags = function ($refDiv) {
        $refDiv = $refDiv || q.new("DIV"); // reuse existing DOM
        this.hasStrippedSnippets = true;

        this.list.forEach((elm) => {
            if (Folder.isFolder(elm)) {
                elm.stripAllSnippetsTags($refDiv);
            } else {
                elm.strippedBody = Snip.stripAllTags(elm.body, $refDiv);
            }
        });
    };

    this.searchSnippets = function (text) {
        text = escapeRegExp(text);

        if (!this.hasStrippedSnippets) {
            this.stripAllSnippetsTags();
        }

        return new Folder(
            Folder.SEARCH_RESULTS_NAME + this.name,
            this.list
                .reduce((result, listElm) => {
                    if (Folder.isFolder(listElm)) {
                        result = result.concat(listElm.searchSnippets(text).list);
                    }

                    if (listElm.matchesLazy(text)) {
                        result.push(listElm);
                    }

                    return result;
                }, [])
                .sort((a, b) => (b.matchesUnique(text)
                    ? 1
                    : !a.matchesUnique(text)
                        ? b.matchesNameLazy(text)
                            ? 1
                            : !a.matchesNameLazy(text) && b.matchesWord(text)
                                ? 1
                                : -1
                        : -1)),
            undefined,
            true,
        );
    };

    this.sort = function (filterType, descendingFlag) {
        // sort folders&snippets separately so that
        // folders are always above snippets
        const isAlphabeticSort = filterType === "alphabetic",
            firstSnippetIndex = this.getLastFolderIndex() + 1,
            folders = this.list.slice(0, firstSnippetIndex),
            snippets = this.list.slice(firstSnippetIndex);

        function sort(arr) {
            arr.sort((a, b) => {
                const alphaResult = a.name.localeCompare(b.name);
                // default to alphabetical sort in case timestamps are same
                return isAlphabeticSort ? alphaResult : a.timestamp - b.timestamp || alphaResult;
            });

            return descendingFlag ? arr.reverse() : arr;
        }

        this.list = sort(folders).concat(sort(snippets));
    };

    this.listSnippets = function (objectNamesToHighlight) {
        // can also be a MouseEvent (generated on click)
        objectNamesToHighlight = isObject(objectNamesToHighlight)
            ? undefined
            : objectNamesToHighlight;
        $containerSnippets
            .html("") // first remove previous content
            .appendChild(this.getDOMElementFull(objectNamesToHighlight));
        this.insertFolderPathDOM();
    };

    function insertPathPartDivs(name) {
        const pathPart = q.new("div").addClass("path_part"),
            rightArrow = q.new("div").addClass("right_arrow");
        pathPart.dataset.name = name;
        $containerFolderPath.appendChild(pathPart.html(gTranlateImmune(name)));
        $containerFolderPath.appendChild(rightArrow);
    }

    this.insertFolderPathDOM = function () {
        $containerFolderPath.html(""); // clear previous data

        if (this.isSearchResultFolder) {
            insertPathPartDivs(this.name);
            return;
        }

        insertPathPartDivs(Folder.MAIN_SNIPPETS_NAME);

        let index = Data.snippets.getUniqueFolderIndex(this.name),
            folder = Data.snippets;

        for (const idx of index) {
            folder = folder.list[idx];
            insertPathPartDivs(folder.name);
        }

        Folder.implementChevronInFolderPath();
    };

    // returns array representation of this Folder object
    this.toArray = function () {
        return [this.name, this.timestamp].concat(this.list.map(listElm => listElm.toArray()));
    };

    function stripHTMLTags(text) {
        /**
         * the docs say that "You must escape the five predefined entities to display them as text"
         * however my code doesn't work (gives "xml no name" error) on doing it, and actually works without doing it
         */

        const div = q.new("div");
        /* replacementMap = [["&", "&amp;"], ["<", "&lt;"], [">", "&gt;"], ["'", "&apos;"], ["\"", "&quot;"]] */

        div.innerHTML = text;
        const output = div.innerText.replace(/\n/g, " ");

        /* replacementMap.forEach(function (element) {
            output = output.replace(element[0], element[1]);
        }); */

        return output;
    }

    function highlightMatchText(keyword, textToMatch) {
        return textToMatch.replace(
            new RegExp(escapeRegExp(keyword), "ig"),
            $0 => `<match>${$0}</match>`,
        );
    }

    this.filterSnippetsForOmnibox = function (text, callback) {
        const snipArray = [],
            searchResults = this.searchSnippets(text);

        searchResults.forEachSnippet((snip) => {
            snip.formatMacros((snipBody) => {
                snipBody = stripHTMLTags(snipBody);
                const description = `<url>${highlightMatchText(text, snip.name)}</url> - `
                    + `<dim>${highlightMatchText(text, snipBody)}</dim>`;

                snipArray.push({
                    content: snipBody,
                    description,
                    deletable: true,
                });
            });
        });

        // since formatMacros is an async operation
        const checkFullyLoaded = setInterval(() => {
            if (snipArray.length === searchResults.getSnippetCount()) {
                clearInterval(checkFullyLoaded);
                callback(snipArray);
            }
        }, 100);
    };

    this.getFolderSelectList = function (nameToNotShow) {
        let mainContainer = q.new("div"),
            $folderName = q.new("p").html(gTranlateImmune(this.name)),
            childContainer,
            hasChildFolder = false;

        $folderName.dataset.name = this.name;

        mainContainer.appendChild($folderName);

        if (this.name !== Folder.MAIN_SNIPPETS_NAME) {
            mainContainer.addClass("collapsed");
        }

        this.forEachFolder((e) => {
            if (e.name !== nameToNotShow) {
                hasChildFolder = true;
                childContainer = e.getFolderSelectList(nameToNotShow);
                childContainer.style.marginLeft = "15px";
                mainContainer.appendChild(childContainer);
            }
        }, true);

        if (!hasChildFolder) {
            mainContainer.addClass("empty");
        }

        return mainContainer;
    };

    this.getDuplicatedObject = function () {
        return new Folder(this.name, this.list, this.timestamp);
    };

    this.getUniqueSnippetAtCaretPos = function (node, pos) {
        let val = getText(node),
            snip,
            stringToCheck = "",
            foundSnip = null,
            delimiterChar = val[pos - 1],
            lim = pos < OBJECT_NAME_LIMIT ? pos : OBJECT_NAME_LIMIT;

        for (let i = 1; i <= lim; i++) {
            // the previous delimiter char gets added to the
            // string to check as we move towards left
            stringToCheck = delimiterChar + stringToCheck;
            delimiterChar = val[pos - 1 - i];
            snip = this.getUniqueSnip(stringToCheck);

            const snipNameDelimiterListRegex = new RegExp(
                `[${escapeRegExp(Data.snipNameDelimiterList)}]`,
            );

            if (snip) {
                if (Data.matchDelimitedWord && snipNameDelimiterListRegex) {
                    // delimiter char may not exist if snip name
                    // is at the beginning of the textbox
                    if (
                        !delimiterChar
                        || snipNameDelimiterListRegex.test(delimiterChar)
                        || delimiterChar === "\n"
                    ) {
                        // a new line character is always a delimiter
                        foundSnip = snip;
                    }
                } else {
                    foundSnip = snip;
                }
            }

            if (foundSnip) {
                break;
            }
        }

        return foundSnip;
    };

    // parentID (optional) - if undefined, defaults to top-level
    this.createCtxMenuEntry = function (parentId) {
        let id,
            emptyFolderText = "Empty folder ";

        this.list.forEach((object) => {
            id = Generic.CTX_START[object.type] + object.name;

            chrome.contextMenus.create(
                {
                    contexts: ["editable"],
                    id, // unique id
                    title: object.name,
                    parentId,
                },
                chromeAPICallWrapper(),
            );

            listOfSnippetCtxIDs.push(id);

            if (Folder.isFolder(object)) {
                object.createCtxMenuEntry(id);
            }
        });

        if (this.list.length === 0) {
            id = emptyFolderText + this.name;

            chrome.contextMenus.create(
                {
                    contexts: ["editable"],
                    id, // unique id
                    title: emptyFolderText,
                    parentId,
                },
                chromeAPICallWrapper(),
            );
            listOfSnippetCtxIDs.push(id);
        }
    };

    function genericLooper(type) {
        /**
         * @param {Function} fn function to execute on matching list elm; doesn't retain `this` context
         * @param {boolean} shouldNotNest calls `fn` on snippets/folders inside `this.list` by default
         */
        const ret = function (fn, shouldNotNest) {
            this.list.forEach((listElm) => {
                if (!shouldNotNest && Folder.isFolder(listElm)) {
                    ret.call(listElm, fn, false);
                }

                if (listElm.type === type) {
                    fn(listElm);
                }
            });
        };

        return ret;
    }

    this.forEachSnippet = genericLooper(Generic.SNIP_TYPE);
    this.forEachFolder = genericLooper(Generic.FOLDER_TYPE);
}
Folder.prototype = new Generic();

/**
 * @param {Object[]} `arr` representation of the folder
 * @returns {Folder} based on `arr`
 */
Folder.fromArray = function (arr) {
    // during 2.8.0 version, first element of arr
    // was not the name of folder
    if (typeof arr[0] !== "string") {
        arr.unshift(Folder.MAIN_SNIPPETS_NAME);
    }

    // 2nd elm is timestamp
    if (typeof arr[1] !== "number") {
        arr.splice(1, 0, Date.now());
    }

    const folder = new Folder(arr.shift(), undefined, arr.shift());
    folder.list = arr.map(listElm => (Array.isArray(listElm) ? Folder.fromArray(listElm) : Snip.fromObject(listElm)));

    if (window.IN_OPTIONS_PAGE) {
        observeList(folder.list);
    }

    return folder;
};
Folder.isFolder = function (elm) {
    return elm && elm.type === Generic.FOLDER_TYPE;
};
Folder.MAIN_SNIPPETS_NAME = "Snippets";
Folder.SEARCH_RESULTS_NAME = "Search Results in ";
Folder.CHEVRON_TEXT = "<<";

Folder.getDefaultSnippetData = function () {
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
            Folder.MAIN_SNIPPETS_NAME,
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
};

const DATA = {
    snippets: Folder.fromArray(Folder.getDefaultSnippetData()),
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


export { DATA, Generic, Snip, Folder };

