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