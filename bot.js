'use strict'



var WebSocketClient = require('websocket').client
var t = require('./test.json')
/**
 * bot ist ein einfacher Websocket Chat Client
 */



class bot {

  /**
   * Konstruktor baut den client auf. Er erstellt einen Websocket und verbindet sich zum Server
   * Bitte beachten Sie, dass die Server IP hardcodiert ist. Sie müssen sie umsetzten
   */
  constructor () {
    this.dict = []
    for(var i=0; i<t.answers.length;i++){
    this.dict[t.answers[i].intent ]=t.answers[i].answer;
  }
   /* this.dict['suche'] = 'Wenn sie etwas suchen sind Sie hier falsch es geht um Drogen'
    this.dict['rauchen'] = 'Rauchen ist eine schreckliche Sache.'
    this.dict['trinken'] = 'Trinken kann man auch Wasser.'
      this.dict['schlafen'] = 'Schlafen wirkt wie eine Droge ist aber gesund.'
      this.dict['saufen'] = 'Wasser saufen ist gesund.'
      this.dict['gut'] = 'Saufen ist gut.'*/
      

    /** Die Websocketverbindung
      */
    this.client = new WebSocketClient()
    /**
     * Wenn der Websocket verbunden ist, dann setzten wir ihn auf true
     */
    this.connected = false

    /**
     * Wenn die Verbindung nicht zustande kommt, dann läuft der Aufruf hier hinein
     */
    this.client.on('connectFailed', function (error) {
      console.log('Connect Error: ' + error.toString())
    })

    /** 
     * Wenn der Client sich mit dem Server verbindet sind wir hier 
    */
    this.client.on('connect', function (connection) {
      this.con = connection
      console.log('WebSocket Client Connected')
      connection.on('error', function (error) {
        console.log('Connection Error: ' + error.toString())
      })

      /** 
       * Es kann immer sein, dass sich der Client disconnected 
       * (typischer Weise, wenn der Server nicht mehr da ist)
      */
      connection.on('close', function () {
        console.log('echo-protocol Connection Closed')
      })

      /** 
       *    Hier ist der Kern, wenn immmer eine Nachricht empfangen wird, kommt hier die 
       *    Nachricht an. 
      */
      connection.on('message', function (message) {
        if (message.type === 'utf8') {
          var data = JSON.parse(message.utf8Data)
          
        }console.log('Received: ' + data.msg + ' ' + data.name)
      })

      /** 
       * Hier senden wir unsere Kennung damit der Server uns erkennt.
       * Wir formatieren die Kennung als JSON
      */
      function joinGesp () {
        if (connection.connected) {
          connection.sendUTF('{"type": "join", "name":"MegaBot"}')
        }
      }
      joinGesp()
    })
  }

  /**
   * Methode um sich mit dem Server zu verbinden. Achtung wir nutzen localhost
   * 
   */
  connect () {
    this.client.connect('ws://localhost:8181/', 'chat')
    this.connected = true
  }

  /** 
   * Hier muss ihre Verarbeitungslogik integriert werden.
   * Diese Funktion wird automatisch im Server aufgerufen, wenn etwas ankommt, das wir 
   * nicht geschrieben haben
   * @param nachricht auf die der bot reagieren soll
  */
  post (nachricht) {
    var name = 'MegaBot'
    var inhalt ="";
    var found =0;
   
    var fehler = ["Versuchs nochmal","Versuch andere Wörter wie saufen, rauchen oder trinken", "Bitte was anderes", "Please visit our Homepage: www.trottel.com", "i love you", "dont think about it","something1","something2","something3","something4", "soemthign5","something6","something7"]
    var fehler2="Look at the legend";
    for ( var i in this.dict) {
      console.log(i)
      console.log(this.dict[i])
    }

    for ( var j in this.dict) {
      if (nachricht.includes(j)) {
        inhalt = inhalt +" "+this.dict[j]
        found =1;
      }else if(nachricht.includes('auaaaah, that hurts. It seems like i crashed')){
        inhalt = "You have to turn around and go forward('taf')";
        found =1;
      }
    }
    if(found==0){
      var istso = Math.floor(Math.random()*11);
      console.log(istso);
      inhalt =fehler2;
    }
   
      
    
    /*
     * Verarbeitung
    */
    
    var msg = '{"type": "msg", "name": "' + name + '", "msg":"' + inhalt + '"}'
    console.log('Send: ' + msg)
    this.client.con.sendUTF(msg)
  }
 
}

module.exports = bot


