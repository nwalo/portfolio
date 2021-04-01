$(function(){

  $('#home').slideUp(0);
  $('#home').slideDown(2000, 'linear');

  $(window).on('load', function () {
    $('.loader-container').fadeOut(1000);
  });

//   const options = {};
//
//   const faders = $('.fade-in');
//
//   const appearOnScroll = new IntersectionObserver(function (ent, app) {
//     ent.forEach((item, i) => {
//       if(!ent.isIntersecting){
//         return;
//       } else{
//         entry.target.addClass('appear');
//         appearOnScroll.unobserve(entry.target);
//       }
//     });
//   }, options
// );
//
// fader.forEach((item, i) => {
//   appearOnScroll.observe(fader);
// });


  // var btn = $('#btn');
  //   btn.on('click', function () {
  //     $('html').animate({scrollTop: 0});
  //   });

  var nameShow = $('#home h1');
  var vidShow = $('#home video')

  nameShow.hide();
  setTimeout(function () {
    nameShow.fadeIn(1000)
  }, 2100);

  vidShow.hide();
  setTimeout(function () {
    vidShow.fadeIn()
  }, 2100);

  $(".swap").on("click", function (){
    $(".swap").removeClass("active");
    $(this).addClass("active");
  });

  $(".ex").on("click", function(){
    $("#experience").removeClass("hide");
    $(".skill-exp").fadeOut();
    $("#experience").fadeIn(1000);
  })

  $(".sk").on("click", function(){
    $("#experience").fadeOut(1000);
    $(".skill-exp").fadeIn(1000);
  })

});
