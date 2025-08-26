
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('verify-btn').addEventListener('click', checkEligibility);
    

    document.getElementById('birthYear').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            checkEligibility();
        }
    });
});

function checkEligibility() {

    const birthYearInput = document.getElementById('birthYear');
    const birthYear = parseInt(birthYearInput.value);
    

    const resultElement = document.getElementById('result');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const resultIcon = document.getElementById('result-icon');
    

    if (isNaN(birthYear) || birthYear < 1900 || birthYear > 2023) {
        alert("Por favor, digite um ano de nascimento válido entre 1900 e 2023.");
        return;
    }
    

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    

    if (age < 16) {

        resultElement.className = "result ineligible";
        resultTitle.textContent = "Você não pode votar.";
        resultMessage.textContent = `Com ${age} anos, você ainda não tem idade suficiente para votar. No Brasil, o voto é permitido apenas para pessoas com 16 anos ou mais.`;
        resultIcon.textContent = "🚫";
    } else if (age >= 16 && age < 18) {

        resultElement.className = "result optional";
        resultTitle.textContent = "Seu voto é opcional.";
        resultMessage.textContent = `Com ${age} anos, seu voto é facultativo (opcional). No Brasil, jovens entre 16 e 17 anos têm direito, mas não obrigação, de votar.`;
        resultIcon.textContent = "✅";
    } else if (age >= 18 && age <= 70) {

        resultElement.className = "result eligible";
        resultTitle.textContent = "Você deve votar!";
        resultMessage.textContent = `Com ${age} anos, seu voto é obrigatório. Não se esqueça de comparecer às eleições ou justificar sua ausência!`;
        resultIcon.textContent = "✓";
    } else {

        resultElement.className = "result optional";
        resultTitle.textContent = "Seu voto é opcional.";
        resultMessage.textContent = `Com ${age} anos, seu voto é facultativo (opcional). No Brasil, pessoas com mais de 70 anos têm direito, mas não obrigação, de votar.`;
        resultIcon.textContent = "✅";
    }
    

    resultElement.style.display = "block";
}