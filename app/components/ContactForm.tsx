"use client";
import React from "react";
import { Select, ConfigProvider, Form, Input } from "antd";
import z from "zod";
import { createSchemaFieldRule } from "antd-zod";
import emailjs from "@emailjs/browser";
import { useModalStore } from "../../lib/state/store";
import CustomButton from "./CustomButton";
import Link from "next/link";
const { Option } = Select;
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
  select: z.enum(
    [
      "Вулкан горелый",
      "Экструзия Верблюд",
      "Мыс маячный",
      "Халатырский пляж",
      "Вачкажец",
      "Водопад спокойный",
      "Вулкан Авачинский",
      "Перевал Вилючинский",
    ],
    {
      required_error: "Выберите один из вариантов",
    }
  ),
 
});
const rule = createSchemaFieldRule(CustomFormValidationSchema);

export default function ContactForm() {
  const [form] = Form.useForm();
  const closeBookModal = useModalStore((state) => state.closeBookModal);

  const onFinish = (values) => {
    // console.log("Успех:", values);
    emailjs
      .send("service_90rijbt", "template_rc9v2t9", values, "BbtTeCqanQMVN9aJp")
      .then(
        (response) => {
          // console.log("Успех!", response.status, response.text);
          document.getElementById("message").innerText =
            "Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее удобное время.";
          form.resetFields();
          setTimeout(() => {
            document.getElementById("message").innerText = "";
            closeBookModal();
          }, 3000);
        },
        (error) => {
          console.log("НЕ УДАЛОСЬ...", error);
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
        <Form.Item name="select" label="" rules={[rule]}>
          <Select
            defaultValue="Вулкан горелый"
            className="block w-full bg-white rounded-[var(--border-radius)]"
          >
            <Option value="Вулкан горелый">Вулкан горелый</Option>
            <Option value="Экструзия Верблюд">
              Экструзия Верблюд плюс Халатырский пляж
            </Option>
            <Option value="Мыс маячный">Мыс маячный</Option>
            <Option value="Халатырский пляж">Халатырский пляж</Option>
            <Option value="Вачкажец">Вачкажец</Option>
            <Option value="Водопад спокойный">
              Малая долина гейзеров плюс водопад Спокойный
            </Option>
            <Option value="Вулкан Авачинский">Вулкан Авачинский</Option>
            <Option value="Перевал Вилючинский">
              Перевал Вилючинский плюс Водопад Вилючинский
            </Option>
          </Select>
        </Form.Item>
        <Form.Item name="question" label="" rules={[rule]}>
          <Input.TextArea
            placeholder="Ваши вопросы (не обязательно)"
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
              Забронировать
            </CustomButton>
            <CustomButton
              className="w-[30%] h-[60px] tablet:h-[50px] !text-[20px] tablet:!text-[16px] "
              variant="secondary"
              type="default"
              onClick={() => {
                form.resetFields();
                closeBookModal();
              }}
            >
              Отмена
            </CustomButton>
          </div>
        </Form.Item>
        <div id="message" className=" text-white text-center"></div>
        <p className="text-white/50 w-[80%] mx-auto text-[12px] text-center mb-[15px]">
          Отправляя заявку я принимаю&nbsp;
          <Link
            href="/privacy-policy"
            className="underline text-white/50 hover:text-white transition-all duration-500"
          >
            политику о конфиденциальности
          </Link>{" "}
          данных
        </p>
      </Form>
    </ConfigProvider>
  );
}


