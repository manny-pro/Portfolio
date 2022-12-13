var input = document.getElementById('input')

var customNodeCreator = function(character) {
  // Add character to input placeholder
  input.placeholder = input.placeholder + character;

  // Return null to skip internal adding of dom node
  return null;
}

var onRemoveNode = function({ character }) {
  if(input.placeholder) {
    // Remove last character from input placeholder
    input.placeholder = input.placeholder.slice(0, -1)
  }
}

var typewriter = new Typewriter(null, {
  loop: true,
  delay: 75,
  onCreateTextNode: customNodeCreator,
  onRemoveNode: onRemoveNode,
});

typewriter
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .start();