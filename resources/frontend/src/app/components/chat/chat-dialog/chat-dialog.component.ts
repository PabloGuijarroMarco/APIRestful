import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/internal/operators/scan';
import { map, catchError, tap } from 'rxjs/operators';
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
  //bsModalRef: BsModalRef;
  constructor(
    //private modalService: BsModalService,
    protected http: HttpClient,
    public chat: ChatService,
    //private bookingService: BookingsService,
    //private router: Router,
    //private restaurantesService: RestaurantesService,
    //private userService: UsuariosService
  ) {

  }

  ngOnInit() {
    //this.getTiempo();
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
    this.chat.converse(this.formValue);
    this.formValue = '';
    this.cont = this.cont+1;
    //console.log(this.cont);
    if(this.cont===4){
      this.imgSrc = "/assets/images/ReservarChat2.PNG";
    }
    //console.log(this.messages.source.source);
  }

  prueba(a){
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

    if(a=='ocupacionMiguel' || a=='movimientoMiguel'){
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
      console.log(data.datos);
      let url = data.datos;
      let a = this.http.get(url).subscribe(data => {
        console.log(data);
         });
    });


  }

  getTiempoHoy(){

    this.http.get('https://opendata.aemet.es/opendata/api/prediccion/nacional/hoy/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWJsb2d1aWphcnJvOTZAZ21haWwuY29tIiwianRpIjoiNDllYmI5YWQtZjJjNy00NjVmLThiMjItZTc2MDk5ZGZlYjUzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NzEwNDY4MTgsInVzZXJJZCI6IjQ5ZWJiOWFkLWYyYzctNDY1Zi04YjIyLWU3NjA5OWRmZWI1MyIsInJvbGUiOiIifQ.hj9XhrR9R0275CZvmJYz4MiLuQU8HUe5AVJSwbMjeiU').subscribe(data => {
      console.log(data.datos);
      let url = data.datos;
      console.log(document.getElementById('u'));
      document.getElementById('u').innerHTML='La predicción del tiempo general de españa para hoy la puede consultar haciendo clic <a href='+url+' style="color: #00ff5a;">aquí</a>';
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
