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

3. Display the price of the course on the courses card underneath the description.

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
