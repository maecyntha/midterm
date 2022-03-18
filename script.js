//for all page

//background audio

var audio = new Audio('asset/Audio/Backsound/Sapphire Lotus.mp3');
audio.loop = true;

//rgb function
function rgb(r, g, b, o){
    return "rgb("+r+","+g+","+b+","+o+")";
}

//Page 1

//credit list

$("#background_credit").hide();

$("#open_credit").click(function(){
    $("#background_credit").show();
});
$("#close_credit").click(function(){
    $("#background_credit").hide();
});


//setting
$("#background_setting").hide();

$("#open_setting").click(function(){
    $("#background_setting").show();
});
$("#close_setting").click(function(){
    $("#background_setting").hide();
});

//get username
function input_username(){
    document.getElementById('greetings').insertAdjacentText('beforeend', username);
}

//Algorithm for change gender
var z = 1;
function displayX() { //cowo
    z = 1;
    clicked();
}

function displayY() { //cewe
    z = 0;
    clicked();
}

function clicked (){
    var char1 = document.getElementById("char-home1");
    var char2 = document.getElementById("char-home2");
    char1.style.transition = 'all 0.6s';
    char2.style.transition = 'all 0.6s';
    if(z == 1){
        char1.style.transform = 'scale(1.2)';
        char1.style.filter = 'brightness(110%)';
        char2.style.transform = 'scale(0.9)';
        char2.style.filter = 'brightness(40%)';
    }
    
    else if(z == 0){
        char2.style.transform = 'scale(1.2)';
        char2.style.filter = 'brightness(110%)';
        char1.style.transform = 'scale(0.9)';
        char1.style.filter = 'brightness(40%)';
    }
}

function chooseChara(){
    if(z == 1){
        document.getElementById('accessories').src='asset/character/character-boy1/';
        document.getElementById('hair-back').src='asset/character/character-boy1/hair-back.png';
        document.getElementById('head').src='asset/character/character-boy1/head.png';
        document.getElementById('eye').src='asset/character/character-boy1/eye.png';
        document.getElementById('eye2').src='asset/character/character-boy1/eye2.png';
        document.getElementById('eye3').src='asset/character/character-boy1/eye3.png';
        document.getElementById('hair-front').src='asset/character/character-boy1/hair-front.png';
        document.getElementById('body').src='asset/character/character-boy1/body.png';
        document.getElementById('hand-left').src='asset/character/character-boy1/hand-left.png';
        document.getElementById('hand-right').src='asset/character/character-boy1/hand-right.png';
        document.getElementById('foot').src='asset/character/character-boy1/foot.png';
    }
    else if(z == 0){
        document.getElementById('accessories').src='asset/character/character-girl1/';
        document.getElementById('hair-back').src='asset/character/character-girl1/hair-back.png';
        document.getElementById('head').src='asset/character/character-girl1/head.png';
        document.getElementById('eye').src='asset/character/character-girl1/eye.png';
        document.getElementById('eye2').src='asset/character/character-girl1/eye2.png';
        document.getElementById('eye3').src='asset/character/character-girl1/eye3.png';
        document.getElementById('hair-front').src='asset/character/character-girl1/hair-front.png';
        document.getElementById('body').src='asset/character/character-girl1/body.png';
        document.getElementById('hand-left').src='asset/character/character-girl1/hand-left.png';
        document.getElementById('hand-right').src='asset/character/character-girl1/hand-right.png';
        document.getElementById('foot').src='asset/character/character-girl1/foot.png';
    }
}


//submit username

document.getElementById('start').disabled =true;
function submit_username(){
        document.getElementById('username').disabled = true;
        document.getElementById('start').style.pointerEvents = 'all';
        document.getElementById('start').style.opacity = '1';
}
//function for loading screen

//function for play / start button
$("#start").click(function(){
    $("#loading_screen").show();
    chooseChara();//function for gender
    $("#greetings").text(username);//display user name at greetings
    document.getElementById("Page2_1").scrollIntoView({behavior: 'auto'});//jump to page 2
    audio.play();//play backsound music 
    $(document).ready(function($) {
        setTimeout(function() {
        $("#loading_screen").hide(1000);
        }, 1500);
    });
    chooseChara();
    input_username();
    
    $("#Page2_1").show();
    $("#Page1").hide();
    move();
    init();
});

