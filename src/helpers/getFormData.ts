export default function getFormData(formNode: HTMLFormElement) {
  const formInputs = formNode.querySelectorAll('input');
  const formData = {};
  formInputs?.forEach((input) => {
    formData[input.name] = input.value;
  });
  return Object.keys(formData).length !== 0 ? formData : '';
}
