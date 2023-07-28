"use client";

import { useState } from "react";
import Modal from "components/Modal";

export default function Button() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className=" cursor-pointer  w-full font-bold h-12 rounded-lg bg-primary text-white mb-4 bg-[#7163E8]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + 탭 추가
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
