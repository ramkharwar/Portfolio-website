// const toggle = document.getElementById("menu-toggle");
// const navbar = document.getElementById("navbar");

// // Toggle hamburger menu
// toggle.addEventListener("click", () => {
//   navbar.classList.toggle("show");
//   toggle.classList.toggle("active");
// });

// // Smooth scroll to sections
// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener("click", e => {
//     const target = document.querySelector(link.getAttribute("href"));
//     if (target) {
//       e.preventDefault();
//       window.scrollTo({
//         top: target.offsetTop - 80,
//         behavior: "smooth"
//       });
//     }
//     // Close nav on mobile
//     if (window.innerWidth < 1024) {
//       navbar.classList.remove("show");
//       toggle.classList.remove("active");
//     }
//   });
// });

const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Toggle hamburger menu
toggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
  toggle.classList.toggle("active");
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
    // Close nav on mobile
    if (window.innerWidth < 1024) {
      navbar.classList.remove("show");
      toggle.classList.remove("active");
    }
  });
});


// contact form


  // Handle form submit
// emailjs.init("c1889URsBpb4lweLN");

//   document.getElementById("contact-form").addEventListener("submit", function(e) {
//     e.preventDefault();

//     emailjs.sendForm("service_gmail", "template_contact", this)
//       .then(function() {
//           // Show thank you message
//           document.getElementById("thank-you").style.display = "block";
//           // Reset form
//           document.getElementById("contact-form").reset();
//       }, function(error) {
//           alert("❌ Failed to send message. Please try again.");
//           console.log("Error:", error);
//       });
//   });


// Initialize EmailJS
// emailjs.init("c1889URsBpb4lweLN");

// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const form = this;
//   const thankYou = document.getElementById("thank-you");
//   const errorMsg = document.getElementById("error-message");
//   const submitBtn = form.querySelector("button");

//   // Disable button + show loading text
//   submitBtn.disabled = true;
//   submitBtn.querySelector(".text").innerText = "Sending...";

//   emailjs.sendForm("service_gmail", "template_contact", form)
//     .then(function() {
//       // Success
//       thankYou.style.display = "block";
//       thankYou.classList.add("show");
//       form.reset();

//       setTimeout(() => {
//         thankYou.classList.remove("show");
//         setTimeout(() => thankYou.style.display = "none", 300);
//       }, 5000);
//     })
//     .catch(function(error) {
//       console.log("Error:", error);
//       errorMsg.style.display = "block";
//       errorMsg.classList.add("show");

//       setTimeout(() => {
//         errorMsg.classList.remove("show");
//         setTimeout(() => errorMsg.style.display = "none", 300);
//       }, 5000);
//     })
//     .finally(() => {
//       // Reset button
//       submitBtn.disabled = false;
//       submitBtn.querySelector(".text").innerText = "Send Message";
//     });
// });


//  (function() {
//       emailjs.init("c1889URsBpb4lweLN");

//       const form = document.getElementById("contact-form");
//       const thankYou = document.getElementById("thank-you");
//       const errorMsg = document.getElementById("error-message");
//       const submitBtn = form.querySelector("button");
//       const btnText = submitBtn.querySelector(".text");

//       form.addEventListener("submit", function(e) {
//         e.preventDefault();

//         submitBtn.disabled = true;
//         btnText.innerText = "Sending...";

//         emailjs.sendForm("service_gmail", "template_contact", form)
//           .then(() => {
//             thankYou.style.display = "block";
//             form.reset();

//             setTimeout(() => { thankYou.style.display = "none"; }, 5000);
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//             errorMsg.style.display = "block";
//             setTimeout(() => { errorMsg.style.display = "none"; }, 5000);
//           })
//           .finally(() => {
//             submitBtn.disabled = false;
//             btnText.innerText = "Send Message";
//           });
//       });
//     })();

// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault(); // ✅ Stops page reload

//   emailjs.sendForm("service_gmail", "template_contact", this)
//     .then(function() {
//       const thankYou = document.getElementById("thank-you");
//       thankYou.style.display = "block";   // show element
//       setTimeout(() => {
//         thankYou.style.opacity = "1";     // fade in
//       }, 50);

//       document.getElementById("contact-form").reset();

//       // Hide again after 5 seconds (optional)
//       setTimeout(() => {
//         thankYou.style.opacity = "0";
//         setTimeout(() => {
//           thankYou.style.display = "none";
//         }, 800); // match CSS transition
//       }, 5000);
//     }, function(error) {
//       alert("❌ Failed to send message. Please try again.");
//       console.log("Error:", error);
//     });
// });


document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // ✅ Stops page reload

  emailjs.sendForm("service_gmail", "template_contact", this)
    .then(function() {
      const thankYou = document.getElementById("thank-you");
      thankYou.style.display = "block";   // show element
      setTimeout(() => {
        thankYou.style.opacity = "1";     // fade in
      }, 50);

      document.getElementById("contact-form").reset();

      // Hide again after 5 seconds (optional)
      setTimeout(() => {
        thankYou.style.opacity = "0";
        setTimeout(() => {
          thankYou.style.display = "none";
        }, 600); // match CSS transition
      }, 5000);
    }, function(error) {
      alert("❌ Failed to send message. Please try again.");
      console.log("Error:", error);
    });
});
