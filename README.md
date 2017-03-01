# OcuCount
A tiny NodeJS module to perform wordcounts on single or arrays of strings.

#Installation
Installation is very simple due to OcuCount being on NPM. Simply type: `npm install ocucount` from a console in the project directory then add `var ocucount = require('ocucount');` to the top of your project file.

##Usage
Using OcuCount is very simple as there is only one function that you need to use. Usage does differ slightly depending on the number of strings however...

###For a single strings
For single strings simply use the following function:
```
var wordcount = ocucount.count('What are you doing my friend? you are a good friend');
```
Simply replace the test string with the string you want to perform the wordcount on. In this example, wordcount would be the following:
```
[
    word { word: 'what', count: 1 },
    word { word: 'are', count: 2 },
    word { word: 'you', count: 2 },
    word { word: 'doing', count: 1 },
    word { word: 'my', count: 1 },
    word { word: 'friend', count: 2 },
    word { word: 'a', count: 1 },
    word { word: 'good', count: 1 } 
]

```

###For a multiple strings
OcuCount can also be used on arrays of stings. For example:
```
var wordcount =ocucount.count(['What are you doing my friend?','You are a good friend.','But I love you!']);
```
In this example, wordcount would be:
```
[
    word { word: 'what', count: 1 },
    word { word: 'are', count: 2 },
    word { word: 'you', count: 3 },
    word { word: 'doing', count: 1 },
    word { word: 'my', count: 1 },
    word { word: 'friend', count: 2 },
    word { word: 'a', count: 1 },
    word { word: 'good', count: 1 },
    word { word: 'but', count: 1 },
    word { word: 'i', count: 1 },
    word { word: 'hate', count: 1 }
]
```

Enjoy. :D