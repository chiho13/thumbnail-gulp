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

  var Thumbnail = React.createClass({displayName: "Thumbnail",
        render:function(){
            return React.createElement("div", {className: "col-sm-6 col-md-4"},
            React.createElement("div", {className: "thumbnail"},
              React.createElement("img", {src: this.props.imageUrl}),
              React.createElement("div", {className: "caption"},
              React.createElement("h3", null, this.props.header),
              React.createElement("p", null, this.props.description),
              React.createElement("p", null,
              React.createElement(Badge, {title: this.props.title, number: this.props.number})
              )
          )
        )
      )
        }
    });

  var ThumbnailList = React.createClass({displayName: "ThumbnailList",
      render: function() {
        var list = this.props.thumbnailData.map(function(thumbnailProps){

          return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))

        });

        return React.createElement("div", null,
          list
          )
      }
    });
  //React, please render this class
  var element = React.createElement(ThumbnailList, options);

  //React, after you render this class, please place it in my body tag
  React.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
      render: function() {
          return React.createElement("button", {className: "btn btn-primary", type: "button"},
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
)
      }
  });
