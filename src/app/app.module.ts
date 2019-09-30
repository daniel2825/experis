import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; /*es importante que se llame igual */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';//** es importante importar para hacer binding */
import { EntradaService } from '../services/entrada.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //** importante para no fallar */
    HttpClientModule,
  ],
  providers: [ EntradaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