//Page 2

//info/menu pop up
$("#background_info").hide();

$("#open_info").click(function(){
    $("#background_info").show();
});
$("#close_info").click(function(){
    $("#background_info").hide();
});

//reset game confirmation pop up
$("#background_confirmation").hide();

$("#open_confirmation").click(function(){
    $("#background_confirmation").show();
    $("#background_info").hide();
});
$("#close_confirmation").click(function(){
    $("#background_confirmation").hide();
});

//Algoritm for time
var d,h,m,s,animate;

var deadline;
var alert_count;

function init(){
    deadline = 0;
    dropout = 0;
    alert_count = 0;
    d=new Date();
    m= 11;
    s= 00;
    clock();
};

function clock(){
    s++;
    if(s==60){
        s=0;
        m++;
        deadline++;
        if(m==24){
            m=0;
        }
        if (alert_count >= 3) {
            dropout++;
        }
        if (dropout >= 1 && alert_count >= 3) {
            $("#gameover_screen").show();
            $("#background_warning").hide();
        }
        if (deadline >= 1.5) {
            $("#background_warning").show();
            $("#what").text ("You need to study -_-")
            if (z == 1) {
                $("#gif_warning").attr("src", "asset/gif/boy/shocked.png");
            }
            else {
                $("#gif_warning").attr("src", "asset/gif/girl/shocked.png");
            }
            $("#lesgo").text("Let's Study");
            $("#lesgo").click(function() {
                tambah_belajar();
                $("#background_warning").hide();
            });
            alert_count++;
            deadline = 1;
        }
    }
    $('min',s);
    $('hr',m);
    greetings(m);
    change_back(m)
    clock2(m,s);
    animate=setTimeout(clock,1000); //nanti balikin jadi 1000
};

//greetings
greetings(m);
function greetings(){
    username = document.getElementById('username').value;
    if(m >= 06 && m<=11){
        document.getElementById("greetings").innerHTML = '<h1>Morning, ' +username + '</h1>';
    }
    if(m >= 12 && m<=18){
        document.getElementById("greetings").innerHTML = '<h1>Afternoon, ' +username + '</h21';
    }
    if(m >= 19 && m<=23){
        document.getElementById("greetings").innerHTML = '<h1>Evening, ' +username + '</h1>';
    }
    if(m >= 00 && m<=05){
        document.getElementById("greetings").innerHTML = '<h1>Night, ' +username + '</h1>';
        
    }
}

//change background
change_back(m)
function change_back(){
    username = document.getElementById('username').value;
    if(m >= 00){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/malam.png)'
        },5000);
    }
    if(m >= 08 && m<=11){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/pagi.png)'
        },5000);
    }
    if(m >= 12 && m<=15){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/siang.png)'
        },5000);
    }
    if(m >= 16 && m<=19){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/sore.png)'
        },5000);
    }
    if(m >= 18){
        $("#Page2_1").css({
            backgroundImage : 'url(asset/background/malam.png)'
        },5000);
    }

}



//Algortm for gif
//Tombol back
function back() {
    var p1 = document.getElementById("Page1");
    var p2 = document.getElementById("Page2");
    if (p1.style.display === "none") {
        p1.style.display = "block";
        p2.style.display = "none";
    }
}


//linear gradation
function gradation(i){
   var text = "linear-gradient(0deg, rgb(0, 248, 95)" + i +"%, transparent 0)"
   return text;
}

function grad_color(i){
    var text = "linear-gradient(0deg, rgb(252, 29, 0)" + i +"%, transparent 0)"
    return text;
 }

//Algorithm for status bar
var width_makan = 50;
var width_tidur = 50;
var width_belajar = 1;
var width_bermain = 50;
var sem = 0;

$("#background_warning").hide();

