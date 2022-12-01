## Interview Questions

1a. Display the price of each course on the courses card underneath the description, so that switching the locale dropdown displays the converted price accordingly.

Tips:

- Use an Angular pipe
- Get the latest locale from the localeService.
- Use the following conversion rate: 1 cad = 0.63 £, 1 cad = 0.75 USD;
- How would you test the pipe?

1b. Any course selling for less than $40 are on sale. Let’s highlight the price with a background of yellow

2. Display a star rating for each course underneath the course description. Use the material favorite for the icons and display a rating out of 5 using the rating for each course. Display the rated stars using the color #dda928, and the unrated stars #e1e1e1. ie. 4/5 would show 4 stars using #dda928.

Tips:

- Use the Array() method to convert the course number into an array for iteration.
- After creating the rating, how would you make the rating reusable?
- Can we convert the colors into scss variables?
- How would you test in this component?

3a. Display the number of favourited courses next to a favourited icon in the top-bar, using an Angular service that calls an api from 'api/favourites'.

- Fetch the list of products from the in-memory api store instead, through the creation of a new service.
- Use rxjs to load data, but use async pipe instead of manual subscribe / unsubscribe
- Filter out the list of courses marked with expired: true
- Add correct return types/generics
- Use dependency injection to provide the in-memory api store

3b. Add the ability for the user to favorite a course.

- When clicking on the favourite button, populate a list of favorites using an Angular service dedicated to this logic. The service should
- Using [Angular material icons](https://fonts.google.com/icons) the heart material icon within the button. Ie. <i class="material-icons">favorite</i>
- The number of favourited items will be displayed in the top bar with the number of courses displayed beside a heart icon (like the checkout button).
- Create a service that saves a favourite on click, and fetch them via api as well.
- How would you make this accessible? Ie. role=image, aria-label
- How would you test this for accessibility on desktop/in the browser?

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
