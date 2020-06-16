/**
 * arrItem = [
 *  {
 *      price:,
 *      category:,
 *      months:,
 *  }
 * ]
 */

const test = [
    {
        price: 200,
        category: 'expenses',
        addedMonth: 8
    },
    {
        price: 400,
        category: 'non-expenses',
        addedMonth: 2
    },
    {
        price: 100,
        category: 'expenses',
        addedMonth: 4
    },
]

const type = (txt, val1, val2) => {
    switch (txt) {
        case "equal": {
            if (val1 === val2) return true
            else return false
        }
        case "less than equal to": {
            if (val1 <= val2) return true
            else return false
        }
        case "less than": {
            if (val1 < val2) return true
            else return false
        }
        case "greater than equal to": {
            if (val1 >= val2) return true
            else return false
        }
        case "greater than": {
            if (val1 > val2) return true
            else return false
        }
    }
}

const filter = (arrItem, amount, amountType, months, monthsType, category) => {
    if (amount && amountType && months && monthsType && category) {
        return arrItem.filter((val) => {
            return type(amountType, val.price, amount) && type(monthsType, val.addedMonth, months) && val.category === category;
        })
    } else if ((amount && amountType) && (months && monthsType)) {
        return arrItem.filter((val) => {
            return type(amountType, val.price, amount) && type(monthsType, val.addedMonth, months)
        })
    } else if ((amount && amountType) && category) {
        return arrItem.filter((val) => {
            return type(amountType, val.price, amount) && val.category === category;
        })
    } else if ((months && monthsType) && category) {
        return arrItem.filter((val) => {
            return type(monthsType, val.addedMonth, months) && val.category === category;
        })
    } else if (months && monthsType) {
        return arrItem.filter((val) => {
            return type(monthsType, val.addedMonth, months)
        })
    } else if (amount && amountType) {
        return arrItem.filter((val) => {
            return type(amountType, val.price, amount)
        })
    } else if (category) {
        return arrItem.filter((val) => {
            return val.category === category;
        })
    } else {
        return arrItem
    }

}
//empty filter can be filled with empty string or undefined. the purpose is to be categorized as falsy
console.log(filter(test, 200, 'greater than equal to', 4, 'less than', undefined))