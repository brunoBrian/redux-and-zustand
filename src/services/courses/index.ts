import { api } from "../api";
import { Course } from "./types";

export async function getCourse(id: number): Promise<Course> {
  const response = await api("/courses/" + id, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const course = await response.json();

  return course;
}
