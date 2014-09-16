
module.exports = function(elements, options) {

  var options = options || {};
  var baseline = options.baseline || 16;
  var paddingY = options.paddingY || 0;

  for (var i = 0; i < elements.length; i++) {

    var content = elements[i].textContent;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    var width;
    var height;

    text.textContent = content;
    text.setAttribute('y', baseline);
    text.setAttribute('font-family', 'inherit');
    text.setAttribute('font-size', '1rem');
    text.setAttribute('font-weight', 'inherit');

    svg.setAttribute('width', '100%');
    svg.setAttribute('max-height', '100%');

    for (var j = 0; j < elements[i].attributes.length; j++) {
      svg.setAttribute(elements[i].attributes[j].name, elements[i].attributes[j].value);
    }

    svg.appendChild(text);
    elements[i].parentNode.replaceChild(svg, elements[i]);

    width = text.offsetWidth;
    height = text.offsetHeight;

    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + (height + paddingY));
    svg.setAttribute('fill', 'currentcolor');

  }

};

