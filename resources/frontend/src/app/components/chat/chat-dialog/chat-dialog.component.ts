import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/internal/operators/scan';
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
  //bsModalRef: BsModalRef;
  constructor(
    //private modalService: BsModalService,
    public chat: ChatService,
    //private bookingService: BookingsService,
    //private router: Router,
    //private restaurantesService: RestaurantesService,
    //private userService: UsuariosService
  ) {

  }

  ngOnInit() {
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