function move() {
    var makan = document.getElementById("proggress_bar1");
    var tidur = document.getElementById("proggress_bar2");
    var bermain = document.getElementById("proggress_bar3");
    var belajar = document.getElementById("proggress_bar4");
    var id = setInterval(frame, 1000);
    makan.style.transition = 'all 1s';
    tidur.style.transition = 'all 1s';
    bermain.style.transition = 'all 1s';
    belajar.style.transition = 'all 1s';

    function frame() {
        if(width_makan >0){
            width_makan = width_makan - 0.8;
            makan.style.backgroundImage = gradation(width_makan);
            if(width_makan >70){
                document.getElementById("stat_img3").src = 'asset/stat/lambung1.png';
            }
            if(width_makan <= 70 && width_makan >30){
                document.getElementById("stat_img3").src = 'asset/stat/lambung2.png';
            }
            else if (width_makan <= 30) {
                document.getElementById("stat_img3").src = 'asset/stat/lambung3.png';
                makan.style.backgroundImage = grad_color(width_makan);
                
                $(document).ready(function($) {
                    if (z == 1) {
                        $("#gif_warning").attr("src", "asset/gif/boy/hungry.gif");
                    }
                    else {
                        $("#gif_warning").attr("src", "asset/gif/girl/hungry.gif");
                    }
                    $("#what").text ("You are straving ...")
                    $("#lesgo").text("Let's Eat");
                    $("#lesgo").click(function() {
                        tambah_makan();
                        $("#background_warning").hide();
                    });
                    $("#background_warning").show();
                }); 
                
            }
        }
        else{
            $("#gameover_screen").show();
        }
        if(width_tidur >0){
            width_tidur = width_tidur - 0.8;
            tidur.style.backgroundImage = gradation(width_tidur);
            if(width_tidur >80){
                document.getElementById("stat_img2").src = 'asset/stat/sleep1.png';
            }
            if(width_tidur < 80 && width_tidur >60){
                document.getElementById("stat_img2").src = 'asset/stat/sleep2.png';
            }
            else if(width_tidur < 60 && width_tidur >40){
                document.getElementById("stat_img2").src = 'asset/stat/sleep3.png';
            }
            else if(width_tidur < 20){
                document.getElementById("stat_img2").src = 'asset/stat/sleep4.png';
                tidur.style.backgroundImage = grad_color(width_tidur);
                
                $(document).ready(function($) {
                    if (z == 1) {
                        $("#gif_warning").attr("src", "asset/gif/boy/sleepy.gif");
                    }
                    else {
                        $("#gif_warning").attr("src", "asset/gif/girl/sleepy.gif");
                    }
                    $("#what").text ("You are sleepy ...")
                    $("#lesgo").text("Let's Sleep!");
                    $("#lesgo").click(function() {
                        tambah_tidur();
                        $("#background_warning").hide();
                    });
                    $("#background_warning").show();
                }); 
            }
        }

        if(width_bermain >0){
            width_bermain = width_bermain - 0.8;
            bermain.style.backgroundImage = gradation(width_bermain);
            if(width_bermain >80){
                document.getElementById("stat_img1").src = 'asset/stat/fun_1.png';
            }
            if(width_bermain < 80 && width_bermain >60){
                document.getElementById("stat_img1").src = 'asset/stat/fun_2.png';
            }
            else if(width_bermain < 60 && width_bermain >40){
                document.getElementById("stat_img1").src = 'asset/stat/fun_3.png';
            }
            else if(width_bermain < 20){
                document.getElementById("stat_img1").src = 'asset/stat/fun_4.png';
                bermain.style.backgroundImage = grad_color(width_bermain);
                
                $(document).ready(function($) {
                    if (z == 1) {
                        $("#gif_warning").attr("src", "asset/gif/boy/bored.gif");
                    }
                    else {
                        $("#gif_warning").attr("src", "asset/gif/girl/bored.gif");
                    }
                    $("#what").text ("You are bored ...")
                    $("#lesgo").text("Let's Have Some Fun!");
                    $("#lesgo").click(function() {
                        tambah_main();
                        $("#background_warning").hide();
                    });
                    $("#background_warning").show();
                }); 
            }
        }
        if(width_belajar >0){
            belajar.style.width = width_belajar + "%";
        }
    }
}

