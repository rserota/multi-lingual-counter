var languages = {
    english : ['one', 'two', 'three'],
    spanish : ['uno', 'dos', 'tres']
}

var counter = function(language){
    this.language= language


    this.timeOuts = []
    var doTimeout = function(that, i){
        that.timeOuts.push(setTimeout(function(){
            console.log(languages[that.language][i])
        }, (1000 * i) ))
    }

    this.count = function(n){
        var that = this
        for (var i = 0; i < n; i++){
            doTimeout(this, n)
        }
    }
    this.stopCounting = function(){

    }



}