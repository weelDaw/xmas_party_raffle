var last_get = [];
var myArray = [];

$(function(){

    sender("", "../process/all_entries.php", "get_all_names");

    $('#winner_draw').hide();

    $.fn.snow();
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#00BFFF' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#00FF00' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#00FFFF' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#7FFF00' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#90EE90' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#A9A9A9' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#8A2BE2' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#E6E6FA' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#E9967A' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#F5DEB3' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#FFF0F5' });
    $.fn.snow({ minSize: 5, maxSize: 45, newOn: 1000, flakeColor: '#FFFFF0' });
    $("input[name='draw']").attr("disabled","disabled");


    $('#show_all_entries').click(function(){
        sender("", "../process/all_entries_order_by.php", "#show_entries2");
    })

    $('#not_participate').click(function(){
        sender("", "../process/non_attendees.php", "#show_non_attendees");
    })

    $('#participate').click(function(){
        sender({name_like:""}, "../process/show_attendees.php", "#show_attendees");
    })

    $('#reg_mod').click(function(){
        var url = "../process/get_names.php";
        var show = "#entries";
        var data = "";
        sender(data, url, show);
    })

    $('#register_man_no').click(function(){
        var selected = $('#selected_name').val();
        sender({selected:selected}, "../process/register_entry.php", "");
        sender("", "../process/get_names.php", "#entries");
    })

    $('#start').click(function(){
        $("input[name='draw']").removeAttr("disabled","disabled");
        $('#winner_start').show();
        $('#winner_draw').hide();
        random_names();
    })

    $('#draw').click(function(){
        var name = myArray[Math.floor(Math.random() * myArray.length)];
        if ($.inArray(name,last_get)< 0){
            last_get.push(name);
            alert(myArray);

        //-----remove from name in array
            Array.prototype.remove=function(v){
                delete this[this.indexOf(v)]
            };
            myArray.remove(name);
       //////////////////////////////////////////////
            $("input[name='draw']").attr("disabled","disabled");
            setTimeout(function(){
                $('#winner_start').hide();
                $('#winner_draw').fadeIn(2000);
                $('#winner_draw').html(name);
                $('#winner_draw').animate({ "color" : "rgba(61, 31, 17, 0.0)" }, 1000);
                $('#winner_draw').textEffect({
                    effect: 'random', // the type of the text aniamtion. fade, glow, jumble, slide, dropdown and random (default)
                    effectSpeed: 150, // the speed in ms at which new letters begin to animate.
                    completionSpeed: 6000, // the speed in ms of the text aniamtion.
                    jumbleColor: '#7f7f7f' // the color of the jumbled letters.
                });


            }, 2000);

        }else{
            if(last_get.length !== myArray.length){
                random_names();
            }else{
                alert("All names already mention !");
            }
        }
    })

    $('#logout').click(function(){
        $.ajax({
            type: 'POST',
            url: '../process/logout.php',
            data:"",
            success: function(response){
                window.location.href="../";
            }
        })
    })
    setInterval(function(){
        $.ajax({
            type:"POST",
            data:"",
            url:"../process/refresh.php",
            success: function(data){
                if(data == "not"){
                    window.location.href="../";
                }
            }
        });

    },2000);

})

function sender(data, url, show){
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        beforeSend: function(){
            $('.loading').show();
        },
        success: function(response){
            if(show == "get_all_names"){
                var array = JSON.parse(response);
                myArray = array;
            }else{
                $(show).html(response);
            }
        },
        error: function(err_msg){
            alert("Error at getting models: "+err_msg['statusText'])
        },
        complete:function(){
            $('.loading').fadeOut(2000);
        }
    })
}



function random_names(){
    onHover(' ,.-=()+/*":;;');
}

/*============ Random Names With Animation ===========*/


function getRandomCharacter(length){
    // List all characters

    var possible = "abcdefghijklmnopqrstuvwxyz";
//    possible += "0123456789";
    possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Return single character if length not specified
    if(length == null)
        return possible.charAt(Math.floor(Math.random() * possible.length));
    else{
        var text = "";
        for(var i = 0; i < length; i ++)
            text += getRandomCharacter();

        return text;
    }
}

function compare(source, target){
    var differences = [];

    // The first item of array contains the length of the target string
    differences.push(target.length);

    for(var i = 0; i < Math.max(source.length, target.length); i ++){
        if(source.charAt(i) != target.charAt(i))
            differences.push(i);
    }
    return differences;
}

function iterateText(current, exclude){
    var text = "";

    for(var i=0; i < current.length; i++ ){
        // The character at position i is the same as target
        if($.inArray(i, exclude) == -1)
            text += current.charAt(i);
        // Iterate further with a new random character
        else
            text += getRandomCharacter();
    }

    // Add character if target string longer
    if(exclude[0] > current.length)
        text += getRandomCharacter();

    // Or remove character if target string shorter
    if(exclude[0] < current.length)
        text = text.substr(0, text.length-1);
    return text;
}

function randomizeText (target, message, result, interval) {
    // Compare the current string with the target string
    var diff = compare(message, result);

    // Shorten the timeout as the differences get smaller
    var acc = Math.max(interval * diff.length / result.length, 20);
    // clamp the slowest animation
    acc = Math.min(acc, 100);

    // Exit where no more differences found
    if(diff.length == 1)
        return;

    // Generate the next iteration of the text
    message = iterateText(message, diff);

    // Update the target label
    $(target).text(message);

    // Recursivelly call another iteration
    setTimeout(function () { randomizeText(target, message, result, interval); }, acc);
}

function goFullRandom(name){
    randomizeText("#winner_start", getRandomCharacter(name.length), name, 400);
}

function onHover(name) {
    goFullRandom(name);
}