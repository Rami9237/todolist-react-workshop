import { TASK_SELECTOR } from "../Object-repository/selectors/taskSelector";
import { TASK_ACTION } from "../enum/taskAction";
export function getTaskLocator(index) {
    return `[data-testid='list-items']+div>div:nth-child(${index})`;
}

export async function taskAction(page, index, action) {
    const taskLocator = getTaskLocator(index);

    switch (action) {
        case TASK_ACTION.CHECK:
            await page.click(`${taskLocator} ${TASK_SELECTOR.CHECK_ICON}`);
            break;
        case TASK_ACTION.TRASH:
            await page.click(`${taskLocator} ${TASK_SELECTOR.TRASH_ICON}`);
            break;
        case TASK_ACTION.SAVE:
            await page.click(`${taskLocator} ${TASK_SELECTOR.SAVE_ICON}`);
            break;
        case TASK_ACTION.EDIT:
            await page.click(`${taskLocator} ${TASK_SELECTOR.EDIT_ICON}`);
            break;
        default:
            console.error('Invalid action:', action);
    }
}
