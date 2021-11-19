import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

//Import templates
import '../client/main.html';
import '../imports/ui/layouts/body.html';
import '../imports/ui/layouts/news.html';

FlowRouter.route('/', {
    name: 'home',
    action() {
      this.render('main');
    },
  });

  FlowRouter.route('/news', {
    name: 'route.news',
    action() {
      this.render('app_body', 'news_layout');
    },
  });
