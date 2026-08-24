function saveConfig() {

    const config = {
        general:
            document.getElementById("general").value,

        redDot:
            document.getElementById("redDot").value,

        scope2x:
            document.getElementById("scope2x").value,

        scope4x:
            document.getElementById("scope4x").value,

        sniper:
            document.getElementById("sniper").value
    };

    localStorage.setItem(
        "myFFConfig",
        JSON.stringify(config)
    );

    document.getElementById("message").textContent =
        "✅ Đã lưu cấu hình!";
}


function loadConfig() {

    const saved =
        localStorage.getItem("myFFConfig");

    if (!saved) {

        document.getElementById("message")
            .textContent =
            "Chưa có cấu hình được lưu.";

        return;
    }

    const config =
        JSON.parse(saved);

    document.getElementById("general").value =
        config.general;

    document.getElementById("redDot").value =
        config.redDot;

    document.getElementById("scope2x").value =
        config.scope2x;

    document.getElementById("scope4x").value =
        config.scope4x;

    document.getElementById("sniper").value =
        config.sniper;

    document.getElementById("message")
        .textContent =
        "✅ Đã tải cấu hình!";
}
