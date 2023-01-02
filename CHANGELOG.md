# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [5.0.0] - 2023-01-02
### Added
- Support for Angular 15+.

### Removed
- Unnecessary `configAttributes` ladda-config export.

## [4.0.0] - 2022-07-10
### Changed
- Built with Angular 14.

## [3.2.2] - 2022-02-22
### Changed
- Built with Angular 13.

### Fixed
- Replaces v3.2.1, which had the same code but was broken due to being incorrectly published to npm.

## [3.2.0] - 2021-06-30
### Changed
- Built with Angular 12.
- Enabled Ivy library distribution.

## [3.1.1] - 2020-11-12
### Changed
- Built with Angular 11.

## [3.1.0] - 2020-03-15
### Added
- Improved support for server-side rendering (issue [#39])

## [3.0.0] - 2020-02-09
### Changed
- Ladda is now a peer dependency and must be explicitly installed.
- Built with Angular 9.

## [2.0.2] - 2019-07-04
### Changed
- Built with Angular 8 CLI - compatible with Ivy compiler.

## [2.0.1] - 2019-03-06
### Changed
- Built with Angular 7.

## [2.0.0] - 2018-05-13
### Changed
- Built with Ladda 2.0 and Angular 6, and distributed as native ES6 module.

### Added
- Support for `style-src 'self';` Content Security Policy.

### Removed
- Internet Explorer 9 compatibility (Ladda 2.0 no longer supports it).
- SystemJS module loader (use Webpack or Rollup instead).

## [1.2.3] - 2017-12-23
### Fixed
- Error when `ngOnDestroy()` is called but not `ngOnInit()` (issue [#27]).

## [1.2.2] - 2017-09-24
### Changed
- Enabled TypeScript `strictNullChecks` option.
- Improved performance by setting button `disabled` property directly,
rather than adding/removing attribute.

## [1.2.1] - 2017-04-20
### Added
- Spinner can now be stopped by setting bound value to `null` or `undefined`.

## [1.2.0] - 2017-03-23
### Added
- Support for Angular 4.

## [1.1.1] - 2017-01-29
### Fixed
- Issue where progress bar wasn't set when the initial loading value was
a number.
- Calculated spinner size is now correct when the initial loading value
isn't false.
- Documentation for SystemJS.

## [1.1.0] - 2017-01-29
### Added
- Support for displaying progress bar by binding to a number between 0 and 1.
- Support for the Rollup module bundler (with commonjs plugin).
- Validation and code completion when setting a default style.

### Fixed
- "Can't resolve all parameters for LaddaConfig" error when using the
Angular 4 AOT compiler.

### Changed
- Simplified and optimized code for reading attributes and applying
default styles.

## [1.0.7] - 2017-01-22
### Added
- Support for ahead-of-time compilation.

## [1.0.6] - 2016-10-22
### Fixed
- Made Ladda a dependency and Angular a peer dependency.

## [1.0.5] - 2016-10-22
### Removed
- Unneeded dependencies.

## [1.0.4] - 2016-10-12
### Fixed
- Disabled buttons are now handled correctly.

## [1.0.3] - 2016-10-04
### Added
- Default styles can now be set by importing the module using
`LaddaModule.forRoot`.

## [1.0.2] - 2016-10-03
### Changed
- Only call Ladda methods when input values change to prevent stuttering
animations.

## [1.0.1] - 2016-09-20
- Initial stable release

[Unreleased]: https://github.com/moff/angular2-ladda/compare/v5.0.0...HEAD
[5.0.0]: https://github.com/moff/angular2-ladda/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/moff/angular2-ladda/compare/v3.2.2...v4.0.0
[3.2.2]: https://github.com/moff/angular2-ladda/compare/v3.2.0...v3.2.2
[3.2.0]: https://github.com/moff/angular2-ladda/compare/v3.1.1...v3.2.0
[3.1.1]: https://github.com/moff/angular2-ladda/compare/v3.1.0...v3.1.1
[3.1.0]: https://github.com/moff/angular2-ladda/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/moff/angular2-ladda/compare/v2.0.2...v3.0.0
[2.0.2]: https://github.com/moff/angular2-ladda/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/moff/angular2-ladda/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/moff/angular2-ladda/compare/v1.2.3...v2.0.0
[1.2.3]: https://github.com/moff/angular2-ladda/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/moff/angular2-ladda/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/moff/angular2-ladda/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/moff/angular2-ladda/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/moff/angular2-ladda/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/moff/angular2-ladda/compare/v1.0.7...v1.1.0
[1.0.7]: https://github.com/moff/angular2-ladda/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/moff/angular2-ladda/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/moff/angular2-ladda/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/moff/angular2-ladda/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/moff/angular2-ladda/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/moff/angular2-ladda/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/moff/angular2-ladda/tree/v1.0.1

[#27]: https://github.com/moff/angular2-ladda/issues/27
[#39]: https://github.com/moff/angular2-ladda/issues/39
