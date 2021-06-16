<!-- About page
TO DO: (after cert)
  1. Test Netlify forms for real form submission functionality
-->

<template>
  <main class="Main">
    <form class="Main__content content needs-validation p-3" name="contactForm" data-netlify="true" method="post" novalidate>
      <!-- Main Page Content -->
      <h2 class="Main__content__title">Contact Me</h2>
      <p class="Main__content__pgdesc lead">If you would like to get in touch with me, please feel free to reach out using the form below.</p>
      <!-- Alert -->
      <div class="Main__content__alert alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Reminder!</strong> Make sure to double-check your spelling before you hit send! Otherwise, I cannot guarantee a response.
        <button type="button" class="Main__content__alert__btn btn-close" data-bs-dismiss="alert"></button>
      </div>
      <!-- New Row (Row 1) -->
      <div class="Main__content__form-row-1 row">
        <!-- Full Name Input -->
        <div class="Main__content__form-row-1__col-1 col-md-6">
          <label for="name" class="Main__content__form-row-1__col-1__name-label form-label">Full Name</label>
          <div class="Main__content__form-row-1__col-1__name-input-div input-group has-validation">
            <input class="Main__content__form-row-1__col-1__name-input-div__form-input-1 form-control" type="text" id="firstName" placeholder="John" required>
            <input class="Main__content__form-row-1__col-1__name-input-div__form-input-2 form-control" type="text" id="lastName" placeholder="Smith" required>
            <div class="Main__content__form-row-1__col-1__name-input-div__valid valid-feedback">
              Great!
            </div>
            <div class="Main__content__form-row-1__col-1__name-input-div__invalid invalid-feedback">
              Please provide your full name.
            </div>
          </div>
        </div>
        <!-- Username -->
        <div class="Main__content__form-row-1__col-2 col-md-6">
          <label for="firstName" class="Main__content__form-row-1__col-2__username-label form-label">Username</label>
          <div class="Main__content__form-row-1__col-2__username-input-div input-group has-validation">
            <input class="Main__content__form-row-1__col-2__username-input-div__form-input form-control" type="text" id="username" placeholder="johnsmith">
            <span class="Main__content__form-row-1__col-2__username-input-div__text input-group-text">@</span>
            <input class="Main__content__form-row-1__col-2__username-input-div__form-input-site form-control" type="text" id="site" placeholder="Twitter">
            <div class="Main__content__form-row-1__col-2__username-input-div__valid valid-feedback">
              Great!
            </div>
          </div>
        </div>
      </div>
      <!-- New Row (Row 2) -->
      <div class="Main__content__form-row-2 row pt-3">
        <!-- Email -->
        <div class="Main__content__form-row-2__col-3 col-md-3">
          <label for="email" class="Main__content__form-row-2__col-3__email-label form-label">Email</label>
          <div class="Main__content__form-row-2__col-3__email-input-div input-group has-validation">
            <input class="Main__content__form-row-2__col-3__email-input-div__form-input form-control" type="email" id="email" placeholder="john@johnsmith.com" required>
            <div class="Main__content__form-row-2__col-3__email-input-div__valid valid-feedback">
              Great!
            </div>
            <div class="Main__content__form-row-2__col-3__email-input-div__invalid invalid-feedback">
              Please provide your email address.
            </div>
          </div>
        </div>
        <!-- Phone Number -->
        <div class="Main__content__form-row-2__col-4 col-md-2">
          <label for="phoneNum" class="Main__content__form-row-2__col-4__phone-label form-label">Phone Number</label>
          <div class="Main__content__form-row-2__col-4__phone-input-div input-group has-validation">
            <input class="Main__content__form-row-2__col-4__phone-input-div__form-input form-control" type="tel" id="phoneNum" placeholder="123-456-7890" required>
            <div class="Main__content__form-row-2__col-4__phone-input-div__valid valid-feedback">
              Great!
            </div>
            <div class="Main__content__form-row-2__col-4__phone-input-div__invalid invalid-feedback">
              Please provide your phone number.
            </div>
          </div>
        </div>
        <!-- Timezone -->
        <div class="Main__content__form-row-2__col-5 col-md-3">
          <label for="timezone" class="Main__content__form-row-2__col-5__timezone-label form-label">Timezone</label>
          <div class="Main__content__form-row-2__col-5__timezone-input-div input-group has-validation">
            <input class="Main__content__form-row-2__col-5__timezone-input-div__form-input form-control" type="text" id="timezone" placeholder="USA PST (UTC -8)" required>
            <div class="Main__content__form-row-2__col-5__timezone-input-div__valid valid-feedback">
              Great!
            </div>
            <div class="Main__content__form-row-2__col-5__timezone-input-div__invalid invalid-feedback">
              Please provide your timezone.
            </div>
          </div>
        </div>
        <!-- Preferred Contact Method [dropdown] (email, social media, text, call) -->
        <div class="Main__content__form-row-2__col-6 col-md-4">
          <label for="contactMethod" class="Main__content__form-row-2__col-6__drop-label form-label">How do you prefer to be contacted?</label>
          <div class="Main__content__form-row-2__col-6__drop-input-div input-group">
            <select class="Main__content__form-row-2__col-6__drop-input-div__form-option-list form-select" name="contactMethod">
              <option selected>Email</option>
              <option value="socmed">Social Media (listed in Username)</option>
              <option value="telcall">Call</option>
              <option value="teltext">Text</option>
            </select>
          </div>
        </div>
      </div>
      <!-- New Row (Row 3) -->
      <div class="Main__content__form-row-3 row pt-3">
        <!-- Inquiring about? [checkbox] -->
        <div class="Main__content__form-row-3__checklist">
          <label class="Main__content__form-row-3__checklist__title h5">Which skill(s) are you reaching out about?</label>
          <div class="Main__content__form-row-3__checklist__check1 form-check">
            <label class="Main__content__form-row-3__checklist__check1lbl form-check-label" for="frndwebdev">Front-End Web Development</label>
            <input class="Main__content__form-row-3__checklist__check1input form-check-input" id="frndwebdev" type="checkbox" value="">
          </div>
          <div class="Main__content__form-row-3__checklist__check2 form-check">
            <label class="Main__content__form-row-3__checklist__check2lbl form-check-label" for="photog">Photography</label>
            <input class="Main__content__form-row-3__checklist__check2input form-check-input" id="photog" type="checkbox" value="">
          </div>
          <div class="Main__content__form-row-3__checklist__check3 form-check">
            <label class="Main__content__form-row-3__checklist__check3lbl form-check-label" for="mus">Music</label>
            <input class="Main__content__form-row-3__checklist__check3input form-check-input" id="mus" type="checkbox" value="">
          </div>
          <div class="Main__content__form-row-3__checklist__check4 form-check">
            <label class="Main__content__form-row-3__checklist__check4lbl form-check-label" for="gamdev">Game Design</label>
            <input class="Main__content__form-row-3__checklist__check4input form-check-input" id="gamdev" type="checkbox" value="">
          </div>
          <div class="Main__content__form-row-3__checklist__check5 form-check">
            <label class="Main__content__form-row-3__checklist__check5lbl form-check-label" for="artcheck">Art</label>
            <input class="Main__content__form-row-3__checklist__check5input form-check-input" id="artcheck" type="checkbox" value="">
          </div>
        </div>
      </div>
      <!-- New Row (Row 4) -->
      <div class="Main__content__form-row-4 row pt-3">
        <!-- Message [textbox] -->
        <div class="Main__content__form-row-4__textbox has-validation">
          <label for="textboxbody" class="Main__content__form-row-4__textbox__title form-label h5">Your Message:</label>
          <textarea class="Main__content__form-row-4__textbox__box form-control" id="textboxbody" rows="3" required></textarea>
          <div class="Main__content__form-row-4__textbox__input-div__valid valid-feedback">
            Great!
          </div>
          <div class="Main__content__form-row-4__textbox__input-div__invalid invalid-feedback">
            Please enter a message.
          </div>
        </div>
      </div>

      <!-- Form Submit Button -->
      <button class="Main__content__submitbtn btn btn-primary mt-3" type="submit">Send!</button>
    </form>
  </main>
