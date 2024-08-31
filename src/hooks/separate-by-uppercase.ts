export function separateByUppercase(text: string) {
  return text.trim().split(/(?=[A-Z])/).join(' ')
}