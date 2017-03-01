word = function(w){
    this.word = w || '';
    this.count = 1;
}

var count = {
    words: new Array(),
    Words: new Array(),

    get : function(w) {
        //Returns index of word in array or -1 if it isn't there
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

    genWordList : function(strings){
        //generates a array containing every word in any of the strings that were handed over
        text = strings.constructor == Array ? strings : [strings];
        var self = this;
        text.forEach(function(t){
            tWords = String(t).replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g," ").split(' ');
            tWords.forEach(function(aWord){
                self.words.push(aWord.toLowerCase());
            });
        },this);
    },

    count: function(strings){
        //call this count occurences of each word over one or more strings
        this.genWordList(strings);
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
    }
}

module.exports = count;