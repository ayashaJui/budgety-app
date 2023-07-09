const amountEl = document.querySelector(".amount");
const incomeBtn = document.querySelector('#add-income');
const incomeEL = document.querySelector(".income-rows");
const incomeContent = document.querySelector('.income');
const incomeformEl = document.querySelector("#add-incomeform");
const incomeFormBtn = document.querySelector('#add-income--from');
const cancelIncome = document.querySelector("#income-cancel");
const incomeAmount = document.querySelector(".income-amount");
const incomeDescription = document.querySelector('#income-description');
const amountIncome = document.querySelector('#amount-income');
const addIncome = document.querySelector("#add-income--form");

const expenseBtn =  document.querySelector("#add-expense");
const expenseEl = document.querySelector(".expense-rows");
const expenseContent = document.querySelector(".expense");
const expenseformEl = document.querySelector("#add-expenseform");
const expenseFormBtn = document.querySelector('#add-expense--from');
const cancelExpense = document.querySelector("#expense-cancel");
const expenseAmount = document.querySelector(".expense-amount");
const expenseDescription = document.querySelector('#expense-description');
const amountExpense = document.querySelector('#amount-expense');
const addExpense = document.querySelector("#add-expense--form");


const init = () => {
    amountEl.textContent = 0;
    incomeAmount.textContent = 0;
    expenseAmount.textContent = 0;
}

const finalBalance = () => {
    amountEl.textContent = +incomeAmount.textContent - +expenseAmount.textContent
}

const deleteIncome = (id) => {
    for(let i=0; i<incomeEL.children.length; i++){
        if(incomeEL.children[i].querySelector('button').id == id){

            incomeAmount.textContent = +incomeAmount.textContent - +incomeEL.children[i].getElementsByTagName('td')[1].innerText
            finalBalance();
            incomeEL.children[i].remove();
        }
    }
}

const deleteExpense = (id) => {
    for(let i=0; i<expenseEl.children.length; i++){
        if(expenseEl.children[i].querySelector('button').id == id){

            expenseAmount.textContent = +expenseAmount.textContent - +expenseEl.children[i].getElementsByTagName('td')[1].innerText
            finalBalance();
            expenseEl.children[i].remove();
        }
    }
}

const getIncomeInfo = (e) => {
    e.preventDefault();
    incomeContent.classList.toggle('hidden');
    incomeformEl.classList.toggle('hidden');
    
    const description = incomeDescription.value;
    const amount = +amountIncome.value;
    const finalIncome = amount + +incomeAmount.textContent;

    let infoHTML = `
    <tr class="">
        <td>${description}</td>
        <td >${amount}</td>
        <td>
            <button class="text-white bg-red-500 rounded text-sm px-2 py-1 text-center m-2" id="${Math.random()}" onClick=deleteIncome(this.id);>
                Delete
            </button>
        </td>
    </tr>`;

    const row = document.createElement('tr');
    row.classList.add("bg-white", "shadow", "p-2", "my-2");
    row.innerHTML = infoHTML;
    incomeEL.append(row);
    incomeAmount.textContent = finalIncome;

    incomeDescription.value = '';
    amountIncome.value = '';

    finalBalance();
}

const getExpenseInfo = (e) => {
    e.preventDefault();
    expenseContent.classList.toggle('hidden');
    expenseformEl.classList.toggle('hidden');
    
    const description = expenseDescription.value;
    const amount = +amountExpense.value;
    const finalExpense = amount + +expenseAmount.textContent;

    let infoHTML = `
    <tr class="">
        <td>${description}</td>
        <td>${amount}</td>
        <td>
            <button class="text-white bg-red-500 rounded text-sm px-2 py-1 text-center m-2" id="${Math.random()}" onClick=deleteExpense(this.id);>
                Delete
            </button>
        </td>
    </tr>`;

    const row = document.createElement('tr');
    row.classList.add("bg-white", "shadow", "p-2", "my-2");
    row.innerHTML = infoHTML;
    expenseEl.append(row);
    expenseAmount.textContent = finalExpense;

    expenseDescription.value = '';
    amountExpense.value = '';

    finalBalance();
}

incomeBtn.addEventListener("click", ()=>{
    incomeContent.classList.toggle('hidden');
    incomeformEl.classList.toggle('hidden');

    addIncome.addEventListener("click", getIncomeInfo);
    
});
expenseBtn.addEventListener("click", () =>{
    expenseContent.classList.toggle('hidden');
    expenseformEl.classList.toggle('hidden');

    addExpense.addEventListener('click', getExpenseInfo);
});

cancelIncome.addEventListener('click', (e) => {
    e.preventDefault();
    incomeContent.classList.toggle('hidden');
    incomeformEl.classList.toggle('hidden');
});

cancelExpense.addEventListener('click', (e) => {
    e.preventDefault();
    expenseContent.classList.toggle('hidden');
    expenseformEl.classList.toggle('hidden');
});

init();
