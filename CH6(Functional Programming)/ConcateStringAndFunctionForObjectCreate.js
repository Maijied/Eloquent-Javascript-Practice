//Create link using JS
var url = "https://www.google.com/";
var text = "Click to Search";
var linkText = "<a href=\"" + url + "\">" + text + "</a>"; //<a href="https://www.google.com/">Click to Search</a>
console.log(linkText);

// Easy way to model JS objects
var linkObject = {name: "a",
                  attributes: {href: "http://google.com/"},
                  content: ["Click to Search"]
            };
console.log(linkObject);
/*
{
    name: 'a',
    attributes: { href: 'http://google.com/' },
    content: [ 'Click to Search' ]
}
*/
//Function for create Object
  function tag(name, attributes, content){
      return {name: name, attributes: attributes, content: content};
  }
  console.log(tag("Google", "www.facebook.com", "Browse")); //{ name: 'Google', attributes: 'www.facebook.com', content: 'Browse' }

  //Shortcuts for common types, such as links
  function link(target, text){
      return tag("a", [text], {href: target});
  }
  console.log("Link", link("www.facebook.com", "facebook"));
  /*
  Link {
  name: 'a',
  attributes: [ 'facebook' ],
  content: { href: 'www.facebook.com' }
}
*/
//image function , returns location of image file
function image(src){
    return tag("img", [], {src: src});
}
console.log("ImageLocation: ",  image("img/sheep.jpg")); 
//ImageLocation:  { name: 'img', attributes: [], content: { src: 'img/sheep.jpg' } }

function escapeHTML(text){
    var replacements = [[/&/g, "&amp;"], [/"/g, "&quot;"],
                        [/</g, "&lt;"], [/>/g, "&gt;"]];

    replacements.forEach(replace => {
        text = text.replace(replace[0], replace[1]);
    });
    // forEach(replacements, function(replace){
    //     text = text.replace(replace[0], replace[1]);
    // });
    return text;
}
console.log(escapeHTML("Hello>")); //Hello&gt;

//   function htmlDoc(title, bodyContent){
//       return tag("html", [tag("head", [tag("title", [title])]),
//              tag("body", bodyContent)]);
//   }

  