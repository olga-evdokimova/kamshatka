import React, { useRef } from "react";
import { ConfigProvider, Modal } from "antd";
import { useModalStore } from "../../lib/state/store";
import CustomButton from "./CustomButton";
import CommentForm from "./CommentForm";

// app\components\CommentFormModal.tsx
export default function CommentFormModal() {
  const { isModalOpen, openModal, closeModal } = useModalStore();
  const formRef = useRef(null);
  
  const handleCloseModal = () => {
    if (formRef.current) {
      formRef.current.resetFields(); // Сбрасываем форму
      formRef.current.clearSuccessMessage(); // Очищаем сообщение об успехе
    }
    closeModal(); // Закрываем модальное окно
  };


  return (
    <div className="">
      <CustomButton
        variant="primary"
        onClick={openModal}
        className="w-full  h-[60px] tablet:h-[50px] !text-[20px] tablet:!text-[16px]"
      >
        Оставить отзыв
      </CustomButton>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "var(--font-manrope)",
            borderRadiusLG: 10,
            colorIcon: "#fff",
            colorPrimaryBorder: "#fff",
            lineWidth: 0,
            boxShadow: "none",
            paddingLG: 0,
            padding: 24,
            colorIconHover: "#fff",
          },
          components: {
            Modal: {
              contentBg: "rgba(255, 255, 255, 0.1)",
              titleColor: "#fff",
              titleFontSize: 25,
              headerBg: "transparent",
            },
          },
        }}
      >
        <Modal
          title="Заполните форму отзыва"
          className="border border-white backdrop-blur-[21.90px] rounded-[var(--border-radius)] "
          open={isModalOpen}
          footer={null}
          onCancel={handleCloseModal}
        >
          <CommentForm ref={formRef} />
        </Modal>
      </ConfigProvider>
    </div>
  );
}
