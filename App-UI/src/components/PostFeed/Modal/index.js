import React, { useEffect, useRef, useLayoutEffect } from "react";

export default function Modal({ open, setIsModalOpen, children }) {
  const node = useRef();

  // * The code below enables us to click outside of the modal to close it.
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsModalOpen(false);
  };

  // * The code below disables scrolling of document when modal is open.
  (function useLockBodyScroll() {
    useLayoutEffect(() => {
      // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
      // Re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
  })();

  return (
    <div className='flex justify-center fixed inset-0 bg-opacity-50 z-9 bg-black h-full '>
      <div
        ref={node}
        className='flex bg-purple-200 h-full overflow-auto w-1/2 mt-12 rounded-lg  p-4 fixed z-50 mb-4 '
      >
        {children}
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit
        volutpat maecenas volutpat blandit aliquam etiam. Pellentesque elit eget
        gravida cum sociis natoque penatibus et magnis. Tincidunt dui ut ornare
        lectus sit amet est. Tempus quam pellentesque nec nam aliquam sem.
        Euismod lacinia at quis risus sed vulputate odio ut. In tellus integer
        feugiat scelerisque varius morbi enim nunc. Mi ipsum faucibus vitae
        aliquet nec. Risus viverra adipiscing at in tellus integer feugiat
        scelerisque varius. Vitae congue mauris rhoncus aenean. Egestas pretium
        aenean pharetra magna. Vestibulum sed arcu non odio euismod lacinia at
        quis risus. Ut morbi tincidunt augue interdum velit euismod. Ut placerat
        orci nulla pellentesque dignissim enim sit. Cum sociis natoque penatibus
        et magnis dis parturient. Suscipit adipiscing bibendum est ultricies
        integer quis auctor. Nulla facilisi cras fermentum odio. Leo a diam
        sollicitudin tempor id eu nisl nunc. Enim praesent elementum facilisis
        leo. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Non
        tellus orci ac auctor augue mauris augue neque. Pharetra massa massa
        ultricies mi quis hendrerit dolor magna eget. Morbi tempus iaculis urna
        id volutpat. Nullam ac tortor vitae purus faucibus ornare. Placerat in
        egestas erat imperdiet sed euismod nisi. Interdum velit laoreet id donec
        ultrices tincidunt. Et tortor consequat id porta nibh venenatis cras.
        Enim ut tellus elementum sagittis vitae et leo. Fames ac turpis egestas
        sed. Et ligula ullamcorper malesuada proin libero nunc consequat
        interdum. Ultricies tristique nulla aliquet enim tortor at auctor urna
        nunc. Mi quis hendrerit dolor magna eget. Malesuada fames ac turpis
        egestas. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Eu
        augue ut lectus arcu bibendum at. Ac orci phasellus egestas tellus
        rutrum tellus pellentesque eu tincidunt. Natoque penatibus et magnis dis
        parturient. Nulla pharetra diam sit amet nisl suscipit adipiscing
        bibendum est. Tellus cras adipiscing enim eu turpis egestas pretium.
        Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Sed
        velit dignissim sodales ut. Urna nunc id cursus metus. Neque convallis a
        cras semper auctor neque vitae tempus. Elementum facilisis leo vel
        fringilla est ullamcorper eget nulla. Ullamcorper eget nulla facilisi
        etiam dignissim diam quis enim. In eu mi bibendum neque egestas congue
        quisque. Donec ultrices tincidunt arcu non. Nibh venenatis cras sed
        felis eget velit aliquet. Porttitor massa id neque aliquam vestibulum
        morbi blandit. Ultricies integer quis auctor elit sed vulputate mi sit
        amet. Id volutpat lacus laoreet non. Dictum sit amet justo donec enim
        diam vulputate ut pharetra. Vitae nunc sed velit dignissim sodales ut eu
        sem integer. Mauris vitae ultricies leo integer. Amet volutpat consequat
        mauris nunc congue nisi vitae. Risus nullam eget felis eget nunc
        lobortis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim
        cras. Eget egestas purus viverra accumsan in nisl nisi. Ac tortor vitae
        purus faucibus ornare suspendisse. Donec adipiscing tristique risus nec
        feugiat in. Sed turpis tincidunt id aliquet risus feugiat. In cursus
        turpis massa tincidunt dui ut ornare lectus sit. Velit euismod in
        pellentesque massa. Amet consectetur adipiscing elit pellentesque.
        Ornare arcu odio ut sem nulla pharetra diam sit. Sapien eget mi proin
        sed libero enim. Volutpat maecenas volutpat blandit aliquam etiam erat
        velit scelerisque in. Vitae congue eu consequat ac felis donec et odio.
        Vel risus commodo viverra maecenas accumsan. Ante in nibh mauris cursus
        mattis. Laoreet non curabitur gravida arcu ac tortor dignissim. Id
        ornare arcu odio ut sem nulla pharetra diam. Molestie at elementum eu
        facilisis sed odio morbi quis. Volutpat commodo sed egestas egestas
        fringilla phasellus faucibus. Non odio euismod lacinia at. At augue eget
        arcu dictum varius. Sit amet dictum sit amet justo.
      </div>
      <button onClick={() => setIsModalOpen(false)}>X</button>
    </div>
  );
}
