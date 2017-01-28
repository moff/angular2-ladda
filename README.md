# Angular 2 Ladda module

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

This is Angular 2 module that implements [Ladda](https://github.com/hakimel/Ladda)

<a href="http://lab.hakim.se/ladda/" target_='blank'>Check out Ladda's demo</a>


## Requirements
- [NPM](https://npmjs.org/) - Node package manager


## Installation

- run `npm install angular2-ladda --save`

- link Ladda's stylesheets to your document - you can find it in /node_modules/ladda/, e.g. add this in your html-document:

```
<link rel="stylesheet" href="node_modules/ladda/dist/ladda.min.css">
```
or import it in app.scss, e.g.:
```
@import "node_modules/ladda/css/ladda";
```

- import `LaddaModule` in your app's main module `app.module.ts`, e.g.:

```
// other imports
// ...
import { LaddaModule } from 'angular2-ladda';
// ...

@NgModule({
    imports: [
        // other imports
        // ...
        LaddaModule,
        // ...
    ]
})

```

Also you can configure Ladda defaults, e.g.:

```
// other imports
// ...
import { LaddaModule } from 'angular2-ladda';
// ...

@NgModule({
    imports: [
        // other imports
        // ...
        LaddaModule.forRoot({
            style: "contract",
            spinnerSize: 40,
            spinnerColor: "red",
            spinnerLines: 12
        }),
        // ...
    ]
})

```

That should be enough if you use Webpack to bundle JavaScript.

Otherwise you'll have to edit `systemjs.config.js` to set correct path, e.g.:

```
// below you can see an example of map and packages sections in systemjs.config.js

// ...
// map tells the System loader where to look for things
var map = {
    // ...
    'angular2-ladda':             'node_modules/angular2-ladda',
    'ladda':                      'node_modules/ladda/js',
    'spin':                       'node_modules/ladda/js/spin.js',
    // ...
};
// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    // ...
    'angular2-ladda':             { main: 'index.js', defaultExtension: 'js' },
    'ladda':                      { main: 'ladda.js', defaultExtension: 'js' },
    // ...
};

// ...
```

## Usage

Add `[ladda]="isLoading"` to a button tag in template, e.g.:

```
<button [ladda]="isLoading">Save</button>
```

In component you'll have to toggle value of `isLoading` variable to show\hide Ladda's spinner, e.g.:

```
import { Component } from '@angular/core';

@Component({
    template: `
        <h1>Home Component</h1>
        <button (click)="toggleLoading()">Toggle Ladda in button below</button>
        <hr>
        <button [ladda]="isLoading">Save</button>
    `
})
export class HomeComponent {
    
    // trigger-variable for Ladda
    isLoading: boolean = false;
    
    toggleLoading() {
        this.isLoading = !this.isLoading;
    }
}
```

Also buttons accept the following attributes:

- data-style: one of the button styles, full list in [demo](http://lab.hakim.se/ladda/)
- data-spinner-size: 40, pixel dimensions of spinner, defaults to dynamic size based on the button height
- data-spinner-color: hex code or any named CSS color
- data-spinner-lines: the number of lines for the spinner, defaults to 12

### Progress

Loading progress can be shown by setting the bound value to a number (between 0 and 1) rather than `true`.

For example:

```
import { Component } from '@angular/core';

@Component({
    template: `
        <h1>Home Component</h1>
        <button [ladda]="progress" (click)="startLoading()">Click to show progress</button>
    `
})
export class HomeComponent {
    progress: boolean | number = false;
    
    startLoading() {
        this.progress = 0; // starts spinner

        setTimeout(() => {
            this.loading = 0.5; // sets progress bar to 50%

            setTimeout(() => {
                this.loading = 1; // sets progress bar to 100%

                setTimeout(() => {
                    this.loading = false; // stops spinner
                }, 200);
            }, 500);
        }, 400);
    }
}
```

## Feedback

Please [leave your feedback](https://github.com/moff/angular2-ladda/issues) if you have noticed any issues or have a feature request.

## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
