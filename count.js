/**
 * Contains a single word string in lower case as well as it's number of occurences.
 * @class
 * @param {String} w A single word as a string.
 */
function word(w){
    this.word = w.toLowerCase() || '';
    this.count = 1;
}

/**
 * Contains a single word string in lower case as well as it's number of occurences.
 * @function
 * @param {word} a First word to compare.
 * @param {word} b Second word to compare.
 */
function comparewords(a,b) {
  if (a.count < b.count)
    return -1;
  if (a.count > b.count)
    return 1;
  return 0;
}

/**
 * Contains all word counting functions and variables
 */
var count = {
    words: new Array(),
    Words: new Array(),

    /**
     * Returns either an index in the current word list or, in the case that it is not found, returns -1
     * @function
     * @param {String} w A single word to search for. Is automatically converted to lower case.
     */
    get : function get(w) {
        var handled = 0;
        var ci = -1;
        this.Words.forEach(function(ww,i){
            handled++;
            if(ww.word.toLowerCase() === w.toLowerCase()){
               ci = i;
            }
        },this);
        return ci;
    },
    /**
     * Returns an array of every word (including repeats) in the provided string/s in lower case.
     * @function
     * @param {String|String[]} strings Either a single string or array of strings to be converted to an array of words
     */
    genWordList : function genWordList(strings){
        text = strings.constructor == Array ? strings : [strings];
        var self = this;
        text.forEach(function(t){
            tWords = String(t).replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g," ").split(' ');
            tWords.forEach(function(aWord){
                self.words.push(aWord.toLowerCase());
            });
        },this);
    },
    /**
     * Returns an array of objects containing each word, from the given string/s, in lower case and the number of occurences.
     * @param {String|String[]} s Either a single string or array of strings on which to perform the word count
     */
    count: function count(s){
        //the following 2 lines remove the amazingly annoying persistance bug.
        this.words= new Array();
        this.Words= new Array();
        this.genWordList(s);
        this.words.forEach(function(w) {
            if(w != ''){
                if(this.get(w) === -1){
                    this.Words.push(new word(w));
                }else{
                    this.Words[this.get(w)].count++;
                }
            }
        }, this);
        return(this.Words);
    },
    /**
     * Sorts an array of words returned by OcuCount. (Sorts least used to most used)
     * @function
     * @param {word[]} wordsToSort An array of words intended for sorting.
     */
    sortWords : function sortWords(wordsToSort){
        if(wordsToSort.constructor == Array )
            return(wordsToSort.sort(comparewords));
        else
            new Error('Invalid array of words given to ocucount.sortWords');
    }
}

module.exports = count;