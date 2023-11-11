"use client";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/store";
import { Title } from "../title/title";
import s from "./my-course.module.css";
import { uploadThunk } from "@/app/GlobalRedux/slices/uploadSlice";
import { useEffect } from "react";
import { getEducationThunk } from "@/app/GlobalRedux/slices/educationSlice";
import { Text } from "../text/text";
export const MyCourse = () => {
  const { education } = useAppSelector((state) => state.education);
  const { error } = useAppSelector((state) => state.education);
  const dispatch = useAppDispatch();
  const handleFileUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadThunk(file));
    }
  };
  useEffect(() => {
    dispatch(getEducationThunk());
  }, [dispatch]);

  return (
    <div className={s.course_box}>
      <div className={s.flex}>
        <Title text="Наши курсы" />
        <input type="file" onChange={handleFileUpload} className={s.btn} />
      </div>
      {error.message && <Text text={error?.message} />}
      {education.length === 0 && <Text text="Загрузка" />}
      {education && (
        <div className={s.courses}>
          <div className={s.course}>
            <p className={s.course_title}>Название курса</p>
            <ul className={s.course_ul}>
              {education?.map((education) => {
                return (
                  <li className={s.course_link} key={education._id}>
                    {education?.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={s.course}>
            <p className={s.course_title}>Направления</p>
            <ul className={s.course_ul}>
              {education?.map((education) => {
                return (
                  <li key={education._id} className={s.course_direction}>
                    все
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={s.course}>
            <p className={s.course_title}>Продолжительность</p>
            <ul className={s.course_ul}>
              {education?.map((education) => {
                return (
                  <li key={education._id} className={s.course_duration}>
                    3 дня
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
