## Interview Questions

1. Add the ability for the user to favorite a course.

- Use the heart material icon within the button. Ie. <i class="material-icons">favorite</i>
- The number of favourited items will be displayed in the top bar with the number of courses displayed beside a heart icon (like the checkout button).
- Create a service that saves a favourite on click, and fetch them via api as well.
- How would you make this accessible? Ie. role=image, aria-label
- How would you test this for accessibility on desktop/in the browser?

2. Create a page to display the list of favourite

- Fetch the list of products from the in-memory api store instead, through the creation of a new service.
- Use rxjs to load data, but use async pipe instead of manual subscribe / unsubscribe
- Filter out the list of courses marked with expired: true
- Add correct return types/generics
- Use dependency injection to provide the in-memory api store

3. Display the price of the course on the courses card underneath åthe description.

- Write a test to validate the course details get displayed correctly
- Using a pipe, display the price in the appropriate currency based on the locale, using example conversion rate.
- Any course selling for less than $40 are on sale. Let’s highlight the price with a background of yellow. - Asad Mahmood

4. Make use of a directive

- Use HostBinding
- Display a star rating for each course using the material favorite icon out of 5 using the rating for each course. Wesley Francis
- Display the rated stars using the color #dda928, and the remaining stars #e1e1e1.
  Can you use css variables instead?
- Try using a component with OnPush change detection
- What would you test in this component?

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
