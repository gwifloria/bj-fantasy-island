import useReactFetch from "../../../../useReactFetch"

export const useFormOperation = () => {
  const { data:options } = useReactFetch('api/options')

  const submit = () => {
    console.log('submit');
  }

  return {
    options,
    submit
  }
}
