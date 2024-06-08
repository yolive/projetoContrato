import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  constructor(private http: HttpClient) { }

  visualizarPdf(data: any) {
    return this.http.post('/api/visualizar-pdf', data, { responseType: 'blob' });
  }

  enviarPdf(data: any) {
    return this.http.post('/api/enviar-pdf', data);
  }
}
