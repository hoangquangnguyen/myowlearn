import { ref } from 'vue'

export async function useFetch() {
  const data = ref([])
  const error = ref(null)
  try {
    const response = await fetch('http://localhost:3000/courses')
    if (!response.ok) throw new Error('Some thing wrong.')
    data.value = await response.json()
  } catch (err: any) {
    error.value = err
  }

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
