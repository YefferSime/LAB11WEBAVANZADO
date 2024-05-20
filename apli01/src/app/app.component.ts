import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Interpolación';
  valor = "Yeffer Kennedy Sime Huarancca"
  tipo="password"
  img="assets/angular.png"
  enlace="https://elcomercio.pe/"
  clase01="azul"
  clase02="rojo"
  nombre = ''

  onClick(){
    alert('Utilizando eventos')
  }


}
