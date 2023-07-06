const btnClick = document.getElementById(`btnClick`);
const btnCX = document.getElementById(`btnX`);
const notification = document.getElementById(`notification`);

let f1;

btnClick.addEventListener("click", () => {
  notification.classList.add("active");
  notification.classList.remove("notification");

  f1 = setTimeout(() => {
    notification.classList.add("notification");
    notification.classList.remove("active");
  }, 5000);
});

btnCX.addEventListener('click', () => {
    notification.classList.remove('active')
    notification.classList.add('notification')
})
