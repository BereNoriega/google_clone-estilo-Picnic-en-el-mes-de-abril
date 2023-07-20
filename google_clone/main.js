let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1000)
  .typeString('Picnic en el mes de abril - Beye')
  .pauseFor(2000)
  .start();


