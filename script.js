// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Header scroll effect
    const header = document.querySelector("header")
    const menuToggle = document.querySelector(".menu-toggle")
    const mainMenu = document.querySelector(".main-menu")
  
    // Scroll event for header
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
      mainMenu.classList.toggle("active")
  
      // Change icon based on menu state
      const icon = menuToggle.querySelector("i")
      if (mainMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  
    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll(".main-menu a")
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainMenu.classList.remove("active")
        const icon = menuToggle.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerHeight = header.offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Animate numbers in stats section
    const stats = document.querySelectorAll(".count")
    const statsSection = document.querySelector(".stats")
  
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  
    // Function to animate counting
    function animateCount(element) {
      const target = Number.parseInt(element.textContent)
      const duration = 2000 // 2 seconds
      const step = 50 // Update every 50ms
      const steps = duration / step
      const increment = target / steps
      let current = 0
  
      const timer = setInterval(() => {
        current += increment
        element.textContent = Math.floor(current) + "+"
  
        if (current >= target) {
          element.textContent = target + "+"
          clearInterval(timer)
        }
      }, step)
    }
  
    // Check if stats are in viewport on scroll
    let animated = false
    window.addEventListener("scroll", () => {
      if (!animated && statsSection && isInViewport(statsSection)) {
        stats.forEach((stat) => {
          animateCount(stat)
        })
        animated = true
      }
    })
  
    // Typing animation for code
    const codeElement = document.querySelector(".code-animation code")
    if (codeElement) {
      const text = codeElement.innerHTML
      codeElement.innerHTML = ""
  
      let i = 0
      const typeWriter = () => {
        if (i < text.length) {
          codeElement.innerHTML += text.charAt(i)
          i++
          setTimeout(typeWriter, 50)
        }
      }
  
      // Start typing animation after a delay
      setTimeout(typeWriter, 1000)
    }
  
    // Form submission
    const contactForm = document.querySelector(".contact-form form")
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        // Get form data
        const formData = new FormData(this)
        const formValues = Object.fromEntries(formData.entries())
  
        // Simulate form submission
        const submitButton = this.querySelector('button[type="submit"]')
        const originalText = submitButton.textContent
  
        submitButton.disabled = true
        submitButton.textContent = "Đang gửi..."
  
        // Simulate API call
        setTimeout(() => {
          // Reset form
          contactForm.reset()
  
          // Show success message
          alert("Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.")
  
          // Reset button
          submitButton.disabled = false
          submitButton.textContent = originalText
        }, 2000)
      })
    }
  
    // Newsletter form
    const newsletterForm = document.querySelector(".footer-newsletter form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        const emailInput = this.querySelector('input[type="email"]')
        const email = emailInput.value
  
        if (email) {
          // Simulate subscription
          alert("Cảm ơn bạn đã đăng ký nhận tin từ Nhóm ABC!")
          emailInput.value = ""
        }
      })
    }
  
    // Project cards hover effect
    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px)"
        this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
        this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
      })
    })
  
    // Service cards hover effect
    const serviceCards = document.querySelectorAll(".service-card")
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px)"
        this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)"
      })
  
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
        this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
      })
    })
  
    // Add active class to current section in navigation
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".main-menu a")
  
    window.addEventListener("scroll", () => {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active")
        }
      })
    })
  })
  
  