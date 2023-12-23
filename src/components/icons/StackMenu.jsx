const StackMenu = ({ open, setOpenModal }) => {
  return (
    <div className='w-1/3'>
      <span
        className='material-symbols-outlined text-3xl cursor-pointer'
        onClick={() =>
          setOpenModal((oldState) => ({ ...oldState, authModal: true }))
        }
      >
        menu
      </span>
    </div>
  );
};

export default StackMenu;
