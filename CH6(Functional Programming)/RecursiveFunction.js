//Turn an HTML element object into string
function renderHTML(element){
    var pieces = [];

    function renderAttributes(attributes){
        var result = [];
        if(attributes){
            for(var name in attributes){
                result.push(" " + name + "=\"" + escapeHTML(attributes[name]) + "\"");
            } 
        }
        return result.join("");
    }
    function render(element){
        //text node
        if(typeof element == "string"){
            pieces.push(escapeHTML(element));
        }
        //Emoty Tag
        else if(!element.content || element.content.length == 0){
            pieces.push("<" + element.name + renderAttributes(element.attributes) + "/>");
        }
        //Tag with content
        else{
            pieces.push("<" + element.name + renderAttributes(element.attributes) + ">");
            forEach(element.content, render);
            pieces.push("<" + element.name + ">");
        }
    }
    render(element);
    return pieces.join("");
}

var body = [tag("h1", ["The Test"]),
            tag("p", ["Here is a paragraph and an image...."]),
            image("img/sheep.png")];
var doc = htmlDoc("The Test", body);
viewHTML(renderHTML(doc));
// console.log(renderHTML("https://google.com/", "Google offered in"));