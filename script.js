let pulseData = [];
let tempData = [];
let labels = [];

const ctx = document.getElementById('healthChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Pulse (BPM)',
        data: pulseData,
        borderColor: 'red',
        fill: false
      },
      {
        label: 'Temperature (°C)',
        data: tempData,
        borderColor: 'blue',
        fill: false
      }
    ]
  }
});

function updateData() {
  let pulse = Math.floor(Math.random() * (110 - 60) + 60);
  let temp = (Math.random() * (38 - 35) + 35).toFixed(1);

  document.getElementById("pulse").innerText = pulse + " BPM";
  document.getElementById("temp").innerText = temp + " °C";

  labels.push(new Date().toLocaleTimeString());
  pulseData.push(pulse);
  tempData.push(temp);

  if (pulseData.length > 8) {
    labels.shift();
    pulseData.shift();
    tempData.shift();
  }

  chart.update();

  if (pulse > 100) {
    alert("⚠ High Pulse Detected!");
  }

  if (temp > 37.5) {
    alert("⚠ High Temperature Detected!");
  }
}
