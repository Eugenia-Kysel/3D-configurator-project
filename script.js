const viewer = document.getElementById('viewer');
const gearTypeSelect = document.getElementById('gearType');
const optionsContainer = document.getElementById('optionsContainer');


/* Gear options library configuration */

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
            model: {
                label: "Model",
                choices: {

                    dmkab60: {
                        label: "DMKAB60",
                        options: {
                            iec: {
                                label: "IEC",
                                choices: {
                                    "63B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%2063B5.glb",
                                    "71B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%2071B5.glb",
                                    "80B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%2080B5.glb",
                                    "90B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%2090B5.glb",
                                    "100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%20100B5.glb",
                                    "112B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%20112B5.glb",
                                    "132B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%20132B5.glb"
                                }
                            }
                        }
                    },

                    dmkab70: {
                        label: "DMKAB70",
                        options: {
                            iec: {
                                label: "IEC",
                                choices: {
                                    "80B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB70%20IEC80B5.glb",
                                    "ZK76-71B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-71B5.glb",
                                    "ZKK76-90B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-90B5.glb",
                                    "ZK76-100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-100B5.glb",
                                    "ZK76-132B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-132B5.glb",
                                    "ZK76-160B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-160B5.glb"
                                }
                            }
                        }
                    },

                    dmkab80: {
                        label: "DMKAB80",
                        options: {
                            iec: {
                                label: "IEC",
                                choices: {
                                    "80B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB80%20IEC%2080B5.glb",
                                    "90B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKABB80%20IE%2090B5.glb",
                                    "100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMK90%20IEC100B5.glb",
                                    "112B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB80%20IEC%20112B5.glb",
                                    "132B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB80%20IEC%20132B5.glb",
                                    "ZK86-100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK86-100B5.glb",
                                    "ZK86-112B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK86-112B5.glb",
                                    "ZK86-132B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK86-132B5.glb",
                                    "ZK86-160B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK86-160B5.glb",
                                    "ZK86-180B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK86-180B5.glb",
                                }
                            }
                        }
                    },

                    dmkab90: {
                        label: "DMKAB90",
                        options: {
                            iec: {
                                label: "IEC",
                                choices: {
                                    "100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMK90%20IEC100B5.glb",
                                    "MKA97-112B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/MKA97-112B5.glb",
                                    "MKA97-132B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/MKA97-132B5.glb",
                                    "MKA97-180B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/MKA97-180B5.glb",
                                    "MKA97-200B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/MKA97-200B5.glb",
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};


// Inicjalizacja selecta głównego

function initGearTypes() {
    gearTypeSelect.innerHTML = "<option value=''> Wybierz typ przekładni </option>";
    for (let key in gearOptions) {
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