import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShowTasksComponent extends Component {
  @service router;

  get currentTask() {
    return this.args.currentTask;
  }

  @action
  transitionToTaskPage() {
    this.router.transitionTo('edit-task', this.currentTask.id);
  }

  @action
  onDelete() {
    this.currentTask.destroyRecord();
  }
}
