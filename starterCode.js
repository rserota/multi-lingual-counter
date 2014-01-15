var languages = {
    english : ['one', 'two', 'three', 'four', 'five'],
    spanish : ['uno', 'dos', 'tres', 'cuatro', 'cinco'],
    esperanto : ['unu', 'du', 'tri', 'kvar', 'kvin'],
    french : ['un', 'deux', 'trois', 'quatre', 'cinq']
}

var Counter = function(language){
    this.language = language

    // You might need to add more code here to make your counters work properly.

    this.count = function( ){
        //Finish this function! A counter should be able to count repeatedly to an arbitrary number, in its native language.
    }

    this.stopCounting = function(){
        //Finish this function! A counter should stop counting immediately when this method is called.
    }
}

