import data from "../constants"

const {numeroTelefone: number} = data

const celular = number.lenght === 9

  if (celular) {
    const number_slice_1 = number.slice(0,5)
    const number_slice_2 = number.slice(5,9)
    const number_final = `${number_slice_1}-${number_slice_2}`
  }

  else {
    const number_slice_1 = number.slice(0,4)
    const number_slice_2 = number.slice(4,8)
    const number_final = `${number_slice_1}-${number_slice_2}`
  }

export const numberMasc = number_final



