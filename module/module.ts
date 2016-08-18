import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FormsModule }             from '@angular/forms';
import { YourAwesomeComponent }    from './your-awesome.component';
// import { YourAwesomePipe }         from './your-awesome.pipe';
// import { YourAwesomeService }      from './your-awesome.service';
// import { YourAwesomeDirective }    from './your-awesome.directive';
@NgModule({
    imports:      [ CommonModule, FormsModule ],
    // declarations: [ YourAwesomeComponent, YourAwesomeDirective, YourAwesomePipe ],
    declarations: [ YourAwesomeComponent ],
    // exports:      [ YourAwesomeComponent, YourAwesomeDirective, YourAwesomePipe ],
    exports:      [ YourAwesomeComponent ],
    // providers:    [ YourAwesomeService ]
    providers:    []
})
export class YourAwesomeModule {}
