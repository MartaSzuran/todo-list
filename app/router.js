import EmberRouter from '@ember/routing/router';
import config from 'todo-list/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home-page', { path: '/' });
  this.route('edit-task', { path: 'edit-task/:id' });
});
