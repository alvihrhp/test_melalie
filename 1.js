function commit() {
    var error = "no error"
    const functionArray = [action_1(), action_2(), action_3(), action_4(), action_5()];
    for (let i = 0; i < functionArray.length; i++) {
        if (!functionArray[i]) {
            error = `action ${i + 1} failed`;
            return error;
        }
    }
    return error;
}

console.log(commit());

function action_1() {
    return true;
}

function action_2() {
    return true;
}

function action_3() {
    return true;
}

function action_4() {
    return true;
}

function action_5() {
    return true;
}
