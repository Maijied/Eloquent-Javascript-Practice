 //recluseFile() returns a text, contains multiple paragraphs
 function recluseFile(){
     return "% Paragraph on Good Manners\n %% *Our community recognizes us for our ethical conduct*. This is an indication of possessing the right manners that should be exhibited in public. \nPutting others before you define your selfless quality and in exchange, {you receive generosity from others}. %% Being selfless involves respecting the feelings of others and not to hurt them. \nSharing is another way to show respect and love for the other person and maintains harmony between two individuals. %% Making a guest seat comfortably and serving him throughout his stay at your home is also a portrayal of your good manners."
 }
 //Find total paragraphs from the text
 var paragraphs = recluseFile().split("\n");
 console.log("Found: " + paragraphs.length, " paragraphs."); //Found: 4  paragraphs.

 //Find total header 
 function processParagraph(paragraph){
     var header = 0;
     while(paragraph.charAt(0) == "%") {
         paragraph = paragraph.slice(1);
         header++;
     }
     return {type: (header == 0 ? "p" : "h" + header), content: paragraph};
 }
 console.log(processParagraph(paragraphs[0])); //{ type: 'h1', content: ' Paragraph on Good Manners' }

 //Using "map" function to saw earlier
//  var mapParagraphs = map(processParagraph, recluseFile.split("\n")); //Error: "map" is not defined
//  console.log("mapParagraphs" + mapParagraphs);

//function "splitParagraph" which given a aparagraph string, return an array of paragraph fragments
//"indexOf" of method searches for a character or sub-string in a string and returns it's position or "-1" if not found
function splitParagraph(text){
    function indexOrEnd(character){
        var index = text.indexOf(character);
        return index == -1 ? text.length : index;
    }
    function takeNormal(){
        var end = reduce(Math.min, text.length,
                        map(indexOrEnd, ["*", "{"]));
        var part = text.slice(0, end);
        return part;
    }
    function takeUpTo(character){
        var end = text.indexOf(character, 1);
        if(end == -1)
            throw new Error("Missing closing '" + character + "'");
        var part = text.slice(end + 1);
        return part;
    }

    var fragments = [];
    while(text != ""){
        if(text.charAt(0) == "*")
            fragments.push({type: "emphasised", content: takeUpTo("*")});
        else if(text.charAt(0) == "{")
            fragments.push({type: "footnote", content: takeUpTo("}")});
        else
            fragments.push({type: "normal", content: takeNormal()});
    }
    return fragments;
}
var paraText = recluseFile();
console.log(paraText);
console.log(splitParagraph(paraText));

 