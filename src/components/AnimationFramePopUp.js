// Dependencies
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
// Middlewares

// Components

// Styles

// Media
 const MyModal = (props) => {
  return (
    <Fragment>
      <Transition appear show={props.showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => props.showOrHide()}
        >
          <div className="sm:min-h-screen px-0 sm:px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-80"
              leave="ease-in duration-200"
              leaveFrom="opacity-80"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {props.children}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
}

export default MyModal;