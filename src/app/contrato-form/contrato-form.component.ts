import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contrato-form',
  templateUrl: './contrato-form.component.html',
  styleUrls: ['./contrato-form.component.scss']
})
export class ContratoFormComponent implements OnInit {
  contratoForm: FormGroup = this.fb.group({});
  opcoesAulas = [
    'Baby Class - Segunda-Feira 18h00', 'Baby Class - Segunda-Feira 19h00', 'Baby Class - Sábado 10h00',

    'Ballet Infantil - Quarta-Feira 19h00', 'Ballet Infantil - Quinta-Feira 20h00', 'Ballet Infantil - Sábado 11h00',
    'Ballet Juvenil - Quinta-Feira 18h00', 'Ballet Juvenil - Quinta-Feira 19h00',
    'Ballet Adulto - Sábado 12h30', 'Ballet Adulto - Terça-Feira 20h00',

    'Dança do Ventre Baby - Quarta-Feira 18h00', 'Dança do Ventre Infantil - Sexta-Feira 20h00','Dança do Ventre Juvenil - Sexta-Feira 19h00',
    'Dança do Ventre Adulto - Segunda-Feira 20h00', 'Dança do Ventre Adulto - Quarta-Feira 18h00', 'Dança do Ventre Adulto - Quarta-Feira 19h00', 
    'Dança do Ventre Adulto - Sexta-Feira 18h00', 'Dança do Ventre Adulto - Sexta-Feira 18h00', 'Dança do Ventre Adulto - Quarta-Feira 20h00', 'Dança do Ventre Adulto - Sábado 10h00', 

    'Dança de Salão - Quinta-Feira 20h00', 'Dança de Salão (Tango)- Quinta-Feira 21h00', 'Dança Gospel - Sábado 09h00', 'Dança Urbana - Terça-Feira 21h00',
    'Forró - Sexta-Feira 21h00', 'Jazz Adulto - Quarta-Feira 21h00', 'Jazz Adulto - Sábado 13:30',
    'Jazz Infantil - Segunda-Feira 20h00', 'Jazz Infantil - Quarta-Feira 20h00',
    'Jazz Juvenil - Terça-Feira 18h00', 'Jazz Juvenil - Terça-Feira 19h00',   
    'Kpop - Sábado 12h00', 'Kpop - Sábado 13h00',

    'Pilates/Alongamento - Terça-Feira 21h00',
  ];
  formaPagamentoControl = new FormControl();
  dataPagamentoControl = new FormControl();

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.contratoForm = this.fb.group({
      nome: [''],
      cpf: [''],
      dataNascimento: [''],
      responsavel: [''],
      rua: [''],
      bairro: [''],
      cep: [''],
      celular: [''],
      cpfResponsavel: [''],
      valorMensalidade: [''],
       // Outros campos do contrato
      formaPagamento: this.formaPagamentoControl,
      dataPagamento: this.dataPagamentoControl,
       // Inicialize as checkboxes das opções de aulas
      ...this.opcoesAulas.reduce((acc, curr) => ({...acc, [curr]: false }), {})
    });

    // Subscribe to the valueChanges observable to get the selected value
    this.formaPagamentoControl.valueChanges.subscribe(value => {
      console.log('Forma de Pagamento:', value);
       // You can use the selected value here
    });
    this.dataPagamentoControl.valueChanges.subscribe(value => {
      console.log('Data de Pagamento:', value);
       // You can use the selected value here
    });
  }

  visualizarPdf() {
    const formData = this.contratoForm.value;
    this.http.post('/api/visualizar-pdf', formData, { responseType: 'blob' }).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  onSubmit() {
    const formData = this.contratoForm.value;
    this.http.post('/api/enviar-pdf', formData).subscribe(
      response => {
        console.info('Successs: ' + response);
        alert('PDF enviado com sucesso!');
      },
      error => {
        console.error('Erro ao enviar PDF:', error);
        alert('Erro ao enviar o PDF: ' + error.message);
      }
    );
  }
}
