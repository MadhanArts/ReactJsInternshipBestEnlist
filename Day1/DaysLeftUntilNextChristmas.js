var today = new Date();
var christmasDate = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
var oneDay = 24 * 60 * 60 * 1000;
console.log(
    Math.ceil((christmasDate.getTime() - today.getTime()) / oneDay) +
        " days left until next Christmas!"
);
