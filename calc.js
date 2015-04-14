function one(){
	principle = document.getElementById('principle').value;
	no_payments = document.getElementById('no_payments').value;
	interest_rates = document.getElementById('interest_rates').value;


	var interest = (parseFloat(interest_rates)/100)+1;
	var interest_payment = Math.pow(interest,no_payments);
	var interest_payment_1 = (parseFloat(interest_rates)/100)*interest_payment;
	var interest_payment_2 = interest_payment - 1;
	var monthly_payments = parseFloat(principle) * (interest_payment_1 /interest_payment_2);
	
	document.getElementById('answer').innerHTML = monthly_payments;
}

function main(){
	one()
}
