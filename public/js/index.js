/**
 * Einfache Funktion die einen Klick Event an den Canvas bindet
 * Methode nutzt intern ein Image Objekt
 * @author Lukas Stephan Rieger
 * @version v0.1
 */ 

$("document").ready(function(){
var socket = new WebSocket('ws://127.0.0.1:8181/', 'chat');
            var name = 'u1'
            var counter = 1
            var crashcounter = 0
            var increment = 0
            socket.onopen = function () {
                
                //name = "name" + Math.floor(Math.random() * Math.floor(700));
                //name = "Guest " + counter;
                name = "Me";
                socket.send('{"type": "join", "name":" '+name+'"}');
                counter++;
            }

            /* Hier ist mein Sendebutton des Textfeldes. Hier wird das Textfeld */

            $('#sendBtn').on('click', function (e) {
                counter++;
                e.preventDefault();
                //name = 'u1',

                window.setInterval(function() {
                var elem = document.getElementById('textoutput');
                elem.scrollTop = elem.scrollHeight;
                }, 500);

                msg = $('#msg').val();
                var msg1 = document.getElementById("msg");
                var msg2 = document.getElementById("msg").value;
               var length=msg2.length;
               

               /**  Hier sind die einzelnen Schritte, wie man mit CSS durch mein Labyrinth läuft. Dabei habe ich lediglich
               * CSS Veränderungen gemacht wie den Pfeil oder die divs mit der id="blackbox". Und bei einer Kreuzung wie im ersten Schritt wird eine Nachricht an den socket 
               * gesendet, und das JSON gibt die passende Antwort zurück.
               * @return gibt für jeden Schritt das Increment zurück
               * @param includes überprüft Nachricht auf Vorkommen eines bestimmten Buchstaben
               * @param length überprüft Anzahl der Buchstaben der Nachricht
               * @param increment überprüft Counter
               */
               
                if(msg.includes('f')&& length == 1&& increment == 0){
                    $("#point").css("top","87%");
                    $("#blackbox1").css("opacity","0%");
                    $("#blackbox2").css("opacity","0%");
                    $("#blackbox7").css("opacity","0%");
                    var msg3="Oh dammit, there are two ways now. Left or Right?";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 1;
                /**
                 * @param includes überprüft Nachricht auf das Vorkommen von drei Buchstaben
                 */
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 1){
                    $("#point").css("left","56%");
                    $("#point").css("transform","rotate(90deg)");
                    $("#blackbox3").css("opacity","0%");
                    msg1.value="";
                    return increment = 2;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 1){
                    $("#point").css("left","40%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox22").css("opacity","0%");
                    msg1.value="";
                    return increment = 30;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 30){
                    $("#point").css("top","79%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox33").css("opacity","0%");
                    msg1.value="";
                    return increment = 31;
                }else if(msg.includes('f')&& length == 1&& increment == 31){
                    $("#point").css("top","71%");
                    $("#blackbox42").css("opacity","0%");
                    $("#blackbox32").css("opacity","0%");
                    msg1.value="";
                    return increment = 32;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 32){
                    $("#point").css("left","32%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox31").css("opacity","0%");
                    msg1.value="";
                    return increment = 35;
                }else if(msg.includes('f')&& length == 1&& increment == 32){
                    $("#point").css("top","63%");
                    $("#blackbox42").css("opacity","0%");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 33;
                }else if(msg.includes('t')&&msg.includes('a')&&msg.includes('f')&& length == 3&& increment == 33){
                    $("#point").css("top","71%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 34;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 34){
                    $("#point").css("left","32%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox31").css("opacity","0%");
                    msg1.value="";
                    return increment = 35;
                }else if(msg.includes('f')&& length == 1&& increment == 35){
                    $("#point").css("left","24%");
                    $("#blackbox21").css("opacity","0%");
                    msg1.value="";
                    return increment = 36;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 36){
                    $("#point").css("top","79%");
                    $("#point").css("transform","rotate(-180deg)");
                    $("#blackbox8").css("opacity","0%");
                    msg1.value="";
                    return increment = 37;
                }else if(msg.includes('f')&& length == 1&& increment == 37){
                    $("#point").css("top","87%");
                    $("#blackbox9").css("opacity","0%");
                    msg1.value="";
                    return increment = 38;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 38){
                    $("#point").css("left","16%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox10").css("opacity","0%");
                    msg1.value="";
                    return increment = 39;
                }else if(msg.includes('f')&& length == 1&& increment == 39){
                    $("#point").css("left","9%");
                    $("#blackbox20").css("opacity","0%");
                    msg1.value="";
                    return increment = 40;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 40){
                    $("#point").css("top","79%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox30").css("opacity","0%");
                    msg1.value="";
                    return increment = 41;
                }else if(msg.includes('f')&& length == 1&& increment == 41){
                    $("#point").css("top","71%");
                    $("#blackbox43").css("opacity","0%");
                    msg1.value="";
                    return increment = 42;
                }else if(msg.includes('f')&& length == 1&& increment == 42){
                    $("#point").css("top","63%");
                    $("#blackbox50").css("opacity","0%");
                    msg1.value="";
                    return increment = 43;
                }else if(msg.includes('f')&& length == 1&& increment == 43){
                    $("#point").css("top","55%");
                    $("#blackbox51").css("opacity","0%");
                    msg1.value="";
                    return increment = 44;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 44){
                    $("#point").css("left","16%");
                    $("#point").css("transform","rotate(90deg)");
                    $("#blackbox52").css("opacity","0%");
                    msg1.value="";
                    return increment = 45;
                }else if(msg.includes('f')&& length == 1&& increment == 45){
                    $("#point").css("left","24%");
                    $("#blackbox60").css("opacity","0%");
                    msg1.value="";
                    return increment = 46;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 46){
                    $("#point").css("top","47%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox71").css("opacity","0%");
                    msg1.value="";
                    return increment = 47;

/**  Hier ist ein Beispiel wenn man gegen eine Wand läuft bzw. wenn es nicht weiter vorwärts geht, 
wird eine Fehlermeldung ausgespuckt. Und das JSON gibt wieder die entsprechende Antwort zurück 
* @return 
*/
                }else if(msg.includes('f')&& length == 1&& increment == 47){
                    $("#point").css("top","40%");
                    $("#blackbox71").css("opacity","0%");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 48;
                }else if(msg.includes('t')&& msg.includes('a')&& msg.includes('f')&& length == 3&& increment == 48){
                    $("#point").css("top","48%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 49;
                }else if(msg.includes('f')&& length == 1&& increment == 49){
                    $("#point").css("top","56%");
                    msg1.value="";
                    return increment = 50;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 50){
                    $("#point").css("left","16%");
                    $("#point").css("transform","rotate(-90deg)");
                    msg1.value="";
                    return increment = 51;
                }else if(msg.includes('f')&& length == 1&& increment == 51){
                    $("#point").css("left","9%");
                    msg1.value="";
                    return increment = 52;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 52){
                    $("#point").css("top","64%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 53;
                }else if(msg.includes('f')&& length == 1&& increment == 53){
                    $("#point").css("top","72%");
                    msg1.value="";
                    return increment = 54;
                }else if(msg.includes('f')&& length == 1&& increment == 54){
                    $("#point").css("top","80%");
                    msg1.value="";
                    return increment = 55;
                }else if(msg.includes('f')&& length == 1&& increment == 55){
                    $("#point").css("top","88%");
                    msg1.value="";
                    return increment = 56;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 56){
                    $("#point").css("left","17%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 57;
                }else if(msg.includes('f')&& length == 1&& increment == 57){
                    $("#point").css("left","25%");
                    msg1.value="";
                    return increment = 58;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 58){
                    $("#point").css("top","80%");
                    $("#point").css("transform","rotate(0deg)");
                    msg1.value="";
                    return increment = 59;
                }else if(msg.includes('f')&& length == 1&& increment == 59){
                    $("#point").css("top","72%");
                    msg1.value="";
                    return increment = 60;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 60){
                    $("#point").css("left","32%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 61;
                }else if(msg.includes('f')&& length == 1&& increment == 61){
                    $("#point").css("left","40%");
                    msg1.value="";
                    return increment = 62;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3 && increment == 62){
                    $("#point").css("top","64%");
                    $("#point").css("transform","rotate(0deg)");
                    crashcounter = crashcounter +1;
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 33;
                }else if(msg.includes('f')&& length == 1&& increment == 34){
                    $("#point").css("top","80%");
                    msg1.value="";
                    return increment = 63;
                }



                else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 62){
                    $("#point").css("top","80%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 63;
                }else if(msg.includes('f')&& length == 1&& increment == 63){
                    $("#point").css("top","87%");
                    msg1.value="";
                    return increment = 64;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 64){
                    $("#point").css("left","48%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 65;
                }else if(msg.includes('f')&& length == 1&& increment == 65){
                    $("#point").css("left","56%");
                    $("#blackbox3").css("opacity","0%");
                    msg1.value="";
                    return increment = 2;
                }

                else if(msg.includes('f')&& length == 1&& increment == 2){
                    $("#point").css("left","64%");
                    $("#blackbox4").css("opacity","0%");
                    msg1.value="";
                    return increment = 3;
                }else if(msg.includes('f')&& length == 1&& increment == 3){
                    $("#point").css("left","71.5%");
                    $("#blackbox5").css("opacity","0%");
                    $("#blackbox23").css("opacity","0%");
                    var msg3="The road is splitting up again. forward or upward?";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');

                    msg1.value="";
                    return increment = 4;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 4){
                    $("#point").css("top","79%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox36").css("opacity","0%");
                    msg1.value="";
                    return increment = 5;
                }else if(msg.includes('f') != msg.includes('t')&& length == 1&&increment == 4){
                    $("#point").css("left","79%");
                    $("#blackbox6").css("opacity","0%");
                    msg1.value="";
                    return increment = 70;
                }else if(msg.includes('f')&& length == 1&& increment == 70){
                    $("#point").css("left","87%");
                    $("#blackbox24").css("opacity","0%");
                    msg1.value="";
                    return increment = 71;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 71){
                    $("#point").css("top","79%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox37").css("opacity","0%");
                    msg1.value="";
                    return increment = 72;
                }else if(msg.includes('f')&& length == 1&& increment == 72){
                    $("#point").css("top","72%");
                    $("#blackbox40").css("opacity","0%");
                    msg1.value="";
                    return increment = 73;
                }else if(msg.includes('f')&& length == 1&& increment == 73){
                    $("#point").css("top","64%");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 74;
                }else if(msg.includes('t')&& msg.includes('a')&& msg.includes('f')&& length == 3&& increment == 74){
                    $("#point").css("top","72%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 75;
                }else if(msg.includes('f')&& length == 1&& increment == 75){
                    $("#point").css("top","79%");
                    msg1.value="";
                    return increment = 76;
                }else if(msg.includes('f')&& length == 1&& increment == 76){
                    $("#point").css("top","87%");
                    msg1.value="";
                    return increment = 77;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 77){
                    $("#point").css("left","79%");
                    $("#point").css("transform","rotate(-90deg)");
                   
                    msg1.value="";
                    return increment = 78;
                }else if(msg.includes('f')&& length == 1&& increment == 78){
                    $("#point").css("left","71.5%");
                    msg1.value="";
                    return increment = 79;
                }else if(msg.includes('f')&& length == 1&&increment == 79){
                    $("#point").css("left","64%");
                    msg1.value="";
                    return increment = 80;
                }else if(msg.includes('f')&& length == 1!= msg.includes('t')&&increment == 80){
                    $("#point").css("left","56%");
                    msg1.value="";
                    return increment = 81;
                }else if(msg.includes('f')&& length == 1!= msg.includes('t')&&increment == 81){
                    $("#point").css("left","48%");
                    msg1.value="";
                    return increment = 82;
                }else if(msg.includes('f')&& length == 1!= msg.includes('t')&&increment == 82){
                    $("#point").css("left","40%");
                    $("#blackbox7").css("opacity","0%");
                    msg1.value="";
                    return increment = 30;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 79){
                    $("#point").css("top","79%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox36").css("opacity","0%");
                    msg1.value="";
                    return increment = 5;
                }
                else if(msg.includes('f')&& length == 1&& increment == 5){
                    $("#point").css("top","72%");
                    $("#blackbox35").css("opacity","0%");
                    msg1.value="";
                    return increment = 6;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 6){
                    $("#point").css("left","64%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox34").css("opacity","0%");
                    msg1.value="";
                    return increment = 7;
                }else if(msg.includes('f')&& length == 1&& increment == 7){
                    $("#point").css("left","56%");
                    $("#blackbox41").css("opacity","0%");
                    msg1.value="";
                    return increment = 8;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 8){
                    $("#point").css("top","64%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox53").css("opacity","0%");
                    msg1.value="";
                    return increment = 9;
                }else if(msg.includes('f')&& length == 1&& increment == 9){
                    $("#point").css("top","56%");
                    $("#blackbox54").css("opacity","0%");
                    $("#blackbox62").css("opacity","0%");
                    msg1.value="";
                    return increment = 10;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 10){
                    $("#point").css("left","64%");
                    $("#point").css("transform","rotate(90deg)");
                    $("#blackbox55").css("opacity","0%");
                    msg1.value="";
                    return increment = 11;
                }else if(msg.includes('f')!=msg.includes('ta') && length == 1&& increment == 10){
                    $("#point").css("top","48%");
                    $("#blackbox74").css("opacity","0%");
                    msg1.value="";
                    return increment = 90;
                }else if(msg.includes('f')!=msg.includes('ta') && length == 1&& increment == 90){
                    $("#point").css("top","40%");
                    $("#blackbox73").css("opacity","0%");
                    msg1.value="";
                    return increment = 91;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 91){
                    $("#point").css("left","48%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox72").css("opacity","0%");
                    msg1.value="";
                    return increment = 92;
                }else if(msg.includes('f')!=msg.includes('ta') && length == 1&& increment == 92){
                    $("#point").css("left","40%");
                    $("#blackbox61").css("opacity","0%");
                    msg1.value="";
                    return increment = 93;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 93){
                    $("#point").css("top","48%");
                    $("#point").css("transform","rotate(-180deg)");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 94;
                }else if(msg.includes('t')&& msg.includes('a')&& msg.includes('f')&& length == 3&& increment == 94){
                    $("#point").css("top","40%");
                    $("#point").css("transform","rotate(0deg)");
                    msg1.value="";
                    return increment = 95;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 95){
                    $("#point").css("left","48%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 96;
                }else if(msg.includes('f')!=msg.includes('ta') && length == 1&& increment == 96){
                    $("#point").css("left","56%");
                    msg1.value="";
                    return increment = 97;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 97){
                    $("#point").css("top","48%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 98;
                }else if(msg.includes('f')!=msg.includes('ta') && length == 1&& increment == 98){
                    $("#point").css("top","56%");
                    msg1.value="";
                    return increment = 99;
                }else if(msg.includes('f')!=msg.includes('ta') && length == 1&& increment == 99){
                    $("#point").css("top","64%");
                    msg1.value="";
                    return increment = 100;
                }else if(msg.includes('f')!=msg.includes('ta') && length == 1&& increment == 100){
                    $("#point").css("top","72%");
                    msg1.value="";
                    return increment = 101;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 101){
                    $("#point").css("left","64%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 102;
                }else if(msg.includes('f')!=msg.includes('ta') && length == 1&& increment == 102){
                    $("#point").css("left","72%");
                    msg1.value="";
                    return increment = 103;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 103){
                    $("#point").css("top","80%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 104;
                }else if(msg.includes('f')!=msg.includes('ta') && length == 1&& increment == 104){
                    $("#point").css("top","87%");
                    msg1.value="";
                    return increment = 105;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 105){
                    $("#point").css("left","64%");
                    $("#point").css("transform","rotate(-90deg)");
                    msg1.value="";
                    return increment = 80;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 105){
                    $("#point").css("left","80%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 70;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 99){
                    $("#point").css("left","64%");
                    $("#point").css("transform","rotate(90deg)");
                    $("#blackbox55").css("opacity","0%");
                    msg1.value="";
                    return increment = 11;
                }
                else if(msg.includes('f')&& length == 1&& increment == 11){
                    $("#point").css("left","72%");
                    $("#blackbox63").css("opacity","0%");
                    msg1.value="";
                    return increment = 12;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 12){
                    $("#point").css("top","48%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox64").css("opacity","0%");
                    msg1.value="";
                    return increment = 13;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 13){
                    $("#point").css("left","80%");
                    $("#point").css("transform","rotate(90deg)");
                    $("#blackbox65").css("opacity","0%");
                    msg1.value="";
                    return increment = 14;
                }else if(msg.includes('f')&& length == 1&& increment == 14){
                    $("#point").css("left","87%");
                    $("#blackbox75").css("opacity","0%");
                    msg1.value="";
                    return increment = 15;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 15){
                    $("#point").css("top","40%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox83").css("opacity","0%");
                    msg1.value="";
                    return increment = 16;
                }else if(msg.includes('f')&& length == 1&& increment == 16){
                    $("#point").css("top","32%");
                    $("#blackbox82").css("opacity","0%");
                    $("#blackbox96").css("opacity","0%");
                    msg1.value="";
                    return increment = 17;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 17){
                    $("#point").css("left","80%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox81").css("opacity","0%");
                    msg1.value="";
                    return increment = 120;
                }else if(msg.includes('f')&& length == 1&& increment == 120){
                    $("#point").css("left","72%");
                    $("#blackbox95").css("opacity","0%");
                    msg1.value="";
                    return increment = 121;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 121){
                    $("#point").css("top","24%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox94").css("opacity","0%");
                    msg1.value="";
                    return increment = 122;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 122){
                    $("#point").css("left","64%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox93").css("opacity","0%");
                    msg1.value="";
                    return increment = 123;
                }else if(msg.includes('f')&& length == 1&& increment == 123){
                    $("#point").css("left","56%");
                    //$("#blackbox93").css("opacity","0%");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 124;
                }else if(msg.includes('t')&& msg.includes('a')&& msg.includes('f')&& length == 3&& increment == 124){
                    $("#point").css("left","64%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 125;
                }else if(msg.includes('f')&& length == 1&& increment == 125){
                    $("#point").css("left","72%");
                    msg1.value="";
                    return increment = 126;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 126){
                    $("#point").css("top","32%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 127;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 127){
                    $("#point").css("left","80%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 128;
                }else if(msg.includes('f')&& length == 1&& increment == 128){
                    $("#point").css("left","87%");
                    msg1.value="";
                    return increment = 129;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 129){
                    $("#point").css("top","40%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 130;
                }else if(msg.includes('f')&& length == 1&& increment == 130){
                    $("#point").css("top","48%");
                    msg1.value="";
                    return increment = 131;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 131){
                    $("#point").css("left","80%");
                    $("#point").css("transform","rotate(-90deg)");
                    msg1.value="";
                    return increment = 132;
                }else if(msg.includes('f')&& length == 1&& increment == 132){
                    $("#point").css("left","72%");
                    msg1.value="";
                    return increment = 133;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 133){
                    $("#point").css("top","56%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 134;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 134){
                    $("#point").css("left","64%");
                    $("#point").css("transform","rotate(-90deg)");
                    msg1.value="";
                    return increment = 135;
                }else if(msg.includes('f')&& length == 1&& increment == 135){
                    $("#point").css("left","56%");
                    msg1.value="";
                    return increment = 136;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 136){
                    $("#point").css("top","48%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 100;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 136){
                    $("#point").css("top","48%");
                    $("#point").css("transform","rotate(0deg)");
                    msg1.value="";
                    return increment = 90;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 129){
                    $("#point").css("top","24%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox104").css("opacity","0%");
                    msg1.value="";
                    return increment = 18;
                }
                else if(msg.includes('f')&& length == 1&& increment == 17){
                    $("#point").css("top","24%");
                    $("#blackbox104").css("opacity","0%");
                    msg1.value="";
                    return increment = 18;
                }else if(msg.includes('f')&& length == 1&& increment == 18){
                    $("#point").css("top","16%");
                    $("#blackbox119").css("opacity","0%");
                    msg1.value="";
                    return increment = 19;
                }else if(msg.includes('f')&& length == 1&& increment == 19){
                    $("#point").css("top","9%");
                    $("#blackbox118").css("opacity","0%");
                    msg1.value="";
                    return increment = 20;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 20){
                    $("#point").css("left","80%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox117").css("opacity","0%");
                    msg1.value="";
                    return increment = 21;
                }else if(msg.includes('f')&& length == 1&& increment == 21){
                    $("#point").css("left","72%");
                    $("#blackbox116").css("opacity","0%");
                    msg1.value="";
                    return increment = 22;
                }else if(msg.includes('f')&& length == 1&& increment == 22){
                    $("#point").css("left","64%");
                    $("#blackbox115").css("opacity","0%");
                    msg1.value="";
                    return increment = 23;
                }else if(msg.includes('f')&& length == 1&& increment == 23){
                    $("#point").css("left","56%");
                    $("#blackbox114").css("opacity","0%");
                    msg1.value="";
                    return increment = 24;
                }else if(msg.includes('f')&& length == 1&& increment == 24){
                    $("#point").css("left","48%");
                    $("#blackbox113").css("opacity","0%");
                    msg1.value="";
                    return increment = 25;
                }else if(msg.includes('f')&& length == 1&& increment == 25){
                    $("#point").css("left","40%");
                    $("#blackbox103").css("opacity","0%");
                    msg1.value="";
                    return increment = 200;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 200){
                    $("#point").css("top","16%");
                    $("#point").css("transform","rotate(-180deg)");
                    $("#blackbox92").css("opacity","0%");
                    $("#blackbox102").css("opacity","0%");
                    msg1.value="";
                    return increment = 201;
                }else if(msg.includes('f')&& length == 1&& increment == 201){
                    $("#point").css("top","24%");
                    $("#blackbox92").css("opacity","0%");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 202;
                }else if(msg.includes('t')&& msg.includes('a')&& msg.includes('f')&& length == 3&& increment == 202){
                    $("#point").css("top","16%");
                    $("#point").css("transform","rotate(0deg)");
                    msg1.value="";
                    return increment = 203;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 203){
                    $("#point").css("left","32%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox101").css("opacity","0%");
                    msg1.value="";
                    return increment = 204;
                }else if(msg.includes('f')&& length == 1&& increment == 204){
                    $("#point").css("left","24%");
                    $("#blackbox112").css("opacity","0%");
                    $("#blackbox91").css("opacity","0%");
                    msg1.value="";
                    return increment = 205;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 205){
                    $("#point").css("top","24%");
                    $("#point").css("transform","rotate(-180deg)");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 206;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 205){
                    $("#point").css("top","8%");
                    $("#point").css("transform","rotate(0deg)");
                    $("#blackbox111").css("opacity","0%");
                    msg1.value="";
                    return increment = 208;
                }
                else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 205){
                    $("#point").css("top","24%");
                    $("#point").css("transform","rotate(-180deg)");
                    $("#blackbox91").css("opacity","0%");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 206;
                }else if(msg.includes('t')&& msg.includes('a')&& msg.includes('f')&& length == 3&& increment == 206){
                    $("#point").css("top","16%");
                    $("#point").css("transform","rotate(0deg)");
                    msg1.value="";
                    return increment = 207;
                }else if(msg.includes('f')&& length == 1&& increment == 207){
                    $("#point").css("top","8%");
                    $("#blackbox111").css("opacity","0%");
                    msg1.value="";
                    return increment = 208;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 208){
                    $("#point").css("left","16%");
                    $("#point").css("transform","rotate(-90deg)");
                    $("#blackbox110").css("opacity","0%");
                    msg1.value="";
                    return increment = 209;
                }else if(msg.includes('f')&& length == 1&& increment == 209){
                    $("#point").css("left","9%");
                    $("#blackbox100").css("opacity","0%");
                    msg1.value="";
                    return increment = 210;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 210){
                    $("#point").css("top","16%");
                    $("#point").css("transform","rotate(-180deg)");
                    $("#blackbox90").css("opacity","0%");
                    msg1.value="";
                    return increment = 211;
                }else if(msg.includes('f')&& length == 1&& increment == 211){
                    $("#point").css("top","24%");
                    $("#blackbox80").css("opacity","0%");
                    msg1.value="";
                    return increment = 212;
                }else if(msg.includes('f')&& length == 1&& increment == 212){
                    $("#point").css("top","32%");
                    $("#blackbox70").css("opacity","0%");
                    msg1.value="";
                    return increment = 213;
                }else if(msg.includes('f')&& length == 1&& increment == 213){
                    $("#point").css("top","40%");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 214;
                }else if(msg.includes('t')&& msg.includes('a')&& msg.includes('f')&& length == 3&& increment == 214){
                    $("#point").css("top","32%");
                    $("#point").css("transform","rotate(0deg)");
                    msg1.value="";
                    return increment = 215;
                }else if(msg.includes('f')&& length == 1&& increment == 215){
                    $("#point").css("top","24%");
                    msg1.value="";
                    return increment = 216;
                }else if(msg.includes('f')&& length == 1&& increment == 216){
                    $("#point").css("top","16%");
                    msg1.value="";
                    return increment = 217;
                }else if(msg.includes('f')&& length == 1&& increment == 217){
                    $("#point").css("top","8%");
                    msg1.value="";
                    return increment = 218;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 218){
                    $("#point").css("left","16%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 219;
                }else if(msg.includes('f')&& length == 1&& increment == 219){
                    $("#point").css("left","24%");
                    msg1.value="";
                    return increment = 220;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 220){
                    $("#point").css("top","16%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 221;
                }else if(msg.includes('f')&& length == 1&& increment == 221){
                    $("#point").css("top","24%");
                    crashcounter = crashcounter +1;
                    var msg3="auaaaah, that hurts. It seems like i crashed into a wall. ("+crashcounter+"x)";
                    socket.send('{"type": "msg", "msg": "' + msg3 +'"}');
                    msg1.value="";
                    return increment = 206;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 221){
                    $("#point").css("left","32%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 230;
                }else if(msg.includes('f')&& length == 1&& increment == 230){
                    $("#point").css("left","40%");
                    msg1.value="";
                    return increment = 201;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 201){
                    $("#point").css("left","32%");
                    $("#point").css("transform","rotate(-90deg)");
                    msg1.value="";
                    $("#blackbox101").css("opacity","0%");
                    return increment = 204;
                }else if(msg.includes('t')&& msg.includes('l')&& msg.includes('f')&& length == 3&& increment == 201){
                    $("#point").css("top","8%");
                    $("#point").css("transform","rotate(0deg)");
                    msg1.value="";
                    return increment = 231;
                }
                else if(msg.includes('f')&& length == 1&& increment == 203){
                    $("#point").css("top","9%");
                    $("#point").css("transform","rotate(0deg)");
                    msg1.value="";
                    return increment = 231;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 231){
                    $("#point").css("left","48%");
                    $("#point").css("transform","rotate(90deg)");
                    msg1.value="";
                    return increment = 232;
                }else if(msg.includes('f')&& length == 1&& increment == 232){
                    $("#point").css("left","56%");
                    msg1.value="";
                    return increment = 233;
                }else if(msg.includes('f')&& length == 1&& increment == 233){
                    $("#point").css("left","64%");
                    msg1.value="";
                    return increment = 234;
                }else if(msg.includes('f')&& length == 1&& increment == 234){
                    $("#point").css("left","72%");
                    msg1.value="";
                    return increment = 235;
                }else if(msg.includes('f')&& length == 1&& increment == 235){
                    $("#point").css("left","80%");
                    msg1.value="";
                    return increment = 236;
                }else if(msg.includes('f')&& length == 1&& increment == 236){
                    $("#point").css("left","87%");
                    msg1.value="";
                    return increment = 237;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 237){
                    $("#point").css("top","16%");
                    $("#point").css("transform","rotate(-180deg)");
                    msg1.value="";
                    return increment = 238;
                }else if(msg.includes('f')&& length == 1&& increment == 238){
                    $("#point").css("top","24%");
                    msg1.value="";
                    return increment = 239;
                }else if(msg.includes('f')&& length == 1&& increment == 239){
                    $("#point").css("top","32%");
                    msg1.value="";
                    return increment = 240;
                }else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 240){
                    $("#point").css("left","80%");
                    $("#point").css("transform","rotate(-90deg)");
                    msg1.value="";
                    return increment = 120;
                }else if(msg.includes('f')&& length == 1&& increment == 240){
                    $("#point").css("top","40%");
                    msg1.value="";
                    return increment = 130;
                }
                
                
                
                
                /**  hier sieht man dass durch includes und length gesichert ist, dass man nicht igendein Wort eingeben kann, 
                *dass zufällig diese Buchstaben enthält und dann durch das Labyrinth navigiert wird.
                */
                else if(msg.includes('t')&& msg.includes('r')&& msg.includes('f')&& length == 3&& increment == 25){
                    $("#point").css("top","-1%");
                    $("#point").css("transform","rotate(0deg)");
                    msg1.value="";
                    return increment = 26;
                }

                /* Hier wird das gesuchte Wort sofern es nichts mit der Navigation zu tun hat. 
                Also muss die abgeschickte Nachricht mehr wie 3 buchstaben enthalten und darf nicht bei drei buchstaben 
                nur aus f,r,l,a, oder t bestehen. Am Ende wird das Texteingabefeld noch geleert.
                */
                socket.send('{"type": "msg", "msg": "' + msg + '"}');
                $('#msg').val('');
            });

            /* Wenn nach socket.send eine Nachricht von JSON zurückkommt, dann wird hierdurch 
            diese Nachricht in einer bestimmten Form ausgeben und zwar im #textoutput bzw. #msgs im html 
            in der nachfolgenden Form.*/
            socket.onmessage = function (msg) {
                var data = JSON.parse(msg.data);
                switch (data.type) {
                    case 'msg':
                        var msg = $('<div class="test">' + data.name + ': ' + '<div>' +data.msg + '</div>'+
                                '</div>');
                        $('#msgs').append(msg);
                        break;
                    
                }$('#msg').val('');
            };
        });