import { MAIN_SELECTORS } from "../Object-repository/selectors/mainSelectors";
import { TASK_ACTION } from "../enum/taskAction";
import { getTaskLocator, taskAction } from "../helpers/taskHelpers";

class startPage {
  
    constructor(page) {
        this.page = page
    }

    async addTask(Todoitem) {
        await this.page.fill(MAIN_SELECTORS.ADD_INPUT, Todoitem);
        await this.page.click(MAIN_SELECTORS.ADD_BUTTON);
      }
    
    async DeleteElement(elementIndex) {
        await taskAction(page,elementIndex,TASK_ACTION.TRASH);
      }
      
    async SaveElement(elementIndex) {
        await taskAction(page,elementIndex,TASK_ACTION.SAVE);

      }
      
     async ModifyElement(elementIndex, newItem) {
        await taskAction(page,elementIndex,TASK_ACTION.EDIT);
        const taskLocator = await getTaskLocator(elementIndex);
        await this.page.fill(`${taskLocator}>div>input`, newItem);
      }

}
export default startPage;