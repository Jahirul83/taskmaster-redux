import { useSelector } from "react-redux";
import Modal from "../ui/Modal";


const ShowTaskDetails = ({ id, isOpen, setIsOpen }) => {
    const { tasks } = useSelector((state) => state.tasksSlice);

    const task = tasks.find(item => item.id === id)


    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
                {task?.description}
            </Modal>
        </div>
    );
};

export default ShowTaskDetails;