import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/internal/operators/scan';
import { map, catchError, tap } from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
//import { TwitterService } from 'ngx-twitter-api';
//import { nextContext } from '@angular/core/src/render3';
//import { BookingsService } from 'src/app/services/bookings.service';
//import { RestaurantesService } from 'src/app/services/restaurantes.service';
//import { Router } from '@angular/router';
//import { UsuariosService } from 'src/app/services/usuarios.service';
//import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
//import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;
  public book;
  public del;
  public imgSrc = "/assets/images/ReservarChat2.PNG";
  public cont = 0;
  public resultsVisible = true;
  public token: string;
  public status: string;

  public endpointUrl = 'https://query.wikidata.org/sparql';
  public headers = { 'Accept' : 'application/sparql-results+json' };
  public filter = "-1";
  public resultData = null;
  public list =[];
  public grasas = 0;
  public carbs = 0;
  public prot = 0;
  public kca = 0;

  public sparqlQuery;
  public fullUrl;
  public requestBody;
  public res;
  public adarle;
  public textoatrad;
  public daleya;
  public apellid;
  public nuevoaux;
  public resultData2;
  public resultData3;
  public resultData4;
  public resultData5;
  public resultData88;
  public resultData99;
  public result = '';
  //bsModalRef: BsModalRef;
  constructor(
    //private modalService: BsModalService,
    protected http: HttpClient,
    public chat: ChatService,
    //private twitter: TwitterService,
    //private bookingService: BookingsService,
    //private router: Router,
    //private restaurantesService: RestaurantesService,
    //private userService: UsuariosService
  ) {

  }

  ngOnInit() {
    //this.obrasdeautor();
    localStorage.setItem('a','0');
    //console.log(this.getTiempo());
    this.messages = this.chat.conversation.asObservable().
    pipe(scan((acc, val) => acc.concat(val)));
      window.document.getElementById('chat').scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest'});
      document.getElementById('inputtt').focus;
  }

  public onClickedOutsideChat(e) {
    this.resultsVisible = false;
    document.getElementById('general').style.display='none';
    document.getElementById('abrir').style.display='block';
    // console.log('sdsdcsd');
  }

  sendMessage(){
    //console.log(this.formValue);
    if(this.formValue!=undefined && this.formValue!=''){
    this.chat.converse(this.formValue);
    this.formValue = '';
    this.cont = this.cont+1;
    //console.log(this.cont);
    if(this.cont===4){
      this.imgSrc = "/assets/images/ReservarChat2.PNG";
    }
    //console.log(this.messages.source.source);
  }
  }

  googleejemplo(a){
    var num=0;
    if(localStorage.getItem('buscar')){
      num=parseInt(localStorage.getItem('buscar'));
      num=num+1;
      localStorage.removeItem('buscar');
    }
    console.log(num);
    if(!localStorage.getItem('buscar')){
      localStorage.setItem('buscar',String(num));
    }
    document.getElementById('u').innerText='Se está realizando la búsqueda...';
    document.getElementById('u').id='dsfsdghb'+num;
    let div=a.split('+');
    //8b335f7b12msh681633c2ffcabd1p193a52jsna97eed9c770d
  console.log(div[2]);
    fetch("https://faroo-faroo-web-search.p.rapidapi.com/api?q="+div[2], {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "faroo-faroo-web-search.p.rapidapi.com",
		"x-rapidapi-key": "8b335f7b12msh681633c2ffcabd1p193a52jsna97eed9c770d"
	},
  "mode": "cors"
})
.then(function(response) {
    return response.text();
  })
  .then(function(text) {
    //console.log('Request successful', text);
    //this.resultData5=text;
    let obj = JSON.parse(text);
    console.log(obj);
    if(obj.results.length!=0){
      if(obj.results.length==10){
    document.getElementById('dsfsdghb'+num).innerHTML='<a name="Ancla4'+num+'" id="a">Aquí</a> te muestro los 10 primeros resultados de la búsqueda: <ul id="dalel2'+num+'"></ul>';
      }else{
        document.getElementById('dsfsdghb'+num).innerHTML='<a name="Ancla4'+num+'" id="a">Aquí</a> te muestro los resultados de la búsqueda: <ul id="dalel2'+num+'"></ul>';
      }
    for(let i=0;i<10;i++){
      document.getElementById('dalel2'+num).innerHTML=document.getElementById('dalel2'+num).innerHTML+'<li type="disc"><a href="'+obj.results[i].url+'" style="color: #00ff5a;">'+obj.results[i].title+'</a></li>';
    }
    setTimeout(() => {
      console.log('hola');
      (<HTMLInputElement> document.getElementById("averq3")).href='#Ancla4'+num;
      document.getElementById('anclado4').click();
      document.getElementById('inputtt').focus();
     }, 20);
    }else{
      document.getElementById('dsfsdghb'+num).innerHTML='No se han obtenido resultados en la búsqueda';
      //document.getElementById('u').id='dsfsdghb';
    }
  })
  .catch(function(error) {
    console.log('Request failed', error)
    document.getElementById('dsfsdghb'+num).innerHTML='Esta funcionalidad está temporalmente fuera de servicio. Vuelva a intentarlo en unos minutos.';
    //document.getElementById('u').id='dsfsdghb';
  });




  }


  twitterejemplo(){
    var num=0;
    if(localStorage.getItem('twitter')){
      num=parseInt(localStorage.getItem('twitter'));
      num=num+1;
      localStorage.removeItem('twitter');
    }
    console.log(num);
    if(!localStorage.getItem('twitter')){
      localStorage.setItem('twitter',String(num));
    }
    document.getElementById('u').id='yukuyuku'+num;

    let APIkey='ClDRmNrlAQmnucHd6cGJGiqym';
    let APIsecretkey='aE1SMc7leKjs1FP8uPPxggSFIacte4huSL4oK250VpTxVX8pSH';
    let Accesstoken='979333295233257472-2aUu8ernd0LMrCbpIqH7UuBfa3ZVsZE';
    let Accesstokensecret='3ObsJHvegTiJ34WQUiwGPWlBndS9C8YiIp7apGMnl3Grd';

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost:3000/authorize',{headers: headers}).subscribe(data => {
      console.log(data);

      //setTimeout(() => {
      var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost:3000/search', {headers: headers}).subscribe(data => {
      console.log(data);
      this.resultData4=data;
      console.log(this.resultData4);
      document.getElementById('yukuyuku'+num).innerHTML='<a name="Ancla5'+num+'" id="a">Aquí</a> te dejo los 10 últimos tweets publicados por la biblioteca en su cuenta de Twitter: <ul id="dalel3'+num+'"></ul>';
      for(let i=0;i<10;i++){
      document.getElementById('dalel3'+num).innerHTML=document.getElementById('dalel3'+num).innerHTML+'<li type="disc" style="margin-left: -12%;">'+this.resultData4.data[i].text+'</li>';
    }
    setTimeout(() => {
      this.abrirdenuevo4(num)
     }, 20);
      });
     //}, 500);

     /* this.http.get('/1.1/statuses/user_timeline.json?screen_name=FBVMC').subscribe(data => {
      console.log(data);
      this.resultData4=data;
      //document.getElementById(this.adarle).innerText=this.resultData.text[0];
      //console.log(this.resultData.text[0]);
    });*/
      //document.getElementById(this.adarle).innerText=this.resultData.text[0];
      //console.log(this.resultData.text[0]);
    });
    /*this.http.get('/1.1/statuses/user_timeline.json?screen_name=FBVMC').subscribe(data => {
      console.log(data);
      this.resultData4=data;
      //document.getElementById(this.adarle).innerText=this.resultData.text[0];
      //console.log(this.resultData.text[0]);
    });*/





   /* let requestHeaders: any = { 'content-type': 'application/x-www-form-urlencoded;' };
    let requestParams: any = {

		"oauth_access_token": "979333295233257472-2aUu8ernd0LMrCbpIqH7UuBfa3ZVsZE",
		"oauth_access_token_secret": "3ObsJHvegTiJ34WQUiwGPWlBndS9C8YiIp7apGMnl3Grd",
    "consumer_key": "ClDRmNrlAQmnucHd6cGJGiqym",
    "consumer_secret": "aE1SMc7leKjs1FP8uPPxggSFIacte4huSL4oK250VpTxVX8pSH"
	};

     let responseLogin = fetch('/1.1/statuses/user_timeline.json?screen_name=FBVMC', {
      method: 'POST',
      headers: requestHeaders,
      body: requestParams
    }).then( body => body.json() ).then( json => {
      var { head: { vars }, results } = json;
      this.resultData = results.bindings;
    console.log(this.resultData);
    });*/

    /*fetch("https://twitterbukativ1.p.rapidapi.com/search", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "TwitterBukatiV1.p.rapidapi.com",
		"x-rapidapi-key": "e0059871e3mshc4cae406990e4abp188935jsn2deb4a0d69b4",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {
		"consumerKey": "ClDRmNrlAQmnucHd6cGJGiqym",
		"query": "FBVMC",
		"accessTokenKey": "979333295233257472-2aUu8ernd0LMrCbpIqH7UuBfa3ZVsZE",
		"consumerSecret": "aE1SMc7leKjs1FP8uPPxggSFIacte4huSL4oK250VpTxVX8pSH",
		"accessTokenSecret": "3ObsJHvegTiJ34WQUiwGPWlBndS9C8YiIp7apGMnl3Grd"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});*/


    /*this.http.get(
      '/1.1/statuses/user_timeline.json?screen_name=FBVMC',
      {
        count: 5
      },
      {
        consumerKey: APIkey,
        consumerSecret: APIsecretkey
      },
      {
        token: Accesstoken,
        tokenSecret: Accesstokensecret
      }
  ).subscribe((res)=>{
    console.log(res);
      //this.result = res.json().map(tweet => tweet.text);
      //console.log(this.result);
  });*/

  }

  youtubeprueba(){
    var num=0;
    if(localStorage.getItem('youtube')){
      num=parseInt(localStorage.getItem('youtube'));
      num=num+1;
      localStorage.removeItem('youtube');
    }
    console.log(num);
    if(!localStorage.getItem('youtube')){
      localStorage.setItem('youtube',String(num));
    }
    document.getElementById('u').id='dfsdfdsfsd1'+num;
    let key='20aa83ba7d06fd6d3c88c09e1184fab5.c7e2e38416';
    this.http.get('https://youtube.trawlingweb.com/search/?token='+key+'&q=biblioteca%20virtual%20miguel%20de%20cervantes').subscribe(data => {
      console.log(data);
      this.resultData3=data;
      //document.getElementById(this.adarle).innerText=this.resultData.text[0];
      //console.log(this.resultData.text[0]);
    });
    document.getElementById('dfsdfdsfsd1'+num).innerHTML='<a name="Ancla3'+num+'" id="a">Aquí</a> te dejo con 10 de los vídeos subidos en el canal oficial de la BVMC en YouTube: <ul id="dalel1'+num+'"></ul>';
    console.log(document.getElementById('dalel1'+num));
    setTimeout(() => {
      this.videosfrescos(num)
     }, 2000);

  }

  videosfrescos(num){
    var a=0;
    console.log(this.resultData3.response);
    for(let i=0;i<50;i++){
      console.log('holafuera');
      if(this.resultData3.response.data[i].channelTitle=="cervantesvirtual"){
        if(a<10){
        console.log('hola');
        document.getElementById('dalel1'+num).innerHTML=document.getElementById('dalel1'+num).innerHTML+'<li type="disc" style="margin-left:-10%;">'+this.resultData3.response.data[i].title+':<span style="margin-left: -11%;"><iframe width="109%" height="100%" src="'+this.resultData3.response.data[i].urlEmbed+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span></li>';
        a=a+1;
        }
      }
    }
    setTimeout(() => {
      this.abrirdenuevo3(num)
     }, 20);
  }

  noticiasprueba(){
    var num=0;
    if(localStorage.getItem('noticias')){
      num=parseInt(localStorage.getItem('noticias'));
      num=num+1;
      localStorage.removeItem('noticias');
    }
    console.log(num);
    if(!localStorage.getItem('noticias')){
      localStorage.setItem('noticias',String(num));
    }
    //let key='a1fa704bfaa38ddafc3fa3cfdd2a2720.fb7c08da5b'; hasta el 13 de diciembre no va
    document.getElementById('u').id='dfsdfdsfsd'+num;
    let key='ccd3c6d9b6006efc99e69152cc46391c.73318dcc74';
    this.http.get('https://api.trawlingweb.com/?token='+key+'&q=&order=desc&ts=1572562800000').subscribe(data => {
      console.log(data);
      this.resultData2=data;
      //document.getElementById(this.adarle).innerText=this.resultData.text[0];
      //console.log(this.resultData.text[0]);
    });
    document.getElementById('dfsdfdsfsd'+num).innerHTML='<a name="Ancla2'+num+'" id="a">Aquí</a> te dejo con 10 de las noticias de interés más recientes que he encontrado: <ul id="dalel'+num+'"></ul>';
    console.log(document.getElementById('dalel'+num));

    setTimeout(() => {
      this.noticiasfrescas(num)
     }, 2000);



  }

  noticiasfrescas(num){
    var a=0;
    console.log(this.resultData2.response);
    for(let i=0;i<100;i++){
      console.log('holafuera');
      if(this.resultData2.response.data[i].site_language=="es"){
        if(a<10){
        console.log('hola');
        document.getElementById('dalel'+num).innerHTML=document.getElementById('dalel'+num).innerHTML+'<li type="disc"> <a href="'+this.resultData2.response.data[i].url+'" style="color: #00ff5a;">'+this.resultData2.response.data[i].title+'</a></li>';
        a=a+1;
        }
      }
    }
    setTimeout(() => {
      this.abrirdenuevo2(num)
     }, 20);
  }

  pruebatraductor(a){
  let key='trnsl.1.1.20191106T225230Z.24b8558444bacd85.30d10b5cf43f49f23f2bf45e28463f19465b9936';
    console.log(document.getElementById('u'));
  let envi=a.split('+');
  this.textoatrad=envi[2];
  let acual='malisimo';
  if(envi[3].includes('inglés') || envi[3].includes('ingles') || envi[3].includes('Ingles') || envi[3].includes('Inglés')){
    acual='en';
  }
  if(envi[3].includes('Azerbaiyán') || envi[3].includes('Azerbaiyan') || envi[3].includes('azerbaiyan') || envi[3].includes('azerbaiyán')){
    acual='az';
  }
  if(envi[3].includes('Malayalam') || envi[3].includes('malayalam')){
    acual='ml';
  }
  if(envi[3].includes('Albanés') || envi[3].includes('Albanes') || envi[3].includes('albanés') || envi[3].includes('albanes')){
    acual='sq';
  }
  if(envi[3].includes('Maltés') || envi[3].includes('Maltes') || envi[3].includes('maltés') || envi[3].includes('maltes')){
    acual='mt';
  }
  if(envi[3].includes('Amharic') || envi[3].includes('amharic')){
    acual='am';
  }
  if(envi[3].includes('Macedonian') || envi[3].includes('macedonian')){
    acual='mk';
  }
  if(envi[3].includes('Maorí') || envi[3].includes('maorí') || envi[3].includes('Maori') || envi[3].includes('maori')){
    acual='mi';
  }
  if(envi[3].includes('Árabe') || envi[3].includes('Arabe') || envi[3].includes('árabe') || envi[3].includes('arabe')){
    acual='ar';
  }
  if(envi[3].includes('Marathi') || envi[3].includes('marathi')){
    acual='mr';
  }
  if(envi[3].includes('Armenio') || envi[3].includes('armenio')){
    acual='hy';
  }
  if(envi[3].includes('Mari') || envi[3].includes('mari')){
    acual='mhr';
  }
  if(envi[3].includes('Afrikaans') || envi[3].includes('afrikaans')){
    acual='af';
  }
  if(envi[3].includes('Mongol') || envi[3].includes('mongol')){
    acual='mn';
  }
  if(envi[3].includes('Vasco') || envi[3].includes('vasco') || envi[3].includes('euskera') || envi[3].includes('Euskera')){
    acual='eu';
  }
  if(envi[3].includes('Alemán') || envi[3].includes('Aleman') || envi[3].includes('alemán') || envi[3].includes('aleman')){
    acual='de';
  }
  if(envi[3].includes('Bashkir') || envi[3].includes('bashkir')){
    acual='ba';
  }
  if(envi[3].includes('Nepali') || envi[3].includes('nepali')){
    acual='ne';
  }
  if(envi[3].includes('Bielorruso') || envi[3].includes('bielorruso')){
    acual='be';
  }
  if(envi[3].includes('Noruego') || envi[3].includes('Noruego')){
    acual='no';
  }
  if(envi[3].includes('Bengalí') || envi[3].includes('Bengali') || envi[3].includes('bengalí') || envi[3].includes('bengali')){
    acual='bn';
  }
  if(envi[3].includes('Punjabi') || envi[3].includes('punjabi')){
    acual='pa';
  }
  if(envi[3].includes('Birmano') || envi[3].includes('birmano')){
    acual='my';
  }
  if(envi[3].includes('Papiamento') || envi[3].includes('papiamento')){
    acual='pap';
  }
  if(envi[3].includes('Búlgaro') || envi[3].includes('Bulgaro') || envi[3].includes('búlgaro') || envi[3].includes('bulgaro')){
    acual='bg';
  }
  if(envi[3].includes('Persa') || envi[3].includes('persa')){
    acual='fa';
  }
  if(envi[3].includes('Bosnio') || envi[3].includes('bosnio')){
    acual='bs';
  }
  if(envi[3].includes('Polaco') || envi[3].includes('polaco')){
    acual='pl';
  }
  if(envi[3].includes('Galés') || envi[3].includes('Gales') || envi[3].includes('galés') || envi[3].includes('gales')){
    acual='cy';
  }
  if(envi[3].includes('Portugués') || envi[3].includes('Portugues') || envi[3].includes('portugués') || envi[3].includes('portugues')){
    acual='pt';
  }
  if(envi[3].includes('Húngaro') || envi[3].includes('Hungaro') || envi[3].includes('húngaro') || envi[3].includes('hungaro')){
    acual='hu';
  }
  if(envi[3].includes('Rumano') || envi[3].includes('rumano')){
    acual='ro';
  }
  if(envi[3].includes('Vietnamita') || envi[3].includes('vietnamita')){
    acual='vi';
  }
  if(envi[3].includes('Ruso') || envi[3].includes('ruso')){
    acual='ru';
  }
  if(envi[3].includes('Haitiano') || envi[3].includes('haitiano') || envi[3].includes('criollo') || envi[3].includes('Criollo') || envi[3].includes('Haitiano (criollo)') || envi[3].includes('haitiano (criollo)')){
    acual='ht';
  }
  if(envi[3].includes('Cebuano') || envi[3].includes('cebuano')){
    acual='ceb';
  }
  if(envi[3].includes('Gallego') || envi[3].includes('gallego')){
    acual='gl';
  }
  if(envi[3].includes('Serbio') || envi[3].includes('serbio')){
    acual='sr';
  }
  if(envi[3].includes('Holandés') || envi[3].includes('Holandes') || envi[3].includes('holandés') || envi[3].includes('holandes')){
    acual='nl';
  }
  if(envi[3].includes('Cingalés') || envi[3].includes('Cingales') || envi[3].includes('cingalés') || envi[3].includes('cingales')){
    acual='si';
  }
  if(envi[3].includes('Hill Mari') || envi[3].includes('Hill mari') || envi[3].includes('hill Mari') || envi[3].includes('hill mari')){
    acual='mrj';
  }
  if(envi[3].includes('Eslovaco') || envi[3].includes('eslovaco')){
    acual='sk';
  }
  if(envi[3].includes('Griego') || envi[3].includes('griego')){
    acual='el';
  }
  if(envi[3].includes('Esloveno') || envi[3].includes('esloveno')){
    acual='sl';
  }
  if(envi[3].includes('Georgiano') || envi[3].includes('georgiano')){
    acual='ka';
  }
  if(envi[3].includes('Swahili') || envi[3].includes('swahili')){
    acual='sw';
  }
  if(envi[3].includes('Gujarati') || envi[3].includes('gujarati')){
    acual='gu';
  }
  if(envi[3].includes('Sundanese') || envi[3].includes('sundanese')){
    acual='su';
  }
  if(envi[3].includes('Danish') || envi[3].includes('danish')){
    acual='da';
  }
  if(envi[3].includes('Tajik') || envi[3].includes('tajik')){
    acual='tg';
  }
  if(envi[3].includes('Hebreo') || envi[3].includes('hebreo')){
    acual='he';
  }
  if(envi[3].includes('Tailandés') || envi[3].includes('tailandés') || envi[3].includes('Tailandes') || envi[3].includes('tailandes')){
    acual='th';
  }
  if(envi[3].includes('Yiddish') || envi[3].includes('yiddish')){
    acual='yi';
  }
  if(envi[3].includes('Tagalog') || envi[3].includes('tagalog')){
    acual='tl';
  }
  if(envi[3].includes('Indonesian') || envi[3].includes('indonesian')){
    acual='id';
  }
  if(envi[3].includes('Tamil') || envi[3].includes('tamil')){
    acual='ta';
  }
  if(envi[3].includes('Irlandés') || envi[3].includes('irlandés') || envi[3].includes('Irlandes') || envi[3].includes('irlandes')){
    acual='ga';
  }
  if(envi[3].includes('Tártaro') || envi[3].includes('tártaro') || envi[3].includes('Tartaro') || envi[3].includes('tartaro')){
    acual='tt';
  }
  if(envi[3].includes('Italiano') || envi[3].includes('italiano')){
    acual='it';
  }
  if(envi[3].includes('Telugu') || envi[3].includes('telugu')){
    acual='te';
  }
  if(envi[3].includes('Islandés') || envi[3].includes('islandés') || envi[3].includes('Islandes') || envi[3].includes('islandes')){
    acual='is';
  }
  if(envi[3].includes('Turco') || envi[3].includes('turco')){
    acual='tr';
  }
  if(envi[3].includes('Español') || envi[3].includes('español')){
    acual='es';
  }
  if(envi[3].includes('Udmurt') || envi[3].includes('udmurt')){
    acual='udm';
  }
  if(envi[3].includes('Kazajo') || envi[3].includes('kazajo')){
    acual='kk';
  }
  if(envi[3].includes('Uzbeko') || envi[3].includes('uzbeko')){
    acual='uz';
  }
  if(envi[3].includes('Kannada') || envi[3].includes('kannada')){
    acual='kn';
  }
  if(envi[3].includes('Ucraniano') || envi[3].includes('ucraniano')){
    acual='uk';
  }
  if(envi[3].includes('Catalán') || envi[3].includes('catalán') || envi[3].includes('Catalan') || envi[3].includes('catalan')){
    acual='ca';
  }
  if(envi[3].includes('Urdu') || envi[3].includes('urdu')){
    acual='ur';
  }
  if(envi[3].includes('Kirguís') || envi[3].includes('kirguís') || envi[3].includes('kirguis') || envi[3].includes('Kirguis')){
    acual='ky';
  }
  if(envi[3].includes('Finlandés') || envi[3].includes('finlandés') || envi[3].includes('Finlandes') || envi[3].includes('finlandes')){
    acual='fi';
  }
  if(envi[3].includes('Chino') || envi[3].includes('chino')){
    acual='zh';
  }
  if(envi[3].includes('Francés') || envi[3].includes('francés') || envi[3].includes('Frances') || envi[3].includes('frances')){
    acual='fr';
  }
  if(envi[3].includes('Coreano') || envi[3].includes('coreano')){
    acual='ko';
  }
  if(envi[3].includes('Hindi') || envi[3].includes('hindi')){
    acual='hi';
  }
  if(envi[3].includes('Xhosa') || envi[3].includes('xhosa')){
    acual='xh';
  }
  if(envi[3].includes('Croata') || envi[3].includes('croata')){
    acual='hr';
  }
  if(envi[3].includes('Khmer') || envi[3].includes('khmer')){
    acual='km';
  }
  if(envi[3].includes('Checo') || envi[3].includes('checo')){
    acual='cs';
  }
  if(envi[3].includes('Laosiano') || envi[3].includes('laosiano')){
    acual='lo';
  }
  if(envi[3].includes('Sueco') || envi[3].includes('sueco')){
    acual='sv';
  }
  if(envi[3].includes('Latín') || envi[3].includes('latín') || envi[3].includes('Latin') || envi[3].includes('latin')){
    acual='la';
  }
  if(envi[3].includes('Escocés') || envi[3].includes('escocés') || envi[3].includes('Escoces') || envi[3].includes('escoces')){
    acual='gd';
  }
  if(envi[3].includes('Letón') || envi[3].includes('letón') || envi[3].includes('Leton') || envi[3].includes('leton')){
    acual='lv';
  }
  if(envi[3].includes('Estonio') || envi[3].includes('estonio')){
    acual='et';
  }
  if(envi[3].includes('Lituano') || envi[3].includes('lituano')){
    acual='lt';
  }
  if(envi[3].includes('Esperanto') || envi[3].includes('esperanto')){
    acual='eo';
  }
  if(envi[3].includes('Luxemburgués') || envi[3].includes('luxemburgués') || envi[3].includes('Luxemburgues') || envi[3].includes('luxemburgues')){
    acual='lb';
  }
  if(envi[3].includes('Javanés') || envi[3].includes('javanés') || envi[3].includes('Javanes') || envi[3].includes('javanes')){
    acual='jv';
  }
  if(envi[3].includes('Malgache') || envi[3].includes('malgache')){
    acual='mg';
  }
  /*if(envi[3].includes('Japonés') || envi[3].includes('japonés') || envi[3].includes('Japones') || envi[3].includes('japones')){
    acual='ja';
  }*/
  if(envi[3].includes('Malayo') || envi[3].includes('malayo')){
    acual='ms';
  }

  if(acual!='malisimo'){
  this.http.get('https://translate.yandex.net/api/v1.5/tr.json/detect?key='+key+'&text='+envi[2]).subscribe(data => {
      console.log(data);
      this.resultData=data;
      document.getElementById(this.adarle).innerText=this.resultData.text[0];
      console.log(this.resultData.text[0]);
    });

  this.adarle='otrosdfsd'+localStorage.getItem('a');

  setTimeout(() => {
    this.traduccion2(acual)
   }, 250);
  }else{
    document.getElementById('u').innerText='Ese idioma no existe o no está disponible para realizar la traducción';

    document.getElementById('u').id='this.adarle';
    this.adarle='otrosdfsd'+localStorage.getItem('a');
  }
  }

  traduccion2(acual){
    let key='trnsl.1.1.20191106T225230Z.24b8558444bacd85.30d10b5cf43f49f23f2bf45e28463f19465b9936';
    this.http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+key+'&text='+this.textoatrad+'&lang='+this.resultData.lang+'-'+acual).subscribe(data => {
      console.log(data);
      this.resultData=data;
      document.getElementById(this.adarle).innerText=this.resultData.text[0];
      console.log(this.resultData.text[0]);
    });
    setTimeout(() => {
      this.cambioidya()
     }, 100);
  }

  cambioidya(){
    document.getElementById('u').id=this.adarle;
    let temporal = parseInt(localStorage.getItem('a'))+1;
    let temp2=String(temporal);
    localStorage.removeItem('a');
    localStorage.setItem('a',temp2);
  }

  pruebahoroscopo(a){
    console.log(document.getElementById('u'));
  console.log(a);
    this.http.get('https://api.adderou.cl/tyaas/').subscribe(data => {

      this.resultData=data;
      console.log(this.resultData);
      let d=this.resultData.titulo.split(' ');
      if(a=='+aries'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.aries.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.aries.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.aries.amor+' En el dinero: '+this.resultData.horoscopo.aries.dinero+' En la salud: '+this.resultData.horoscopo.aries.salud;
      }
      if(a=='+acuario'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.acuario.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.acuario.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.acuario.amor+' En el dinero: '+this.resultData.horoscopo.acuario.dinero+' En la salud: '+this.resultData.horoscopo.acuario.salud;
      }
      if(a=='+cancer' || a=='+cáncer'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.cancer.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.cancer.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.cancer.amor+' En el dinero: '+this.resultData.horoscopo.cancer.dinero+' En la salud: '+this.resultData.horoscopo.cancer.salud;
      }
      if(a=='+capricornio'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.capricornio.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.capricornio.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.capricornio.amor+' En el dinero: '+this.resultData.horoscopo.capricornio.dinero+' En la salud: '+this.resultData.horoscopo.capricornio.salud;
      }
      if(a=='+escorpion' || a=='+escorpión' || a=='+escorpio'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.escorpion.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.escorpion.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.escorpion.amor+' En el dinero: '+this.resultData.horoscopo.escorpion.dinero+' En la salud: '+this.resultData.horoscopo.escorpion.salud;
      }
      if(a=='+geminis' || a=='+géminis'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.geminis.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.geminis.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.geminis.amor+' En el dinero: '+this.resultData.horoscopo.geminis.dinero+' En la salud: '+this.resultData.horoscopo.geminis.salud;
      }
      if(a=='+leo'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.leo.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.leo.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.leo.amor+' En el dinero: '+this.resultData.horoscopo.leo.dinero+' En la salud: '+this.resultData.horoscopo.leo.salud;
      }
      if(a=='+libra'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.libra.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.libra.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.libra.amor+' En el dinero: '+this.resultData.horoscopo.libra.dinero+' En la salud: '+this.resultData.horoscopo.libra.salud;
      }
      if(a=='+piscis'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.piscis.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.piscis.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.piscis.amor+' En el dinero: '+this.resultData.horoscopo.piscis.dinero+' En la salud: '+this.resultData.horoscopo.piscis.salud;
      }
      if(a=='+sagitario'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.sagitario.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.sagitario.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.sagitario.amor+' En el dinero: '+this.resultData.horoscopo.sagitario.dinero+' En la salud: '+this.resultData.horoscopo.sagitario.salud;
      }
      if(a=='+tauro'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.tauro.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.tauro.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.tauro.amor+' En el dinero: '+this.resultData.horoscopo.tauro.dinero+' En la salud: '+this.resultData.horoscopo.tauro.salud;
      }
      if(a=='+virgo'){
        document.getElementById('u').innerText='Para el signo '+this.resultData.horoscopo.virgo.nombre+', los nacidos durante el período del '+this.resultData.horoscopo.virgo.fechaSigno+', tenemos la siguiente predicción para hoy, día '+d[0]+' de '+d[1]+'. '+'En el amor: '+this.resultData.horoscopo.virgo.amor+' En el dinero: '+this.resultData.horoscopo.virgo.dinero+' En la salud: '+this.resultData.horoscopo.virgo.salud;
      }
      document.getElementById('u').id='otro';
      //let url = this.resultData.datos;
      //
      //document.getElementById('u').innerHTML='La predicción del tiempo general de españa para hoy la puede consultar haciendo clic <a href='+url+' style="color: #00ff5a;">aquí</a>';
      //console.log(document.getElementById('u'));
      //document.getElementById('u').innerText='La predicción del tiempo general de españa para hoy la puede consultar en el siguiente enlace: '+url;
  //    document.getElementById('u').id='otro';
    });
  }

  obrasdeautor(a){
    var num=0;
    if(localStorage.getItem('autores')){
      num=parseInt(localStorage.getItem('autores'));
      num=num+1;
      localStorage.removeItem('autores');
    }
    console.log(num);
    if(!localStorage.getItem('autores')){
      localStorage.setItem('autores',String(num));
    }
    (<HTMLInputElement> document.getElementById("inputtt")).disabled = true;
    (<HTMLInputElement> document.getElementById("inputtt")).placeholder = 'Espere a que finalice la búsqueda...';
    //document.getElementById("inputtt").disabled = true;
    //document.getElementById("inputtt").placeholder='Espere a que finalice la búsqueda...';
    document.getElementById("inputtt").style.cursor="wait";
    document.getElementById('u').innerText='Se está realizando la búsqueda...';
    document.getElementById('durico').style.cursor="auto";
    //var buscar='vega, lope de';
    let div = a.split("+");
    let buscar = div[2];
    if(a.includes(' de ')){
      console.log('yeee');
      let prob=a.split("+");
      console.log(prob);
      let otro=prob[2];
      console.log(otro);
      let prob2=otro.split("de");
      console.log(prob2);
      var otravez=prob2[1].split(' ');
      console.log(otravez);
      if(otravez.length==2){
      let res=otravez[1]+', '+prob2[0]+'de';
      this.daleya=res;
      }else{
        if(otravez.length==3){
          let prob=a.split("+");
        console.log(prob);
        let otro=prob[2];
        console.log(otro);
        let prob2=otro.split("de");
        console.log(prob2);
        var nombb=prob2[0].split(' ');
        var otravez=prob2[1].split(' ');
        console.log(otravez);
        var buscar2=otravez[2]+', '+nombb[0]+' de '+otravez[1];
        console.log(buscar2);
        //this.nuevoinbu(buscar2);
        this.daleya=buscar2;
        }else{
        for(let i=1;i<otravez.length-1;i++){
          this.daleya=otravez[i]+' ';
        }
        this.daleya=this.daleya+otravez[otravez.length-1]+', '+prob2[0]+'de';
      }
      }
      console.log(this.daleya);
      buscar=this.daleya;
    }else{
      var ui=buscar.split(' ');
      console.log(ui);
      if(ui.length==2){
        buscar=ui[1]+', '+ui[0];
        if(ui[1]==undefined){
          buscar=ui[0];
        }
      }
      if(ui.length==3){
        buscar=ui[1]+' '+ui[2]+', '+ui[0];
        this.apellid=true;
    }
    if(ui.length==4){
      buscar=ui[2]+' '+ui[3]+', '+ui[0]+' '+ui[1];
      if(a.includes(' i ')){
        buscar=ui[1]+' '+ui[2]+' '+ui[3]+', '+ui[0];
      }
    }
    }
    this.sparqlQuery = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?autor ?nombreautor ?obra ?titulo WHERE { ?autor rdfs:label ?nombreautor . FILTER regex ((?nombreautor), "'+buscar+'", "i") .	?autor <http://rdaregistry.info/Elements/a/authorOf> ?obra.  	?obra rdfs:label ?titulo. }';

      this.fullUrl = '/bvmc-lod/repositories/data' + '?query=' + encodeURIComponent( this.sparqlQuery );
     console.log(this.fullUrl);


     let requestHeaders: any = { 'Accept': 'application/sparql-results+json','content-type': 'application/x-www-form-urlencoded; charset=UTF-8' };
     let responseLogin = fetch(this.fullUrl, {
      method: 'POST',
      headers: requestHeaders
    }).then( body => body.json() ).then( json => {
      var { head: { vars }, results } = json;
      this.resultData = results.bindings;
    console.log(this.resultData);
    });
    document.getElementById('u').id='u'+num;
    setTimeout(() => {
      this.daleahii(buscar, num, ui)
     }, 2500);
  }

  daleahii(buscar, num, ui){
    if(this.resultData.length!=0){
      document.getElementById('u'+num).innerHTML='<a name="Ancla6'+num+'" id="a">Algunas</a> de las obras que tenemos registradas de <a href="'+this.resultData[0].autor.value+'" style="color: #e0e409;">"'+this.resultData[0].nombreautor.value+'"</a> son:<ul id="listillo1'+num+'"></ul>';
      //setTimeout(() => {
      if(this.resultData.length>=10){
        console.log('hola10');
      for(let i=0;i<10;i++){
        //if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
          document.getElementById('listillo1'+num).innerHTML=document.getElementById('listillo1'+num).innerHTML+'<li type="disc"> <a href="'+this.resultData[i].obra.value+'" style="color: #00ff5a;">'+this.resultData[i].titulo.value+'</a></li>';
        //}
        if(i==this.resultData.length-1 && !document.getElementById('u'+num).innerText.includes('Algunas de las obras que tenemos')){
          document.getElementById('u'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
          if(this.apellid=true){
            console.log('holadfsd');
            document.getElementById('u'+num).innerText='Se está realizando la búsqueda...';
            buscar=ui[2]+', '+ui[0]+' '+ui[1];
            this.otracosita2(buscar, num);
          }
        }
      }
      if(document.getElementById('u'+num).innerText.includes('Algunas de las obras que tenemos')){
        document.getElementById('u'+num).innerHTML=document.getElementById('u'+num).innerHTML+' Si desea ver más obras de este autor haga click <a href="'+this.resultData[0].autor.value+'" style="color: #e0e409;">aquí</a>.'
      }
    }else{
      console.log('holano10');
      document.getElementById('u'+num).innerHTML='<a name="Ancla6'+num+'" id="a">Las</a> obras que tenemos registradas de <a href="'+this.resultData[0].autor.value+'" style="color: #e0e409;">"'+this.resultData[0].nombreautor.value+'"</a> son:<ul id="listillo1'+num+'"></ul>';
      for(let i=0;i<this.resultData.length;i++){
        //if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
          document.getElementById('listillo1'+num).innerHTML=document.getElementById('listillo1'+num).innerHTML+'<li type="disc"> <a href="'+this.resultData[i].obra.value+'" style="color: #00ff5a;">'+this.resultData[i].titulo.value+'</a></li>';
        //}
        if(i==this.resultData.length-1 && !document.getElementById('u'+num).innerText.includes('Las obras que tenemos')){
          document.getElementById('u'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
          if(this.apellid=true){
            console.log('holadfsd');
            document.getElementById('u'+num).innerText='Se está realizando la búsqueda...';
            buscar=ui[2]+', '+ui[0]+' '+ui[1];
            this.otracosita2(buscar, num);
          }
        }
      }
    }
  //}, 200);
    }else{
      document.getElementById('u'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
      if(this.apellid=true){
        console.log('holadfsd');
        document.getElementById('u'+num).innerText='Se está realizando la búsqueda...';
        buscar=ui[2]+', '+ui[0]+' '+ui[1];
        this.otracosita2(buscar, num);
      }
    }
    setTimeout(() => {
      this.abrirdenuevo6(num)
     }, 20);
    document.getElementById('u'+num).id='kjdsjkhjsd'+num;
    setTimeout(() => {
      this.limpiarvariable()
     }, 19400);
  }

  nuevointento(){

    console.log(document.getElementById('otro22'));
    console.log(this.resultData);
    if(this.resultData.length!=0){
    for(let i=0;i<this.resultData.length;i++){
      if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
        document.getElementById('otro22').innerHTML='He encontrado a <a href="'+this.resultData[i].autor.value+'" style="color: #00ff5a;">"'+this.resultData[i].nombreautor.value+'"</a>.';
      }
      if(i==this.resultData.length-1 && !document.getElementById('otro22').innerText.includes('He encontrado a')){
        document.getElementById('otro22').innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
      }
    }
  }else{
    document.getElementById('otro22').innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
  }
      document.getElementById('u').id='otro';
      //this.daleya='';
      setTimeout(() => {
        this.limpiarvariable()
       }, 19400);
  }


  buscarAutorcito(a){
    (<HTMLInputElement> document.getElementById("inputtt")).disabled = true;
    (<HTMLInputElement> document.getElementById("inputtt")).placeholder = 'Espere a que finalice la búsqueda...';
    document.getElementById("inputtt").style.cursor="wait";
    document.getElementById('u').innerText='Se está realizando la búsqueda...';
    document.getElementById('durico').style.cursor="auto";
    let div = a.split("+");
    let buscar = div[2];
    if(a.includes(' de ')){
      console.log('yeee');
      let prob=a.split("+");
      console.log(prob);
      let otro=prob[2];
      console.log(otro);
      let prob2=otro.split("de");
      console.log(prob2);
      var otravez=prob2[1].split(' ');
      console.log(otravez);
      if(otravez.length==2){
      let res=otravez[1]+', '+prob2[0]+'de';
      this.daleya=res;
      }else{
        if(otravez.length==3){
          let prob=a.split("+");
        console.log(prob);
        let otro=prob[2];
        console.log(otro);
        let prob2=otro.split("de");
        console.log(prob2);
        var nombb=prob2[0].split(' ');
        var otravez=prob2[1].split(' ');
        console.log(otravez);
        var buscar2=otravez[2]+', '+nombb[0]+' de '+otravez[1];
        console.log(buscar2);
        //this.nuevoinbu(buscar2);
        this.daleya=buscar2;
        }else{
        for(let i=1;i<otravez.length-1;i++){
          this.daleya=otravez[i]+' ';
        }
        this.daleya=this.daleya+otravez[otravez.length-1]+', '+prob2[0]+'de';
      }
      }
      
      console.log(this.daleya);
      buscar=this.daleya;
    }else{
      var ui=buscar.split(' ');
      console.log(ui);
      if(ui.length==2){
        buscar=ui[1]+', '+ui[0];
        if(ui[1]==undefined){
          buscar=ui[0];
        }
      }
      if(ui.length==3){
        buscar=ui[1]+' '+ui[2]+', '+ui[0];
        this.apellid=true;
    }
    if(ui.length==4){
      buscar=ui[2]+' '+ui[3]+', '+ui[0]+' '+ui[1];
      if(a.includes(' i ')){
        buscar=ui[1]+' '+ui[2]+' '+ui[3]+', '+ui[0];
      }
    }
    }
    console.log(buscar);
      this.sparqlQuery = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?autor ?nombreautor WHERE { ?autor rdfs:label ?nombreautor . FILTER regex ((?nombreautor), "'+buscar+'", "i") . }';

      this.fullUrl = '/bvmc-lod/repositories/data' + '?query=' + encodeURIComponent( this.sparqlQuery );
     console.log(this.fullUrl);


     let requestHeaders: any = { 'Accept': 'application/sparql-results+json','content-type': 'application/x-www-form-urlencoded; charset=UTF-8' };
     let responseLogin = fetch(this.fullUrl, {
      method: 'POST',
      headers: requestHeaders
    }).then( body => body.json() ).then( json => {
      var { head: { vars }, results } = json;
      this.resultData = results.bindings;
    console.log(this.resultData);
    });
    if(this.resultData.length!=0){
    for(let i=0;i<this.resultData.length;i++){
      if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
        document.getElementById('u').innerHTML='He encontrado a <a href="'+this.resultData[i].autor.value+'" style="color: #00ff5a;">"'+this.resultData[i].nombreautor.value+'"</a>.';
      }
      if(i==this.resultData.length-1 && !document.getElementById('u').innerText.includes('He encontrado a')){
        document.getElementById('u').innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
        if(this.apellid=true){
          console.log('holadfsd');
          document.getElementById('u').innerText='Se está realizando la búsqueda...';
          buscar=ui[2]+', '+ui[0]+' '+ui[1];
          this.otracosita(buscar);
        }
      }
    }
  }else{
    document.getElementById('u').innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
    if(this.apellid=true){
      console.log('holadfsd');
      document.getElementById('u').innerText='Se está realizando la búsqueda...';
      buscar=ui[2]+', '+ui[0]+' '+ui[1];
      this.otracosita(buscar);
    }
  }
      document.getElementById('u').id='otro22';
      //this.daleya='';
      console.log(otravez);
      if(otravez){
        console.log('entra');
      if(otravez.length>2){
        document.getElementById('otro22').innerText='Se está realizando la búsqueda...';
        setTimeout(() => {
          this.nuevointento();
         }, 4500);

      }
    }

      setTimeout(() => {
        this.limpiarvariable()
       }, 19400);
  }

  otracosita2(buscar, num){
    console.log('entrar entra');
    console.log(buscar);
    this.sparqlQuery = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?autor ?nombreautor ?obra ?titulo WHERE { ?autor rdfs:label ?nombreautor . FILTER regex ((?nombreautor), "'+buscar+'", "i") .	?autor <http://rdaregistry.info/Elements/a/authorOf> ?obra.  	?obra rdfs:label ?titulo. }';

      this.fullUrl = '/bvmc-lod/repositories/data' + '?query=' + encodeURIComponent( this.sparqlQuery );
     console.log(this.fullUrl);


     let requestHeaders: any = { 'Accept': 'application/sparql-results+json','content-type': 'application/x-www-form-urlencoded; charset=UTF-8' };
     let responseLogin = fetch(this.fullUrl, {
      method: 'POST',
      headers: requestHeaders
    }).then( body => body.json() ).then( json => {
      var { head: { vars }, results } = json;
      this.resultData = results.bindings;
      this.nuevoaux = results.bindings;
    console.log(this.resultData);
    });
    console.log(document.getElementById('kjdsjkhjsd'+num));

    if(this.resultData.length!=0){
    document.getElementById('kjdsjkhjsd'+num).innerHTML='<a name="Ancla6'+num+'" id="a">Algunas</a> de las obras que tenemos registradas de <a href="'+this.resultData[0].autor.value+'" style="color: #e0e409;">"'+this.resultData[0].nombreautor.value+'"</a> son:<ul id="listillo1'+num+'"></ul>';
      //setTimeout(() => {
      if(this.resultData.length>=10){
        console.log('hola10');
      for(let i=0;i<10;i++){
        //if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
          document.getElementById('listillo1'+num).innerHTML=document.getElementById('listillo1'+num).innerHTML+'<li type="disc"> <a href="'+this.resultData[i].obra.value+'" style="color: #00ff5a;">'+this.resultData[i].titulo.value+'</a></li>';
        //}
        if(i==this.resultData.length-1 && !document.getElementById('kjdsjkhjsd'+num).innerText.includes('Algunas de las obras que tenemos')){
          document.getElementById('kjdsjkhjsd'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';

        }
      }
      if(document.getElementById('kjdsjkhjsd'+num).innerText.includes('Algunas de las obras que tenemos')){
        document.getElementById('kjdsjkhjsd'+num).innerHTML=document.getElementById('kjdsjkhjsd'+num).innerHTML+' Si desea ver más obras de este autor haga click <a href="'+this.resultData[0].autor.value+'" style="color: #e0e409;">aquí</a>.'
      }
    }else{
      console.log('holano10');
      document.getElementById('kjdsjkhjsd'+num).innerHTML='<a name="Ancla6'+num+'" id="a">Las</a> obras que tenemos registradas de <a href="'+this.resultData[0].autor.value+'" style="color: #e0e409;">"'+this.resultData[0].nombreautor.value+'"</a> son:<ul id="listillo1'+num+'"></ul>';
      for(let i=0;i<10;i++){
        //if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
          document.getElementById('listillo1'+num).innerHTML=document.getElementById('listillo1'+num).innerHTML+'<li type="disc"> <a href="'+this.resultData[i].obra.value+'" style="color: #00ff5a;">'+this.resultData[i].titulo.value+'</a></li>';
        //}
        if(i==this.resultData.length-1 && !document.getElementById('kjdsjkhjsd'+num).innerText.includes('Las obras que tenemos')){
          document.getElementById('kjdsjkhjsd'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';

        }
      }
    }
  }else{
      console.log('entra2');
      console.log(document.getElementById('kjdsjkhjsd'+num));
      console.log(document.getElementById('u'+num));
      //document.getElementById('u').innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
      document.getElementById('u'+num).id='kjdsjkhjsd'+num;
      console.log(document.getElementById('kjdsjkhjsd'+num));
    this.resultData=null;
    }
    if(document.getElementById('kjdsjkhjsd'+num)){
      setTimeout(() => {
        this.aversiva2(num)
       }, 5600);
    }
    document.getElementById('kjdsjkhjsd'+num).id='otro33'+num;
    this.apellid=false;
  }

  aversiva2(num){
    console.log('probando');
    console.log(this.nuevoaux);
    console.log(document.getElementById('otro33'+num));
    document.getElementById('otro33'+num).innerText='Se está realizando la búsqueda...';
    if(this.nuevoaux.length!=0){



      document.getElementById('otro33'+num).innerHTML='<a name="Ancla6'+num+'" id="a">Algunas</a> de las obras que tenemos registradas de <a href="'+this.resultData[0].autor.value+'" style="color: #e0e409;">"'+this.resultData[0].nombreautor.value+'"</a> son:<ul id="listillo1'+num+'"></ul>';
      //setTimeout(() => {
      if(this.resultData.length>=10){
        console.log('hola10');
      for(let i=0;i<10;i++){
        //if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
          document.getElementById('listillo1'+num).innerHTML=document.getElementById('listillo1'+num).innerHTML+'<li type="disc"> <a href="'+this.resultData[i].obra.value+'" style="color: #00ff5a;">'+this.resultData[i].titulo.value+'</a></li>';
        //}
        if(i==this.resultData.length-1 && !document.getElementById('otro33'+num).innerText.includes('Algunas de las obras que tenemos')){
          document.getElementById('otro33'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';

        }
      }

      if(document.getElementById('otro33'+num).innerText.includes('Algunas de las obras que tenemos')){
        document.getElementById('otro33'+num).innerHTML=document.getElementById('otro33'+num).innerHTML+' Si desea ver más obras de este autor haga click <a href="'+this.resultData[0].autor.value+'" style="color: #e0e409;">aquí</a>.'
      }
      setTimeout(() => {
        this.limpiarvariable()
       }, 5400);
    }else{
      console.log('holano10');
      document.getElementById('otro33'+num).innerHTML='<a name="Ancla6'+num+'" id="a">Las</a> obras que tenemos registradas de <a href="'+this.resultData[0].autor.value+'" style="color: #e0e409;">"'+this.resultData[0].nombreautor.value+'"</a> son:<ul id="listillo1'+num+'"></ul>';
      for(let i=0;i<this.resultData.length;i++){
        //if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
          document.getElementById('listillo1'+num).innerHTML=document.getElementById('listillo1'+num).innerHTML+'<li type="disc"> <a href="'+this.resultData[i].obra.value+'" style="color: #00ff5a;">'+this.resultData[i].titulo.value+'</a></li>';
        //}
        if(i==this.resultData.length-1 && !document.getElementById('otro33'+num).innerText.includes('Las obras que tenemos')){
          document.getElementById('otro33'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';

        }
      }
      console.log('Hola');
    this.resultData=null;
    (<HTMLInputElement> document.getElementById("inputtt")).disabled = false;
    (<HTMLInputElement> document.getElementById("inputtt")).placeholder = 'Escribe tu mensaje';
    //document.getElementById("inputtt").disabled = false;
    //document.getElementById("inputtt").placeholder='Escribe tu mensaje';
    document.getElementById("inputtt").style.cursor="auto";
    document.getElementById('durico').style.cursor="pointer";
    document.getElementById('inputtt').focus();
    }
    }else{

      document.getElementById('otro33'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
    }
    setTimeout(() => {
      this.abrirdenuevo6(num)
     }, 20);
    document.getElementById('otro33'+num).id='otro35'+num;
    console.log('holajajaja');
    console.log('Hola');
    this.resultData=null;
    (<HTMLInputElement> document.getElementById("inputtt")).disabled = false;
    (<HTMLInputElement> document.getElementById("inputtt")).placeholder = 'Escribe tu mensaje';
    //document.getElementById("inputtt").disabled = false;
    //document.getElementById("inputtt").placeholder='Escribe tu mensaje';
    document.getElementById("inputtt").style.cursor="auto";
    document.getElementById('durico').style.cursor="pointer";
    document.getElementById('inputtt').focus();

  }

  otracosita(buscar){
    console.log('entrar entra');
    this.sparqlQuery = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?autor ?nombreautor WHERE { ?autor rdfs:label ?nombreautor . FILTER regex ((?nombreautor), "'+buscar+'", "i") . }';

      this.fullUrl = '/bvmc-lod/repositories/data' + '?query=' + encodeURIComponent( this.sparqlQuery );
     console.log(this.fullUrl);


     let requestHeaders: any = { 'Accept': 'application/sparql-results+json','content-type': 'application/x-www-form-urlencoded; charset=UTF-8' };
     let responseLogin = fetch(this.fullUrl, {
      method: 'POST',
      headers: requestHeaders
    }).then( body => body.json() ).then( json => {
      var { head: { vars }, results } = json;
      this.resultData = results.bindings;
      this.nuevoaux = results.bindings;
    console.log(this.resultData);
    });
    console.log(document.getElementById('otro22'));

    if(this.resultData.length!=0){
      //console.log('entra1');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
          document.getElementById('otro22').innerHTML='He encontrado a <a href="'+this.resultData[i].autor.value+'" style="color: #00ff5a;">"'+this.resultData[i].nombreautor.value+'"</a>.';
        }
        if(i==this.resultData.length-1 && !document.getElementById('otro22').innerText.includes('He encontrado a')){
          document.getElementById('otro22').innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
        }
      }
    }else{
      console.log('entra2');
      console.log(document.getElementById('otro22'));
      console.log(document.getElementById('u'));
      //document.getElementById('u').innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
      document.getElementById('u').id='otro22';
      console.log(document.getElementById('otro22'));
    this.resultData=null;
    }
    if(document.getElementById('otro22')){
      setTimeout(() => {
        this.aversiva()
       }, 4600);
    }
    document.getElementById('otro22').id='otro33';
    this.apellid=false;
  }

  aversiva(){
    var num=0;
    if(localStorage.getItem('aver')){
      num=parseInt(localStorage.getItem('aver'));
      num=num+1;
      localStorage.removeItem('aver');
    }
    console.log(num);
    if(!localStorage.getItem('aver')){
      localStorage.setItem('aver',String(num));
    }
    document.getElementById('otro33').id='otro33'+num;
    console.log('probando');
    console.log(this.nuevoaux);
    console.log(document.getElementById('otro33'+num));
    document.getElementById('otro33'+num).innerText='Se está realizando la búsqueda...';
    if(this.nuevoaux.length!=0){

      for(let i=0;i<this.nuevoaux.length;i++){
        if(this.nuevoaux[i].autor.value.includes('http://data.cervantesvirtual.com/person/')){
          document.getElementById('otro33'+num).innerHTML='He encontrado a <a href="'+this.nuevoaux[i].autor.value+'" style="color: #00ff5a;">"'+this.nuevoaux[i].nombreautor.value+'"</a>.';
          setTimeout(() => {
            this.limpiarvariable()
           }, 5400);
        }
        if(i==this.nuevoaux.length-1 && !document.getElementById('otro22').innerText.includes('He encontrado a')){
          document.getElementById('otro33'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
        }
      }
    }else{

      document.getElementById('otro33'+num).innerText='No he encontrado ningún autor/a registrado en la biblioteca con ese nombre.';
    }
    document.getElementById('otro33'+num).id='otro35'+num;
    console.log('holajajaja');
    setTimeout(() => {
      this.limpiarvariable()
     }, 5400);

  }

  obrasya(a){
    //this.resultData='';
    (<HTMLInputElement> document.getElementById("inputtt")).disabled = true;
    (<HTMLInputElement> document.getElementById("inputtt")).placeholder = 'Espere a que finalice la búsqueda...';
    document.getElementById("inputtt").style.cursor="wait";
    document.getElementById('u').innerText='Se está realizando la búsqueda...';
    document.getElementById('durico').style.cursor="auto";
    //document.getElementById('u').innerText='Se está realizando la búsqueda...';
    let div = a.split("+");
    let buscar = div[2];
      this.sparqlQuery = 'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?autor ?nombreautor WHERE { ?autor rdfs:label ?nombreautor . FILTER regex ((?nombreautor), "'+buscar+'", "i") . }';

      this.fullUrl = '/bvmc-lod/repositories/data' + '?query=' + encodeURIComponent( this.sparqlQuery );
     console.log(this.fullUrl);


     let requestHeaders: any = { 'Accept': 'application/sparql-results+json','content-type': 'application/x-www-form-urlencoded; charset=UTF-8' };
     let responseLogin = fetch(this.fullUrl, {
      method: 'POST',
      headers: requestHeaders
    }).then( body => body.json() ).then( json => {
      var { head: { vars }, results } = json;
      this.resultData = results.bindings;
    console.log(this.resultData);
    });
    if(this.resultData.length!=0){
    for(let i=0;i<this.resultData.length;i++){
      if(this.resultData[i].autor.value.includes('http://data.cervantesvirtual.com/work/')){
        document.getElementById('u').innerHTML='He encontrado <a href="'+this.resultData[i].autor.value+'" style="color: #00ff5a;">"'+this.resultData[i].nombreautor.value+'"</a>';
      }
      if(i==this.resultData.length-1 && !document.getElementById('u').innerText.includes('He encontrado')){
        document.getElementById('u').innerText='No he encontrado ninguna obra en la biblioteca con ese nombre.';
      }
    }
  }else{
    document.getElementById('u').innerText='No he encontrado ninguna obra en la biblioteca con ese nombre.';
  }
      document.getElementById('u').id='otro';

      setTimeout(() => {
        this.limpiarvariable()
       }, 19400);

  }

  limpiarvariable(){
    console.log('Hola');
    this.resultData=null;
    (<HTMLInputElement> document.getElementById("inputtt")).disabled = false;
    (<HTMLInputElement> document.getElementById("inputtt")).placeholder = 'Escribe tu mensaje';
    document.getElementById("inputtt").style.cursor="auto";
    document.getElementById('durico').style.cursor="pointer";
    document.getElementById('inputtt').focus();
  }

  edicionesquijote(a){
    var num=0;
    if(localStorage.getItem('quijote')){
      num=parseInt(localStorage.getItem('quijote'));
      num=num+1;
      localStorage.removeItem('quijote');
    }
    console.log(num);
    if(!localStorage.getItem('quijote')){
      localStorage.setItem('quijote',String(num));
    }
    document.getElementById('u').id='u'+num;
      this.sparqlQuery = 'PREFIX rdam: <http://rdaregistry.info/Elements/m/> SELECT ?m ?title WHERE {	?m rdam:workManifested <http://data.cervantesvirtual.com/work/2904> .	?m rdam:title ?title . }';

      this.fullUrl = '/bvmc-lod/repositories/data' + '?query=' + encodeURIComponent( this.sparqlQuery );
     console.log(this.fullUrl);


     let requestHeaders: any = { 'Accept': 'application/sparql-results+json','content-type': 'application/x-www-form-urlencoded; charset=UTF-8' };
     let responseLogin = fetch(this.fullUrl, {
      method: 'POST',
      headers: requestHeaders
    }).then( body => body.json() ).then( json => {
      var { head: { vars }, results } = json;
      this.resultData88 = results.bindings;
    console.log(this.resultData88);
    });
    console.log(document.getElementById('u'+num));

    setTimeout(() => {
      document.getElementById('u'+num).innerHTML= '<a name="Ancla'+num+'" id="a">En</a> la biblioteca tenemos registradas '+this.resultData88.length+' ediciones del Quijote. Haga click sobre la que desee informarse: <ul id="lis'+num+'"></ul>';
      console.log(document.getElementById('lis'+num));
      setTimeout(() => {
      this.otroo(num)
    }, 1000);
    }, 1000);
      //console.log(document.getElementById('u'));
      //document.getElementById('u').innerHTML=document.getElementById('u').innerHTML+'</ul>';
      console.log(document.getElementById('u'+num));
      //document.getElementById('u').id='otro';

      //document.getElementById('general').style.display='flex';


  }

  otroo(num){

      for(let i=0;i<this.resultData88.length;i++){
        document.getElementById('lis'+num).innerHTML=document.getElementById('lis'+num).innerHTML+'<li type="disc"> <a href="'+this.resultData88[i].m.value+'" style="color: #00ff5a;">'+this.resultData88[i].title.value+'</a></li>';
      }
      setTimeout(() => {
        this.abrirdenuevo(num)
       }, 20);
  }

  pruebabvmc(a){
    console.log(a);


    if(a=='idiomasBiblio' || a=='ObrasEs' || a=='ObrasVal' || a=='ObrasGrieA' || a =='ObrasSerb' || a =='ObrasYid' || a =='ObrasGal' || a=='ObrasChec' || a=='ObrasAram' || a=='ObrasFin' || a=='ObrasIta' || a=='ObrasHeb' || a=='ObrasAmh' || a=='ObrasJav' || a=='ObrasCro' || a=='ObrasChi' || a=='ObrasLen' || a=='ObrasSud' || a=='ObrasLadin' || a=='ObrasMitico' || a=='ObrasKara' || a=='ObrasUgar' || a=='ObrasNoru' || a=='ObrasSiri' || a=='ObrasNah' || a=='ObrasLatin' || a=='ObrasHol' || a=='ObrasGall' || a=='ObrasSerbi' || a=='ObrasIngl' || a=='ObrasEsper' || a=='ObrasOjib' || a=='ObrasSuec' || a=='ObrasAlem' || a=='ObrasPortu' || a=='ObrasFranc'  || a=='ObrasGrieg' || a=='ObrasArabe' || a=='ObrasCatal' || a=='ObrasRus' || a=='ObrasSiriac' || a=='ObrasDan' || a=='ObrasLengSig' || a=='ObrasCreo' || a=='ObrasRuma' || a=='ObrasHungar' || a=='ObrasSignIn' || 'ObrasTaga' || a=='ObrasPola' || a=='ObrasJapos' || a=='ObrasMulti' || a=='ObrasEusk' || a=='ObrasLitu' || a=='ObrasPersa'){
      this.sparqlQuery = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX madsrdf: <http://www.loc.gov/mads/rdf/v1#> PREFIX dc: <http://purl.org/dc/elements/1.1/> SELECT ?language (COUNT(?manifestation) AS ?no_manifestations) ?code WHERE { 	?language rdf:type madsrdf:Language .	?language madsrdf:code ?code .	?manifestation dc:language ?language }GROUP BY ?language ?code';
    }
    //document.getElementById('u').innerText='';
    //this.getWikidata(a);
    this.fullUrl = '/bvmc-lod/repositories/data' + '?query=' + encodeURIComponent( this.sparqlQuery );
     console.log(this.fullUrl);


     let requestHeaders: any = { 'Accept': 'application/sparql-results+json','content-type': 'application/x-www-form-urlencoded; charset=UTF-8' };
     let responseLogin = fetch(this.fullUrl, {
      method: 'POST',
      headers: requestHeaders
    }).then( body => body.json() ).then( json => {
      var { head: { vars }, results } = json;
      this.resultData = results.bindings;
    console.log(this.resultData);
    });


    if(a=='idiomasBiblio'){
      document.getElementById('u').innerText='La Biblioteca Virtual Miguel de Cervantes posee obras en '+this.resultData.length+' idiomas diferentes. Dígame el idioma del que desea que le muestre obras';
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasEs'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='es'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en español haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasVal'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].language.value=='http://data.cervantesvirtual.com/language/'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en valenciano haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasGrieA'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='grc'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en griego antiguo haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasSerb'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='sh'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en serbocroata haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasYid'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='yi'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en yidish haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasGal'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='cy'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en galés haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasChec'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='cs'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en checo haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasAram'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='arc'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en arameo haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasFin'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='fi'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en finés haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasIta'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='it'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en italiano haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasHeb'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='he'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en hebreo haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasAmh'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='am'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en amhárico haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasJav'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='jv'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en javanés haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasCro'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='hr'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en croata haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasChi'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='zh'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en chino haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasLen'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='cai'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en lenguas índias de américa central haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasSud'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='sai'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en lenguas índias de sudamérica haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasLadin'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='lad'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en ladino haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasMitico'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='sem'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en semítico haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasKara'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='kaa'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en kara-Kalpak haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasUgar'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='uga'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en ugaritic haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasNoru'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='no'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en noruego haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasSiri'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='syr'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en sirio moderno haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasNah'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='nah'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en nahua haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasLatin'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='la'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en latín haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasHol'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='nl'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en holandés haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasGall'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='gl'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en gallego haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasSerbi'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='sr'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en serbio haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasIngl'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='en'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en inglés haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasEsper'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='eo'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en esperanto haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasOjib'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='oj'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en ojibwa haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasSuec'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='sw'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en sueco haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasAlem'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='de'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en alemán haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasPortu'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='pt'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en portugués haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasFranc'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='fr'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en francés haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasGrieg'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='el'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en griego haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasArabe'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='ar'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en árabe haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasCatal'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='ca'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en catalán haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasRus'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='ru'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en ruso haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasSiriac'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='syc'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en siriaco haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasDan'){
      //console.log('holaa');
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='da'){
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en danés haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasLengSig'){

      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='LSE'){
          console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en lengua de signos española haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasCreo'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='bi'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en creole haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasRuma'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='ro'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en rumano haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasHungar'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='hu'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en húngaro haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasSignIn'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='SSI'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en sistema de signos internacional haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasTaga'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='tl'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en tagalo haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasPola'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='pl'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en polaco haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasJapos'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='ja'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en japonés haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasMulti'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='mul'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en múltiples lenguajes haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasEusk'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='eu'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en euskera haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasLitu'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='li'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en lituano haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasPersa'){
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].code.value=='fa'){
          //console.log('holaa');
          document.getElementById('u').innerHTML='Para consultar todas las obras que tenemos en persa haga click <a href="'+this.resultData[i].language.value+'" style="color: #00ff5a;">aquí</a>';
        }
      }
      document.getElementById('u').id='otro';
    }
  }

  abrirdenuevo(num){
    (<HTMLInputElement> document.getElementById("averq7")).href='#Ancla'+num;
    document.getElementById('anclado').click();
    document.getElementById('inputtt').focus();
  }

  abrirdenuevo2(num){
    (<HTMLInputElement> document.getElementById("averq2")).href='#Ancla2'+num;
    document.getElementById('anclado2').click();
    document.getElementById('inputtt').focus();
  }

  abrirdenuevo3(num){
    (<HTMLInputElement> document.getElementById("averq1")).href='#Ancla3'+num;
    document.getElementById('anclado3').click();
    document.getElementById('inputtt').focus();
  }

  abrirdenuevo4(num){
    (<HTMLInputElement> document.getElementById("averq")).href='#Ancla5'+num;
    document.getElementById('anclado5').click();
    document.getElementById('inputtt').focus();
  }

  abrirdenuevo6(num){
    (<HTMLInputElement> document.getElementById("averq6")).href='#Ancla6'+num;
    document.getElementById('anclado6').click();
    document.getElementById('inputtt').focus();
  }
  abrirdenuevo8(num){
    (<HTMLInputElement> document.getElementById("averq8")).href='#Ancla444'+num;
    document.getElementById('anclado8').click();
    document.getElementById('inputtt').focus();
  }
  prueba(a){
    console.log(a);
    if(a.includes('¿A qué idioma quieres que lo traduzca?')){
      var num=0;
    if(localStorage.getItem('hum')){
      num=parseInt(localStorage.getItem('hum'));
      num=num+1;
      localStorage.removeItem('hum');
    }
    console.log(num);
    if(!localStorage.getItem('hum')){
      localStorage.setItem('hum',String(num));
    }
      //let hum=document.getElementById('u').innerText;
      document.getElementById('u').innerHTML='<a name="Ancla444'+num+'" id="a"></a>'+a;
      document.getElementById('u').id='uuu'+num;
      setTimeout(() => {
        this.abrirdenuevo8(num)
       }, 20);
    }
    if(a.includes('+ObrasPorAutor')){
      this.obrasdeautor(a);
    }
    if(a=='DameLasRedecitas'){
      document.getElementById('u').innerHTML='¡Por supuesto! La BVMC tiene cuenta de <a href="http://twitter.com/fbvmc" style="color: #00ff5a;">Twitter</a>, página de <a href="http://www.facebook.com/pages/Biblioteca-Virtual-Miguel-de-Cervantes/115005045196224" style="color: #00ff5a;">Facebook</a> y canal de <a href="http://www.youtube.com/cervantesvirtual" style="color: #00ff5a;">YouTube</a>. Además puedes pedirme a mí directamente sus últimos tweets o vídeos y te los enseñaré encantada';
      document.getElementById('u').id='jtjytjytyt';
    }
    if(a=='+TwitterATope'){
      this.twitterejemplo();
    }
    if(a.includes('+BuscarInternet')){
      this.googleejemplo(a);
    }
    if(a=='VídeosBibliotecaYa'){
      this.youtubeprueba();
    }
    if(a=='NoticiasDarYa'){
      this.noticiasprueba();
    }
    if(a.includes('+AutorBuscar')){
      this.buscarAutorcito(a);
    }
    if(a.includes('+EstoEsUnaTraduccion')){
      this.pruebatraductor(a);
    }
    if(a=='+aries' || a=='+acuario' || a=='+tauro' || a=='+geminis' || a=='+géminis' || a=='+cáncer' || a=='+cancer' || a=='+leo' || a=='+virgo' || a=='+libra' || a=='+escorpión' || a=='+escorpion' || a=='+escorpio' || a=='+sagitario' || a=='+capricornio' || a=='+piscis'){
      this.pruebahoroscopo(a);
    }
    if(a=='PadresMiguel'){
      console.log(a);
      console.log(document.getElementById('u'));
      this.sparqlQuery = 'SELECT ?item ?itemLabel WHERE  { ?item wdt:P40 wd:Q5682. SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],es". }}';
      document.getElementById('u').innerText='';
      this.getWikidata(a);
      console.log(this.sparqlQuery);

    }
    if(a=='ObrasMiguel'){
      console.log(document.getElementById('u'));
      this.sparqlQuery = 'SELECT ?item ?itemLabel  WHERE { ?item wdt:P50 wd:Q5682. SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],es". } }';
      document.getElementById('u').innerText='';
      this.getWikidata(a);
      console.log(this.sparqlQuery);

    }

    if(a=='TiempoYaHoy'){
      this.getTiempoHoy();
    }

    if(a=='TiempoYaMañana'){
      this.getTiempoManana();
    }

    if( a=='idiomasBiblio' || a=='ObrasEs' || a=='ObrasVal' || a=='ObrasGrieA' || a =='ObrasSerb' || a =='ObrasYid' || a =='ObrasGal' || a=='ObrasChec' || a=='ObrasAram' || a=='ObrasFin' || a=='ObrasIta' || a=='ObrasHeb' || a=='ObrasAmh' || a=='ObrasJav' || a=='ObrasCro' || a=='ObrasChi' || a=='ObrasLen' || a=='ObrasSud' || a=='ObrasLadin' || a=='ObrasMitico' || a=='ObrasKara' || a=='ObrasUgar' || a=='ObrasNoru' || a=='ObrasSiri' || a=='ObrasNah' || a=='ObrasLatin' || a=='ObrasHol' || a=='ObrasGall' || a=='ObrasSerbi' || a=='ObrasIngl' || a=='ObrasEsper' || a=='ObrasOjib' || a=='ObrasSuec' || a=='ObrasAlem' || a=='ObrasPortu' || a=='ObrasFranc' || a=='ObrasGrieg' || a=='ObrasArabe' || a=='ObrasCatal' || a=='ObrasRus' || a=='ObrasSiriac' || a=='ObrasDan' || a=='ObrasLengSig' || a=='ObrasCreo' || a=='ObrasRuma' || a=='ObrasHungar' || a=='ObrasSignIn' || 'ObrasTaga' || a=='ObrasPola' || a=='ObrasJapos' || a=='ObrasMulti' || a=='ObrasEusk' || a=='ObrasLitu' || a=='ObrasPersa'){
      this.pruebabvmc(a);
    }

    if(a.includes('+buscarobrita')){
      this.obrasya(a);
    }

    if(a=='EdicionesQuijote'){
      this.edicionesquijote(a);
    }

    if(a=='ocupacionMiguel' || a=='movimientoMiguel' || 'hijaMiguel' || 'generosMiguel' || 'causamuerteMiguel' || 'religionMiguel' || 'enterradoMiguel' || 'idiomasMiguel' || 'mujerMiguel'){
      this.sparqlQuery = 'PREFIX entity: <http://www.wikidata.org/entity/> SELECT ?propUrl ?propLabel ?valUrl ?valLabel ?picture WHERE {	hint:Query hint:optimizer "None" .	{	BIND(entity:Q5682 AS ?valUrl) .		BIND("N/A" AS ?propUrl ) .		BIND("identity"@en AS ?propLabel ) .	}	UNION	{	entity:Q5682 ?propUrl ?valUrl .		?property ?ref ?propUrl .		?property rdf:type wikibase:Property .		?property rdfs:label ?propLabel	}	  	?valUrl rdfs:label ?valLabel	FILTER (LANG(?valLabel) = "es") .	OPTIONAL{ ?valUrl wdt:P18 ?picture .} FILTER (lang(?propLabel) = "es" ) } ORDER BY ?propUrl ?valUrl LIMIT 200';
      document.getElementById('u').innerText='';
      this.getWikidata(a);
    }

    if(a=='NacimientoMiguel'){
      this.sparqlQuery = 'SELECT ?item ?itemLabel ?placeLabel ?date WHERE {  ?item wdt:P31 wd:Q5 .  ?item wdt:P735 wd:Q15620295. ?item wdt:P734 wd:Q37222317. ?item wdt:P19 ?place. ?item wdt:P569 ?date.  SERVICE wikibase:label { bd:serviceParam wikibase:language "es". } }';
      document.getElementById('u').innerText='';
      this.getWikidata(a);
    }
    if(a=='MurioMiguel'){
      this.sparqlQuery = 'SELECT ?item ?itemLabel ?placeLabel ?date WHERE { ?item wdt:P31 wd:Q5 .  ?item wdt:P735 wd:Q15620295. ?item wdt:P734 wd:Q37222317. ?item wdt:P20 ?place. ?item wdt:P570 ?date. SERVICE wikibase:label { bd:serviceParam wikibase:language "es". } }';
      document.getElementById('u').innerText='';
      this.getWikidata(a);
    }
    if(a=='fotoMiguel'){
      this.sparqlQuery = 'SELECT ?item ?itemLabel ?image WHERE { ?item wdt:P31 wd:Q5 .  ?item wdt:P735 wd:Q15620295. ?item wdt:P734 wd:Q37222317. ?item wdt:P18 ?image. SERVICE wikibase:label { bd:serviceParam wikibase:language "es". } }';
      document.getElementById('u').innerText='';
      this.getWikidata(a);
    }
  }

  getWikidata(a){

    this.fullUrl = this.endpointUrl + '?query=' + encodeURIComponent( this.sparqlQuery );
     console.log(this.fullUrl);
     let requestHeaders: any = { 'Accept': 'application/sparql-results+json' };
     let responseLogin = fetch(this.fullUrl, {
      method: 'POST',
      headers: requestHeaders
    }).then( body => body.json() ).then( json => {
      var { head: { vars }, results } = json;
      this.resultData = results.bindings;
    console.log(this.resultData);
    if(a=='PadresMiguel'){
      document.getElementById('u').innerText='Los padres de Miguel de Cervantes fueron '+this.resultData[0].itemLabel.value+' y '+this.resultData[1].itemLabel.value;
      document.getElementById('u').id='otro';
    }
    if(a=='movimientoMiguel'){
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='movimiento'){
          document.getElementById('u').innerText='Miguel de Cervantes perteneció al movimiento literario conocido como '+this.resultData[i].valLabel.value;
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='hijaMiguel'){
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='hijo o hija'){
          document.getElementById('u').innerText='La hija de Miguel de Cervantes se llamaba '+this.resultData[i].valLabel.value;
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='enterradoMiguel'){
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='lugar de sepultura'){
          document.getElementById('u').innerText='Miguel de Cervantes fue sepultado en el '+this.resultData[i].valLabel.value;
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='idiomasMiguel'){
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='lengua materna'){
          document.getElementById('u').innerText='La lengua materna de Miguel de Cervantes fue el '+this.resultData[i].valLabel.value+'. No aprendió ningún otro idioma durante su vida. Por ello sus obras también fueron originalmente escritas en este mismo idioma.';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='religionMiguel'){
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='religión'){
          document.getElementById('u').innerText='Miguel de Cervantes creía en la '+this.resultData[i].valLabel.value;
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='mujerMiguel'){
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='cónyuge'){
          document.getElementById('u').innerText='La esposa de Miguel de Cervantes fue '+this.resultData[i].valLabel.value+'. En honor a ella me pusieron Catalina de nombre.';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='causamuerteMiguel'){
      document.getElementById('u').innerText='Miguel de Cervantes murió por';
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='circunstancias de la muerte'){
          document.getElementById('u').innerText=document.getElementById('u').innerText+' '+this.resultData[i].valLabel.value+'.';
        }
      }
      document.getElementById('u').innerText=document.getElementById('u').innerText+' Más concretamente debido a una';
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='causa de muerte'){
          document.getElementById('u').innerText=document.getElementById('u').innerText+' '+this.resultData[i].valLabel.value+'.';
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='generosMiguel'){
      document.getElementById('u').innerText='Las obras de Miguel de Cervantes pertenecen a los géneros';
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='género'){
          if(this.resultData[i+1].propLabel.value!='género'){
            document.getElementById('u').innerText=document.getElementById('u').innerText+' y '+this.resultData[i].valLabel.value;
          }else{
            if(this.resultData[i+2].propLabel.value!='género'){
              document.getElementById('u').innerText=document.getElementById('u').innerText+' '+this.resultData[i].valLabel.value;
            }else{
               document.getElementById('u').innerText=document.getElementById('u').innerText+' '+this.resultData[i].valLabel.value+',';
            }
          }
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='ocupacionMiguel'){
      document.getElementById('u').innerText='Miguel de Cervantes era ';
      //let valprev='kjsdf';
      for(let i=0; i<this.resultData.length; i++){
        if(this.resultData[i].propLabel.value=='ocupación'){
          if(this.resultData[i].valLabel.value!=this.resultData[i-1].valLabel.value){
            //console.log(valprev);
            //valprev=this.resultData[i].valLabel.value;
            if(this.resultData[i+1].propLabel.value!='ocupación'){
              document.getElementById('u').innerText=document.getElementById('u').innerText+' y '+this.resultData[i].valLabel.value;
            }else{
              if(this.resultData[i+2].propLabel.value!='ocupación'){
                document.getElementById('u').innerText=document.getElementById('u').innerText+' '+this.resultData[i].valLabel.value;
              }else{
                document.getElementById('u').innerText=document.getElementById('u').innerText+' '+this.resultData[i].valLabel.value+', ';
              }

            }
          }
        }
      }
      document.getElementById('u').id='otro';
    }
    if(a=='NacimientoMiguel'){
      let divide = this.resultData[0].date.value.split("T");
      let div = divide[0].split("-");
      console.log(div[0]);
      document.getElementById('u').innerText='Miguel de Cervantes nació el 29 de septiembre de '+div[0]+' en '+this.resultData[0].placeLabel.value;
      document.getElementById('u').id='otro';
    }
    if(a=='fotoMiguel'){
      document.getElementById('u').innerHTML='Aquí tienes: <a href="'+this.resultData[0].image.value+'"><image src="'+this.resultData[0].image.value+'" style="width:100%;height:100%;"></a>';
      console.log(document.getElementById('u'));
      document.getElementById('u').id='otro';
    }
    if(a=='MurioMiguel'){

      let divide = this.resultData[0].date.value.split("T");
      let div = divide[0].split("-");
      console.log(div[0]);
      let mes;
    if(div[1]==='01'){
      mes='enero';
    }
    if(div[1]==='02'){
      mes='febrero';
    }
    if(div[1]==='03'){
      mes='marzo';
    }
    if(div[1]==='04'){
      mes='abril';
    }
    if(div[1]==='05'){
      mes='mayo';
    }
    if(div[1]==='06'){
      mes='junio';
    }
    if(div[1]==='07'){
      mes='julio';
    }
    if(div[1]==='08'){
      mes='agosto';
    }
    if(div[1]==='09'){
      mes='septiembre';
    }
    if(div[1]==='10'){
      mes='octubre';
    }
    if(div[1]==='11'){
      mes='noviembre';
    }
    if(div[1]==='12'){
      mes='diciembre';
    }
      document.getElementById('u').innerText='Miguel de Cervantes murió el '+div[2]+' de '+mes+' de '+div[0]+' en '+this.resultData[0].placeLabel.value;
      document.getElementById('u').id='otro';
    }
    if(a=='ObrasMiguel'){

      var cont = 0;
      for(let i=0;i<this.resultData.length;i++){
        if(this.resultData[i].itemLabel.value.indexOf('Q65') == -1){
          cont++;
        }
      }
      console.log(document.getElementById('u').innerHTML);
      document.getElementById('u').innerText='Tengo registradas '+cont+ ' obras de Miguel de Cervantes. Aquí te muestro aleatoriamente 7 de ellas:';
      console.log(document.getElementById('u').innerHTML);
      var obras = '';
      for(let i=0;i<7;i++){
        let num = this.getRandomInt(0, this.resultData.length);
        if(this.resultData[num].itemLabel.value.indexOf('Q65') != -1){
          console.log(this.resultData[num].itemLabel.value.indexOf('Q65'));
          console.log(this.resultData[num].itemLabel.value);
        i--;
      }else{
        if(i!=6 ){
          if(i!=5){
          obras=obras+this.resultData[num].itemLabel.value+', ';
          }else{
            obras=obras+this.resultData[num].itemLabel.value;
          }
        }else{

            obras=obras+' y '+this.resultData[num].itemLabel.value;

        }
      }
      }
      document.getElementById('u').innerText=document.getElementById('u').innerText+' '+obras;

      document.getElementById('u').id='otro';
    }
      //showResult();
  } );

  }

  getTiempo(){

    this.http.get('https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWJsb2d1aWphcnJvOTZAZ21haWwuY29tIiwianRpIjoiNDllYmI5YWQtZjJjNy00NjVmLThiMjItZTc2MDk5ZGZlYjUzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NzEwNDY4MTgsInVzZXJJZCI6IjQ5ZWJiOWFkLWYyYzctNDY1Zi04YjIyLWU3NjA5OWRmZWI1MyIsInJvbGUiOiIifQ.hj9XhrR9R0275CZvmJYz4MiLuQU8HUe5AVJSwbMjeiU').subscribe(data => {
      console.log(data);
      this.resultData=data;
      let url = this.resultData.datos;
      let a = this.http.get(url).subscribe(data => {
        console.log(data);
         });
    });


  }

  getTiempoHoy(){

    this.http.get('https://opendata.aemet.es/opendata/api/prediccion/nacional/hoy/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWJsb2d1aWphcnJvOTZAZ21haWwuY29tIiwianRpIjoiNDllYmI5YWQtZjJjNy00NjVmLThiMjItZTc2MDk5ZGZlYjUzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NzEwNDY4MTgsInVzZXJJZCI6IjQ5ZWJiOWFkLWYyYzctNDY1Zi04YjIyLWU3NjA5OWRmZWI1MyIsInJvbGUiOiIifQ.hj9XhrR9R0275CZvmJYz4MiLuQU8HUe5AVJSwbMjeiU').subscribe(data => {
      console.log(data);
      this.resultData=data;
      let url = this.resultData.datos;
      console.log(document.getElementById('u'));
      document.getElementById('u').innerHTML='La predicción del tiempo general de españa para hoy la puede consultar haciendo clic <a href='+url+' style="color: #00ff5a;">aquí</a>';
      console.log(document.getElementById('u'));
      //document.getElementById('u').innerText='La predicción del tiempo general de españa para hoy la puede consultar en el siguiente enlace: '+url;
      document.getElementById('u').id='otro';
    });


  }

  getTiempoManana(){

    this.http.get('https://opendata.aemet.es/opendata/api/prediccion/nacional/manana/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWJsb2d1aWphcnJvOTZAZ21haWwuY29tIiwianRpIjoiNDllYmI5YWQtZjJjNy00NjVmLThiMjItZTc2MDk5ZGZlYjUzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NzEwNDY4MTgsInVzZXJJZCI6IjQ5ZWJiOWFkLWYyYzctNDY1Zi04YjIyLWU3NjA5OWRmZWI1MyIsInJvbGUiOiIifQ.hj9XhrR9R0275CZvmJYz4MiLuQU8HUe5AVJSwbMjeiU').subscribe(data => {
      console.log(data);
      this.resultData=data;
      let url = this.resultData.datos;
      console.log(document.getElementById('u'));
      document.getElementById('u').innerHTML='La predicción del tiempo general de españa para mañana la puede consultar haciendo clic <a href='+url+' style="color: #00ff5a;">aquí</a>';
      console.log(document.getElementById('u'));
      //document.getElementById('u').innerText='La predicción del tiempo general de españa para hoy la puede consultar en el siguiente enlace: '+url;
      document.getElementById('u').id='otro';
    });


  }

  private extractData(res: Response) {
    let body = res;
    console.log(body);
    return body || { };
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ngDoCheck(){
    if(document.getElementById('u')!=null){
      document.getElementById('u').click();
    }

  }
  /*res(a){
    this.token = this.userService.getToken();
    this.cont = 0;
    this.status = 'loading';
    //console.log(a);
    let divide = a.split(",");
    let hora = divide[1].split(" ");
    let fecha = divide[2].split(" ");
    let rest = divide[3];
    let numpers = divide[4];
    let mes;
    if(fecha[1]==='Jan'){
      mes='01';
    }
    if(fecha[1]==='Feb'){
      mes='02';
    }
    if(fecha[1]==='Mar'){
      mes='03';
    }
    if(fecha[1]==='Apr'){
      mes='04';
    }
    if(fecha[1]==='May'){
      mes='05';
    }
    if(fecha[1]==='Jun'){
      mes='06';
    }
    if(fecha[1]==='Jul'){
      mes='07';
    }
    if(fecha[1]==='Aug'){
      mes='08';
    }
    if(fecha[1]==='Sep'){
      mes='09';
    }
    if(fecha[1]==='Oct'){
      mes='10';
    }
    if(fecha[1]==='Nov'){
      mes='11';
    }
    if(fecha[1]==='Dec'){
      mes='12';
    }
    //console.log("Hora: "+hora[4]);
    let solohora = hora[4].split(':');
    let horafinal = parseInt(solohora[0])+2;
    let minutosfinal = parseInt(solohora[1]);
    //console.log(horafinal);
    //console.log("Fecha: "+fecha[2]+"-"+mes+"-"+fecha[3]);
    //console.log("Restaurante: "+rest);
    //console.log("Num. Personas: "+numpers);
    //return this.fecha = bien[2] + '-' + bien[1] + '-' + bien[0];
    let sal=false;
    //let preprest = rest.split('');

    let re = / /gi;
//var str = "Apples are round, and apples are juicy.";
let preprest = rest.replace(re, "%20");
//console.log(preprest);

    this.restaurantesService.getBuscRest(preprest).subscribe(response=> {
      //console.log(response);
        if(response.data!==undefined){


        //console.log(response.data.id);
          this.del = response.data.id;
          if(this.del!==undefined){
            this.book = {
              id: null,
              personas: null,
              user_id: null,
              restaurant_id: null,
              restaurante_id: null,
              hora: '',
              creado: ''

            };
            //this.personas = data;
                            this.book.personas = parseInt(numpers);
                            //console.log(this.del);
                            this.book.restaurant_id = this.del;
                            //console.log(this.errorParam);
                            //if (!this.errorParam) {
                              this.book.hora = fecha[3]+"-"+mes+"-"+fecha[2] + ' ' + horafinal+ ':' + minutosfinal+ ':' + '00';
                              //console.log(fecha + ' ' + hora);
                              //console.log(this.book);
                              this.bookingService.newBooking(this.token, this.book).subscribe(response=> {
                                //console.log(response);
                                //console.log("Bien");
                                this.imgSrc = "/assets/images/ExitoResChat.PNG";
                                this.router.navigate(['perfil/reservas']);
                              }, error =>{
                                this.imgSrc = "/assets/images/FallaResChatInic.png";
                                this.bsModalRef = this.modalService.show(LoginComponent, {
                                  class: 'modal-dialog-centered'
                                });
                                this.bsModalRef.content.closeBtnName = 'Close';
                                //console.log(error);
                              });
                              this.status = 'done';
          }
          sal=true;
        }else{
          this.imgSrc='/assets/images/FallaResChat2.PNG';
        }

    }, error =>{
      this.status = 'errpr';
      if(sal===false){
        this.imgSrc='/assets/images/FallaResChat2.PNG';
      }
    });
  }*/


}
