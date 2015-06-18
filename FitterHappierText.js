'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FitterHappierText = (function (_React$Component) {
  function FitterHappierText() {
    _classCallCheck(this, FitterHappierText);

    _get(Object.getPrototypeOf(FitterHappierText.prototype), 'constructor', this).call(this);
    this.resize = this.resize.bind(this);
    this.state = {
      width: 256,
      height: 24
    };
  }

  _inherits(FitterHappierText, _React$Component);

  _createClass(FitterHappierText, [{
    key: 'resize',
    value: function resize() {
      var el = _react2['default'].findDOMNode(this.refs.text);
      var state = this.state;
      var width = el.offsetWidth;
      var height = el.offsetHeight;
      if (state.width !== width || state.height !== height) {
        this.setState({
          width: width,
          height: height
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resize();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.resize();
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = {
        svg: {
          width: '100%',
          maxHeight: '100%',
          fill: 'currentcolor',
          overflow: 'visible'
        },
        text: {
          fontFamily: 'inherit',
          fontSize: '1rem',
          fontWeight: 'inherit',
          textAnchor: 'middle'
        }
      };
      var viewBox = [0, 0, this.state.width, this.state.height].join(' ');

      return _react2['default'].createElement(
        'svg',
        _extends({}, this.props, {
          viewBox: viewBox,
          style: styles.svg }),
        _react2['default'].createElement(
          'text',
          {
            ref: 'text',
            x: '50%',
            y: this.props.baseline,
            style: styles.text },
          this.props.text
        )
      );
    }
  }]);

  return FitterHappierText;
})(_react2['default'].Component);

FitterHappierText.defaultProps = {
  baseline: 16,
  paddingY: 0
};

FitterHappierText.propTypes = {
  text: _react2['default'].PropTypes.string,
  baseline: _react2['default'].PropTypes.number,
  paddingY: _react2['default'].PropTypes.number
};

exports['default'] = FitterHappierText;
module.exports = exports['default'];