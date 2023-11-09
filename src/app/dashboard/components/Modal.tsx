"use client";

function Modal({
  isOpen,

  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return <div className="z-30 text-white ">{children}</div>;
}

export default Modal;