//close warning pop-up & hide pas awal 
//$("#background_warning").hide(); -> kyknya ga perlu

$("#close_warning").click(function(){
    $("#background_warning").hide();
});

//fungsi tambah
function tambah_makan() {
    $("#gif_col").show();
    $("#eat_gif").show();
    $(document).ready(function($) {
        setTimeout(function() {
        $("#gif_col").hide();
        $("#eat_gif").hide();
        }, 1500);
    });
    for(var i = 0; i < 20 ; i++){
        if(width_makan > 100){
            return;
        }
        width_makan = width_makan +1;
        if (width_tidur > 0) {
            width_tidur -= 0.2;
        }
    }
}

function tambah_tidur() {
    $("#gif_col").show();
    $("#sleep_gif").show();
    $(document).ready(function($) {
        setTimeout(function() {
        $("#gif_col").hide();
        $("#sleep_gif").hide();
        }, 1500);
    });
    for(var i = 0; i < 20 ; i++){
    
        if(width_tidur > 100){
            return;
        }
        width_tidur += 1;
        if (width_bermain > 0) {
            width_bermain -= 0.2;
        }
    }
}

function tambah_main() {
    $("#gif_col").show();
    $("#play_gif").show();
    $(document).ready(function($) {
        setTimeout(function() {
        $("#gif_col").hide();
        $("#play_gif").hide();
        }, 1500);
    });
    for(var i = 0; i < 20 ; i++){     
        if(width_bermain > 100){
            return;
        }
        width_bermain += 1;
        if (width_tidur > 0) {
            width_tidur -= 0.2;
        }
    }
}

var study = 0;
function tambah_belajar() {
    deadline = 0;
    study += 1;
    $("#gif_col").show();
    $("#study_gif").show();
    $(document).ready(function($) {
        setTimeout(function() {
            $("#study_gif").hide();
            $("#gif_col").hide();
            
        }, 1500);

        if (study == 1) {
            sem = 1;
            if (z == 1) {
                $("#gif_congrats").attr("src", "asset/gif/boy/congrats.gif");
                }
            else {
                $("#gif_congrats").attr("src", "asset/gif/girl/congrats.gif");
            }
            $("#background_congrats").show();
            $("#congrats_name").text("Welcome to college, " + username );
            $("#naik_sem").html("<h4>You have started your 1st semester</h4>");
        }
        /*
        if (sem < 9) {
            time = 10000;
            warning = setTimeout (function() {
                $("#background_warning").show();
                $("#what").text ("You need to study -_-")
                if (z == 1) {
                    $("#gif_warning").attr("src", "asset/gif/boy/shocked.png");
                }
                else {
                    $("#gif_warning").attr("src", "asset/gif/girl/shocked.png");
                }
                $("#lesgo").text("Let's Study");
                $("#lesgo").click(function() {
                    clearTimeout(warning);
                    tambah_belajar();
                    $("#background_warning").hide();
                });
            }, time) //alert utk belajar
        }
        */
    });

    if (width_makan > 0) {
        width_makan -= 0.2;
    }

    for(var i = 0; i < 20 ; i++){
        if(width_belajar > 100){
            width_belajar = 99;
            return;
        }

        if (sem > 9) {
            return;
        }

        if (width_belajar >= 99) {
            sem += 1;
            width_belajar = 0;
            $(document).ready(function($) {
                if (z == 1) {
                    $("#gif_congrats").attr("src", "asset/gif/boy/congrats.gif");
                }
                else {
                    $("#gif_congrats").attr("src", "asset/gif/girl/congrats.gif");
                }
                $("#background_congrats").show();
                $("#congrats_name").text("Congrats, " + username + " !!");
            });  
        };
        
        if (sem == 1) {
            width_belajar += 1.2;
        }
        else if (sem == 2) {
            width_belajar += 1;
            $("#naik_sem").html("<h4>You have reached the 2nd semester</h4>");
        }
        else if (sem == 3) {
            width_belajar += 0.6;
            $("#naik_sem").html("<h4>You have reached the 3rd semester</h4>");
        }
        else if (sem == 4) {
            width_belajar += 0.4;
            $("#naik_sem").html("<h4>You have reached the 4th semester</h4>");
        }
        else if (sem == 5) {
            width_belajar += 0.2;
            $("#naik_sem").html("<h4>You have reached the 5th semester</h4>");
        }
        else if (sem == 6) {
            width_belajar += 0.1;
            $("#naik_sem").html("<h4>You have reached the 6th semester</h4>");
        }
        else if (sem == 7) {
            width_belajar += 0.08;
            $("#naik_sem").html("<h4>You have reached the 7th semester</h4>");
        }
        else if (sem == 8) {
            width_belajar += 0.06;
            $("#naik_sem").html("<h4>You have reached the last semester</h4>");
        }

        else if (sem == 9) {
            width_belajar = 100;
            $("#naik_sem").html("<h4>You graduated !!</h4>");
        }
    }
}

