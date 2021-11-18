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
        console.log("on the news page");
      BlazeLayout.render('news', {news: 'test'});
    },
  });

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