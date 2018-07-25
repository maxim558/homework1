var budgetUser = prompt ("Ваш бюджет, в рублях?"); // Спрашивает Бюджет
var nameShopUser = prompt ("Название вашего магазина?"); // Спрашивает название магазина
 // объект, который содержит: Бюджет, Имя магазина, Массив товаров shopGoods, Объект с сотрудниками employers, Свойство open
var mainList = {
	budgetShop: budgetUser,
	nameShop: nameShopUser,
	shopGoods: [],
	employers: {},
	open: false
};
// Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods
for (i=0; i<3; ++i) {
	if (i < 3) {
		mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?")	}
}
// Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
alert ("Бюджет на 1 день = " + mainList.budgetShop/30 + " руб.");
// Проверить на наличие ошибок

// Создать свой репозиторий на GitHub и поместить туда папку с первым заданием
console.log (mainList.nameShop);
console.log (budgetUser + "руб.");
console.log(mainList.shopGoods);
