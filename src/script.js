const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark text-3xl"></i>`;
  }
});
const contactForm = document.getElementById("contactForm");
const sendButton = document.getElementById("sendButton");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if fields are empty
  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.className = "text-sm text-center font-medium text-red-600";
    formStatus.classList.remove("hidden");

    return;
  }

  // Change button while preparing email
  sendButton.disabled = true;
  sendButton.innerHTML = `
    Opening Email...
    <i class="fa-solid fa-spinner fa-spin ml-2 text-xs"></i>
  `;

  // Create email subject and body
  const subject = `Portfolio Contact from ${name}`;

  const body = `Hello Taiwo,

My name is ${name}.

Email: ${email}

Message:
${message}

Best regards,
${name}`;

  // Create mailto link
  const mailtoLink = `mailto:tadejumobi644@gmail.com?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  // Open user's email application
  window.location.href = mailtoLink;

  // Show status
  formStatus.textContent = "Your email application is opening...";
  formStatus.className = "text-sm text-center font-medium text-green-600";
  formStatus.classList.remove("hidden");

  // Reset button
  setTimeout(() => {
    sendButton.disabled = false;
    sendButton.innerHTML = `
      Send Message
      <i class="fa-solid fa-paper-plane ml-2 text-xs"></i>
    `;
  }, 2000);
});
