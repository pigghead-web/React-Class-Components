'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// * Look at the main usage/advantage of REACT do dynamically update information on the scren

var SongContainer = function (_React$Component) {
  _inherits(SongContainer, _React$Component);

  // Default state
  function SongContainer(props) {
    _classCallCheck(this, SongContainer);

    var _this = _possibleConstructorReturn(this, (SongContainer.__proto__ || Object.getPrototypeOf(SongContainer)).call(this, props));

    _this.state = {
      songs: props.songs
    };

    _this.loadSongsFromServer = _this.loadSongsFromServer.bind(_this);
    _this.loadSongsFromServer();
    return _this;
  }

  _createClass(SongContainer, [{
    key: 'loadSongsFromServer',
    value: function loadSongsFromServer() {
      var _this2 = this;

      var xhr = new XMLHttpRequest();

      //xhr.open('GET', '/getSongs');

      var setSongs = function setSongs() {
        var songResponses = JSON.parse(xhr.response);

        _this2.setState({ songs: songResponses });
      };

      xhr.onload = setSongs;

      xhr.open('GET', '/getSongs');

      xhr.send();
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.songs.length === 0) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h3',
            null,
            'No Songs Yet!'
          )
        );
      }

      // Array that will b the result of map function
      var songList = this.state.songs.map(function (songs) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h2',
            null,
            song.artist,
            ' - ',
            React.createElement(
              'i',
              null,
              song.title
            )
          )
        );
      });

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'My Favorite Songs!'
        ),
        songList
      );
    }
  }]);

  return SongContainer;
}(React.Component);

var init = function init() {
  ReactDOM.render(React.createElement(SongContainer, { songs: [] }), document.getElementById('app'));
};

window.onload = init;
