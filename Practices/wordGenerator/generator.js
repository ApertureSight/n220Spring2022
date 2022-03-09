let txtName = document.getElementById('txtName');
let txtTimes = document.getElementById("txtTimes");
let dvStoryResult = document.getElementById("storyResult");


function generateStory(){
    let word = txtName.value;
  
    let times = Number(txtTimes.value);
    
    txtName.value = "";

    let val = "";
    for(let i = 0; i < times; i++){
        value += txtName + " ";
    }
}
//1 Input
//1 button
//1 button click
//Make a word an input, repeat 3 times. 
//Output repeated version on the document

