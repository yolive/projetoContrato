import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private apiUrl = 'https://projeto-contrato-backend.vercel.app';

  constructor(private http: HttpClient) { }

  visualizarPdf(data: any) {
    return this.http.post(`${this.apiUrl}/api/visualizar-pdf`, data, { responseType: 'blob' });
  }

  enviarPdf(data: any) {
    return this.http.post(`${this.apiUrl}/api/enviar-pdf`, data);
  }
}
