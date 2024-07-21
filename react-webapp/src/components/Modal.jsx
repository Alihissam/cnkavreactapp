import React from 'react';

export default function Modal({ isModal, setModal }) {
  return (
    <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setModal(false)}></div>
          <div className="bg-white rounded-lg shadow-lg p-8 z-10">
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p className="mb-4">This is the modal content.</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setModal(false)}
            >
              Close
            </button>
          </div>
        </div>
    </>
  );
}
