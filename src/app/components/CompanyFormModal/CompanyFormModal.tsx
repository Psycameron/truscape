"use client";

import React from "react";

import Modal, { ModalProps } from "../Modal/Modal";
import CompanyForm, { CompanyFormProps } from "../CompanyForm/CompanyForm";

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps["onSubmit"];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
