document.getElementById('bmi-form').addEventListener('submit',function(e){
    e.preventDefault();
    const gender = document.getElementById('gender');
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const heightfeet = parseInt(document.getElementById('height-feet').value);
    const heightinch = parseInt(document.getElementById('height-inches').value);

    if (weight && heightfeet && heightinch && gender && age){
        const heightInMeters = ((heightfeet * 12) + heightinch ) * 0.0254;
        const bmi = weight / (heightInMeters * heightInMeters);
        const result = document.getElementById('result');

        let category = '';

        if (bmi < 18.5){
            category = "underWeight";

        }else if(bmi > 18.5 && bmi < 24.9)
        {
            category = "Normal";
        }
        else if (bmi > 25 && bmi < 29.9){
            category = "Overweight";
        }
        else {
            category = "Obese";
        }
        let resultMessage = 'Your bmi is :' + bmi.toFixed(2) + '<br>' + 'category : ' + category;
        result.innerHTML = resultMessage;
        
    }
    

});