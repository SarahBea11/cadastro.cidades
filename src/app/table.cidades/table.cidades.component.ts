import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table.cidades',
  templateUrl: './table.cidades.component.html',
  styleUrl: './table.cidades.component.css'
})
export class TableCidadesComponent {
  cidades: Cidade[] =[
    "id"         : 1,
    "name"       : "Xique-Xique",
    "state"      : "Bahia",
    "population" : 3999,


  ]

}


