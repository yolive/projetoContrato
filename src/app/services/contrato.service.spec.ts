import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContratoService } from './contrato.service';

describe('ContratoService', () => {
  let service: ContratoService;
  let httpMock: HttpTestingController;
  const formData = {
    nome: '',
    cpf: '',
    dataNascimento: '',
    responsavel: '',
    rua: '',
    bairro: '',
    cep: '',
    celular: '',
    cpfResponsavel: '',
    valorMensalidade: '',
    formaPagamento: null,
    dataPagamento: null,
    'Baby Class - Segunda-Feira 18h00': false,
    'Baby Class - Segunda-Feira 19h00': false,
    'Baby Class - Sábado 10h00': false,
    'Ballet Infantil - Quarta-Feira 19h00': false,
    'Ballet Infantil - Quinta-Feira 20h00': false,
    'Ballet Infantil - Sábado 11h00': false,
    'Ballet Juvenil - Quinta-Feira 18h00': false,
    'Ballet Juvenil - Quinta-Feira 19h00': false,
    'Ballet Adulto - Sábado 12h30': false,
    'Ballet Adulto - Terça-Feira 20h00': false,
    'Dança do Ventre Baby - Quarta-Feira 18h00': false,
    'Dança do Ventre Infantil - Sexta-Feira 20h00': false,
    'Dança do Ventre Juvenil - Sexta-Feira 19h00': false,
    'Dança do Ventre Adulto - Segunda-Feira 20h00': false,
    'Dança do Ventre Adulto - Quarta-Feira 18h00': false,
    'Dança do Ventre Adulto - Quarta-Feira 19h00': false,
    'Dança do Ventre Adulto - Sexta-Feira 18h00': false,
    'Dança do Ventre Adulto - Quarta-Feira 20h00': false,
    'Dança do Ventre Adulto - Sábado 10h00': false,
    'Dança de Salão - Quinta-Feira 20h00': false,
    'Dança de Salão (Tango)- Quinta-Feira 21h00': false,
    'Dança Gospel - Sábado 09h00': false,
    'Dança Urbana - Terça-Feira 21h00': false,
    'Forró - Sexta-Feira 21h00': false,
    'Jazz Adulto - Quarta-Feira 21h00': false,
    'Jazz Adulto - Sábado 13:30': false,
    'Jazz Infantil - Segunda-Feira 20h00': false,
    'Jazz Infantil - Quarta-Feira 20h00': false,
    'Jazz Juvenil - Terça-Feira 18h00': false,
    'Jazz Juvenil - Terça-Feira 19h00': false,
    'Kpop - Sábado 12h00': false,
    'Kpop - Sábado 13h00': false,
    'Pilates/Alongamento - Terça-Feira 21h00': false
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ContratoService ]
    });
    service = TestBed.inject(ContratoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send POST request to /api/visualizar-pdf on visualizarPdf()', () => {
    const formData = {
      nome: '',
      cpf: '',
      dataNascimento: '',
      responsavel: '',
      rua: '',
      bairro: '',
      cep: '',
      celular: '',
      cpfResponsavel: '',
      valorMensalidade: '',
      formaPagamento: null,
      dataPagamento: null,
      'Baby Class - Segunda-Feira 18h00': false,
      'Baby Class - Segunda-Feira 19h00': false,
      'Baby Class - Sábado 10h00': false,
      'Ballet Infantil - Quarta-Feira 19h00': false,
      'Ballet Infantil - Quinta-Feira 20h00': false,
      'Ballet Infantil - Sábado 11h00': false,
      'Ballet Juvenil - Quinta-Feira 18h00': false,
      'Ballet Juvenil - Quinta-Feira 19h00': false,
      'Ballet Adulto - Sábado 12h30': false,
      'Ballet Adulto - Terça-Feira 20h00': false,
      'Dança do Ventre Baby - Quarta-Feira 18h00': false,
      'Dança do Ventre Infantil - Sexta-Feira 20h00': false,
      'Dança do Ventre Juvenil - Sexta-Feira 19h00': false,
      'Dança do Ventre Adulto - Segunda-Feira 20h00': false,
      'Dança do Ventre Adulto - Quarta-Feira 18h00': false,
      'Dança do Ventre Adulto - Quarta-Feira 19h00': false,
      'Dança do Ventre Adulto - Sexta-Feira 18h00': false,
      'Dança do Ventre Adulto - Quarta-Feira 20h00': false,
      'Dança do Ventre Adulto - Sábado 10h00': false,
      'Dança de Salão - Quinta-Feira 20h00': false,
      'Dança de Salão (Tango)- Quinta-Feira 21h00': false,
      'Dança Gospel - Sábado 09h00': false,
      'Dança Urbana - Terça-Feira 21h00': false,
      'Forró - Sexta-Feira 21h00': false,
      'Jazz Adulto - Quarta-Feira 21h00': false,
      'Jazz Adulto - Sábado 13:30': false,
      'Jazz Infantil - Segunda-Feira 20h00': false,
      'Jazz Infantil - Quarta-Feira 20h00': false,
      'Jazz Juvenil - Terça-Feira 18h00': false,
      'Jazz Juvenil - Terça-Feira 19h00': false,
      'Kpop - Sábado 12h00': false,
      'Kpop - Sábado 13h00': false,
      'Pilates/Alongamento - Terça-Feira 21h00': false
    }
    service.visualizarPdf(formData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('/api/visualizar-pdf');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(formData);
    req.flush(new Blob());
  });

  it('should send POST request to /api/enviar-pdf on enviarPdf()', () => {
    const formData = {
      nome: '',
      cpf: '',
      dataNascimento: '',
      responsavel: '',
      rua: '',
      bairro: '',
      cep: '',
      celular: '',
      cpfResponsavel: '',
      valorMensalidade: '',
      formaPagamento: null,
      dataPagamento: null,
      'Baby Class - Segunda-Feira 18h00': false,
      'Baby Class - Segunda-Feira 19h00': false,
      'Baby Class - Sábado 10h00': false,
      'Ballet Infantil - Quarta-Feira 19h00': false,
      'Ballet Infantil - Quinta-Feira 20h00': false,
      'Ballet Infantil - Sábado 11h00': false,
      'Ballet Juvenil - Quinta-Feira 18h00': false,
      'Ballet Juvenil - Quinta-Feira 19h00': false,
      'Ballet Adulto - Sábado 12h30': false,
      'Ballet Adulto - Terça-Feira 20h00': false,
      'Dança do Ventre Baby - Quarta-Feira 18h00': false,
      'Dança do Ventre Infantil - Sexta-Feira 20h00': false,
      'Dança do Ventre Juvenil - Sexta-Feira 19h00': false,
      'Dança do Ventre Adulto - Segunda-Feira 20h00': false,
      'Dança do Ventre Adulto - Quarta-Feira 18h00': false,
      'Dança do Ventre Adulto - Quarta-Feira 19h00': false,
      'Dança do Ventre Adulto - Sexta-Feira 18h00': false,
      'Dança do Ventre Adulto - Quarta-Feira 20h00': false,
      'Dança do Ventre Adulto - Sábado 10h00': false,
      'Dança de Salão - Quinta-Feira 20h00': false,
      'Dança de Salão (Tango)- Quinta-Feira 21h00': false,
      'Dança Gospel - Sábado 09h00': false,
      'Dança Urbana - Terça-Feira 21h00': false,
      'Forró - Sexta-Feira 21h00': false,
      'Jazz Adulto - Quarta-Feira 21h00': false,
      'Jazz Adulto - Sábado 13:30': false,
      'Jazz Infantil - Segunda-Feira 20h00': false,
      'Jazz Infantil - Quarta-Feira 20h00': false,
      'Jazz Juvenil - Terça-Feira 18h00': false,
      'Jazz Juvenil - Terça-Feira 19h00': false,
      'Kpop - Sábado 12h00': false,
      'Kpop - Sábado 13h00': false,
      'Pilates/Alongamento - Terça-Feira 21h00': false
    }
    service.enviarPdf(formData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('/api/enviar-pdf');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(formData);
    req.flush({});
  });
});