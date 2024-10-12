function calculateTotal() {
    // Получаем количество товара
    var quantity = document.getElementById("quantity").value;
    if (quantity.length == 0) {
        document.getElementById("result").innerText = "Вы не ввели число!";
        return false;
    }
    if (!quantity.match(/^\d+$/)) {
        document.getElementById("result").innerText = "Вы ввели не целое число!";
        return false;
    }


    // Получаем цену выбранного товара
    var productSelect = document.getElementById("product");
    var price = parseInt(productSelect.options[productSelect.selectedIndex].value);

    // Рассчитываем общую стоимость
    var total = quantity * price;

    // Выводим результат
    document.getElementById("result").innerText = "Стоимость заказа: " + total + " рублей";
}

function ready() {
    var b = document.getElementById('button1');
    // Добавляем обработчик события click на кнопку.
    // При нажатии кнопки вызовется функция onClick.
    b.addEventListener('click', calculateTotal);
    calculateTotal();
}


document.addEventListener("DOMContentLoaded", ready);