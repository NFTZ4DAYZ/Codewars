// Extract the domainname from the URL  

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

//   function domainName(url){
//     var cleanUrl = '';
//     var restricted = ['de', 'br', 'fr', 'io', 'it', 'net', 'info', 'tv', 'name', 'users', 'pro', 'img', 'error', 'uk', 'warez', 'www', 'ru', 
//     'http', 'https', 'com', 'co', 'jp', 'us', 'net', 'org', 'edu', 'biz', 'za', 'index', 'php', 'kata', 'default', 'html', 'archive', 'error'];
//     var splitAddr = url.split(/[/.:]/);
//     for(var i = 0; i < splitAddr.length; i++) {
//       if(restricted.indexOf(splitAddr[i]) == -1) {
//         cleanUrl += splitAddr[i];
//       }
//     }
//     return cleanUrl;
//   }