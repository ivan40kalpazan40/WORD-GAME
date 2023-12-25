const AuthModal = ({ open, setOpenModal }) => {
  if (!open) return null;
  return (
    <div className='absolute top-16 left-1 w-1/5 h-3/4 bg-slate-100 border border-dotted border-stone-700'>
      <div className='head flex justify-between border-stone-700 border-b border-dotted'>
        <div className='title flex content-between place-items-center w-full py-5'>
          <div className='logo text-normal w-1/2 border-r border-dotted border-stone-700 text-center'>
            Original Games
          </div>
          <div className='italic w-1/2 text-center'>@NYTimes</div>
        </div>
        <div
          className='closeBtn mx-2 p-1 text-sm cursor-pointer'
          onClick={() =>
            setOpenModal((state) => ({ ...state, authModal: false }))
          }
        >
          x
        </div>
      </div>
      <div className='subhead uppercase text-xs font-medium flex place-content-center w-full py-3 tracking-tighter'>
        follow links to the original games
      </div>
      <ul className='flex-col my-5'>
        <li className='px-3 py-1 hover:bg-slate-200 flex gap-5 cursor-pointer'>
          <span className='material-symbols-outlined'>emoji_nature</span>
          Spelling Bee
        </li>
        <li className='px-3 py-1 hover:bg-slate-200 flex gap-5 cursor-pointer'>
          <span className='material-symbols-outlined'>crossword</span>Crossroad
        </li>

        <li className='px-3 py-1 hover:bg-slate-200 flex gap-5 cursor-pointer'>
          <span className='material-symbols-outlined'>grid_view</span>Tiles
        </li>
        <li className='px-3 py-1 hover:bg-slate-200 cursor-pointer flex gap-5'>
          <span className='material-symbols-outlined invisible'>grid_view</span>
          Gameplay Stories
        </li>
        <li className='px-3 py-1 hover:bg-slate-200 cursor-pointer flex gap-5'>
          {' '}
          <span className='material-symbols-outlined invisible'>grid_view</span>
          More Games
        </li>
      </ul>
      <ul className='flex-col my-5'>
        <li className='px-3 py-1 hover:bg-slate-200 cursor-pointer flex gap-5'>
          <span className='material-symbols-outlined'>newspaper</span>The New
          York Times
        </li>
        <li className='px-3 py-1 hover:bg-slate-200 cursor-pointer flex gap-5'>
          <span class='material-symbols-outlined'>skillet</span>New York Times
          Cooking
        </li>
        <li className='px-3 py-1 hover:bg-slate-200 cursor-pointer flex gap-5'>
          <span class='material-symbols-outlined'>
            tools_pliers_wire_stripper
          </span>
          New York Times Wirecutter
        </li>
        <li className='px-3 py-1 hover:bg-slate-200 cursor-pointer flex gap-5'>
          <span class='material-symbols-outlined'>sports_and_outdoors</span>The
          Athletic
        </li>
      </ul>
      <div className='absolute top-3/4 left-0 w-full h-1/4'>
        <h3 className='uppercase text-xs font-bold px-3'>profile</h3>
        <ul className='flex-col my-5'>
          <li className='px-3 py-1 hover:bg-slate-200 cursor-pointer flex gap-5'>
            Account Details
          </li>
          <li className='flex w-full justify-around py-3 gap-2'>
            <button className='uppercase text-xs w-1/2 bg-black text-white ml-2 py-2 px-4 rounded hover:bg-white-30 hover:opacity-50'>
              Subscribe
            </button>
            <button className='uppercase text-xs w-1/2 bg-white text-black mr-2 py-2 px-6 border border-black rounded hover:bg-stone-200'>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthModal;
