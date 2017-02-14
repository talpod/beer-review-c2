var beers = [];

var addBeer = function (name, category) {
 var beer = {
             name: name,
             category: category
             };
 beers.push(beer);
};

$('.post-beer').on('click', function()  {
 addBeer($('.beer-input').val(), $('.category-input').val());
})