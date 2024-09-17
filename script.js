//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });
        
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const data = e.clipboardData.getData('text').split('');
            data.forEach((char, i) => {
                if (i < inputs.length) {
                    inputs[i].value = char;
                }
            });
            inputs[Math.min(data.length, inputs.length) - 1].focus();
        });
    });

    inputs[0].focus(); // Focus the first input by default
});
