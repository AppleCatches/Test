// renderer.js (in the renderer process)
document.addEventListener("DOMContentLoaded", () => {
    // Initialize the UI with default values
    document.getElementById("security-status-text").innerText = "Secure";
    document.getElementById("threat-count").innerText = "0";
    document.getElementById("console-logs").innerText = "System running normally...";
});

// Fetch the security status and threat count from the main process
window.electron.getSecurityStatus().then(status => {
    // Update the UI with the fetched security status    
    document.getElementById('security-status-text').textContent = status.status;
    document.getElementById('threat-count').textContent = status.threats;
}).catch(err => {
    console.error("Failed to fetch security status", err);
});

// Example function to update the security status and threat count
function updateSecurityStatus(status, threatCount) {
    document.getElementById("security-status-text").textContent = status;
    document.getElementById("threat-count").textContent = threatCount;
}

// Example function to update network traffic data
function updateTrafficData(data) {
    const trafficDataContainer = document.getElementById("traffic-data");
    trafficDataContainer.innerHTML = ""; // Clear existing data
    data.forEach(row => {
        const rowElement = document.createElement("tr");
        rowElement.innerHTML = `
            <td>${row.sourceIP}</td>
            <td>${row.destinationIP}</td>
            <td>${row.protocol}</td>
            <td>${row.packetSize}</td>
            <td>${row.trafficType}</td>
            <td>${row.timestamp}</td>
        `;
        trafficDataContainer.appendChild(rowElement);
    });
}

// Example function to update bandwidth data
function updateBandwidthData(data) {
    const bandwidthDataContainer = document.getElementById("bandwidth-data");
    bandwidthDataContainer.innerHTML = ""; // Clear existing data
    data.forEach(row => {
        const rowElement = document.createElement("tr");
        rowElement.innerHTML = `
            <td>${row.interface}</td>
            <td>${row.receivedData}</td>
            <td>${row.transmittedData}</td>
        `;
        bandwidthDataContainer.appendChild(rowElement);
    });
}

// Example function to update system console logs
function updateConsoleLogs(logs) {
    document.getElementById("console-logs").textContent = logs;
}

// Example function to update device information
function updateDeviceData(data) {
    const deviceDataContainer = document.getElementById("device-data");
    deviceDataContainer.innerHTML = ""; // Clear existing data
    data.forEach(row => {
        const rowElement = document.createElement("tr");
        rowElement.innerHTML = `
            <td>${row.macAddress}</td>
            <td>${row.ipAddress}</td>
            <td>${row.hostname}</td>
        `;
        deviceDataContainer.appendChild(rowElement);
    });
}

// Example usage

// Update the security status and threat count
updateSecurityStatus("Secure", 0);

// update network traffic data dynamically
updateTrafficData([
    { sourceIP: "192.168.1.1", destinationIP: "192.168.1.2", protocol: "TCP", packetSize: "1024", trafficType: "Inbound", timestamp: "2025-03-16 12:00:00" },
    // Add more traffic rows as needed
]);

// update bandwidth data dynamically
updateBandwidthData([
    { interface: "eth0", receivedData: "2048", transmittedData: "1024" },
    // Add more bandwidth rows as needed
]);

// update system console logs dynamically
updateConsoleLogs("Loading logs...");

// update device information dynamically
updateDeviceData([
    { macAddress: "00:14:22:01:23:45", ipAddress: "192.168.1.100", hostname: "Device1" },
    // Add more device rows as needed
]);
