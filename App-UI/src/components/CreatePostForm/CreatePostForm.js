export default function CreatePostForm({
  submitPostHandler,
  postBody,
  setPostBody,
  postTitle,
  setPostTitle,
}) {
  return (
    <form onSubmit={submitPostHandler} className='flex w-full flex-col'>
      <textarea
        required
        className='mb-2 flex h-10 w-full rounded-l-md border border-gray-600 bg-gray-100'
        placeholder='Title'
        value={postTitle}
        onChange={e => setPostTitle(e.target.value)}
      />
      <textarea
        required
        className=' h-60 w-full rounded-l-md border border-gray-600 bg-gray-100  '
        value={postBody}
        placeholder='Text'
        onChange={e => setPostBody(e.target.value)}
      />

      <button
        type='submit'
        className='mt-4 h-12 w-20 rounded-md border border-gray-500
      bg-gray-100 px-2 hover:bg-gray-300'
      >
        Post
      </button>
    </form>
  );
}
