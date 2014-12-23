var last_get = [];
var last_get_minor_prize = [];
var last_get_major_prize = [];
var minor_prize = ["RICE","FLAT IRON","ELECTRIC FAN","GROCERY","RICE COOKER"];
var major_prize = ["SACK OF RICE","TURBO BOILER","WASHING MACHINE"];
var prizes = ["MAJOR","MINOR"];
var raffle_selected = "";
var major_cnt = 1;
var minor_cnt = 1;
var minor_times = 1;
var minor_selected_prize = "";
var major_selected_prize = "";
var myArray = [];
var minor_arr = [];


var get_tv = 0;
var winner_cnt = 1;


/*function random_prize(){
    var ran_prize = "";
    do{
        ran_prize = prizes[Math.floor(Math.random() * prizes.length)];
    }while(ran_prize == "" || ran_prize == undefined);
    console.log(ran_prize);
    return ran_prize;
}*/

function select_to_random(ran){
    var return_val = "";
    do{
        return_val = ran[Math.floor(Math.random() * ran.length)];
    }while(return_val == "" || return_val == undefined);
    console.log("hello"+return_val);
    return return_val;
}

function major_ine(){

            $("input[name='random_prizes']").attr("disabled","disabled");
            $("input[name='start']").removeAttr("disabled","disabled");

            major_selected_prize = select_to_random(major_prize);
            console.log(major_selected_prize);

            //-----remove from name in array
            Array.prototype.remove=function(v){
                delete this[this.indexOf(v)]
            };
            major_prize.remove(major_selected_prize);
            console.log(major_prize);
    alert("MAJOR PRIZE :"+major_selected_prize);
}
function minor_ine(){

            $("input[name='random_prizes']").attr("disabled","disabled");
            $("input[name='start']").removeAttr("disabled","disabled");

//            minor_selected_prize = minor_prize[Math.floor(Math.random() * minor_prize.length)];
            minor_selected_prize = select_to_random(minor_prize);
            console.log(minor_selected_prize);

            //-----remove from name in array
            Array.prototype.remove=function(v){
                delete this[this.indexOf(v)]
            };
            minor_prize.remove(minor_selected_prize);
            console.log(minor_prize);

    alert("MINOR PRIZE :"+minor_selected_prize);
}

function random_prizes(){
    switch(winner_cnt){
        case 1:
            raffle_selected = "MINOR";
            minor_ine();
            break;
        case 2:
            raffle_selected = "MINOR";
            minor_ine();
            break;
        case 3:
            raffle_selected = "MAJOR";
            major_ine();
            break;
        case 4:
            raffle_selected = "MINOR";
            minor_ine();
            break;
        case 5:
            raffle_selected = "MAJOR";
            major_ine();
            break;
        case 6:
            raffle_selected = "MINOR";
            minor_ine();
            break;
        case 7:
            raffle_selected = "MINOR";
            minor_ine();
            break;
        case 8:
            raffle_selected = "MAJOR";
            major_ine();
            break;
        default :
            if(get_tv == 0){
                raffle_selected = "Grand_TV";
                $("input[name='random_prizes']").attr("disabled","disabled");
                $("input[name='start']").removeAttr("disabled","disabled");
                get_tv++;
                alert("GRAND PRIZE : TV");
            }else{
                raffle_selected = "Microwave_ini";
                $("input[name='start']").removeAttr("disabled","disabled");
                alert("SPECIAL PRIZE : MICROWAVE");
            }
    }
    winner_cnt++;
}

$(function(){

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

    sender("", "../process/all_entries.php", "get_all_names");
    sender("", "../process/get_attendees.php", "get_minor_names");

    $('#upload_name_man_no').appendTo("body");
    $('#reg_man_no').appendTo("body");
    $('#attendees').appendTo("body");
    $('#non_attendees').appendTo("body");
    $('#all_entries').appendTo("body");
    $('#minor_prizes').appendTo("body");
    $('#major_prizes').appendTo("body");

    $('#winner_draw').hide();
    $("input[name='start']").attr("disabled","disabled");
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
            }else if(show == "get_minor_names"){
                var arr = JSON.parse(response);
                minor_arr = arr;
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

function random_enabled(){
    $("input[name='random_prizes']").removeAttr("disabled","disabled");
    $("input[name='start']").attr("disabled","disabled");
    $("input[name='draw']").attr("disabled","disabled");
    minor_times = 0;
}

function draw(){
    var name = select_to_random(myArray);
    if(raffle_selected == "MAJOR"){
//        name = myArray[Math.floor(Math.random() * myArray.length)];
//        name = select_to_random(myArray);
        $("input[name='random_prizes']").removeAttr("disabled","disabled");
        $("input[name='start']").attr("disabled","disabled");
        switch(major_selected_prize){
            case "SACK OF RICE":
                $('#sack_rice').html(name);
                break;
            case "TURBO BOILER":
                $('#turbo_boiler').html(name);
                break;
            case "WASHING MACHINE":
                $('#washing_machine').html(name);
                break;
            default:
                console.log("Nothing to select !");
                break;
        }
    }else if(raffle_selected == "MINOR"){
//        name = minor_arr[Math.floor(Math.random() * minor_arr.length)];
//        name = select_to_random(minor_arr);
        if(minor_selected_prize == "RICE" && minor_times <= 6){
            $('#rice'+minor_times).html(name);
            if(minor_times == 6){
                random_enabled();
            }
        }else if(minor_selected_prize == "FLAT IRON" && minor_times <= 2){
            $('#flat_iron_'+minor_times).html(name);
            if(minor_times == 2){
                random_enabled();
            }
        }else if(minor_selected_prize == "ELECTRIC FAN" && minor_times <= 2){
            $('#electric_fan_'+minor_times).html(name);
            if(minor_times == 2){
                random_enabled();
            }
        }else if(minor_selected_prize == "GROCERY" && minor_times <= 3){
            $('#grocery_'+minor_times).html(name);
            if(minor_times == 3){
                random_enabled();
            }
        }else if(minor_selected_prize == "RICE COOKER" && minor_times <= 2){
            $('#rice_cooker_'+minor_times).html(name);
            if(minor_times == 2){
                random_enabled();
            }
        }else{
            alert("Noting to do in minor !");
        }
        minor_times++;
        console.log("Times :"+minor_times);
    }/*else if(raffle_selected == "Grand_TV"){
        $("input[name='random_prizes']").removeAttr("disabled","disabled");
        $("input[name='start']").attr("disabled","disabled");
        $('#tv').html(name);
    }*/else if(raffle_selected == "Grand_TV"){
        /*$("input[name='start']").attr("disabled","disabled");
        $('#microwave').html(name);*/
        $("input[name='random_prizes']").removeAttr("disabled","disabled");
        $("input[name='start']").attr("disabled","disabled");
        $('#tv').html(name);
    }else{
        name = select_to_random(minor_arr);
        $("input[name='start']").attr("disabled","disabled");
        $('#microwave').html(name);
    }

    if ($.inArray(name,last_get)< 0){
        last_get.push(name);

        //-----remove from name in array
        Array.prototype.remove=function(v){
            delete this[this.indexOf(v)]
        };

        /*var sub = [];
        sub = minor_arr;
        minor_arr = [];
        for(var i = 0; i <= sub.length; i++){
            if(sub[i] !== name && sub[i] !== ""){
                minor_arr.push(sub[i]);
            }
            console.log(minor_arr);
        }*/

        myArray.remove(name);
//        minor_arr.remove(name);

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