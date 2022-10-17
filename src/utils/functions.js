export function handleChangeInput({ e, form, setForm }) {
    return setForm({ ...form, [e.target.name]: e.target.value })
}
export function validateEmail(email) {
    if (!email) {
        return { status: false, message: "O campo email é Obrigatório" }
    }
    const validEmail = email.trim().split(" ");

    if (validEmail.length > 1) {
        return { status: false, message: "O email deve ser um email válido" }
    }
    const verifyAtSing = email.indexOf("@");
    const verifyPonit = email.indexOf(".", verifyAtSing + 2);

    if (verifyAtSing === -1) {
        return { status: false, message: "O email deve ser um email válido" }
    }
    if (verifyPonit === -1) {
        return { status: false, message: "O email deve ser um email válido" }
    }
    return { status: true, email }
}

export function validatePassword(password, confirmPassword) {
    if (!password) {
        return { status: false, message: "O campo senha é Obrigatório" }
    }
    password = password.trim()
    if (password === "") {
        return { status: false, message: "O campo da senha deve ser preenchido corretamente" };
    }
    let validarpassword = password.split("");
    let verificarpassword = validarpassword.some((caractere) => {
        return caractere === " ";
    });
    if (verificarpassword) {
        return { status: false, message: "O campo da senha não pode ter espaços" };
    }
    if (password !== confirmPassword) {
        return { status: false, message: "As senhas não conferem" };
    }
    return { status: true, password };
}

export function treatValues(value) {
    const valueTreat = `R$${(value / 100).toFixed(2).replace(".", ",")}`

    return valueTreat;
}

export function treatTelephoneInput(e) {
    let value = e.target.value
    e.target.maxLength = 16

    if (e.target.value.length < 10) {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    } else if (e.target.value.length < 15) {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d{4})(\d)/, '($1) $2-$3');
    } else {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d)/, '($1) $2 $3-$4');
    }
    e.target.value = value

    return e.target.value;
}
export function treatValuesInput(e) {
    let value = e.target.value
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, '$1,$2')
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    value = "R$ " + value
    e.target.value = value

    return e.target.value;
}

export function treatDateInput(e) {
    let value = e.target.value
    e.target.maxLength = 10
    if (e.target.value.length < 6) {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/, '$1/$2');
    } else {
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d{2})(\d)/, '$1/$2/$3')
    }
    e.target.value = value

    return e.target.value;
}
export function treatValuesInputStrings(e) {
    const caracter = ["!", "@", "#", "$", "%", "¨", "&", "*", "(", ")", "-", "_", "=", "+", ".", ",", ":", "<", ">", "|", "?", "{", "}", "[", "]", "/", "  ", "ª", "º", "°", '"', "'"];
    let value = e.target.value
    let isSpecialCaracter = false;
    for (let item of caracter) {
        if (value.includes(item)) {
            isSpecialCaracter = true;
            break
        }
    }
    value = value.replace(/\d/g, "");
    isSpecialCaracter ? value = value.slice(0, value.length - 1) : ""
    e.target.value = value
    return e.target.value;
}

export function convertValuesIntoCents(value) {
    const valueTreat = value.split("");

    let valueNumber = valueTreat.filter((value) => {
        if (Number(value) || value === "0" || value === ",") return value;
    });
    if (!valueNumber.length) return false;

    let valueCents = valueNumber.reduce((acum, value) => acum + value)
    valueCents = valueCents.replace(",", ".")
    valueCents = Number((valueCents * 100))
    return valueCents;
}

export function formatDate(date) {
    const formatterDay = Intl.DateTimeFormat('pt-BR', {
        weekday: "long"
    });
    const formatterDate = Intl.DateTimeFormat('pt-BR', {
        year: "2-digit",
        day: "2-digit",
        month: "2-digit"
    });
    const dateFormated = {
        weekday: formatName(formatterDay.format(new Date(date))),
        date: formatterDate.format(new Date(date))
    }
    return dateFormated
}
export function formatDateLong(date) {
    const formatterDay = Intl.DateTimeFormat('pt-BR', {
        weekday: "long"
    });
    const formatterDate = Intl.DateTimeFormat('pt-BR', {
        year: "numeric",
        day: "2-digit",
        month: "2-digit"
    });
    const dateFormated = {
        weekday: formatName(formatterDay.format(new Date(date))),
        date: formatterDate.format(new Date(date))
    }
    return dateFormated
}

export function formatName(name) {
    let fullname = name.trim().split(" ");
    fullname = fullname.map((name) => {
        return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    });
    fullname = fullname.filter((element) => {
        return element != "";
    });
    name = fullname.join(" ");
    return name;
}

export function orderbyArray(array, type) {
    let arrayOrdebay;
    if (type) {
        arrayOrdebay = array.sort((a, b) => {
            return a.data.localeCompare(b.data)
        })
    } else {
        arrayOrdebay = array.sort((a, b) => {
            return b.data.localeCompare(a.data)
        })
    }
    return arrayOrdebay;
}

export function formatValues(e) {
    let value = String((e / 100).toFixed(2))
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, '$1,$2')
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")
    if (e < 0) {
        return `R$ - ${value}`
    }
    return `R$ ${value}`
}

export function summarySumSubtraction(array) {
    let sum = array.filter(element => element.tipo === "Entrada");
    let subtration = array.filter(element => element.tipo != "Entrada");

    sum = sum.map(element => element.valor)
    subtration = subtration.map(element => element.valor)

    sum = sum.reduce((acum, value) => acum + value);
    subtration = subtration.reduce((acum, value) => acum + value);

    const values = {
        sum,
        subtration,
        balance: sum - subtration
    }
    return values
}
export function parseNewDate(date) {
    const dateform = date.replace("/", "-").replace("/", "-");
    const dateSplit = dateform.split("-");
    if (dateSplit[0].length > 2) {
        const newDate = `${dateSplit.join("-")}T03:00:00.000Z`;
        return newDate
    } else {
        dateSplit.reverse();
        const newDate = `${dateSplit.join("-")}T03:00:00.000Z`
        return newDate
    }
}

export function editDataArray(array, id, data) {
    let localArray = [...array];
    let localArrayFind = localArray.findIndex((element) => {
        return element.id === id
    });
    localArray.splice(localArrayFind, 1, data);
    return localArray;
}