// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
  themeToggle.classList.remove('fa-moon');
  themeToggle.classList.add('fa-sun');
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Typing Animation
const typingText = document.getElementById('typing-text');
const words = ['Full Stack Developer', 'Web Designer', 'UI/UX Enthusiast', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
reveal();

// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const increment = target / 100;
  
  const updateCounter = () => {
    if (count < target) {
      count += increment;
      counter.textContent = Math.ceil(count);
      setTimeout(updateCounter, 20);
    } else {
      counter.textContent = target;
    }
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(counter);
      }
    });
  });
  
  observer.observe(counter);
});

// Skills Progress Bar Animation
const skillsSection = document.getElementById('skills');

const observerOptions = {
  threshold: 0.5
};

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = document.querySelectorAll('.progress');
      progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
      });
      skillsObserver.unobserve(skillsSection);
    }
  });
}, observerOptions);

skillsObserver.observe(skillsSection);

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  let isValid = true;
  
  // Name validation
  if (name === '' || name.length < 3) {
    showError('name', 'Name must be at least 3 characters');
    isValid = false;
  } else {
    clearError('name');
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('email', 'Please enter a valid email');
    isValid = false;
  } else {
    clearError('email');
  }
  
  // Message validation
  if (message === '' || message.length < 10) {
    showError('message', 'Message must be at least 10 characters');
    isValid = false;
  } else {
    clearError('message');
  }
  
  if (isValid) {
    // Simulate form submission
    formStatus.textContent = 'Message sent successfully!';
    formStatus.className = 'form-status success';
    contactForm.reset();
    
    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 3000);
  }
});

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorMsg = field.parentElement.querySelector('.error-msg');
  field.style.borderColor = '#FF6584';
  errorMsg.textContent = message;
}

function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  const errorMsg = field.parentElement.querySelector('.error-msg');
  field.style.borderColor = '';
  errorMsg.textContent = '';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
