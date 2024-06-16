function dscount(mas, s1, s2) {
    mas = mas.toLowerCase()
    let c = 0
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] == s1 && mas[i + 1] == s2) {
            c++;
        }
    }
    return c
}


