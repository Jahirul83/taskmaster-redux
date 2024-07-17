import Modal from "../ui/Modal";


const ShowTaskDetails = ({ item, isOpen, setIsOpen }) => {
    const {status, title, description, date, assignedTo, priority } = item;
    // console.log(item);


    const onOk = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="bg-secondary/10 rounded-md p-5">
                    <h1 className="text-lg font-semibold mb-3">
                        {title}
                    </h1>
                    <p className="mb-3">{description}</p>
                    <p className="text-sm">Assigned to - {assignedTo}</p>
                    <p className="text-sm">Status- {status}</p>
                    <div className="flex justify-between my-3">
                        <p>{date}</p>
                        <p>{priority}</p>
                    </div>
                    <button onClick={() => onOk()} type="button" className="btn btn-primary">Ok</button>
                </div>
            </Modal>
        </div>
    );
};

export default ShowTaskDetails;