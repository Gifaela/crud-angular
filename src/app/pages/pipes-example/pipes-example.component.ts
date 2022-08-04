import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = "hello World";
  texto = "";
  date = new Date();
  pessoa = {
    nome: 'Giulia',
    idade: '24',
    profissao: 'dev'
  }

  nomes = ['Giulia'];
  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    //    uppercase - deixa tudo maiúsculo
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.number = 123456789;
  }

  add(text: string){
    this.nomes.push(text);
  }
}
