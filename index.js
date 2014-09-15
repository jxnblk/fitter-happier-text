
module.exports = function(elements) {

  console.log('elements', elements.length);

  for (var i = 0; i < elements.length; i++) {
    //var el = elements[i];
    var content = elements[i].textContent;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    var width;
    var height;

    text.textContent = content;
    text.setAttribute('y', '16');
    text.setAttribute('font-family', 'inherit');
    text.setAttribute('font-size', '1rem');
    text.setAttribute('font-weight', 'inherit');

    for (var j = 0; j < elements[i].attributes.length; j++) {
      svg.setAttribute(elements[i].attributes[j].name, elements[i].attributes[j].value);
    }
    svg.appendChild(text);
    elements[i].parentNode.replaceChild(svg, elements[i]);
    //elements[i].appendChild(svg);

    width = text.offsetWidth;
    height = text.offsetHeight;

    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + (height + 4));
    svg.setAttribute('fill', 'tomato');

  }

};

