import Modal from "../ui/Modal";


const AddTasksModal = ({isOpen,setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="jumman">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quaerat odio illo facilis, sequi incidunt nihil. Eos aliquam aspernatur voluptatem tempora, ad quisquam repellendus numquam facilis nostrum saepe mollitia cupiditate?
            </p>
        </Modal>
    );
};

export default AddTasksModal;