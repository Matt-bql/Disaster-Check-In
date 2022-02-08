export default function AllFeedContent(props) {
  return (
    <div className='min-h-screen  w-screen flex-col '>
      <div className='right float-right hidden h-full lg:block lg:w-1/3'>
        <div className='border-no-hover-color mx-6 mt-4 h-96 border bg-white sm:rounded-md '>
          {props.Panel}
        </div>
      </div>

      <div className='flex lg:w-2/3 '>
        <div
          className='border-no-hover-color my-4 flex h-16 w-full 
        place-items-center rounded-sm border bg-white sm:mx-6 sm:rounded-md lg:mx-0 lg:ml-6'
        >
          <span className='h-full w-1/5'>
            <img
              className='mr-4 inline-block h-10 rounded-full '
              src='App-UI/src/assets/hero.webp'
              alt='profile'
            />
          </span>
          <span className='flex h-full w-3/5 place-items-center'>
            {props.Form}
          </span>
          <span className='h-full w-1/5'>test</span>
        </div>
      </div>
      <div className='flex h-full w-full lg:w-2/3 '>
        <div className='h-full w-full sm:mx-6 lg:ml-6 lg:mr-0'>
          {props.FeedLoop}
        </div>
      </div>
    </div>
  );
}
