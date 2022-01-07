/*Menu */
function Menu(e){
    let menu = document.querySelector('.menu');
    let btn = document.querySelector('.btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}

/*Name moving effect */
document.getElementById('title').addEventListener('mousemove',function(){

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);
    const spansSlow = document.querySelectorAll('.spanSlow');
    
    let box = document.querySelector('.landing');
    let width = window.innerWidth;
    //let width = box.offsetWidth;
    //let width = window.screen.width;
    function handleMouseMove(e){
        let normalizedPosition = e.pageX /(width/2)-1;
        
        let speedSlow = 110*normalizedPosition;
    
        spansSlow.forEach((span)=>{
            span.style.transform = `translate(${(speedSlow)}px)`;
        });
    }
    
    function handleWindowResize(){
        width = window.innerWidth;
    }
},false);


function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.image').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
  
      //if element is in viewport, add the animate class
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('fadeIn');
      }
    });
}
// if in viewport, show the animation
checkElementLocation();

$(window).on('scroll', function() {
    checkElementLocation();
});