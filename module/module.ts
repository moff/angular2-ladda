import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { YourAwesomeComponent }   from './your-awesome.component';
// import { AwesomePipe }        from './awesome.pipe';
// import { ContactService }     from './contact.service';
// import { HighlightDirective } from './highlight.directive';
@NgModule({
  imports:      [ CommonModule, FormsModule ],
  // declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],
  declarations: [ YourAwesomeComponent ],
  // exports:      [ ContactComponent ],
  exports:      [ YourAwesomeComponent ],
  // providers:    [ ContactService ]
  providers:    [ ]
})
export class YourAwesomeModule { }
