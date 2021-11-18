import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

//Import templates

FlowRouter.route('/', {
    name: 'home',
    action() {
      this.render('main');
    },
  });

  FlowRouter.route('/news', {
    name: 'news',
    action() {
      this.render('news.html');
    },
  });

//   FlowRouter.route('/news', {
//     name: 'news',
//     action() {
//         console.log("on the news page");
//       BlazeLayout.render('news', {news: 'test'});
//     },
//   });

  FlowRouter.route('/contact', {
    name: 'contact',
    action() {
      this.render('news.html');
    },
  });

  FlowRouter.route('/about', {
    name: 'about',
    action() {
      this.render('news.html');
    },
  });

  FlowRouter.route('/images', {
    name: 'images',
    waitOnResources: function (params, queryParams, data) {
      return {
        images:[
          '/imgs/1.png',
          '/imgs/2.png',
          '/imgs/3.png'
        ]
      };
    },
    whileWaiting: function (params, queryParams) { // <- Render template with spinner
      this.render('_layout', '_loading');
    }
  });

  //waitOnResources hook is Function passed as property into router configuration object. It is called with three arguments params, queryParams and data, same as action. You must return data in next form: {images: [/*array of strings with URL to images*/]}.