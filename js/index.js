const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV
let navLinks = document.querySelectorAll('header nav a');
let navItems = Object.values(siteContent.nav);

let newLink = document.createElement('a');
let aText = document.createTextNode('Testimony');
newLink.appendChild(aText);
document.querySelector('nav').prepend(newLink);

let newLinkTwo = document.createElement('a');
let aTextTwo = document.createTextNode('Home');
newLinkTwo.appendChild(aTextTwo);
document.querySelector('nav').prepend(newLinkTwo);
// TASK 3: CHANGE COLOR OF NAV TEXT TO GREEN
navLinks.forEach((x, y)=> {
  x.textContent = navItems[y]
  x.style.color = 'green'
  console.log('name: ',x)
})
console.log(navLinks)
console.log(navItems)
console.log(aText)

// CTA
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta['img-src']);

// MAIN CONTENT TOP
let featuresH = document.querySelector('.top-content h4');
featuresH.textContent = siteContent['main-content']['features-h4'];

let featuresContent = document.querySelector('.top-content p');
featuresContent.textContent = siteContent['main-content']['features-content'];

let aboutH = document.querySelector('.text-content:last-child h4');
aboutH.textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelector('.text-content:last-child p');
aboutContent.textContent = siteContent['main-content']['about-content'];

// MAIN CONTENT IMG
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// MAIN CONTENT BOTTOM
let servicesH = document.querySelector('.bottom-content h4');
servicesH.textContent = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelector('.bottom-content p');
servicesContent.textContent = siteContent['main-content']['services-content'];

let productH = 
  document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productH.textContent = siteContent['main-content']['product-h4'];

let productContent = 
  document.querySelector('.bottom-content .text-content:nth-child(2) p');
productContent.textContent = siteContent['main-content']['product-content'];

let visionH = 
  document.querySelector('.bottom-content .text-content:last-child h4');
visionH.textContent = siteContent['main-content']['vision-h4'];

let visionContent = 
  document.querySelector('.bottom-content .text-content:last-child p');
visionContent.textContent = siteContent['main-content']['vision-content'];

// CONTACT
let contactH = document.querySelector('.contact h4');
contactH.textContent = siteContent.contact['contact-h4'];

let address = document.querySelector('.contact p');
address.textContent = siteContent.contact.address;

let phone = document.querySelector('.contact p:nth-child(3)');
phone.textContent = siteContent.contact.phone;

let email = document.querySelector('.contact p:last-child');
email.textContent = siteContent.contact.email;

// FOOTER
let copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer.copyright;