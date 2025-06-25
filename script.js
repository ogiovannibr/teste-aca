// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const navMenu = document.getElementById("nav-menu")

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  mobileMenuBtn.textContent = navMenu.classList.contains("active") ? "✕" : "☰"
})

// Close mobile menu when clicking on a link
navMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navMenu.classList.remove("active")
    mobileMenuBtn.textContent = "☰"
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Loading animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded")
    }
  })
}, observerOptions)

// Observe all elements with loading class
document.querySelectorAll(".loading").forEach((el) => {
  observer.observe(el)
})

// Load first section immediately
document.addEventListener("DOMContentLoaded", () => {
  const heroElements = document.querySelectorAll(".hero .loading")
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("loaded")
    }, index * 200)
  })
})

// WhatsApp click tracking (for analytics)
document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach((link) => {
  link.addEventListener("click", () => {
    console.log("WhatsApp clicked - Track this event for analytics")
    // Aqui você pode adicionar Google Analytics ou outro tracking
    // gtag('event', 'click', { event_category: 'contact', event_label: 'whatsapp' });
  })
})

// Phone click tracking
document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Phone clicked - Track this event for analytics")
    // gtag('event', 'click', { event_category: 'contact', event_label: 'phone' });
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(185, 28, 28, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "#b91c1c"
    header.style.backdropFilter = "none"
  }
})

// Form validation (se você adicionar formulários no futuro)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#ef4444"
      isValid = false
    } else {
      input.style.borderColor = "#d1d5db"
    }
  })

  return isValid
}

// Lazy loading para imagens (quando você adicionar)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Inicializar lazy loading quando a página carregar
document.addEventListener("DOMContentLoaded", lazyLoadImages)

// Função para adicionar Google Analytics (quando você configurar)
function initGoogleAnalytics() {
  // Adicione seu código do Google Analytics aqui
  // gtag('config', 'GA_MEASUREMENT_ID');
}

// Performance monitoring
window.addEventListener("load", () => {
  // Medir tempo de carregamento
  const loadTime = performance.now()
  console.log(`Página carregou em ${loadTime.toFixed(2)}ms`)

  // Você pode enviar essa métrica para analytics
  // gtag('event', 'timing_complete', {
  //     name: 'load',
  //     value: Math.round(loadTime)
  // });
})