</template>

<script type="text/javascript">
  export default {
    name: "Contact",
    mounted() {
      // Based on the Bootstrap docs: https://getbootstrap.com/docs/5.0/forms/validation/#custom-styles

      // Form variables
      let fname = document.contactForm.firstName;
      let lname = document.contactForm.lastName;
      let email = document.contactForm.email;
      let pnum = document.contactForm.phoneNum;
      let time = document.contactForm.timezone;
      let msg = document.contactForm.textboxbody;

      // Disabling form submissions if there are invalid fields
      (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }

              form.classList.add('was-validated');

              // If the form has something invalid, use Alert to alert the user to fix and try again
              if (fname.value.length <= 0 || lname.value.length <= 0 || email.value.length <= 0 || pnum.value.length <= 0 || time.value.length <= 0 || msg.value.length <= 0) {
                alert('Please fix the missing requirement(s) and try again.');
              }
              // To check the checkboxes
            }, false);
          })
      })()
    }
  }
</script>

<style lang="scss">
  // Import partials
  @import '../styles/_settings.responsive';
  @import '../styles/_settings.variables';

  // responsive sizing for "screen and (max-width: 767px)"
  @include media-query('mobile') {
    .Main {
      &__content {
        &__title {
          font-family: 'Courgette', cursive;
          color: $lightblue;
        }
        &__pgdesc {
          text-align: center;
        }
      }
    }
  }
  // responsive sizing for "screen and (min-width: 768px)"
  @include media-query('tab') {
    .Main {
      font-family: 'Roboto', sans-serif;
      &__content {
        &__title {
          font-family: 'Courgette', cursive;
          color: $lightblue;
        }
        &__pgdesc {
          text-align: center;
        }
      }
    }
  }
  // responsive sizing for "screen and (min-width: 920px)"
  @include media-query('lg') {

  }
  // responsive sizing for "screen and (min-width: 1024px)"
  @include media-query('desk') {

  }
</style>
