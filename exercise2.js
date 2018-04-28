var urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
];

var a = $.get(urls[0]);
var b = $.get(urls[1]);
var c = $.get(urls[2]);
var d = $.get(urls[3]);
var e = $.get(urls[4]);

Promise.all([a,b,c,d,e]).then(function(data){console.log('data was fetched.')});