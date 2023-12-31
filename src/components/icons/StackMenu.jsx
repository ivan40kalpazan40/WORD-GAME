const StackMenu = ({ open, setOpenModal }) => {
  return (
    <div className='w-1/3'>
      <span
        className='material-symbols-outlined text-3xl cursor-pointer hover:text-stone-600'
        onClick={() =>
          setOpenModal((oldState) => ({ ...oldState, authModal: !open }))
        }
      >
        menu
      </span>
    </div>
  );
};

export default StackMenu;
