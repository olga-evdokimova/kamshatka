"use client";
import React, { useState } from "react";
import { ConfigProvider, Form, Input } from "antd";
import z from "zod";
import { createSchemaFieldRule } from "antd-zod";
import emailjs from "@emailjs/browser";
import CustomButton from "./CustomButton";
const CustomFormValidationSchema = z.object({
  name: z.string({ required_error: "Заполните поле Имя" }).min(1),
  phone: z
    .string({
      required_error: "Заполните поле Телефон",
    })
    .refine(
      (val) => /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(val),
      {
        message: "Некорректный формат номера телефона",
      }
    ),
});
const rule = createSchemaFieldRule(CustomFormValidationSchema);

export default function ContactForm() {
  const [form] = Form.useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const onFinish = (values) => {
    console.log("Успех:", values);
    emailjs
      .send("service_90rijbt", "template_i0v1h9q", values, "BbtTeCqanQMVN9aJp")
      .then(
        (result) => {
          console.log(result.text);
          form.resetFields();
          setSuccessMessage(
            "Ваш отзыв принят. После проверки отзыв публикуется на сайте."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("НЕ УДАЛОСЬ:", errorInfo);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 16,
          fontFamily: "var(--font-manrope)",
          colorError: "#ED7171",
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
          Form: {},
          Modal: {
            contentBg: "rgba(255, 255, 255, 0.1)",
            titleColor: "#fff",
            titleFontSize: 25,
            headerBg: "transparent",
          },
          Select: {
            optionActiveBg: "#8ACA88",
            optionHeight: 30,
            optionFontSize: 14,
            optionSelectedBg: "#8ACA88",
          },
        },
      }}
    >
      <Form
        form={form}
        className="flex flex-col"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="" name="name" rules={[rule]} className="mt-[20px]">
          <Input
            placeholder="Как вас зовут?"
            className="block w-full rounded-[var(--border-radius)] bg-white p-[18px] tablet:p-[14px] !outline-none 
            placeholder:text-[var(--primary)] placeholder:opacity-50"
          />
        </Form.Item>

        <Form.Item label="" name="phone" rules={[rule]}>
          <Input
            placeholder="+7 (999) 999-99-99"
            className="block w-full rounded-[var(--border-radius)] bg-white p-[18px] tablet:p-[14px] !outline-none placeholder:text-[var(--primary)] placeholder:opacity-50"
          />
        </Form.Item>
        <Form.Item name="question" label="" rules={[rule]}>
          <Input.TextArea
            placeholder="Ваш отзыв"
            className="block w-full rounded-[var(--border-radius)] bg-white p-[18px] tablet:p-[14px] !outline-none resize-none placeholder:text-[var(--primary)] placeholder:opacity-50"
          />
        </Form.Item>

        <Form.Item>
          <div className="flex gap-3 ">
            <CustomButton
              variant="primary"
              htmlType="submit"
              className="w-full  h-[60px] tablet:h-[50px] !text-[20px] tablet:!text-[16px]"
            >
              Оставить отзыв
            </CustomButton>
          </div>
        </Form.Item>
        <p className="text-white/50 w-[80%] mx-auto text-[12px] text-center mb-[15px]">
          Номер телефона не будет опубликован, он нужен для подтверждения вашего
          отзыва
        </p>
        {successMessage && (
          <p className="text-white text-center">{successMessage}</p>
        )}
      </Form>
    </ConfigProvider>
  );
}
