const usersData = {};

        function categorizeBP(systolic, diastolic) {
            if (systolic < 90 || diastolic < 60) {
                return "Alacsony vérnyomás";
            } else if (systolic <= 120 && diastolic <= 80) {
                return "Normál vérnyomás";
            } else if (systolic <= 139 || diastolic <= 89) {
                return "Prehipertónia";
            } else if (systolic <= 159 || diastolic <= 99) {
                return "1. fokú hipertónia";
            } else {
                return "2. fokú hipertónia";
            }
        }

        function addEntry() {
            const username = document.getElementById("username").value;
            const date = document.getElementById("date").value;
            const systolic = parseInt(document.getElementById("systolic").value);
            const diastolic = parseInt(document.getElementById("diastolic").value);
            const pulse = parseInt(document.getElementById("pulse").value);

            if (!username || !date || !systolic || !diastolic || !pulse) {
                alert("Kérlek tölts ki minden mezőt!");
                return;
            }

            const category = categorizeBP(systolic, diastolic);

            if (!usersData[username]) {
                usersData[username] = [];
            }

            usersData[username].push({ date, systolic, diastolic, pulse, category });

            displayData(username);
        }

        function displayData(username) {
            const logTable = document.getElementById("logTable");
            logTable.innerHTML = "";

            usersData[username].forEach(entry => {
                const row = `<tr>
                    <td>${entry.date}</td>
                    <td>${entry.systolic}</td>
                    <td>${entry.diastolic}</td>
                    <td>${entry.pulse}</td>
                    <td>${entry.category}</td>
                </tr>`;
                logTable.innerHTML += row;
            });
        }