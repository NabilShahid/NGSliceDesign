## Following is explanation regarding the implementation of each item.

**1) Demonstrates the usage of ngOnChanges, @Ouput() and @Input()**

 @Input and @Output are used throughout the application. E.g. a _DataListComponent_ that shows all registrations and rates lists has _cols_ and _data_ inputs. Also, in _NavbarComponent_ the navigation link in emitted on navigation link click which is used in parent for updating text _TopContainerComponent_ text. There are many other usages   throughout the application.

For ngOnChanges, The _DataListComponent_ on &quot;Navigation Link Three&quot;which shows registration data takes data as input and performs some pre-processing i.e. calculate footer values. When the data input changes by clicking on &quot;Delete Recent&quot; button, the ngOnChanges is used for pre preprocessing the data again.

**2) Lazy load modules**

The application has three feature module i.e. NavOneModule, NavTwoModule and NavThreeModule. All three are lazy load modules which are loaded or main route change i.e. localhost:4200/navone, localhost:4200/navtwo, localhost:4200/navthree.

**3) Demonstrates the usages of route guards**

 [http://localhost:4200/admin-panel](http://localhost:4200/admin-panel) is route guarded. It checks through AuthService if user is admin(key stored in local storage). User is navigated to [http://localhost:4200/not-authorized](http://localhost:4200/not-authorized) component if he/she is not admin. On this component, user can click &quot;I Am Admin&quot; button to go back to the admin-panel route as admin.

**4) Passes data between pages. Have an input field in one page of which contents is displayed in the second page.**

The _RegisterFormComponent_ on &quot;Navigation Link Two&quot; has a registration form. Upon filling this form and clicking on &quot;Continue&quot;, as confirmation page is shown which displays the information entered by the user on registration form page. Moreover, once the user clicks on &quot;Submit&quot; button on the confirmation page, the data is saved to a dummy _DataAccessService_ and is show in a list on &quot;Navigation Link Three&quot;.

**5) Has page transition animations. Here please make 2 examples, one with angular- animations and one that uses just css classes with animations for things like fading in an element.**

The main route as well as nested routes transitions are animated using angular animations. _TopContainerComponent_ text under the Nav bar is animated using css animations on main navigation change.





**6) Has one route that demonstrates how nested \&lt;router-outlet\&gt; works.**

&quot;Navigation Link Two&quot; has three nested routes i.e. register, register-instructions and register-confirm.  Interacting with &quot;Nav Link Two&quot; i.e. clicking on &quot;Instructions&quot; button or clicking on &quot;Continue&quot; after filling the form, these routes are navigated.

**7) Have 2 inputs with some simple validation (like an email validation) without the require of angular-forms and ngModel**

The _RegistrationFormComponent_ has Email and Password validation fields created without using angular forms or ngModel.

**8) Demonstrates the usage of ng-content.**

 The _LoadingComponent_ that shows loading while submitting registration data, and loading registration list uses ng-content to render dynamic content and shows loading spinner in the center while decreasing the opacity of the dynamic content.

**9) Have an input directive that restricts the input to numbers only and auto formats the input into currency, ex: $1,234. The field must change its format as user types.  **

_RegisterFormComponent_ has an Amount input on which an Attribute directive i.e. Currency directive is applied.

**10) Demonstrates various ways to bind component properties to an associated template**

 Used throughout the application.

**11) Has unit tests.**

NA

## Notes:

Project folder is provided with the Email.

The app is hosted on [https://slice-test-b4ef4.firebaseapp.com/](https://slice-test-b4ef4.firebaseapp.com/).