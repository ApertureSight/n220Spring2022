function badWords(){
    let total = 0;
    var wordString = wordSearch.value;

    let wordArray = wordString.split(" ");

    for(let i = 0; i < wordArray.length; i++){

        if(wordArray[i] == 'clear'){
        total += 1;
        }
        else if(wordArray[i] == 'tires'){
        total += 1;
        }
        else if(wordArray[i] == 'water'){
        total += 1;
        }
        }
        document.getElementById('result').innerHTML = "Number of Bad Words: " + total;
    }


