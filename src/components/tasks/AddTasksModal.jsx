import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";


const AddTasksModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="jumman">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-2">
                        <label htmlFor="title" className="mb-2">
                            title
                        </label>
                        <input className="w-full rounded-md" 
                        type="text" 
                        id="title"
                        {...register('title')}
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="title" className="mb-2">
                            description
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
                        id="assignTo"
                        {...register('assignTo')}
                        >
                            <option value="rakib">rakib</option>
                            <option value="mainuddin">mainuddin</option>
                            <option value="khaled">khaled</option>
                            <option value="fahim">fahim</option>
                            <option value="sakib">sakib</option>
                            <option value="tamim">tamim</option>
                            <option value="asraf">asraf</option>
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
                        <button type="button" className="btn btn-primary">Cancel</button>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
            </form>
        </Modal>
    );
};

export default AddTasksModal;