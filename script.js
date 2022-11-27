const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document);


//Login/signup
function Validator(options) {
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
    }
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector)
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })
    }
}

Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

//cart tab ui
const tabs = $$('.dashboard_content_title');
const description = $$('.dashboard_content_list');
const line = $('.line1');
const tabActive = $('.dashboard_content_title.checked');
// console.log([tabActive]);
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';
tabs.forEach(function (tab, index) {
    const pane = description[index];
    tab.onclick = function () {
        $('.dashboard_content_title.checked').classList.remove('checked');
        $('.dashboard_content_list.active').classList.remove('active');
        tab.classList.add('checked');
        pane.classList.add('active');
        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';
    }
})

// số lượng sản phẩm
const minuss = $$('.minus');
const pluss = $$('.plus');
const numbers = $$('.number');
// console.log([numbers]);
const products = $$('.dashboard_content_list_item');
minuss.forEach(function (minus, index) {
    const number = numbers[index];
    minus.onclick = function () {
        if (number.innerText === '0') {
            number.innerText = '0';
        } else {
            let s = number.innerText;
            number.innerText = '';
            number.innerText += eval(s + '-1');
        }
    }
})
pluss.forEach(function (plus, index) {
    const number = numbers[index];
    plus.onclick = function () {
        let s = number.innerText;
        number.innerText = '';
        number.innerText += eval(s + '+1');
    }
})
// click phuong thuc van chuyen va thanh toan
const transports = $$('.item_transport');
const receiver = $('.receiver_pay');
const transports_pay = $$('.item_transport_pay');
transports.forEach(function (transport) {
    transport.onclick = function () {
        $('.item_transport.click').classList.remove('click');
        transport.classList.add('click');
    }
})

transports_pay.forEach(function (transport_pay, index) {
    transport_pay.onclick = function () {
        if (index === 0){
            $('.item_transport_pay.click').classList.remove('click');
            transport_pay.classList.add('click');
            receiver.style.display = 'none';
        }
        else {
            $('.item_transport_pay.click').classList.remove('click');
            receiver.style.display = 'block';
            transport_pay.classList.add('click');
        }
    }
})
// delete san pham
const deletes = $$('.delete');
deletes.forEach(function (delet, index) {
    delet.onclick = function () {
        products[index].style.display = 'none';
        cnt = cnt + 1;
    }
})