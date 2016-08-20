# Angular 2 Ladda module

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

This is Angular 2 module that implements [Ladda](https://github.com/hakimel/Ladda)

<a href="http://lab.hakim.se/ladda/" target_='blank'>Check out Ladda's demo</a>


## Requirements
- [NPM](https://npmjs.org/) - Node package manager


## Installation

- run `npm install angular2-ladda --save`
- link Ladda's stylesheets to your document - you can find it in /node_modules/ladda/
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

## Usage

Add `[ladda]='isLoading'` to a button tag in template, e.g.:

```
<button [ladda]='isLoading' (click)='saveEmployee()' type="submit" class="btn btn-success">Save</button>
```

In component you'll have to toggle value of `isLoading` variable to show\hide Ladda's spinner.

## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
