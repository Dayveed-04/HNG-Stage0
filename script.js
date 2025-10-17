function updateTime() {
            const timeElement = document.getElementById('currentTime');
            const currentTimeMs = Date.now();
            timeElement.textContent = `Current time: ${currentTimeMs}ms`;
        }

        updateTime();
        setInterval(updateTime, 1000);