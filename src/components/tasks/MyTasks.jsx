import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus, userTasks } from '../../redux/features/tasks/tasksSlice';
import { useEffect, useState } from 'react';
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
  const [TaskId, setTaskId] = useState(0);

  const { tasks, userSpecificTasks } = useSelector((state) => state.tasksSlice);
  const { name: userName } = useSelector((state) => state.userSlice)
  const dispatch = useDispatch();

  const handleTaskId = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    dispatch(userTasks(userName))
  }, [userName, dispatch, tasks]);


  return (
    <div>
      <ShowTaskDetails isOpen={isOpen} setIsOpen={setIsOpen} id={TaskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTasks?.map(item => <div
          key={item.id}
        ><div className="bg-secondary/10 rounded-md p-3">
            <div className='flex justify-between'>
              <div>
                <h1>{item.title}</h1>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleTaskId(item.id)} className="grid place-content-center" title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                {/* <button onClick={() => setIsOpen(!isOpen)} className="grid place-content-center" title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                  <ShowTaskDetails item={item} isOpen={isOpen} setIsOpen={setIsOpen}></ShowTaskDetails>
                </button> */}
                <button onClick={() => dispatch(updateStatus({ id: item.id, status: "done" }))} className="grid place-content-center" title="Done">
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
