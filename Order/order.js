
const orderOption = document.getElementById("orderOption");
const nameGroup = document.getElementById("nameGroup");
const idGroup = document.getElementById("idGroup");
const blockNumberGroup = document.getElementById("blockNumberGroup");
const dormNumberGroup = document.getElementById("dormNumberGroup");
const paymentMethod = document.getElementById("paymentMethod");
const accountNumberGroup = document.getElementById("accountNumberGroup");
const phoneNumberGroup = document.getElementById("phoneNumberGroup");
const errorMessage = document.getElementById("errorMessage");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

orderOption.addEventListener("change", () => {
if (orderOption.value === "delivery") {
    nameGroup.classList.remove("hidden");
    idGroup.classList.remove("hidden");
    blockNumberGroup.classList.remove("hidden");
    dormNumberGroup.classList.remove("hidden");
} else {
    nameGroup.classList.add("hidden");
    idGroup.classList.add("hidden");
    blockNumberGroup.classList.add("hidden");
    dormNumberGroup.classList.add("hidden");
}
});

paymentMethod.addEventListener("change", () => {
if (paymentMethod.value === "telebirr") {
    phoneNumberGroup.classList.remove("hidden");
    accountNumberGroup.classList.add("hidden");
} else if (
    paymentMethod.value !== "telebirr" &&
    paymentMethod.value !== "CBE"
) {
    accountNumberGroup.classList.remove("hidden");
    phoneNumberGroup.classList.add("hidden");
} else {
    accountNumberGroup.classList.add("hidden");
    phoneNumberGroup.classList.add("hidden");
}
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
e.preventDefault();
const name = document.getElementById("name").value;
const id = document.getElementById("id").value;
const blockNumber = document.getElementById("blockNumber").value;
const dormNumber = document.getElementById("dormNumber").value;
const orderOptionValue = orderOption.value;
const paymentMethodValue = paymentMethod.value;
const accountNumber = document.getElementById("accountNumber").value;
const phoneNumber = document.getElementById("phoneNumber").value;

if (
    (orderOptionValue === "delivery" &&
    (!name || !id || !blockNumber || !dormNumber)) ||
    (paymentMethodValue === "telebirr" && !phoneNumber) ||
    (paymentMethodValue !== "telebirr" &&
    paymentMethodValue !== "CBE" &&
    !accountNumber)
) {
    errorMessage.classList.remove("hidden");
    return;
}

errorMessage.classList.add("hidden");
showPopup(
    name,
    id,
    blockNumber,
    dormNumber,
    orderOptionValue,
    paymentMethodValue
);
});

function showPopup(
name,
id,
blockNumber,
dormNumber,
orderOptionValue,
paymentMethodValue
) {
document.getElementById("popupName").textContent = name;
document.getElementById("popupId").textContent = id;
document.getElementById("popupBlockNumber").textContent = blockNumber;
document.getElementById("popupDormNumber").textContent = dormNumber;
document.getElementById("popupOrderOption").textContent =
    orderOptionValue === "delivery" ? "Delivery" : "Restaurant Pickup";
document.getElementById("popupPaymentMethod").textContent =
    paymentMethodValue;
document.getElementById("popupOrderNumber").textContent = Math.floor(
    Math.random() * 1000000
);
document.getElementById("popupTime").textContent =
    Math.floor(Math.random() * 30) + 10;

popup.classList.remove("hidden");
overlay.classList.remove("hidden");

// Auto-close popup after 10 seconds
setTimeout(() => {
    closePopup();
}, 10000);
}

function closePopup() {
popup.classList.add("hidden");
overlay.classList.add("hidden");
}