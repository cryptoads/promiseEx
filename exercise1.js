var urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/randomasdfadsf',
  'https://dog.ceo/api/breed/eskimo/images/random'
];

urls.forEach(function(el){
    $.get(el).then(function(){console.log('data was fetched')}).catch(function(err){console.log(err)})
});


