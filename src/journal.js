function Entry(title,body){
    this.title = title,
    this.body = body,
    this.wordCounter = function () {
        var totalWords = 0;
        var wordArray = this.body.split(" ");
        totalWords = wordArray.length;

        return  totalWords
    }
}

