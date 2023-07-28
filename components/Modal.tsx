"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface MyModalProps {
  showModal: any;
  setShowModal: any;
  setInputList: any;
  inputList: any;
}

export default function Modal({
  showModal,
  setShowModal,
  setInputList,
  inputList,
}: MyModalProps) {
  const itemList = [
    { title: "텍스트", value: "text" },
    { title: "링크", value: "link" },
  ];

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
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 mt-[10000px]"
                enterTo="opacity-100 scale-100 mt-[0]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-2xl text-black">
                    어떤 탭을 추가하고 싶으신가요?
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="space-y-2">
                      {itemList.map((item) => (
                        <div
                          className="w-full h-full flex items-center p-4 bg-red-300 rounded-md font-bold"
                          onClick={() => {
                            setInputList([...inputList, item.value]);
                            setShowModal(false);
                          }}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
