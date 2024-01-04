"use client";

import { Module } from "@/components/Module";
import { Course } from "@/services/courses/types";
import { useAppSelector } from "@/store";
import { start } from "@/store/slices/player";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type Modules = {
  data: Course;
};

export function Modules({ data }: Modules) {
  const dispatch = useDispatch();
  const modules = useAppSelector((state) => {
    return state.player.course?.modules;
  });

  useEffect(() => {
    dispatch(start(data));
  }, [data, dispatch]);

  return (
    <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
      {modules &&
        modules.map((module, index) => {
          return (
            <Module
              key={module.id}
              moduleIndex={index}
              title={module.title}
              amountOfLessons={module.lessons.length}
            />
          );
        })}
    </aside>
  );
}
