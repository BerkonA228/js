function findSum(mas, num) {
    for (let i = 0; i < mas.length; i++) {
        if (mas.find((element) => element === (num - mas[i])) !== undefined) {
            return [i, mas.indexOf(num - mas[i])]
        }
    }
    return []
}

