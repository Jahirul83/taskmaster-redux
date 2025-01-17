import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";


const AddTasksModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch =  useDispatch();

    const onCancel = () => {
        reset();
        setIsOpen(false);
    };


    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel();
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Task Master">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-2">
                    <label htmlFor="title" className="mb-2">
                        Title
                    </label>
                    <input className="w-full rounded-md"
                        type="text"
                        id="title"
                        {...register('title')}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Description
                    </label>
                    <textarea className="w-full rounded-md"
                        type="text"
                        id="description"
                        {...register('description')}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Deadline
                    </label>
                    <input className="w-full rounded-md"
                        type="date"
                        id="date"
                        {...register('date')}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Assign To
                    </label>
                    <select className="w-full rounded-md"
                        id="assignedTo"
                        {...register('assignedTo')}
                    >
                        <option value="rakib">rakib</option>
                        <option value="mainuddin">mainuddin</option>
                        <option value="khaled">khaled</option>
                        <option value="fahim">fahim</option>
                        <option value="sakib">sakib</option>
                        <option value="tamim">tamim</option>
                        <option value="asraf">asraf</option>
                        <option value="Mir Hussain">Mir Hussain</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">
                        Priority
                    </label>
                    <select className="w-full rounded-md"
                        id="priority"
                        {...register('priority')}
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex gap-3 justify-end">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={() => onCancel()} type="button" className="btn btn-danger">Cancel</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTasksModal;