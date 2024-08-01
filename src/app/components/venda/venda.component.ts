import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-venda',
  standalone: true,
  imports: [VendaComponent, FormsModule, HeaderComponent],
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.scss'
})
export class VendaComponent {

  onSubmit() {
    alert('Formulário enviado!');
  }
}
