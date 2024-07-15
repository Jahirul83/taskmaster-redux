import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../../redux/features/tasks/tasksSlice';
import { useState } from 'react';
import ShowTaskDetails from './ShowTaskDetails';

const MyTasks = () => {
  // const item = {
  //   id: 1,
  //   status: 'pending',
  //   title: 'Remove Button',
  //   description:
  //     'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
  //   date: '2023-08-28',
  //   assignedTo: 'Mir Hussain',
  //   priority: 'high',
  // };
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useSelector((state) => state.tasksSlice);
  const dispatch = useDispatch();


  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {tasks?.map(item => <div
          key={item.id}
        ><div className="bg-secondary/10 rounded-md p-3">
        <div className='flex justify-between'>
          <div>
            <h1>{item.title}</h1>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIsOpen(!isOpen)} className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              <ShowTaskDetails item={item} isOpen={isOpen} setIsOpen={setIsOpen}></ShowTaskDetails>
            </button>
            <button onClick={() => dispatch(updateStatus({ id: item.id, status: "archive" }))} className="grid place-content-center" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
        </div>)}
      </div>
    </div>
  );
};

export default MyTasks;
