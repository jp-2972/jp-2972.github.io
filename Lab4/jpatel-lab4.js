// Jainam Vipulkumar Patel

// ITMD 541-01 Graduate Student

// ✅ Requirement 1: Change hero heading
(function () {
    const h1 = document.querySelector("h1.text-4xl.font-bold");
    if (h1) h1.textContent = "Uplift Your Brand with Stellar Marketing";
  })();
  
  // ✅ Requirement 2: Update subtext
  (function () {
    const subtext = document.querySelector("p.text-xl.mb-6.text-white.relative.z-20");
    if (subtext) {
      subtext.innerHTML = `
        Utilize cutting-edge strategies from Stellar Marketing to help your business
        <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.
      `;
    }
  })();
 
  
  // ✅ Requirement 3: Change hero background image
  (function () {
    const hero = document.querySelector("#hero");
    if (hero) {
      hero.style.backgroundImage = "url('https://fastly.picsum.photos/id/683/1280/720.jpg?hmac=MorP0xeZ8ldA3Xsf3cmIbrsN-jz3Omu7piIVSyv3jMk')";
      hero.style.minHeight = "100vh";
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
      hero.style.backgroundRepeat = "no-repeat";
      hero.style.display = "flex";
      hero.style.flexDirection = "column";
      hero.style.justifyContent = "center";
    }
  })();
  
  
  // ✅ Requirement 4: Match navbar background to footer
  (function () {
    const nav = document.querySelector("header.bg-blue-600");
    const footer = document.querySelector("footer");
    if (nav && footer) {
      nav.style.backgroundColor = getComputedStyle(footer).backgroundColor;
    }
  })();
  
  // ✅ Requirement 5: Remove “Get Started” button
  (function () {
    const ctaBtn = document.querySelector("a.relative.bg-blue-600.text-white.px-6.py-2.rounded");
    if (ctaBtn) ctaBtn.remove();
  })();
  
  // ✅ Requirement 6: Center-align section headings
  (function () {
    document.querySelectorAll("h2.text-3xl.font-bold.mb-6").forEach(h2 => {
      const text = h2.textContent.trim();
      if (
        text === "Our Services" ||
        text === "Specialized Marketing Solutions For" ||
        text === "Contact Us"
      ) {
        h2.style.textAlign = "center";
      }
    });
  })();
  
  // ✅ Requirement 7: Change icon colors in Services
  (function () {
    document.querySelectorAll(".material-symbols-outlined").forEach(icon => {
      icon.style.color = "#47C714";
    });
  })();
  
  // ✅ Requirement 8: Replace Digital Marketing icon
  (function () {
    const dmIcon = document.querySelector(".material-symbols-outlined");
    if (dmIcon) dmIcon.textContent = "ads_click";
  })();
  
  // ✅ Requirement 9: 4-across tile layout at ≥1024px
  (function () {
    const style = document.createElement("style");
    style.textContent = `
      @media (min-width: 1024px) {
        #solutions .grid {
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 1.5rem !important;
        }
      }
    `;
    document.head.appendChild(style);
  })();
  
  // ✅ Requirement 10: Change Musicians image
  (function () {
    const img = document.querySelector('img[alt="Musicians"]');
    if (img) {
      img.src = "https://fastly.picsum.photos/id/453/400/300.jpg?hmac=19cErdap35ZD3TFJZzBb6kEwO8dGJC90VTCHvuabLf0";
    }
  })();
  
  // ✅ Requirement 11: Form submission handling (Graduate requirement)
  (function () {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = form.querySelector("input[name='name']")?.value.trim();
        const email = form.querySelector("input[name='email']")?.value.trim();
        if (name && email) {
          alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
        } else {
          alert("Please provide a name and email.");
        }
      });
    }
  })();
  