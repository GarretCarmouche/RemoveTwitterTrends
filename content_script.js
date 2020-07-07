window.onload = function(event){
    console.log(window.location.href);
    if (window.location.href == 'https://twitter.com/home') {
        console.log(document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz") != null);
        document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz").remove();
        //$("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-aqfbo4.r-zso239.r-1hycxz").remove();
    }
    if (window.location.href == 'chrome-extension://gnpnakkheoadlkkhfdogenofpaaengkj/_generated_background_page.html'){
      console.log("Testing env");
    }
    else{
      console.log("Not testing env");
    }
}