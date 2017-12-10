"use strict";

(function(){
  // creates a new object called xhr
  // which will handle the API call
  let xhr = new XMLHttpRequest();
  // console.log(`Current readyState: ${xhr.readyState}`);


  let demoJSON = document.getElementById("Wikipedia");

  // constructs the base for the request url
  let baseURL = "https://en.wikipedia.org/w/api.php? \
                format=json& \
                action=query& \
                generator=search& \
                gsrnamespace=0& \
                gsrlimit=1& \
                prop=info|extracts|langlinks|pageimages& \
                inprop=url& \
                exintro& \
                explaintext& \
                exsentences=1& \
                exlimit=max& \
                llprop=url& \
                lllimit=max& \
                piprop=thumbnail|name& \
                origin=*& \
                gsrsearch=";

/*
API Sandbox url
https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&generator=search&prop=extracts%7Clanglinks%7Cpageimages&gsrlimit=10&gsrnamespace=0&exintro&explaintext&exsentences=1&exlimit=max&llprop=url&lllimit=max&piprop=thumbnail|name&origin=*&gsrsearch=kittens

Request url
https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&prop=extracts%7Clanglinks%7Cpageimages&gsrlimit=10&gsrnamespace=0&exintro&explaintext&exsentences=1&exlimit=max&llprop=url&lllimit=max&piprop=thumbnail|name&origin=*&gsrsearch=kittens
*/

  function gatherData(data) {
    // console.log(data);
    // initialise some variables
    let theData = "";
    let langLinks = "";
    let img = "<img>";
    const languages = ["en"];
    let k;
    let key;
    // loop through the result pages by pageid
    for(key in data.query.pages) {
      let tmp = data.query.pages[key];

      let title = "Read more about " + `${tmp.title}` +`<strong><a href="${tmp.fullurl}">`+" Here"+ `</a></strong>`;

      theData += `<li> ${title} <span class="langs">${langLinks}</span></li>`;
    }
    demoJSON.innerHTML = theData;
  }

  // the API call is triggered once the user submits a query

    // complete the request url
    let wiki = baseURL + "Vincent Van Gogh";
    // open a connection to the requested API url
    xhr.open("GET", wiki, true);
    // be polite to Wikipedia
    xhr.setRequestHeader('Api-User-Agent', 'Example/1.0');
    // send off that request
    xhr.send();
    // if the response was ok, handle the response data using the gatherData function
    xhr.onreadystatechange = function() {
      // console.log(`Current readyState: ${xhr.readyState}`);
      if (xhr.readyState === 4 && xhr.status === 200) {
        // parse the response JSON
        let response = JSON.parse(xhr.responseText);
        // deal with the parsed JSON data
        gatherData(response);
      }
    };


}());
