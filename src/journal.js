export function Entry(title, body) {
    this.title = title;
    this.body = body;
}

Entry.prototype.wordCounter = function () {
    var totalWords = 0;
    var wordArray = this.body.split(" ");
    totalWords = wordArray.length;
    return totalWords;
}

Entry.prototype.charCounter = function () {
    var vowelArr = ["a","i","o","e","u"];
    var totalVowels = 0;
    var totalConsonants = 0;
    
    for (var i = 0; i<this.body.length;i++)
    {
        if (vowelArr.includes(this.body[i]))
        {
            totalVowels++;
        }
        else if (this.body[i] != " ")
        {
            totalConsonants++;
        }
    }
    return [totalVowels,totalConsonants]
}

Entry.prototype.getTeaser = function () {
    var firstSentence = "";
    var delimiter = [".","?","!"];
    var i = 0;

    while(!delimiter.includes(this.body[i]))
    {
        firstSentence += this.body[i];
        var wordArray = firstSentence.split(" ");
        var totalWords = wordArray.length;
        i++;
        console.log(totalWords);

        if (totalWords > 8)
        {
            break;
        }
    }
    return firstSentence;
}