// tombol tambah stat makan, dll
$("#tambahMakan").click(function(){
    tambah_makan();
});

$("#tambahTidur").click(function(){
    tambah_tidur();
});

$("#tambahBermain").click(function(){
    tambah_main();
});

$("#tambahBelajar").click(function(){
    tambah_belajar();
});

//congrats pop-up
$("#background_congrats").hide();

$("#close_congrats").click(function(){
    $("#background_congrats").hide();
});

//for clock
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");

function clock2(m, s) {
    const minuteDegree = (s / 60) * 360;
    const hourDegree = (m / 12) * 360;

    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}

//change costume

//search outfit file
function search_gantungan(i){
    url = 'asset/costume/'+ i + "/gantungan.png"
    return url;
}
function search_acc(i){
        url = 'asset/costume/'+ i + "/accessories.png"
    return url;
}
function search_body(i){
        url = 'asset/costume/'+ i + "/body.png"
    return url;
}
function search_left(i){
        url = 'asset/costume/'+ i + "/hand-left.png"
    return url;
}
function search_right(i){
        url = 'asset/costume/'+ i + "/hand-right.png"
    return url;
}
function search_foot(i){
        url = 'asset/costume/'+ i + "/foot.png"
    return url;
}

function check_file_outfit(){
    for(i = 0; i <5; i++){
        var z = $("#change_costum_row");
        var a = $(document.createElement('div'));
        $(a).attr('class','change_costum col-2');
        var b = $(document.createElement('img')); 
        $(b).attr('src',search_gantungan(i+1));
        $(b).attr('class','change_outfit');
        $(a).append(b);
        $(z).append(a);
    }
}
check_file_outfit();

$("#background_wardrobe").hide();

$("#open_wardrobe").click(function(){
    $("#background_wardrobe").show();
});

$("#close_wardrobe").click(function() {
    $("#background_wardrobe").hide();
});


$(".change_outfit").click(function(){
    $("#background_wardrobe").hide();

    var index = $(this).parent().index();
    document.getElementById('accessories').src = search_acc(index+1);
    document.getElementById('body').src = search_body(index+1);
    document.getElementById('hand-left').src = search_left(index+1);
    document.getElementById('hand-right').src = search_right(index+1);
    document.getElementById('foot').src = search_foot(index+1);
});

//achievements

function achievements() {
    $("#user-name").text("Your Gameplay")
    if (sem == 0) {
        $("#sem").text("You aren't in college yet");
    }
    else if (sem > 0) {
        $("#sem").text("Semester " + sem);
    }
    else if (sem > 8) {
        $("#sem").text("You have graduated from college");
    }
    $("#makan_status").text("Makan : " + parseInt(width_makan) + "%");
    $("#tidur_status").text("Tidur : " + parseInt(width_tidur) + "%");
    $("#bermain_status").text("Bermain : " + parseInt(width_bermain) + "%");
    $("#belajar_status").text("Belajar : " + parseInt(width_belajar) + "%");
}

$("#background_trophy").hide();

$("#open_trophy").click(function(){
    $("#background_trophy").show();
    achievements();
});

$("#close_trophy").click(function(){
    $("#background_trophy").hide();
}); $("#awards").show();
