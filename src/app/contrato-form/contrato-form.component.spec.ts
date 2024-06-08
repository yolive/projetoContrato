import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContratoFormComponent } from './contrato-form.component';

describe('ContratoFormComponent', () => {
  let component: ContratoFormComponent;
  let fixture: ComponentFixture<ContratoFormComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoFormComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ],
    })
   .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoFormComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send POST request to /api/visualizar-pdf on visualizarPdf()', () => {
    const formData = component.contratoForm.value;
    component.visualizarPdf();

    const req = httpMock.expectOne('/api/visualizar-pdf');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(formData);
    req.flush(new Blob());
  });

  it('should send POST request to /api/enviar-pdf on onSubmit()', () => {
    const formData = component.contratoForm.value;
    component.onSubmit();

    const req = httpMock.expectOne('/api/enviar-pdf');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(formData);
    req.flush({});
  });
});