import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Giulia Potenza';
  imageUrl = 'http://picsum.photos/300/300';
  imageDesc = 'essa é uma imagem';
  buttonText = 'Clique aqui';
  textRed = true;
  textRed2 = 'text-red' // nome da class
  bgColor = 'green';
  fontSize = '20px';
  widthImg = 600;
  textInput ='';
  number = 0;
  destroy = false;

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text
  }

  // clicou() {
  //   this.text = 'Rafaela Dias'
  //   console.log('clicou aqui')
  // }

  clica(value: any) {
    console.log('clicou aqui', value)
  }

  clicouNoFilho(text: any) {
    console.log(text)
  }

  incremento(){
    this.number++
  }

  destroiComponente(){
    this.destroy = true
  }
}
