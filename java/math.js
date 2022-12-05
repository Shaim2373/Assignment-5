document.getElementById('player-amount-btn').addEventListener('click', function () {
    const playerAmount = document.getElementById('player-total-amount')
    const playerTotalAmountString = playerAmount.value;
    const playerTotalAmount = parseFloat(playerTotalAmountString);


    const fivePlayerTotalAmount = document.getElementById('total-budget')
    const totalBudget = fivePlayerTotalAmount.innerText;
    const math = playerTotalAmount * 5;
    fivePlayerTotalAmount.innerText = math;

    playerAmount.value = '';



    document.getElementById('total-amount-team').addEventListener('click', function () {
        const managerAmount = document.getElementById('manager-amount')
        const playerManagerAmountString = managerAmount.value;
        const playerManagerAmount = parseFloat(playerManagerAmountString);
        const totalPlayerManager = playerManagerAmount + math;

        managerAmount.value = '';



        const couchAmount = document.getElementById('couch-amount')
        const playerManagerCouchAmountString = couchAmount.value;
        const playerManagerCouchAmount = parseFloat(playerManagerCouchAmountString)
        const teamTotalAmount = totalPlayerManager + playerManagerCouchAmount;

        couchAmount.value = '';

        const totalAmount = document.getElementById('total-budget-team')
        totalAmount.innerText = teamTotalAmount;
    })

})
