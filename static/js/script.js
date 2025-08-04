function loadThreatLogs() {
  fetch("/api/threats")
    .then(res => res.json())
    .then(data => {
      const logPanel = document.getElementById("logPanel");
      logPanel.innerHTML = "<h4>Threat Logs</h4>";
      data.forEach(entry => {
        logPanel.innerHTML += `
          <div class="log-entry">
            <p><strong>Time:</strong> ${entry.timestamp}</p>
            <p><strong>Type:</strong> ${entry.threat_type}</p>
            <p><strong>Status:</strong> ${entry.status}</p>
            <p><strong>Severity:</strong> ${entry.severity}</p>
            <hr>
          </div>
        `;
      });
    })
    .catch(err => {
      console.error("Failed to load logs:", err);
    });
}

// 🔹 New functions for your buttons:

function startScan() {
  const scanStatus = document.getElementById("scan-status");
  scanStatus.textContent = "Scanning...";
  setTimeout(() => {
    scanStatus.textContent = "Scan complete. No threats detected.";
  }, 2000);
}

function toggleUplink() {
  const uplinkStatus = document.getElementById("uplink-status");
  if (uplinkStatus.textContent.includes("OFFLINE")) {
    uplinkStatus.textContent = "Secure Tunnel: ONLINE";
  } else {
    uplinkStatus.textContent = "Secure Tunnel: OFFLINE";
  }
}

function viewLogs() {
  loadThreatLogs(); // Reuse your existing function
}

function simulateOutput() {
  const terminal = document.getElementById("terminal-output");
  terminal.textContent = ">>> Initiating system diagnostics...\n>>> No anomalies detected.\n>>> All systems stable.";
}

function askSARA() {
  const response = document.getElementById("sara-response");
  response.textContent = "SARA: All cyber systems running clean. No user intervention needed.";
}
