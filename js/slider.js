 function rightSlide(id){
    //  debugger
    let track = document.querySelector('#track-'+id);
    let index   =  track.getAttribute('data-index');
    let container=document.querySelector('.carousel-container')
    let carouselWidth = container.offsetWidth;
     if(!((track.getBoundingClientRect().x+track.getBoundingClientRect().width) <=window.innerWidth)){
       index++;
       }else{
        index=0;
       }
        let x = `translateX(-${index * carouselWidth}px)`;
        track.style.transform = x
        track.setAttribute('data-index',index);
    
}
function leftSlide(id){
    //  debugger
    let track = document.querySelector('#track-'+id);
    let index   =  track.getAttribute('data-index');
    let carouselWidth = document.querySelector('.carousel-container').offsetWidth;
    // track.style.transform = `translateX(-50px)`; 
    
     if(index>0){
       index--;
   
      let x = `translateX(-${index * carouselWidth}px)`;
    track.style.transform = x
   
    track.setAttribute('data-index',index);
      }
}