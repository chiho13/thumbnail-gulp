var React = require('react');
var ThumbnailList = require('./thumbnail-list.jsx');

var options =  {

  thumbnailData: [{
      title: 'See Tutorials',
      number: 32,
      header: 'Learn React',
      description: 'React is a fantastic new Library for making dynamic pages',
      imageUrl:'http://formatjs.io/img/react.svg'
  }, {
     title: 'Show Courses',
      number: 32,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your workflow',
      imageUrl:'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
  }

  //React, please render this class
  var element = React.createElement(ThumbnailList, options);

  //React, after you render this class, please place it in my body tag
  React.render(element, document.querySelector('.container'));
