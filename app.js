var gifArray = ['Final Fantasy', 'Spyro', 'Pokemon','FallOut 4', 'Metal Gear Solid', 'Crash Bandicoot','Sonic','Mario'];
//var url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key="+apiKey+"&limit=5";
var apiKey = 'AfT3fJMoOjz405JfFPKkEQADX17Mnlmp';
var gifImageArray = [];
var stillGif;
var aniGif;
var gifs;
var link;
var span = $('<h1>')
var currentTerm;

$('#submit').on('click', function(){
    event.preventDefault();
    currentTerm = $('#search').val();
    gifArray.push(currentTerm);
    makeButton(currentTerm);
})

for (i = 0; i < gifArray.length; i++){
    makeButton(gifArray[i]);
}



$('.option').on('click', function(){
    searchValue = $(this).attr('data');
    console.log($(this).attr('data'));
    url = makeUrl(searchValue);
    console.log(url);
    console.log(searchValue);

    $.ajax({
        url: url,
        method: "GET"
      }).then(function(response){
        console.log(response);
            for (i = 0; i < 10; i++){
            
            stillGif = response.data[i].images.downsized_still.url;
            aniGif = response.data[i].images.downsized.url;
            span.text('Rating: ' + response.data[i].rating)
           
            $('#displayGifs').prepend($('<img>').attr({
                'src': stillGif,
                'data-still': stillGif,
                'data-animated':aniGif,
                'data-state':'still'}
            ).addClass('still gif')
        
        );
        
            //maybe try ids?
            
            
        
        
        }
        $('img').after(span)
        
        //for (i = 0; i < gifs.length; i++){
            $('.gif').on('click',function(){
                console.log('clicked');
                var currentState = $(this).attr('data-state');
                console.log(currentState + $(this).attr('data-state'))
                if (currentState === 'still'){
                    $(this).attr('src', $(this).attr('data-animated'));
                    $(this).attr('data-state', 'animated');
                } else if (currentState === 'animated'){
                    $(this).attr('src', $(this).attr('data-still'));
                    $(this).attr('data-state', 'still');
                }
            })
        
    //}
    })
    
   
    
})





function makeUrl(searchTerm){
    q = searchTerm;
    url = 'https://api.giphy.com/v1/gifs/search?q='+q+'&limit=10&rating=pg&api_key='+apiKey;
    return url;
}

function makeButton(tag){
    var button = $('<button>');
    button.attr('data', tag);
    button.text(tag);
    button.addClass('option');
    $('#buttonList').append(button);
}

function gifObj(link, still, animated){
    this.link = $('.gif')[i];
    this.still = still;
    this.animated = animated;
    
}
