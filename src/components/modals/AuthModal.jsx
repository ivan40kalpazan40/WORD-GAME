const AuthModal = ({ open, setOpenModal }) => {
  if (!open) return null;
  return (
    <div className='absolute top-16 left-1 w-1/5 h-3/4  bg-red-100'>
      <div className='head flex justify-between'>
        <div className='title flex'>
          <div className='logo'>W</div>
          <div>Games</div>
        </div>
        <div
          className='closeBtn mx-2 p-1 text-xs cursor-pointer'
          onClick={() =>
            setOpenModal((state) => ({ ...state, authModal: false }))
          }
        >
          x
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
