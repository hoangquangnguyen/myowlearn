import { parseAsAnimal, CourseModel } from '@/model/CourseModel'
import { ref } from 'vue'

export function useFetch() {
  const data = ref(null)
  const error = ref(null)

  fetch('http://localhost:3000/courses')
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => (error.value = err))
  return { data, error }
}

export function useFetchById() {
  const data = ref(null)
  const error = ref(null)

  fetch('http://localhost:3000/courses/1')
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}
