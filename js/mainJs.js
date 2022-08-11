const body = document.querySelector('body');
const CaseStudiesSection = document.querySelector('#CaseStudies');
const CaseStudiesSection_top = CaseStudiesSection.offsetTop
const header = document.querySelector('#header');

body.onscroll = (e) => {
    
    if (pageYOffset < CaseStudiesSection_top) {
        header.classList.remove("bg-header");
    } else {
        header.classList.add("bg-header");
    }

}