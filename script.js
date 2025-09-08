const viewer = document.getElementById('viewer');
const gearTypeSelect = document.getElementById('gearType');
const optionsContainer = document.getElementById('optionsContainer');

/* Gear options configuration */
const gearOptions = {
    worm: {
        name: "Ślimakowa",
        options: {
            flange: { 
                label: "Kołnierz",
                choices: {
                    b5: "",
                    b14: ""
                }
            },
        }
    },
    bevel: {
        name: "Walcowo-Stożkowa",
        options: {
            IEC: {
                label: "IEC",
                choices: {
                    iec90: "",
                    iec112: ""
                }
            }
        }
    }
};


// Inicjalizacja selecta głównego

function initGearTypes() {
    gearTypeSelect.innerHTML = '<option value="" disabled selected>Wybierz typ przekładni</option>';
    for (let key in models) {
        let opt = document.createElement('option');
        opt.value = key;
        opt.textContent = models[key].name;
        gearTypeSelect.appendChild(opt);
    }
}

// Generowanie opcji dodatkowych (dynamiczne menu)

function updateOptions( ) {
    const type = gearTypeSelect.value;
    optionsContainer.innerHTML = '';

    if (!type) {
        viewer.src = '';
        return;
    }

    const otts = models[type].options;
    for (let optKey in otts) {
        const optData = opts[optKey]

        let label = document.createElement('label');
        label.textContent = "Wybierz ${optData.label}: ";

        let select = document.createElement('select');
        select.id = optKey;

        for (let choice in optData.choices) {
            let option = document.createElement('option');
            option.value = choice;
            option.textContent = choice.toUpperCase();
            select.appendChild(option);
        }
        
        // Przy zmianie od razu zmiana modelu
        select.addEventListener('change', changeModel);

        optionsContainer.appendChild(label);
        optionsContainer.appendChild(select);


    }

    changeModel(); // Ustawienie domyślnego modelu
}


// Zmiana modelu w viewerze

function changeModel() {
    const type = gearTypeSelect.value;
    if (!type) return;

    const opts = models[type].options;
    let selectedPath = "";

    for (let optKey in opts) {
        const select = document.getElementById(optKey);
        if (select) {
            selectedPath = opts[optKey].choices[select.value];
        }
    }

    viewer.src = selectedPath;
}

// Inicjalizacja

gearTypeSelect.addEventListener('change', updateOptions);
initGearTypes();