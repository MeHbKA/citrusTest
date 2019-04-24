$(document).ready(function(){
  let out = `<img src = "images/phoneBlack.jpg" alt = "phone">`
  $('#black').change(function(){  
    out = `<img src = "${$(this).val()}" alt = "phone">`;
    $('.phone').html(out);
  });
  $('#pink').change(function(){
    out = `<img src = "${$(this).val()}" alt = "phone">`;
    $('.phone').html(out);
  });
    $('.phone').html(out);
})