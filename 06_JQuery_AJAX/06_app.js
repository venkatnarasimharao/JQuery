$('#load-form-button').click(function() {
   $('#card-body').load('form.html');
});

$('#load-images-btn').click(function() {
   $.getJSON('https://gist.githubusercontent.com/venkatnarasimharao/82b65d47a6eea898a17f3b52f6671d6d/raw/719224a9653772c13c93f5ac1e57f1fbbe483370/ajax_data.json',function (data) {
       for(var i=0; i<=5; i++){
           var imgSrc = data.contacts[i].picture.large;
           $('#image' +(i+1)).attr('src',imgSrc);
           var imgName = data.contacts[i].name.first+'' +data.contacts[i].name.last;
           $('#image' +(i+1) + '_name').text(imgName);
       }
   });
});