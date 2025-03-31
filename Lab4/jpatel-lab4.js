// Jainam Vipulkumar Patel
// ITMD 541-01 Graduate Student

// Update main hero headline
const mainHeadline = document.querySelector("h1.text-4xl.font-bold");
if (mainHeadline) {
  mainHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
}

// Update subheading with bold/italic emphasis
const subHeading = document.querySelector("p.text-xl.mb-6.text-white.relative.z-20");
if (subHeading) {
  subHeading.innerHTML = `
    Utilize cutting-edge strategies from Stellar Marketing to help your business
    <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.
  `;
}

// Change hero background
const heroSection = document.querySelector("#hero");
if (heroSection) {
  heroSection.style.backgroundImage = "url('https://fastly.picsum.photos/id/683/1280/720.jpg?hmac=MorP0xeZ8ldA3Xsf3cmIbrsN-jz3Omu7piIVSyv3jMk')";
  Object.assign(heroSection.style, {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  });
}

// Match navbar background color to footer
const navBar = document.querySelector("header.bg-blue-600");
const footerEl = document.querySelector("footer");
if (navBar && footerEl) {
  const footerBg = getComputedStyle(footerEl).backgroundColor;
  navBar.style.backgroundColor = footerBg;
}

// Remove "Get Started" CTA button
const ctaButton = document.querySelector("a.relative.bg-blue-600.text-white.px-6.py-2.rounded");
if (ctaButton) ctaButton.remove();

// Center-align specific section headings
const centerHeadings = ["Our Services", "Specialized Marketing Solutions For", "Contact Us"];
document.querySelectorAll("h2.text-3xl.font-bold.mb-6").forEach(h2 => {
  if (centerHeadings.includes(h2.textContent.trim())) {
    h2.style.textAlign = "center";
  }
});

// Change icon color in "Our Services"
const icons = document.querySelectorAll(".material-symbols-outlined");
icons.forEach(icon => {
  icon.style.color = "#47C714";
});

// Replace icon for "Digital Marketing"
const firstIcon = icons[0];
if (firstIcon) {
  firstIcon.textContent = "ads_click";
}

// Force 4-column tile layout at large screens
const gridStyle = document.createElement("style");
gridStyle.textContent = `
  @media (min-width: 1024px) {
    #solutions .grid {
      grid-template-columns: repeat(4, 1fr) !important;
      gap: 1.5rem !important;
    }
  }
`;
document.head.appendChild(gridStyle);

// Update Musicians image
const musiciansImg = document.querySelector('img[alt="Musicians"]');
if (musiciansImg) {
  musiciansImg.src = "https://fastly.picsum.photos/id/453/400/300.jpg?hmac=19cErdap35ZD3TFJZzBb6kEwO8dGJC90VTCHvuabLf0";
}

// Handle form submission with basic validation
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = contactForm.querySelector("input[name='name']");
    const emailInput = contactForm.querySelector("input[name='email']");

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();

    if (!name && !email) {
      alert("Please provide both name and email.");
    } else if (!name) {
      alert("Please provide a name.");
    } else if (!email) {
      alert("Please provide an email.");
    } else {
      alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
    }
  });
}
