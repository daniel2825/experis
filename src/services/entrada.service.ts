import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { element } from 'protractor';
import {Observable, throwError} from "rxjs";


@Injectable({
    providedIn:'root'
})

export class EntradaService {
    constructor(private httpClient:HttpClient){}
    public modeloDevuelta;
    private ids: Array<Number> = null; 
   

    public enviarOperacionesArray(arrayDeNumeros){
        this.ids = arrayDeNumeros; 

        return this.httpClient.post('http://localhost:3000/operaNumeros', this.ids,
         {
            headers: new HttpHeaders({
                  'Content-type' : 'application/json'
                }),
                responseType:'json',
           
            }
            ).pipe(map(  data  => {
                this.modeloDevuelta = data;
                console.log("POST Request is successfull ", this.modeloDevuelta);
                },
                
            ),
            catchError(err => {
                if(err.status == "422"){
                    alert("Error de tipo de datos en la matriz error 422");
                console.error(err.message);
                return throwError("invalid_data_format");
                 } 

                 if(err.status == "500"){
                    alert("Internal server error");
                console.error(err.message);
                return throwError("Error thrown from catchError");
                 } 

            })
      
        )
    }

    public sendEntradas(obj){
        return this.httpClient.post('http://localhost:3000/controller', obj,
         {
            headers: new HttpHeaders({
                  'Content-type' : 'application/json'
                }),
                responseType:'json',
           
            }
            ).pipe(map(  data  => {
                    this.modeloDevuelta = data;
                console.log("POST Request is successfull ", this.modeloDevuelta);
                },
                error  => {
                
                console.log("Error", error);
                
                }
         
            ) 
        )
    }
/*
    public sendEntrada(obj){
        console.log(obj);
        
        return this.httpClient.post('http://localhost:3000/controller', obj,
        {
            headers: new HttpHeaders({
                  'Content-type' : 'application/json'
                }),
                responseType:'json',
           
            })
            .subscribe(
            data  => {
                obj = data;
                this.modeloDevuelta = obj;
                AppComponent.prototype.myModel = obj;
            console.log("POST Request is successful ", AppComponent.prototype.myModel.entrada);
            },
            error  => {
            
            console.log("Error", error);
            
            }
            
        );
    }*/

}