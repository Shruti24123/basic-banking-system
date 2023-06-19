let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

// Send Money
function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var name = ["Mr.Raj","Mr.Nick", "Mr.Sharma", "Mrs.Talvari", "Miss.Naqs", "Mrs.Kapoor" , "Mrs.Patel","Mr.Shah","Mrs.Nayak", "Mr.Roy"];

   for(let i=0;i<10;i++){
      if(enterName!=name[0] && enterName!=name[1] && enterName!=name[2] && enterName!=name[3] && enterName!=name[4] && enterName!=name[5] && enterName!=name[6] && enterName!=name[7] && enterName!=name[8] && enterName!=name[9]) {
         alert(`This user has not account in our bank`)
         break;
      }
   }
   
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   if (enterAmount > 10000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      ₹ ${enterAmount} is sent to ${enterName}@email.com.`)

      // Transaction History 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`₹ ${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }

}