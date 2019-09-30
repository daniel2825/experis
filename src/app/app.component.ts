import { Component, OnInit } from '@angular/core';
import { MyModel } from './MyModel';
import { EntradaService } from '../services/entrada.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private entradaService; 
  
  ngOnInit() {
    this.ids = [21,25,45,"Probar error 422 paso siguiente borrar elementos y agregar nuevos"]; 
  }

  constructor(EntradaService :EntradaService){ 
    this.entradaService = EntradaService;
  }

  title = 'projectoExperis';
   cambia : string;
   suma :  number;
   resta :number;
   multiplicacion : number;
   division : number;
   ids: Array<Number>; 
  
    myModel : MyModel = {
    entrada: '',
    segunda: ''
  };


  agregarElemento(elemento){
    this.ids.push(elemento);
    this.myModel.entrada = "";
  }

  borrarelementos(){
    this.ids = [];
  }


  enviar()
  {
    //if(this.entradaService.validarInformacionCorrecta(this.ids) == true){
      this.entradaService.enviarOperacionesArray(this.ids).subscribe(data => {
        this.suma = this.entradaService.modeloDevuelta.sumaelemento;
        this.resta = this.entradaService.modeloDevuelta.restaElemento;
        this.multiplicacion = this.entradaService.modeloDevuelta.multiplicacionElementos;
        this.division = this.entradaService.modeloDevuelta.divisionElementos;
        console.log("devuelta si funciona "+this.entradaService.modeloDevuelta.sumaelemento); 
        console.log("devuelta si funciona "+this.entradaService.modeloDevuelta.restaElemento);
        console.log("devuelta si funciona "+this.entradaService.modeloDevuelta.multiplicacionElementos);
        console.log("devuelta si funciona "+this.entradaService.modeloDevuelta.divisionElementos);  
      });
  //  }
  /*  
    this.entradaService.sendEntradas(this.myModel).subscribe(data => {
      this.myModel = this.entradaService.modeloDevuelta;
      console.log(this.myModel);
      console.log(data)
  });*/
    //this.entradaService.sendEntrada(this.myModel);
    /*
    alert("ningun retorin");
    this.myModel = this.entradaService.modeloDevuelta;
    alert(this.myModel.entrada);*/
 

  }
 
}
