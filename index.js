const articlesTrie = require("./lib/trie.json")

function find(word, index, trie = articlesTrie, defaultArticle = 'a') {
    let character = word.slice(index, index + 1)
    let node = trie[character]
    if (character && node) {
        return find(word, index + 1, trie, node["_"] || defaultArticle)
    }
    return defaultArticle
}

module.exports = {
    "find": function (word) {
        return find(word, 0)
    }
};
