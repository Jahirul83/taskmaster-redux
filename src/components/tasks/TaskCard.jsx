import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTasks, updateStatus } from '../../redux/features/tasks/tasksSlice';

const TaskCard = ({ task }) => {

  const { priority } = task;
  const dispatch = useDispatch();

  let updatedStatus;
  let priorityColor;
  if (priority) {
    if (priority === 'high') priorityColor = 'red';
    else if (priority === 'medium') priorityColor = 'blue';
    if (priority === 'low') priorityColor = 'green';
  }
  if (task.status === 'pending') {
    updatedStatus = 'running';
  }
  else if (task.status === 'running') {
    updatedStatus = 'done';
  }
  else {
    updatedStatus = 'archive';
  }


  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1 style={{color: priorityColor}} className="text-lg font-semibold mb-3">
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button title="Delete" onClick={() => dispatch(removeTasks(task.id))}>
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button title="Update status" onClick={() => dispatch(updateStatus({ id: task.id, status: updatedStatus }))}>
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
