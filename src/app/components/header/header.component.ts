import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,],
  templateUrl: './header.component.html',
styles:''
})
export class HeaderComponent {
  @Output() search = new EventEmitter<string>();
searchControl = new FormControl("");
ngOnInit() {
  this.searchControl.valueChanges.subscribe((value) => {
    this.search.emit(value||'');
  });
}
}
