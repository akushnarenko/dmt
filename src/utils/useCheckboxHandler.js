import { computed, ref } from 'vue'

export const useCheckboxHandler = () => {
    const checkedFields = ref([])

    const isEveryFieldChecked = (fieldName) => {
        if ((!allSelected(fieldName) && !isSomeSelected(fieldName)) || isSomeSelected(fieldName)) {
            checkedFields.value = fieldName
            return
        }
        checkedFields.value = []
        return
    }

    const isChecked = (field) => checkedFields.value.some((el) => el.id === field.id)

    const allSelected = (fieldName) => {
        return fieldName.every((item) => isChecked(item))
    }

    const isSomeSelected = (fieldName) => {
        return !allSelected(fieldName) && fieldName.some((item) => isChecked(item))
    }

    const checkboxHandler = (event) => {
        const index = checkedFields.value.findIndex((el) => el.id === event.id)

        if (index !== -1) {
            checkedFields.value = checkedFields.value.filter((el) => el.id !== event.id)
            return
        }

        checkedFields.value = [...checkedFields.value, event]
        return
    }

    return {
        isChecked,
        isEveryFieldChecked,
        checkedFields,
        allSelected,
        isSomeSelected,
        checkboxHandler,
    }
}
