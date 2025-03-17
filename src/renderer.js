// renderer.js (in the renderer process)

// Ensure that the default page is displayed when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("security-status-text").innerText = "Secure";
    document.getElementById("threat-count").innerText = "0";
    document.getElementById("console-logs").innerText = "System running normally...";

    // Hide all pages except the default one
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.getElementById("security-status").style.display = "block"; // Default page
});

// Navigation handling: Show the clicked page and hide others
document.querySelector("nav ul").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        e.preventDefault();
        document.querySelectorAll(".page").forEach(page => page.style.display = "none");
        document.getElementById(e.target.id.replace("nav-", "")).style.display = "block";
    }
});

// Fetch the security status and threat count from the main process
window.electron.getSecurityStatus().then(status => {
    document.getElementById("security-status-text").textContent = status.status || "Unknown";
    document.getElementById("threat-count").textContent = status.threats || "0";
}).catch(err => {
    console.error("Failed to fetch security status", err);
});

// Function to update security status dynamically
function updateSecurityStatus(status, threatCount) {
    document.getElementById("security-status-text").textContent = status || "Unknown";
    document.getElementById("threat-count").textContent = threatCount || "0";
}

// Function to update network traffic data in the UI
function updateTrafficData(data) {
    const trafficDataContainer = document.getElementById("traffic-data");
    trafficDataContainer.innerHTML = ""; // Clear existing data

    // Display a fallback message if data is missing
    if (!data || data.length === 0) {
        trafficDataContainer.innerHTML = "<tr><td colspan='6'>No traffic data available.</td></tr>";
        return;
    }

    // Populate the table with new data
    data.forEach(row => {
        const rowElement = document.createElement("tr");
        rowElement.innerHTML = `
            <td>${row.sourceIP || "N/A"}</td>
            <td>${row.destinationIP || "N/A"}</td>
            <td>${row.protocol || "Unknown"}</td>
            <td>${row.packetSize || "0"}</td>
            <td>${row.trafficType || "Unknown"}</td>
            <td>${row.timestamp || "N/A"}</td>
        `;
        trafficDataContainer.appendChild(rowElement);
    });
}

// Function to update bandwidth usage data in the UI
function updateBandwidthData(data) {
    const bandwidthDataContainer = document.getElementById("bandwidth-data");
    bandwidthDataContainer.innerHTML = ""; // Clear existing data

    // Display a fallback message if data is missing
    if (!data || data.length === 0) {
        bandwidthDataContainer.innerHTML = "<tr><td colspan='3'>No bandwidth data available.</td></tr>";
        return;
    }

    // Populate the table with new data
    data.forEach(row => {
        const rowElement = document.createElement("tr");
        rowElement.innerHTML = `
            <td>${row.interface || "Unknown"}</td>
            <td>${row.receivedData || "0"}</td>
            <td>${row.transmittedData || "0"}</td>
        `;
        bandwidthDataContainer.appendChild(rowElement);
    });
}

// Initialize the bandwidth chart
const ctx = document.getElementById("bandwidthChart").getContext("2d");
const bandwidthChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["10s", "20s", "30s", "40s"],
        datasets: [{
            label: "Bandwidth Usage (MB/s)",
            data: [5, 10, 8, 12],
            borderColor: "blue",
            fill: false
        }]
    }
});

// Function to update the bandwidth chart dynamically
function updateBandwidthChart(newData) {
    bandwidthChart.data.labels.push(newData.label);
    bandwidthChart.data.datasets[0].data.push(newData.value);
    bandwidthChart.update();
}

// Function to update the system console logs
function updateConsoleLogs(logs) {
    document.getElementById("console-logs").textContent = logs || "No logs available.";
}

// Function to update connected device information in the UI
function updateDeviceData(data) {
    const deviceDataContainer = document.getElementById("device-data");
    deviceDataContainer.innerHTML = ""; // Clear existing data

    // Display a fallback message if data is missing
    if (!data || data.length === 0) {
        deviceDataContainer.innerHTML = "<tr><td colspan='3'>No device data available.</td></tr>";
        return;
    }

    // Populate the table with new data
    data.forEach(row => {
        const rowElement = document.createElement("tr");
        rowElement.innerHTML = `
            <td>${row.macAddress || "Unknown"}</td>
            <td>${row.ipAddress || "Unknown"}</td>
            <td>${row.hostname || "Unknown"}</td>
        `;
        deviceDataContainer.appendChild(rowElement);
    });
}

// Fetch and update network traffic data asynchronously
async function fetchTrafficData() {
    try {
        let response = await fetch("/api/traffic");
        if (!response.ok) throw new Error("Failed to fetch data.");
        let data = await response.json();
        updateTrafficData(data);
    } catch (error) {
        console.error("Error fetching traffic data:", error);
        document.getElementById("traffic-data").innerHTML = "<tr><td colspan='6'>Failed to load data.</td></tr>";
    }
}

// Example Usage

// Update security status and threat count
updateSecurityStatus("Secure", 0);

// Update network traffic data dynamically
updateTrafficData([
    { sourceIP: "192.168.1.1", destinationIP: "192.168.1.2", protocol: "TCP", packetSize: "1024", trafficType: "Inbound", timestamp: "2025-03-16 12:00:00" },
]);

// Update bandwidth data dynamically
updateBandwidthData([
    { interface: "eth0", receivedData: "2048", transmittedData: "1024" },
]);

// Update system console logs dynamically
updateConsoleLogs("Loading logs...");

// Update connected device information dynamically
updateDeviceData([
    { macAddress: "00:14:22:01:23:45", ipAddress: "192.168.1.100", hostname: "Device1" },
]);
