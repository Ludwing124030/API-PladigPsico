import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIServiceService } from 'src/app/apiservice.service';
import { DataParaActualizarService } from '../data-para-actualizar.service';

@Component({
    selector: 'app-citas',
    templateUrl: './citas.component.html',
    styleUrls: ['./citas.component.scss']
  })
  export class DashboardComponent implements OnInit {
    citas: Array<any> = [];
    
  
    constructor(private api: APIServiceService, 
      private router: Router,
      private data: DataParaActualizarService) { 
    }
  
    ngOnInit(): void {
      this.getCitas();
    }
  
    trackByCitaID(index: number, cita: any){
      return cita.citaID;
    }
  
    getCitas(){
      this.api.response = this.api.anyRequest("", "/login/dashboard", "get", true);
      this.api.response.then(r => this.citas = r.data.listaDeCitas);
    }
  
    async obtenerCitas(){
      this.api.response = this.api.anyRequest("", "/login/dashboard", "get", true);
      let response = await this.api.response;
      this.citas = response.data.listaDeCitas;
    }
    
  }
  