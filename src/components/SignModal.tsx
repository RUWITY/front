

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface MyModalProps {
  showModal: any;
  setShowModal: any;
}

export default function Modal({
  showModal,
  setShowModal,
  title,
  content,
}: any) {
  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setShowModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto text-center">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 "
                enterTo="opacity-100 scale-100 "
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[358px] max-h-[500px]  overflow-y-scroll transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-center">
                  <Dialog.Title className="my-2 font-semibold text-[#7163E8] text-center">
                    {title}
                  </Dialog.Title>
                  <div className="text-center  text-xs text-[#737373] mb-4 ">
                    {content}
                  </div>
                  <button
                    className="bg-[#6F63E0] text-white rounded-lg font-semibold text-base py-2 w-full max-w-[173px]"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    돌아가기
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
