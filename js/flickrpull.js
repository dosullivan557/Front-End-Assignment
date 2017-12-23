function flickr(search){
  let flickrStuff = document.getElementById("flickr");

  let baseURLF = "https://api.flickr.com/services/rest/? \
                method=flickr.photos.search& \
                api_key=977f37251b9341ce9efd2c4457eacc6d& \
                format=json& \
                per_page=8& \
                nojsoncallback=1& \
                tags=";

    let url = baseURLF + search;
    let request = new Request(url);
    fetch(request)
      .then(function (response) {
        return response.json();
      })
      .then(function(data) {
        let theData = "";
        let tmp = data.photos.photo;
        for(let key in tmp) {
          let url = `https://farm${tmp[key].farm}.staticflickr.com/${tmp[key].server}/${tmp[key].id}_${tmp[key].secret}_q.jpg`;
          theData += `<img src="${url}" alt="${tmp[key].title}">`;
        }
        flickrStuff.innerHTML = theData;
      });
}
