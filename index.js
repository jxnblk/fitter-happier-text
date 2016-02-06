
module.exports = function(elements, options) {

  /* Assign function arguments to variables.  The elements variable references the text
  to be bound to the page.  Options is an optional argument that takes the form of an object with a
  baseline and/or a paddingY */
  var options = options || {};
  var baseline = options.baseline || 16;
  var paddingY = options.paddingY || 0;
  var doc = options.doc || document;
  var bounding = typeof doc.createElementNS('http://www.w3.org/2000/svg', 'svg').getBoundingClientRect === 'function';

  for (var i = 0; i < elements.length; i++) {

    // variable declarations
    var content = elements[i].textContent;
    var svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var text = doc.createElementNS('http://www.w3.org/2000/svg', 'text');
    var rect;

    // assign proper styles and positioning to text elements
    text.textContent = content;
    text.setAttribute('x', '50%');
    text.setAttribute('y', baseline);
    text.setAttribute('font-family', 'inherit');
    text.setAttribute('font-size', '1rem');
    text.setAttribute('font-weight', 'inherit');
    text.setAttribute('style', 'text-anchor:middle');

    for (var j = 0; j < elements[i].attributes.length; j++) {
      svg.setAttribute(elements[i].attributes[j].name, elements[i].attributes[j].value);
    }

    // set proper size, style, and fill for svg element
    svg.setAttribute('width', '100%');
    svg.setAttribute('style', 'max-height:100%');
    svg.setAttribute('fill', 'currentcolor');
    svg.setAttribute('overflow', 'visible');

    // append text element to page
    svg.appendChild(text);
    elements[i].parentNode.replaceChild(svg, elements[i]);

    rect = bounding ? text.getBoundingClientRect() : {};
    rect.width = rect.width || text.offsetWidth || text.getComputedTextLength();
    rect.height = rect.height || text.offsetHeight || 24;

    svg.setAttribute('viewBox', '0 0 ' + Math.round(rect.width) + ' ' + (Math.round(rect.height) + paddingY));

  }

};

